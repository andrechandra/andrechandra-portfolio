import type { Project } from '@/types/project'

export function partitionProjects(projects: Project[]) {
  return {
    featured: projects.filter((project) => project.featured),
    other: projects.filter((project) => !project.featured),
  }
}
