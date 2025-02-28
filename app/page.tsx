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
import { heroLinks } from '@/constants/hero-links'

export default function Home() {
  return (
    <main className="min-h-screen bg-grid">
      <Dots />
      <div className="container max-w-full min-h-screen bg-grid-hero">
        <div className="glowing-dot"></div>
        <div className="glowing-dot"></div>
        <div className="glowing-dot"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-32 py-8 sm:py-12 lg:py-16 max-w-7xl flex flex-col justify-center min-h-screen">
          <MotionText
            as="span"
            className="text-[#55f89f] mb-4 block font-geist_mono tracking-widest"
            duration={0.4}
          >
            &gt;_hi, my name is
          </MotionText>
          <MotionText
            as="h1"
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-200 mb-4 flex"
            duration={0.4}
          >
            Andre Chandra Putra
          </MotionText>

          <MotionText
            as="h2"
            className="text-base sm:text-xl lg:text-2xl font-light text-gray-400 mb-8 font-geist_mono tracking-tighter"
            delay={0.2}
            duration={0.4}
          >
            IT Application Developer at{' '}
            <span className="hidden sm:inline"></span>
            <span className="block sm:hidden"></span>
            <Link
              href="/experiences#working-experience"
              className="border-b border-dotted border-white relative w-fit text-white after:absolute after:w-full after:scale-x-0 after:h-[0.05rem] after:bottom-0 after:left-0 after:origin-right after:bg-gradient-to-r after:from-[#55f89f] after:to-[#55f8d5] after:transition-transform after:duration-300 hover:border-transparent hover:after:scale-x-100 hover:after:origin-left"
            >
              Panin Dai-ichi Life
            </Link>
          </MotionText>

          <MotionText
            as="p"
            className="text-gray-400 max-w-xl mb-8 font-geist_mono tracking-tighter"
            delay={0.3}
            duration={0.4}
            simpleAnimation={true}
          >
            I love building full-stack applications, indulge in sweets while
            avoiding diabetes, and consult my dogs{' '}
            <Link
              href="https://www.instagram.com/haitsberry_/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-dotted border-white relative w-fit text-white after:absolute after:w-full after:scale-x-0 after:h-[0.05rem] after:bottom-0 after:left-0 after:origin-right after:bg-gradient-to-r after:from-[#55f89f] after:to-[#55f8d5] after:transition-transform after:duration-300 hover:border-transparent hover:after:scale-x-100 hover:after:origin-left"
            >
              Chivas & Berry
            </Link>{' '}
            for coding wisdom.
          </MotionText>

          <MotionElement
            className="space-x-7 flex flex-row items-center mb-4"
            delay={0.4}
            duration={0.4}
          >
            {heroLinks.map((item, index) => {
              const Icon = item.icon
              return (
                <LinkButton
                  key={index}
                  asChild
                  variant="unstyled_link_right"
                  className={
                    item.isExternal ? 'cursor-[var(--external-cursor)]' : ''
                  }
                >
                  <Link
                    href={item.href}
                    target={item.isExternal ? '_blank' : undefined}
                    rel={item.isExternal ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-2"
                  >
                    <Icon className="h-4 w-4" />
                    <span className="font-light font-geist_mono tracking-tighter">
                      {item.label}
                    </span>
                  </Link>
                </LinkButton>
              )
            })}
          </MotionElement>

          <MotionElement
            className="space-x-4 flex flex-row items-center"
            delay={0.4}
            duration={0.4}
          >
            <Button variant="primary" asChild>
              <Link href="#project" className="flex items-center gap-2 group">
                <span className="font-normal">View Project</span>
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-[0.1rem]" />
              </Link>
            </Button>
            <Button variant="secondary">
              <Link href="/about" className="flex items-center gap-2">
                <span className="font-normal">More About Me</span>
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
                duration={0.4}
              >
                Featured
              </MotionText>{' '}
              <MotionText
                as="span"
                className="font-light text-[#55f89f] border-b border-dashed border-gray-500"
                duration={0.4}
              >
                Projects
              </MotionText>
            </h1>
            <MotionText
              as="p"
              className="bg-gray-400 bg-clip-text text-transparent animate-shiny text-sm"
              delay={0.3}
              duration={0.4}
              simpleAnimation={true}
            >
              Some of my recent projects
            </MotionText>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <ProjectCard limit={2} initialCategory="all" showTabs={false} />
          </motion.div>
        </div>
      </div>
    </main>
  )
}
