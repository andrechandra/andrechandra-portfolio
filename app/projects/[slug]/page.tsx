import { Metadata } from 'next'
import ProjectSection from '@/components/sections/project-section'
import { projects } from '@/constants/projects'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const project = projects.find((p) => p.slug === resolvedParams.slug)

  if (!project) {
    notFound()
  }

  return {
    title: project.title,
    description: project.description || 'Project by Andre Chandra Putra',
    openGraph: {
      title: project.title,
      description: project.description || 'Project by Andre Chandra Putra',
      type: 'article',
      images: project.thumbnail
        ? [
            {
              url: project.thumbnail.src,
              width: 1200,
              height: 630,
              alt: project.title,
            },
          ]
        : [
            {
              url: '/open-graph/about-og.png',
              width: 1200,
              height: 630,
              alt: 'Andre Chandra Putra - Software Engineer',
            },
          ],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description || 'Project by Andre Chandra Putra',
      images: project.thumbnail
        ? [
            {
              url: project.thumbnail.src,
              width: 1200,
              height: 630,
              alt: project.title,
            },
          ]
        : [],
    },
  }
}

export default async function ProjectPage() {
  return (
    <main className="min-h-screen bg-grid text-foreground pt-20">
      <div className="space-y-8 sm:space-y-12">
        <ProjectSection />
      </div>
    </main>
  )
}
