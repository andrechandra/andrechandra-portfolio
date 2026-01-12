'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/constants/projects'
import { ArrowUpRight, Github, Link2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { ToolIcon } from './tool-icon'
import { LinkButton } from './ui/link-button'

const projectVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: i * 0.1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.4,
    },
  },
}

const PlayStoreIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
  </svg>
)

const AppStoreIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
  </svg>
)

export default function ProjectCard({
  limit,
  initialCategory = 'all',
  showTabs = true,
}: {
  limit?: number
  initialCategory?: string
  showTabs?: boolean
}) {
  const [activeCategory, setActiveCategory] = useState(initialCategory)
  const categories = ['all', 'university', 'freelance', 'short-projects']

  const filteredProjects = projects
    .filter(
      (project) =>
        activeCategory === 'all' || project.category === activeCategory
    )
    .slice(0, limit || undefined)

  return (
    <div className="w-full bg-transparent text-foreground min-h-screen py-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          {showTabs && (
            <Tabs
              defaultValue={initialCategory}
              className=" hidden lg:block w-full font-geist_mono tracking-tighter"
              onValueChange={setActiveCategory}
            >
              <TabsList className="grid w-full grid-cols-4">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className={cn(
                      'capitalize',
                      activeCategory === category && 'text-primary'
                    )}
                  >
                    {category.replace('-', ' ')}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          )}
        </motion.div>

        <motion.div
          className="space-y-4"
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={projectVariants}
              custom={index}
              layout
              className="relative"
            >
              <div
                className={`grid grid-cols-1 gap-0 lg:gap-4 items-stretched ${
                  index % 2 === 0
                    ? 'lg:grid-cols-[2fr_1fr]'
                    : 'lg:[&>*:first-child]:order-last lg:grid-cols-[1fr_2fr]'
                }`}
              >
                <div className="order-2 lg:order-none border border-[#2c2c2c] bg-[#111111] flex flex-col p-4 justify-between gap-4">
                  <h2 className="text-xl font-light text-white">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-400 font-geist_mono tracking-tighter">
                    {project.description}
                  </p>

                  {project.stack && (
                    <div className="flex items-center lg:gap-2 md:gap-2">
                      <span className="text-xs text-gray-500">Tools:</span>
                      <TooltipProvider>
                        {project.stack.map((tech) => (
                          <Tooltip key={tech}>
                            <TooltipTrigger asChild>
                              <div className="p-1 rounded-full text-white">
                                <ToolIcon tool={tech} />
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{tech}</p>
                            </TooltipContent>
                          </Tooltip>
                        ))}
                      </TooltipProvider>
                    </div>
                  )}

                  <div className="flex items-center flex-wrap gap-4 pt-4 justify-between">
                    <div>
                      <Button variant="primary" asChild>
                        <Link
                          href={
                            project.slug
                              ? `/projects/${project.slug}`
                              : project.href || '#'
                          }
                          className="flex items-center gap-2 group"
                        >
                          <span className="font-normal">View Project</span>
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-[0.1rem] group-hover:-translate-y-[0.1rem]" />
                        </Link>
                      </Button>
                    </div>

                    <div className="flex flex-row gap-8 mr-4">
                      {project.href && (
                        <LinkButton
                          asChild
                          variant="unstyled_link_right"
                          className="text-gray-400 hover:text-white cursor-[var(--external-cursor)] font-geist"
                        >
                          <Link
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Link2 className="mr-2 h-4 w-4" />
                            Live Site
                          </Link>
                        </LinkButton>
                      )}

                      {project.repo && (
                        <LinkButton
                          asChild
                          variant="unstyled_link_right"
                          className="text-gray-400 hover:text-white cursor-[var(--external-cursor)] font-geist"
                        >
                          <Link
                            href={project.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            Repository
                          </Link>
                        </LinkButton>
                      )}

                      {project.playStoreUrl && (
                        <LinkButton
                          asChild
                          variant="unstyled_link_right"
                          className="text-gray-400 hover:text-white cursor-[var(--external-cursor)] font-geist"
                        >
                          <Link
                            href={project.playStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <PlayStoreIcon />
                            <span className="ml-2">Play Store</span>
                          </Link>
                        </LinkButton>
                      )}

                      {project.appStoreUrl && (
                        <LinkButton
                          asChild
                          variant="unstyled_link_right"
                          className="text-gray-400 hover:text-white cursor-[var(--external-cursor)] font-geist"
                        >
                          <Link
                            href={project.appStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <AppStoreIcon />
                            <span className="ml-2">App Store</span>
                          </Link>
                        </LinkButton>
                      )}
                    </div>
                  </div>
                </div>

                <div className="relative w-full mx-auto overflow-hidden rounded-none border border-[#2c2c2c] bg-[#111111] p-4">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-none"
                    priority={index === 0}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {limit && limit < projects.length && (
          <motion.div
            variants={projectVariants}
            custom={filteredProjects.length}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex justify-center"
          >
            <LinkButton
              asChild
              variant="underline_link_right"
              className="text-white"
            >
              <Link
                href="/projects"
                className="flex items-center group font-geist_mono tracking-tighter"
              >
                View more projects
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </LinkButton>
          </motion.div>
        )}
      </div>
    </div>
  )
}
