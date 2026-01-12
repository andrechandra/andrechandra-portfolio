'use client'

import { useState, useRef } from 'react'
import { StaticImageData } from 'next/image'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Github, Link2, X, Smartphone, Monitor } from 'lucide-react'
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
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Autoplay from 'embla-carousel-autoplay'

import { useParams } from 'next/navigation'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { ToolIcon } from '@/components/tool-icon'
import { ProjectContent } from '@/components/project-content'
import { LinkButton } from '../ui/link-button'

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

export default function ProjectSection() {
  const params = useParams()
  const project = projects.find((p) => p.slug === params.slug)
  const [selectedImage, setSelectedImage] = useState<
    string | StaticImageData | null
  >(null)
  const [imageType, setImageType] = useState<'mobile' | 'web'>('web')

  if (!project) {
    notFound()
  }

  const hasMultipleImageTypes = project.mobileImages && project.webImages
  const hasMobileOnly = project.mobileImages && !project.webImages
  const hasWebOnly = project.webImages && !project.mobileImages
  
  let currentImages: (string | StaticImageData)[] = []
  if (hasMultipleImageTypes) {
    currentImages = (imageType === 'mobile' ? project.mobileImages : project.webImages) || []
  } else if (hasMobileOnly) {
    currentImages = project.mobileImages || []
  } else if (hasWebOnly) {
    currentImages = project.webImages || []
  } else {
    currentImages = project.images || []
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
        {/* Image Type Tabs */}
        {hasMultipleImageTypes && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Tabs
              value={imageType}
              onValueChange={(value) => setImageType(value as 'mobile' | 'web')}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="web" className="flex items-center gap-2">
                  <Monitor className="h-4 w-4" />
                  Web
                </TabsTrigger>
                <TabsTrigger value="mobile" className="flex items-center gap-2">
                  <Smartphone className="h-4 w-4" />
                  Mobile
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </motion.div>
        )}

        {/* Image Carousel */}
        {currentImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full"
            key={imageType}
          >
            <Carousel plugins={[plugin.current] as any} className="w-full">
              <CarouselContent>
                {currentImages.map((image, index) => (
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
              {currentImages.length > 2 && (
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

        <div className="flex flex-row flex-wrap gap-4">
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
          {project.playStoreUrl && (
            <Button
              asChild
              variant="primary"
              className="w-full sm:w-auto cursor-[var(--external-cursor)]"
            >
              <Link
                href={project.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <PlayStoreIcon />
                <span className="ml-2 font-normal">Play Store</span>
              </Link>
            </Button>
          )}
          {project.appStoreUrl && (
            <Button
              asChild
              variant="primary"
              className="w-full sm:w-auto cursor-[var(--external-cursor)]"
            >
              <Link
                href={project.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AppStoreIcon />
                <span className="ml-2 font-normal">App Store</span>
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

            {currentImages.length > 1 && (
              <>
                <motion.button
                  className="absolute left-4 p-3 rounded-full bg-black/30 text-white hover:bg-black/50 transition-all"
                  onClick={(e) => {
                    e.stopPropagation()
                    const currentIndex = currentImages.findIndex((img) =>
                      typeof img === 'string' &&
                      typeof selectedImage === 'string'
                        ? img === selectedImage
                        : img === selectedImage
                    )
                    const prevIndex =
                      currentIndex <= 0
                        ? currentImages.length - 1
                        : currentIndex - 1
                    setSelectedImage(currentImages[prevIndex])
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
                    const currentIndex = currentImages.findIndex((img) =>
                      typeof img === 'string' &&
                      typeof selectedImage === 'string'
                        ? img === selectedImage
                        : img === selectedImage
                    )
                    const nextIndex =
                      currentIndex >= currentImages.length - 1
                        ? 0
                        : currentIndex + 1
                    setSelectedImage(currentImages[nextIndex])
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
