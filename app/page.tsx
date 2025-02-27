'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import ProjectCard from '@/components/project-card'
import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import MotionText from '@/components/motions/motion-text'
import MotionElement from '@/components/motions/motion-element'
import { Dots } from '@/components/dots'

import { LinkButton } from '@/components/ui/link-button'
import { SiGithub, SiGoogledocs, SiLinkedin } from 'react-icons/si'

export default function Home() {
  return (
    <main className="min-h-screen bg-grid">
      <Dots />
      <div className="container max-w-full min-h-screen bg-grid-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-32 py-8 sm:py-12 lg:py-16 max-w-7xl flex flex-col justify-center min-h-screen">
          <MotionText
            as="span"
            className="text-[#55f89f] mb-4 block font-geist_mono tracking-widest"
            duration={0.2}
          >
            &gt;_hi, my name is
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
            className="text-base sm:text-xl lg:text-2xl font-light text-gray-400 mb-8 font-geist_mono"
            delay={0.2}
            duration={0.2}
          >
            IT Application Developer at{' '}
            <span className="hidden sm:inline"></span>
            <span className="block sm:hidden"></span>
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
            <LinkButton variant="unstyled_link_right">
              <Link
                href="https://linkedin.com/in/andrechandraputra"
                target="_blank"
                className="flex items-center gap-2 cursor-[var(--external-cursor)]"
              >
                <SiLinkedin className="h-4 w-4" />
                <span className="font-light font-geist_mono">LinkedIn</span>
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
                className="font-light text-[#55f89f] border-b border-dashed border-gray-500"
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
    </main>
  )
}
