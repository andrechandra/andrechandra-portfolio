import { Metadata } from 'next'
import Header from '@/components/header-component'
import ProjectCard from '@/components/project-card'
import MiniProjectCard from '@/components/mini-project-card'

export const metadata: Metadata = {
  title: 'Mini Projects',
  description:
    "Explore Andre Chandra Putra's portfolio of software engineering projects, featuring web applications, technical solutions, and innovative developments.",
  openGraph: {
    title: 'Projects Portfolio',
    description:
      'Discover my collection of software engineering projects and technical solutions.',
    type: 'website',
    images: [
      {
        url: '/open-graph/project-og.png',
        width: 1200,
        height: 630,
        alt: 'Andre Chandra Putra - Projects Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects Portfolio | Andre Chandra Putra',
    description:
      'Discover my collection of software engineering projects and technical solutions',
    images: ['/open-graph/project-og.png'],
  },
  keywords: [
    'software projects',
    'web development',
    'portfolio',
    'technical projects',
    'Andre Chandra Putra',
    'software engineer portfolio',
  ],
  alternates: {
    canonical: 'https://andrechandra.vercel.app/projects',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-grid">
      <Header
        title="Mini"
        title2="Projects"
        description="Collection of my mini projects."
        backgroundVariant="projects"
      />
      <section
        className="container mx-auto px-4 sm:px-6 lg:px-24 py-8 sm:py-12 lg:py-16 max-w-7xl"
        aria-label="Mini Projects"
      >
        <div className="space-y-8 sm:space-y-12">
          <div className="flex flex-col gap-4">
            <MiniProjectCard />
          </div>
        </div>
      </section>
    </main>
  )
}
