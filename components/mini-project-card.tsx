'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { StaticImageData } from 'next/image'
import { miniProjects } from '@/constants/projects'
import { Github, Link2, ChevronLeft, ChevronRight, X, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { ToolIcon } from './tool-icon'
import { LinkButton } from './ui/link-button'

const cardVariants = {
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

type ImageType = StaticImageData | string

function MiniCarousel({
  images,
  title,
  onImageClick,
}: {
  images: ImageType[]
  title: string
  onImageClick: (img: ImageType) => void
}) {
  const [index, setIndex] = useState(0)

  if (images.length === 0) {
    return (
      <div className="w-full aspect-video bg-[#1a1a1a] flex items-center justify-center border-b border-[#2c2c2c]">
        <span className="text-xs text-gray-600 font-geist_mono">No preview</span>
      </div>
    )
  }

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIndex((i) => (i - 1 + images.length) % images.length)
  }
  const next = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIndex((i) => (i + 1) % images.length)
  }

  return (
    <div
      className="relative w-full aspect-video bg-[#1a1a1a] overflow-hidden border-b border-[#2c2c2c] group cursor-pointer"
      onClick={() => onImageClick(images[index])}
    >
      <Image
        src={images[index] as StaticImageData}
        alt={`${title} screenshot ${index + 1}`}
        fill
        className="object-cover transition-all hover:brightness-90 hover:scale-[0.99]"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setIndex(i) }}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${i === index ? 'bg-white' : 'bg-white/40'}`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

function Lightbox({
  images,
  selected,
  onClose,
}: {
  images: ImageType[]
  selected: ImageType
  onClose: () => void
}) {
  const idx = images.findIndex((img) => img === selected)
  const [current, setCurrent] = useState(idx >= 0 ? idx : 0)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setCurrent((i) => (i + 1) % images.length)
      if (e.key === 'ArrowLeft') setCurrent((i) => (i - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [images, onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      <motion.button
        className="absolute top-6 right-6 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 z-50 transition-all"
        onClick={(e) => { e.stopPropagation(); onClose() }}
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
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[current] as StaticImageData}
          alt="Enlarged view"
          fill
          className="object-contain"
          quality={100}
          sizes="90vw"
          priority
        />
      </motion.div>

      {images.length > 1 && (
        <>
          <motion.button
            className="absolute left-4 p-3 rounded-full bg-black/30 text-white hover:bg-black/50 transition-all"
            onClick={(e) => { e.stopPropagation(); setCurrent((i) => (i - 1 + images.length) % images.length) }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            aria-label="Previous image"
          >
            <ArrowLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            className="absolute right-4 p-3 rounded-full bg-black/30 text-white hover:bg-black/50 transition-all"
            onClick={(e) => { e.stopPropagation(); setCurrent((i) => (i + 1) % images.length) }}
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
  )
}

export default function MiniProjectCard() {
  const [lightbox, setLightbox] = useState<{ images: ImageType[]; selected: ImageType } | null>(null)

  return (
    <>
      <motion.div
        className="flex flex-row gap-4 overflow-x-auto pb-2"
        initial="hidden"
        animate="visible"
      >
        {miniProjects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            custom={index}
            className="flex-shrink-0 w-72 border border-[#2c2c2c] bg-[#111111] flex flex-col"
          >
            <MiniCarousel
              images={project.images as ImageType[]}
              title={project.title}
              onImageClick={(img) =>
                setLightbox({ images: project.images as ImageType[], selected: img })
              }
            />

            <div className="flex flex-col gap-3 p-4 flex-1">
              <h3 className="text-sm font-light text-white">{project.title}</h3>
              <p className="text-xs text-gray-400 font-geist_mono tracking-tighter leading-relaxed flex-1">
                {project.description}
              </p>

              {project.stack && project.stack.length > 0 && (
                <div className="flex items-center gap-1">
                  <span className="text-xs text-gray-500">Tools:</span>
                  <TooltipProvider delayDuration={0}>
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

              <div className="flex items-center gap-4 pt-1">
                {project.href && (
                  <LinkButton
                    asChild
                    variant="unstyled_link_right"
                    className="text-gray-400 hover:text-white cursor-[var(--external-cursor)] font-geist text-xs"
                  >
                    <Link href={project.href} target="_blank" rel="noopener noreferrer">
                      <Link2 className="mr-1.5 h-3 w-3" />
                      Live Site
                    </Link>
                  </LinkButton>
                )}
                {project.repo && (
                  <LinkButton
                    asChild
                    variant="unstyled_link_right"
                    className="text-gray-400 hover:text-white cursor-[var(--external-cursor)] font-geist text-xs"
                  >
                    <Link href={project.repo} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1.5 h-3 w-3" />
                      GitHub
                    </Link>
                  </LinkButton>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {lightbox && (
          <Lightbox
            images={lightbox.images}
            selected={lightbox.selected}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
