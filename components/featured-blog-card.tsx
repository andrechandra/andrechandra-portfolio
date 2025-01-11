import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import MotionWrapper from '@/components/motion-wrapper'
import { featuredBlogs } from '@/constants/featured-blogs'

export default function FeaturedBlogCard() {
  return (
    <div className="w-full bg-background text-foreground py-4">
      <div className="max-w-7xl mx-auto space-y-16">
        {featuredBlogs.map((blog, index) => (
          <MotionWrapper
            key={index}
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
                <p className="text-sm text-gray-400">{blog.date}</p>
                <div className="space-y-2">
                  <h2 className="text-xl font-bold tracking-tight">
                    {blog.title}
                  </h2>
                  <p className="text-sm text-gray-400 font-roboto">
                    {blog.description}
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
                      <Link href={blog.slug}>
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
        <MotionWrapper
          animationProps={{
            initial: { y: 100, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            transition: {
              duration: 0.2,
              delay: 0.6 + featuredBlogs.length * 0.2,
              ease: 'easeOut',
            },
            className: 'flex justify-center',
          }}
        >
          <Button asChild variant="link_right" className="text-white">
            <Link href="/blog">
              Read More Blogs
              <ArrowRight className="mr-2 h-4 w-4" />
            </Link>
          </Button>
        </MotionWrapper>
      </div>
    </div>
  )
}
