'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import ProjectCard from '@/components/project-card'
import { socialLinks } from '@/constants/socials'
import { Button } from '@/components/ui/button'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import { ArrowDown } from 'lucide-react'
import FeaturedBlogCard from '@/components/featured-blog-card'
import { LinkButton } from '@/components/ui/link-button'

const SocialLink = ({
  href,
  children,
  className = '',
}: {
  href: string
  children: React.ReactNode
  className?: string
}) => (
  <Link
    href={href}
    target="_blank"
    className={`block mb-4 text-gray-400 hover:text-yellow-400 hover:scale-110 transition-colors ${className}`}
  >
    {children}
  </Link>
)

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.5, ease: 'easeInOut' }}
        className="hidden lg:block fixed left-8 bottom-0 space-y-6"
      >
        {socialLinks.map((link) => (
          <SocialLink key={link.name} href={link.href}>
            <link.icon size={24} />
          </SocialLink>
        ))}
        <div className="w-px h-32 bg-gray-400 mx-auto mt-6"></div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-8 flex flex-col justify-center min-h-screen">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="text-yellow-400 mb-4 block font-roboto"
        >
          Hi, my name is
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.1, ease: 'easeInOut' }}
          className=" text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-200 mb-4"
        >
          Andre Chandra Putra.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.2, ease: 'easeInOut' }}
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-400 mb-8"
        >
          I like to build things for the web.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.3, ease: 'easeInOut' }}
          className="text-gray-400 max-w-xl mb-12 font-roboto"
        >
          I&apos;m a software engineer passionate about front-end and mobile app
          development, with experience in building user-friendly interfaces.
          Currently, I&apos;m working at{' '}
          <Link
            href="https://www.panindai-ichilife.co.id/"
            target="_blank"
            className="cursor-[var(--external-cursor)] relative w-fit text-white after:absolute after:w-full after:scale-x-0 after:h-[0.05rem] after:bottom-0 after:left-0 after:origin-right after:bg-gradient-to-r after:from-yellow-400 after:to-pink-200 after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
          >
            Panin Dai-ichi Life
          </Link>
          .
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.4, ease: 'easeInOut' }}
          className="space-x-4 flex flex-row items-center"
        >
          <HoverBorderGradient
            as="button"
            className="flex items-center space-x-2"
          >
            <Link href="#project" className="flex items-center gap-2">
              <span>View Project</span>
              <ArrowDown className="h-4 w-4" />
            </Link>
          </HoverBorderGradient>
          <LinkButton variant="underline_link_right" className="text-white">
            <Link href="/about">More about me</Link>
          </LinkButton>
        </motion.div>
      </div>

      <style jsx>{`
        .writing-mode-vertical {
          writing-mode: vertical-rl;
        }
      `}</style>

      <div
        className="container mx-auto px-4 sm:px-6 lg:px-32 py-8 sm:py-12 lg:py-16 max-w-7xl -scroll-mt-24"
        id="posts"
      >
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mt-20">
              <span className="text-white">Featured</span>{' '}
              <span className="bg-gradient-to-r from-yellow-400 via-pink-200 to-yellow-400 bg-clip-text text-transparent animate-shiny border-b border-dashed border-gray-500">
                Posts
              </span>
            </h1>
            <p className="bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600 bg-clip-text text-transparent animate-shiny text-sm">
              Some of my recent blog posts
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: 0.2, ease: 'easeInOut' }}
          >
            <FeaturedBlogCard />
          </motion.div>
        </div>
      </div>
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-32 py-8 sm:py-12 lg:py-16 max-w-7xl -scroll-mt-24"
        id="project"
      >
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mt-20">
              <span className="text-white">Featured</span>{' '}
              <span className="bg-gradient-to-r from-yellow-400 via-pink-200 to-yellow-400 bg-clip-text text-transparent animate-shiny">
                Projects
              </span>
            </h1>
            <p className="bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600 bg-clip-text text-transparent animate-shiny text-sm">
              Some of my recent projects
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: 0.2, ease: 'easeInOut' }}
          >
            <ProjectCard limit={2} initialCategory="all" showTabs={false} />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.5, ease: 'easeInOut' }}
        className="hidden lg:block fixed right-8 bottom-0"
      >
        <div className="writing-mode-vertical text-gray-400 tracking-widest font-roboto text-sm mb-4">
          andrechandra.work@gmail.com
        </div>
        <div className="w-px h-32 bg-gray-400 mx-auto"></div>
      </motion.div>
    </main>
  )
}
