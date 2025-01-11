import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { getBlogData } from '@/lib/blog'
import { Button } from '@/components/ui/button'
import { CustomMDX } from '@/components/mdx'
import { BlogNavigation } from '@/components/blog-navigation'
import Image from 'next/image'

interface BlogPageProps {
  params: {
    slug: string
  }
}

export default async function BlogPage({ params }: BlogPageProps) {
  const blog = await getBlogData(params.slug)

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-32 py-8 sm:py-12 lg:py-16 max-w-7xl">
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.tags.map((tag: string, index: number) => (
              <Badge key={index} variant="secondary" className="font-roboto">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
          <p className="text-gray-400 mb-8 font-roboto">{blog.summary}</p>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Image
                src={`/profile/avatar.jpeg`}
                alt={`Andre Chandra Putra`}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <div className="font-medium">Andre Chandra Putra</div>
                <div className="text-sm text-gray-400">
                  {formatDate(blog.date)}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[4fr_1fr] gap-8">
          <article className="prose prose-invert max-w-none flex-1">
            <CustomMDX source={blog.content} />
          </article>

          <BlogNavigation headings={blog.headings || []} />
        </div>

        <div className="mt-10">
          <Button
            asChild
            variant="link_left"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 mb-4 sm:mb-6"
          >
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blogs
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
