'use client'

import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Github, Link2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { projects } from '@/constants/projects'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

import { useParams } from 'next/navigation'

import React from 'react'
import { motion } from 'framer-motion'

import { ToolIcon } from '@/components/tool-icon'
import { ProjectContent } from '@/components/project-content'

export default function ProjectSection() {
  const params = useParams()
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-32 py-8 sm:py-12 lg:py-16 max-w-7xl">
      <Button
        asChild
        variant="link_left"
        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 mb-4 sm:mb-6"
      >
        <Link href="/projects">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>
      </Button>

      <div className="space-y-6 sm:space-y-8">
        {project.images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <Carousel plugins={[plugin.current] as any} className="w-full">
              <CarouselContent>
                {project.images.map((image, index) => (
                  <CarouselItem key={index} className="basis-full sm:basis-1/2">
                    <div className="relative aspect-video overflow-hidden rounded-lg border-2">
                      <Image
                        src={image}
                        alt={`${project.title} screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {project.images.length > 2 && (
                <>
                  <CarouselPrevious className="hidden sm:flex" />
                  <CarouselNext className="hidden sm:flex" />
                </>
              )}
            </Carousel>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-xl font-bold text-black dark:text-white"
        >
          {project.title}
        </motion.h1>

        <ProjectContent>{project.content}</ProjectContent>

        {project.stack && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-gray-500">Tools:</span>

            <TooltipProvider>
              {project.stack.map((tech) => (
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
            </TooltipProvider>
          </div>
        )}

        <div className="flex flex-row gap-4">
          {project.href && (
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <Link href={project.href} target="_blank">
                <Link2 className="mr-2 h-4 w-4" />
                Visit Website
              </Link>
            </Button>
          )}
          {project.repo && (
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <Link href={project.repo} target="_blank">
                <Github className="mr-2 h-4 w-4" />
                View Source
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
