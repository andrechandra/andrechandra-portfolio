export const theme = {
  color: {
    text: '#111111',
    muted: '#575757',
    faint: '#8A8A8A',
    accent: '#0E6B45',
    /** Section headings stay near-black so the PDF survives a mono printer. */
    heading: '#111111',
    rule: '#D8D8D8',
  },
  font: {
    family: 'Geist',
    mono: 'Geist Mono',
  },
  size: {
    name: 20,
    title: 10.5,
    section: 9.2,
    role: 10.2,
    body: 9,
    meta: 8.2,
    small: 7.5,
  },
  space: {
    page: 30,
    section: 11,
    entry: 8,
    line: 2.5,
  },
  lineHeight: {
    tight: 1.25,
    body: 1.42,
  },
} as const

export type ResumeTheme = typeof theme
