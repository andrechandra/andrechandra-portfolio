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
