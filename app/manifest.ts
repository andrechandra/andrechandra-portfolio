import type { MetadataRoute } from 'next'
import { site } from '@/content/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.title} - Fullstack Software Engineer`,
    short_name: site.name,
    description:
      'Fullstack software engineer building production SaaS with Next.js, TypeScript and PostgreSQL. Open to remote roles.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#0a0a0a',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
