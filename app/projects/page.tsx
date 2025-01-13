import Header from '@/components/header-component'
import ProjectCard from '@/components/project-card'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Andre Chandra Putra',
  description: 'Andre Chandra Putra&apos; personal website',
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header
        title="Projects"
        title2="Showcase"
        description="Showcase of my projects that I've worked on."
        backgroundVariant="projects"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-32 py-8 sm:py-12 lg:py-16 max-w-7xl">
        <div className="space-y-8 sm:space-y-12">
          <div className="flex flex-col gap-4">
            <ProjectCard />
          </div>
        </div>
      </div>
    </main>
  )
}
