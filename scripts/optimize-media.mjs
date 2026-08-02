import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const ROOT = process.cwd()
const DRY = process.argv.includes('--dry')

const MOBILE_MAX_WIDTH = 828
const WEB_MAX_EDGE = 1920
const QUALITY = 82

async function walk(dir) {
  const out = []
  let entries
  try {
    entries = await fs.readdir(dir, { withFileTypes: true })
  } catch {
    return out
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) out.push(...(await walk(full)))
    else out.push(full)
  }
  return out
}

const RASTER = /\.(png|jpe?g)$/i

async function main() {
  const sourceDir = path.join(ROOT, 'public', 'projects')
  const files = (await walk(sourceDir)).filter((f) => RASTER.test(f))

  if (!files.length) {
    console.log('nothing to optimise')
    return
  }

  let before = 0
  let after = 0
  let converted = 0

  for (const file of files) {
    const stat = await fs.stat(file)
    before += stat.size

    const image = sharp(file, { failOn: 'none' })
    const meta = await image.metadata()
    const portrait = (meta.height ?? 0) > (meta.width ?? 0)

    const resize = portrait
      ? { width: Math.min(meta.width ?? MOBILE_MAX_WIDTH, MOBILE_MAX_WIDTH) }
      : {
        width: Math.min(meta.width ?? WEB_MAX_EDGE, WEB_MAX_EDGE),
        height: undefined,
      }

    const target = file.replace(RASTER, '.webp')
    const buffer = await image
      .resize({ ...resize, withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 5 })
      .toBuffer()

    after += buffer.length
    converted += 1

    if (!DRY) {
      await fs.writeFile(target, buffer)
      if (target !== file) await fs.unlink(file)
    }

    const pct = (100 - (buffer.length / stat.size) * 100).toFixed(0)
    console.log(
      `  ${path.relative(ROOT, target).padEnd(48)} ${(stat.size / 1024).toFixed(0).padStart(6)}kB -> ${(buffer.length / 1024).toFixed(0).padStart(5)}kB  (-${pct}%)`
    )
  }

  console.log(
    `\n${DRY ? '[dry run] ' : ''}${converted} images: ${(before / 1024 / 1024).toFixed(1)} MB -> ${(after / 1024 / 1024).toFixed(1)} MB ` +
    `(-${(100 - (after / before) * 100).toFixed(0)}%)`
  )
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
