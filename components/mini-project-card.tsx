'use client'

import type React from 'react'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Github, Globe, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { LinkButton } from '@/components/ui/link-button'
import { ToolIcon } from './tool-icon'
import { miniProjects } from '@/constants/mini-projects'

const miniProjectVariants = {
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
}

interface Project {
  title: string
  description: string
  thumbnail: string
  stack?: string[]
  href?: string
  repo?: string
  slug?: string
}

interface MiniProjectCardsProps {
  projects?: Project[]
  limit?: number
  viewMoreHref?: string
}

export default function MiniProjectCard({
  limit,
  viewMoreHref = '/projects',
}: MiniProjectCardsProps) {
  const displayedProjects = limit ? miniProjects.slice(0, limit) : miniProjects

  return (
    <div className="w-full bg-transparent text-foreground">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={miniProjectVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              className="flex flex-col h-full"
            >
              <div className="flex flex-col h-full border border-[#2c2c2c] bg-[#111111]">
                <div className="relative aspect-video w-full overflow-hidden border-b border-[#2c2c2c]">
                  <Image
                    src={project.thumbnail || '/placeholder.svg'}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    width={400}
                    height={225}
                    priority={index < 3}
                  />
                </div>

                <div className="flex flex-col flex-grow p-4 justify-between gap-3">
                  <div className="space-y-2">
                    <h3 className="text-lg font-light">{project.title}</h3>
                    <p className="text-xs text-gray-400 font-geist_mono tracking-tighter line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {project.stack && (
                    <div className="flex items-center flex-wrap gap-1">
                      <span className="text-xs text-gray-500 mr-1">Tools:</span>
                      <TooltipProvider>
                        {project.stack.slice(0, 5).map((tech) => (
                          <Tooltip key={tech}>
                            <TooltipTrigger asChild>
                              <div className="p-1 rounded-full">
                                <ToolIcon tool={tech} />
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{tech}</p>
                            </TooltipContent>
                          </Tooltip>
                        ))}
                        {project.stack.length > 5 && (
                          <span className="text-xs text-gray-500">
                            +{project.stack.length - 5}
                          </span>
                        )}
                      </TooltipProvider>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-2">
                    <Button variant="primary" size="small" asChild>
                      <Link
                        href={
                          project.slug
                            ? `/projects/${project.slug}`
                            : project.href || '#'
                        }
                        className="flex items-center gap-1 group"
                      >
                        <span className="font-normal text-sm">View</span>
                        <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-[0.1rem] group-hover:-translate-y-[0.1rem]" />
                      </Link>
                    </Button>

                    <div className="flex gap-3">
                      {project.href && (
                        <Button
                          asChild
                          variant="outline"
                          size="small"
                          className="text-gray-400 hover:text-white cursor-[var(--external-cursor)] font-geist"
                        >
                          <Link
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Globe className="h-4 w-4" />
                          </Link>
                        </Button>
                      )}

                      {project.repo && (
                        <Button
                          asChild
                          variant="outline"
                          size="small"
                          className="text-gray-400 hover:text-white cursor-[var(--external-cursor)] font-geist"
                        >
                          <Link
                            href={project.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {limit && limit < miniProjects.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: displayedProjects.length * 0.1 + 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="flex justify-center pt-4"
          >
            <LinkButton
              asChild
              variant="underline_link_right"
              className="text-white"
            >
              <Link
                href={viewMoreHref}
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
