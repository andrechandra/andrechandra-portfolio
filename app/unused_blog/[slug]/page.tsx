import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { getBlogData } from '@/lib/blog'
import { Button } from '@/components/ui/button'
import { CustomMDX } from '@/components/mdx'
import { BlogNavigation } from '@/components/blog-navigation'
import Image from 'next/image'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LinkButton } from '@/components/ui/link-button'

interface BlogData {
  title: string
  summary: string
  date: string
  tags: string[]
  content: string
  headings?: {
    text: string
    level: number
  }[]
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  if (!resolvedParams.slug) {
    notFound()
  }

  const blog = await getBlogData(resolvedParams.slug)

  return {
    title: blog.title,
    description: blog.summary,
  }
}

export default async function BlogPage({ params }: Props) {
  const resolvedParams = await params
  if (!resolvedParams.slug) {
    notFound()
  }

  const blog: BlogData = await getBlogData(resolvedParams.slug)

  if (!blog) {
    notFound()
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }

  return (
    <main className="min-h-screen bg-background text-foreground pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-24 py-8 sm:py-12 lg:py-16 max-w-7xl">
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
                src="/profile/profile-picture.jpg"
                alt="Andre Chandra Putra"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover"
                priority
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
          {blog.headings && blog.headings.length > 0 && (
            <BlogNavigation
              headings={blog.headings.map((heading) => ({
                ...heading,
                id: heading.text.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
              }))}
            />
          )}
        </div>

        <div className="mt-10">
          <LinkButton
            asChild
            variant="unstyled_link_left"
            className="text-white"
          >
            <Link href="/blog" className="flex items-center group">
              <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Back to Blogs
            </Link>
          </LinkButton>
        </div>
      </div>
    </main>
  )
}
