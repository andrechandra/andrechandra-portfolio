export const site = {
  url: 'https://andrechandra.dev',
  name: 'Andre Chandra',
  title: 'Andre Chandra Putra',
  locale: 'en_US',
  lang: 'en',
  updatedAt: '2026-08-01',
} as const

export const nav = [
  { href: '/', label: 'home', tooltip: 'Start here' },
  { href: '/projects', label: 'work', tooltip: 'Case studies from shipped products' },
  { href: '/resume', label: 'resume', tooltip: 'Experience, skills and the PDF' },
  { href: '/about', label: 'about', tooltip: 'The longer story' },
] as const

export const footerLinks = [
  {
    label: 'source',
    href: 'https://github.com/andrechandra/andrechandra-portfolio',
    isExternal: true,
    tooltip: 'This site on GitHub',
  },
  {
    label: 'starter',
    href: 'https://github.com/andrechandra/next-tailwind-starter',
    isExternal: true,
    tooltip: 'My Next.js + Tailwind starter template',
  },
] as const

export const staticRoutes = [
  { path: '/', priority: 1.0, changeFrequency: 'monthly' },
  { path: '/resume', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/projects', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.7, changeFrequency: 'yearly' },
] as const

export function absoluteUrl(path = '/'): string {
  return new URL(path, site.url).toString()
}
