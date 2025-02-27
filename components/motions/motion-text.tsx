'use client'
import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'

interface MotionTextProps {
  as: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  stagger?: number
  initialX?: number
  initialY?: number
  simpleAnimation?: boolean
}

const MotionText: React.FC<MotionTextProps> = ({
  as = 'p',
  children,
  className = '',
  delay = 0,
  duration = 0.4,
  stagger = 0.03,
  initialX = -20,
  initialY = 20,
  simpleAnimation = false,
}) => {
  const Component = motion[as] as any

  if (simpleAnimation || typeof children !== 'string') {
    return (
      <Component
        className={className}
        whileInView="visible"
        viewport={{ once: true }}
        initial={{ opacity: 0, y: initialY }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration,
          delay,
          ease: 'easeOut',
        }}
      >
        {children}
      </Component>
    )
  }

  return (
    <Component
      className={`${className} overflow-hidden`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      <span className="inline-block">
        {' '}
        {Array.from(children).map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={{
              hidden: {
                opacity: 0,
                x: initialX,
                y: initialY,
              },
              visible: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: {
                  duration,
                  ease: [0.2, 0.65, 0.3, 0.9],
                },
              },
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </span>
    </Component>
  )
}

export default MotionText
