import { projects } from '@/constants/projects'
import { WorkList } from '@/components/project/work-list'
import { HomeSection } from './section'

export function SelectedWork() {
  return (
    <HomeSection
      id="work"
      eyebrow="selected work"
      title="Things I have shipped"
      action={{ href: '/projects', label: 'All work' }}
    >
      <WorkList projects={projects} headingLevel={3} />
    </HomeSection>
  )
}
