import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getSortedBlogs } from '@/lib/blog'
import MotionWrapper from '@/components/motion-wrapper'

interface BlogCardProps {
  limit?: number
  tags?: string[]
}

export default function BlogCard({ limit, tags }: BlogCardProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }

  const displayedBlogs = getSortedBlogs()
  console.log(displayedBlogs)

  return (
    <div className="w-full bg-background text-foreground min-h-screen py-4">
      <div className="max-w-7xl mx-auto space-y-16">
        {displayedBlogs.map((blog, index) => (
          <MotionWrapper
            key={blog.id}
            animationProps={{
              initial: { y: 100, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: {
                duration: 0.2,
                delay: 0.6 + index * 0.2,
                ease: 'easeOut',
              },
            }}
          >
            <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-[2fr_1fr]">
              <div className="space-y-6 order-2 lg:order-none">
                <p className="text-sm text-gray-400">{formatDate(blog.date)}</p>
                <div className="space-y-2">
                  <h2 className="text-xl font-bold tracking-tight">
                    {blog.title}
                  </h2>
                  <p className="text-sm text-gray-400 font-roboto">
                    {blog.summary}
                  </p>
                </div>

                {blog.tags && (
                  <div className="flex items-center flex-wrap gap-4 pt-4 justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">Tags:</span>
                      {blog.tags.map((tag: string, index: number) => (
                        <Badge variant="outline" key={index}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      asChild
                      variant="link_right"
                      className="rounded-full text-gray-400 hover:text-white"
                    >
                      <Link href={`/blog/${blog.id}`}>
                        <ArrowRight className="mr-2 h-4 w-4" />
                        Read More
                      </Link>
                    </Button>
                  </div>
                )}
              </div>

              <div className="relative aspect-[5/3] w-full mx-auto overflow-hidden rounded-lg">
                <Image
                  src={blog.thumbnail}
                  alt={blog.title}
                  className="object-cover rounded-lg"
                  fill
                  priority
                />
              </div>
            </div>
          </MotionWrapper>
        ))}
      </div>
    </div>
  )
}
