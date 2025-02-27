'use client'
import { motion, MotionProps } from 'framer-motion'
import React, { ReactNode, ElementType } from 'react'

interface MotionElementProps {
  as?: ElementType
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  stagger?: number
  initialX?: number
  initialY?: number
  simpleAnimation?: boolean
  animateFrom?:
    | 'bottom'
    | 'left'
    | 'right'
    | 'top'
    | 'bottom-left'
    | 'bottom-right'
    | 'top-left'
    | 'top-right'
}

const MotionElement: React.FC<MotionElementProps> = ({
  as = 'div',
  children,
  className = '',
  delay = 0,
  duration = 0.3,
  stagger = 0.03,
  initialX,
  initialY = 20,
  simpleAnimation = true,
  animateFrom = 'bottom',
}) => {
  // Determine initial position based on animateFrom prop
  let xOffset = 0
  let yOffset = 0

  switch (animateFrom) {
    case 'left':
      xOffset = -20
      yOffset = 0
      break
    case 'right':
      xOffset = 20
      yOffset = 0
      break
    case 'top':
      xOffset = 0
      yOffset = -20
      break
    case 'bottom':
      xOffset = 0
      yOffset = 20
      break
    case 'bottom-left':
      xOffset = -20
      yOffset = 20
      break
    case 'bottom-right':
      xOffset = 20
      yOffset = 20
      break
    case 'top-left':
      xOffset = -20
      yOffset = -20
      break
    case 'top-right':
      xOffset = 20
      yOffset = -20
      break
  }

  // Override with explicit values if provided
  if (initialX !== undefined) xOffset = initialX
  if (initialY !== undefined) yOffset = initialY

  // Create the appropriate motion component
  const MotionComponent =
    typeof as === 'string'
      ? (motion[as as keyof typeof motion] as React.ComponentType<
          React.PropsWithChildren<MotionProps>
        >)
      : motion(as as any)

  // Check if children is a simple string for character animation
  const isSimpleString = typeof children === 'string' && !simpleAnimation

  // For simple animation or complex children, animate the whole element
  if (!isSimpleString) {
    return (
      <MotionComponent
        className={className}
        initial={{ opacity: 0, x: xOffset, y: yOffset }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{
          duration,
          delay,
          ease: 'easeOut',
        }}
      >
        {children}
      </MotionComponent>
    )
  }

  // For text content with character-by-character animation
  return (
    <MotionComponent
      className={`${className} overflow-hidden`}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      <span className="inline-block">
        {Array.from(children as string).map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={{
              hidden: {
                opacity: 0,
                x: xOffset,
                y: yOffset,
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
    </MotionComponent>
  )
}

export default MotionElement
