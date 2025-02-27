'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import ProjectCard from '@/components/project-card'
import { socialLinks } from '@/constants/socials'
import { ArrowDown } from 'lucide-react'
import FeaturedBlogCard from '@/components/featured-blog-card'
import { Button } from '@/components/ui/button'
import MotionText from '@/components/motions/motion-text'
import MotionElement from '@/components/motions/motion-element'
import { Dots } from '@/components/dots'
import { SocialLink } from '@/components/social-links'
import { LinkButton } from '@/components/ui/link-button'
import { SiGithub, SiGoogledocs } from 'react-icons/si'

export default function Home() {
  return (
    <main className="min-h-screen bg-grid">
      {/* <motion.div
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
      </motion.div> */}
      <Dots />
      <div className="container mx-auto px-4 sm:px-6 lg:px-32 py-8 sm:py-12 lg:py-16 max-w-7xl flex flex-col justify-center min-h-screen bg-grid-hero">
        <MotionText
          as="span"
          className="text-[#55f89f] mb-4 block font-geist_mono tracking-widest"
          duration={0.2}
        >
          Hi, my name is
        </MotionText>
        <MotionText
          as="h1"
          className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-200 mb-4 flex"
          duration={0.2}
        >
          Andre Chandra Putra
        </MotionText>

        <MotionText
          as="h2"
          className="text-lg sm:text-xl lg:text-2xl font-light text-gray-400 mb-8"
          delay={0.2}
          duration={0.2}
        >
          IT Application Developer at{' '}
          <Link
            href="https://www.panindai-ichilife.co.id/"
            target="_blank"
            className="cursor-[var(--external-cursor)] border-b border-dotted border-white relative w-fit text-white after:absolute after:w-full after:scale-x-0 after:h-[0.05rem] after:bottom-0 after:left-0 after:origin-right after:bg-gradient-to-r after:from-[#55f89f] after:to-[#55f8d5] after:transition-transform after:duration-300 hover:border-transparent hover:after:scale-x-100 hover:after:origin-left"
          >
            Panin Dai-ichi Life
          </Link>
        </MotionText>

        <MotionText
          as="p"
          className="text-gray-400 max-w-xl mb-8 font-geist_mono"
          delay={0.3}
          duration={0.2}
          simpleAnimation={true}
        >
          I'm a software engineer passionate about front-end and mobile app
          development, with experience in building user-friendly interfaces.
        </MotionText>

        <MotionElement
          className="space-x-4 flex flex-row items-center mb-4"
          delay={0.4}
          duration={0.2}
        >
          <LinkButton variant="unstyled_link_right">
            <Link
              href="https://shorturl.at/gl6SQ"
              target="_blank"
              className="flex items-center gap-2 cursor-[var(--external-cursor)]"
            >
              <SiGoogledocs className="h-4 w-4" />
              <span className="font-light font-geist_mono">Resume</span>
            </Link>
          </LinkButton>
          <LinkButton variant="unstyled_link_right">
            <Link
              href="https://github.com/andrechandra"
              target="_blank"
              className="flex items-center gap-2 cursor-[var(--external-cursor)]"
            >
              <SiGithub className="h-4 w-4" />
              <span className="font-light font-geist_mono">Github</span>
            </Link>
          </LinkButton>
        </MotionElement>

        <MotionElement
          className="space-x-4 flex flex-row items-center"
          delay={0.4}
          duration={0.2}
        >
          <Button variant="explorer">
            <Link href="#project" className="flex items-center gap-2 group">
              <span className="font-bold">View Project</span>
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-[0.1rem]" />
            </Link>
          </Button>
          <Button variant="cypher">
            <Link href="/about" className="flex items-center gap-2">
              <span className="font-bold">More About Me</span>
            </Link>
          </Button>
        </MotionElement>
      </div>

      <div
        className="container mx-auto px-4 sm:px-6 lg:px-32 py-8 sm:py-12 lg:py-16 max-w-7xl -scroll-mt-24"
        id="project"
      >
        <div className="flex flex-col gap-4">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mt-20">
              <MotionText
                as="span"
                className="text-white font-light"
                duration={0.2}
              >
                Featured
              </MotionText>{' '}
              <MotionText
                as="span"
                className="font-light bg-[#55f89f] bg-clip-text text-transparent animate-shiny border-b border-dashed border-gray-500"
                duration={0.2}
              >
                Projects
              </MotionText>
            </h1>
            <MotionText
              as="p"
              className="bg-gray-400 bg-clip-text text-transparent animate-shiny text-sm"
              delay={0.3}
              duration={0.2}
              simpleAnimation={true}
            >
              Some of my recent projects
            </MotionText>
          </div>

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

      {/* <div
        className="container mx-auto px-4 sm:px-6 lg:px-32 py-8 sm:py-12 lg:py-16 max-w-7xl -scroll-mt-24"
        id="posts"
      >
        <div className="flex flex-col gap-4">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mt-20">
              <MotionText
                as="span"
                className="text-white font-light"
                duration={0.2}
              >
                Featured
              </MotionText>{' '}
              <MotionText
                as="span"
                className="font-light bg-[#55f89f] bg-clip-text text-transparent animate-shiny border-b border-dashed border-gray-500"
                duration={0.2}
              >
                Posts
              </MotionText>
            </h1>
            <MotionText
              as="p"
              className="bg-gray-400 bg-clip-text text-transparent animate-shiny text-sm"
              delay={0.3}
              duration={0.2}
              simpleAnimation={true}
            >
              Some of my recent blog posts
            </MotionText>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: 0.2, ease: 'easeInOut' }}
          >
            <FeaturedBlogCard />
          </motion.div>
        </div>
      </div> */}

      {/* <style jsx>{`
        .writing-mode-vertical {
          writing-mode: vertical-rl;
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.5, ease: 'easeInOut' }}
        className="hidden lg:block fixed right-8 bottom-0"
      >
        <div className="writing-mode-vertical text-gray-400 tracking-widest font-geist_mono text-sm mb-4">
          andrechandra.work@gmail.com
        </div>
        <div className="w-px h-32 bg-gray-400 mx-auto"></div>
      </motion.div> */}
    </main>
  )
}
