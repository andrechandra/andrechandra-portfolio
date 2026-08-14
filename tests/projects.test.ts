import { describe, expect, it } from 'vitest'
import { partitionProjects } from '@/lib/projects'
import { projects } from '@/constants/projects'
import type { Project } from '@/types/project'

function project(title: string, featured?: boolean) {
  return { title, featured } as Project
}

describe('partitionProjects', () => {
  it('splits on the featured flag and treats an unset flag as not featured', () => {
    const { featured, other } = partitionProjects([
      project('Flagship', true),
      project('Side thing'),
      project('Explicitly not', false),
    ])
    expect(featured.map((p) => p.title)).toEqual(['Flagship'])
    expect(other.map((p) => p.title)).toEqual(['Side thing', 'Explicitly not'])
  })

  it('preserves declaration order within each group', () => {
    const { featured } = partitionProjects([
      project('Second', true),
      project('Minor'),
      project('First', true),
    ])
    expect(featured.map((p) => p.title)).toEqual(['Second', 'First'])
  })

  it('keeps at least one real project featured', () => {
    const { featured } = partitionProjects(projects)
    expect(featured.length).toBeGreaterThan(0)
  })
})
