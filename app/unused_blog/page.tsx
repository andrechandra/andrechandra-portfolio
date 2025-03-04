import BlogCard from '@/components/blog-card'
import Header from '@/components/header-component'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'A blog about my journey as a developer.',
  openGraph: {
    title: 'Blog',
    description: 'A blog about my journey as a developer.',
    images: [
      {
        url: '/open-graph/resume-og.png',
        width: 1200,
        height: 630,
        alt: 'Andre Chandra Putra - Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Andre Chandra Putra's Blog",
    description: 'A blog about my journey as a developer.',
    images: ['/open-graph/resume-og.png'],
  },
}

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header
        title="The"
        title2="Blog"
        description="A blog about my journey as a developer."
        backgroundVariant="about"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-24 py-8 sm:py-12 lg:py-16 max-w-7xl">
        <div className="space-y-8 sm:space-y-12">
          <div className="flex flex-col gap-4">
            <BlogCard />
          </div>
        </div>
      </div>
    </main>
  )
}
