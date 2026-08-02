import type { MetadataRoute } from 'next'
import { absoluteUrl, site, staticRoutes } from '@/content/site'
import { projects } from '@/constants/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(site.updatedAt)

  const staticEntries = staticRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const projectEntries = projects
    .filter((project) => Boolean(project.slug))
    .map((project) => ({
      url: absoluteUrl(`/projects/${project.slug}`),
      lastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    }))

  return [...staticEntries, ...projectEntries]
}
