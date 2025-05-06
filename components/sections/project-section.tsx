'use client'

import { useState, useRef } from 'react'
import { StaticImageData } from 'next/image'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Github, Link2, X } from 'lucide-react'
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
import { motion, AnimatePresence } from 'framer-motion'

import { ToolIcon } from '@/components/tool-icon'
import { ProjectContent } from '@/components/project-content'
import { LinkButton } from '../ui/link-button'

export default function ProjectSection() {
  const params = useParams()
  const project = projects.find((p) => p.slug === params.slug)
  const [selectedImage, setSelectedImage] = useState<
    string | StaticImageData | null
  >(null)

  if (!project) {
    notFound()
  }

  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }))

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setSelectedImage(null)
    }
  }

  React.useEffect(() => {
    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedImage])

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="container mx-auto px-4 sm:px-6 lg:px-24 py-8 sm:py-12 lg:py-16 max-w-7xl"
    >
      <LinkButton
        asChild
        variant="unstyled_link_left"
        className="text-white mb-4 sm:mb-6"
      >
        <Link
          href="/projects"
          className="flex items-center group font-geist_mono tracking-tighter"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Projects
        </Link>
      </LinkButton>

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
                    <div
                      className="relative overflow-hidden rounded-none border-2 cursor-pointer transition-transform hover:scale-[0.99] hover:brightness-90"
                      onClick={() => setSelectedImage(image)}
                    >
                      <div className="w-full h-full">
                        <Image
                          src={image}
                          alt={`${project.title} screenshot ${index + 1}`}
                          fill
                          className="object-contain"
                          onLoadingComplete={(img) => {
                            const container = img.parentElement
                            if (container) {
                              if (img.naturalHeight > img.naturalWidth) {
                                container.style.aspectRatio = '3/4'
                              } else {
                                container.style.aspectRatio = '16/9'
                              }
                            }
                          }}
                        />
                      </div>
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
          className="text-xl font-bold text-white"
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

        <div className="flex flex-row gap-4">
          {project.href && (
            <Button
              asChild
              variant="primary"
              className="w-full sm:w-auto cursor-[var(--external-cursor)]"
            >
              <Link
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Link2 className="mr-2 h-4 w-4" />
                <span className="font-normal">Visit Website</span>
              </Link>
            </Button>
          )}
          {project.repo && (
            <Button
              asChild
              variant="primary"
              className="w-full sm:w-auto cursor-[var(--external-cursor)]"
            >
              <Link
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                <span className="font-normal">View Source</span>
              </Link>
            </Button>
          )}
        </div>
      </div>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-6 right-6 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 z-50 transition-all"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </motion.button>
            <motion.div
              className="relative w-[90vw] h-[90vh] max-w-7xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <Image
                src={selectedImage as StaticImageData}
                alt="Enlarged view"
                fill
                className="object-contain"
                quality={100}
                sizes="90vw"
                priority
              />
            </motion.div>

            {project.images.length > 1 && (
              <>
                <motion.button
                  className="absolute left-4 p-3 rounded-full bg-black/30 text-white hover:bg-black/50 transition-all"
                  onClick={(e) => {
                    e.stopPropagation()
                    const currentIndex = project.images.findIndex((img) =>
                      typeof img === 'string' &&
                      typeof selectedImage === 'string'
                        ? img === selectedImage
                        : img === selectedImage
                    )
                    const prevIndex =
                      currentIndex <= 0
                        ? project.images.length - 1
                        : currentIndex - 1
                    setSelectedImage(project.images[prevIndex])
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  aria-label="Previous image"
                >
                  <ArrowLeft className="w-6 h-6" />
                </motion.button>
                <motion.button
                  className="absolute right-4 p-3 rounded-full bg-black/30 text-white hover:bg-black/50 transition-all"
                  onClick={(e) => {
                    e.stopPropagation()
                    const currentIndex = project.images.findIndex((img) =>
                      typeof img === 'string' &&
                      typeof selectedImage === 'string'
                        ? img === selectedImage
                        : img === selectedImage
                    )
                    const nextIndex =
                      currentIndex >= project.images.length - 1
                        ? 0
                        : currentIndex + 1
                    setSelectedImage(project.images[nextIndex])
                  }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  aria-label="Next image"
                >
                  <motion.div initial={{ rotate: 0 }} animate={{ rotate: 180 }}>
                    <ArrowLeft className="w-6 h-6" />
                  </motion.div>
                </motion.button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
