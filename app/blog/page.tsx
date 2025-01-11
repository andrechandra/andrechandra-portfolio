import BlogCard from '@/components/blog-card'
import Header from '@/components/Header'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Andre Chandra Putra',
  description: "Andre Chandra Putra's personal website",
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-32 py-8 sm:py-12 lg:py-16 max-w-7xl">
        <div className="space-y-8 sm:space-y-12">
          <div className="flex flex-col gap-4">
            <BlogCard />
          </div>
        </div>
      </div>
    </main>
  )
}
