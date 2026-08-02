import path from 'node:path'
import { Font } from '@react-pdf/renderer'

const FONTSOURCE = path.join(process.cwd(), 'node_modules', '@fontsource')

function file(pkg: string, name: string) {
  return path.join(FONTSOURCE, pkg, 'files', name)
}

export function registerFonts(): void {
  Font.register({
    family: 'Geist',
    fonts: [
      { src: file('geist-sans', 'geist-sans-latin-400-normal.woff'), fontWeight: 400 },
      { src: file('geist-sans', 'geist-sans-latin-500-normal.woff'), fontWeight: 500 },
      { src: file('geist-sans', 'geist-sans-latin-600-normal.woff'), fontWeight: 600 },
      { src: file('geist-sans', 'geist-sans-latin-700-normal.woff'), fontWeight: 700 },
    ],
  })

  Font.register({
    family: 'Geist Mono',
    fonts: [
      { src: file('geist-mono', 'geist-mono-latin-400-normal.woff'), fontWeight: 400 },
      { src: file('geist-mono', 'geist-mono-latin-500-normal.woff'), fontWeight: 500 },
    ],
  })

  Font.registerHyphenationCallback((word) => [word])
}
