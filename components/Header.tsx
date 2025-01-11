'use client'

import { motion } from 'framer-motion'
import React from 'react'

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
        className="absolute inset-0 opacity-60"
        style={backgroundStyles[backgroundVariant]}
      />
      {/* Content */}
      <div className="relative z-10 text-center space-y-4 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.2, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-bold tracking-tight mt-20"
        >
          <span className="text-white">{title}</span>{' '}
          <span className="bg-gradient-to-r from-yellow-400 via-pink-200 to-yellow-400 bg-clip-text text-transparent animate-shiny">
            {title2}
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.4, ease: 'easeOut' }}
          className="bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600 bg-clip-text text-transparent animate-shiny text-sm"
        >
          {description}
        </motion.p>
      </div>
    </div>
  )
}
