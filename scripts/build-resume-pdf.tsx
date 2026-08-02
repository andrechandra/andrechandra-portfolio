import fs from 'node:fs/promises'
import path from 'node:path'
import React from 'react'
import { renderToFile } from '@react-pdf/renderer'

import { registerFonts } from '@/components/resume-pdf/fonts'
import { ResumeDocument } from '@/components/resume-pdf/document'
import { LayoutAts } from '@/components/resume-pdf/layout-ats'
import { toResumeDoc } from '@/lib/resume/to-resume-doc'
import {
  RESUME_PDF_BASENAME,
  RESUME_PDF_FILENAME,
} from '@/lib/resume/constants'

async function main() {
  registerFonts()

  const doc = toResumeDoc('pdf')
  const outDir = path.join(process.cwd(), 'public')
  const outFile = path.join(outDir, RESUME_PDF_FILENAME)

  await fs.mkdir(outDir, { recursive: true })
  await renderToFile(
    <ResumeDocument doc={doc} layout={LayoutAts} />,
    outFile
  )

  const { size } = await fs.stat(outFile)
  if (size < 8_000) {
    throw new Error(
      `Resume PDF is suspiciously small (${size} bytes). Font registration or layout likely failed.`
    )
  }
  
  await fs.writeFile(
    path.join(outDir, 'resume.meta.json'),
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        updatedAt: doc.updatedAt,
        roles: doc.roles.length,
        bytes: size,
      },
      null,
      2
    ) + '\n'
  )

  // drop PDFs generated for previous years so only the current one ships
  const stale = (await fs.readdir(outDir)).filter(
    (name) =>
      /^AndreChandraPutra_CV_\d{4}\.pdf$/.test(name) &&
      name !== RESUME_PDF_FILENAME &&
      name.startsWith(RESUME_PDF_BASENAME)
  )
  await Promise.all(stale.map((name) => fs.rm(path.join(outDir, name))))

  console.log(
    `✓ resume PDF: public/${RESUME_PDF_FILENAME} (${(size / 1024).toFixed(1)} kB, ${doc.roles.length} roles)`
  )
}

main().catch((error) => {
  console.error('\n✗ resume PDF build failed\n')
  console.error(error)
  process.exit(1)
})
