import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import MotionWrapper from '@/components/motions/motion-wrapper'
import { featuredBlogs } from '@/constants/featured-blogs'
import { LinkButton } from './ui/link-button'

export default function FeaturedBlogCard() {
  return (
    <div className="w-full bg-transparent text-foreground py-4">
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
                    <LinkButton
                      asChild
                      variant="unstyled_link_right"
                      className="rounded-full text-gray-400 hover:text-white"
                    >
                      <Link
                        href={blog.slug}
                        className="flex items-center group"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </LinkButton>
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
          <LinkButton
            asChild
            variant="underline_link_right"
            className="text-white"
          >
            <Link href="/blog" className="flex items-center group">
              View more blogs
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </LinkButton>
        </MotionWrapper>
      </div>
    </div>
  )
}
