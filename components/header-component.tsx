'use client'

import { motion } from 'framer-motion'
import React from 'react'
import MotionText from './motions/motion-text'

export default function Header({
  title,
  title2,
  description,
  backgroundVariant,
}: {
  title: string
  title2: string
  description: string
  backgroundVariant:
    | 'home'
    | 'about'
    | 'contact'
    | 'projects'
    | 'article'
    | 'resume'
    | 'services'
    | 'blog'
    | 'portfolio'
}): React.ReactElement {
  const backgroundStyles: Record<string, React.CSSProperties> = {
    home: {
      backgroundImage: `
        repeating-linear-gradient(0deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05) 1px, transparent 1px, transparent 20px),
        repeating-linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05) 1px, transparent 1px, transparent 20px)
      `,
      backgroundSize: '20px 20px',
    },
    about: {
      backgroundImage: `
        repeating-linear-gradient(0deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05) 1px, transparent 1px, transparent 20px),
        repeating-linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05) 1px, transparent 1px, transparent 20px)
      `,
      backgroundSize: '20px 20px',
    },
    projects: {
      backgroundImage: `
        repeating-linear-gradient(0deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05) 1px, transparent 1px, transparent 20px),
        repeating-linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05) 1px, transparent 1px, transparent 20px)
      `,
      backgroundSize: '20px 20px',
    },
    article: {
      backgroundImage: `
        repeating-linear-gradient(0deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05) 1px, transparent 1px, transparent 20px),
        repeating-linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05) 1px, transparent 1px, transparent 20px)
      `,
      backgroundSize: '20px 20px',
    },
    resume: {
      backgroundImage: `
        repeating-linear-gradient(0deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05) 1px, transparent 1px, transparent 20px),
        repeating-linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05) 1px, transparent 1px, transparent 20px)
      `,
      backgroundSize: '20px 20px',
    },
  }

  return (
    <div className="relative w-full bg-background min-h-[25vh] sm:min-h-[30vh] lg:min-h-[40vh] flex items-center justify-center">
      {/* Background grid pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 opacity-60 bg-grid-hero"
      />
      {/* Content */}
      <div className="relative z-10 text-center space-y-4 px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mt-20">
          <MotionText
            as="span"
            className="text-white font-light"
            duration={0.4}
            simpleAnimation={true}
          >
            {title}
          </MotionText>{' '}
          <MotionText
            as="span"
            className="font-light text-[#55f89f]"
            duration={0.4}
            simpleAnimation={true}
          >
            {title2}
          </MotionText>
        </h1>
        <MotionText
          as="p"
          className="bg-gray-400 bg-clip-text text-transparent animate-shiny text-sm font-geist"
          duration={0.4}
          simpleAnimation={true}
        >
          {description}
        </MotionText>
      </div>
    </div>
  )
}
