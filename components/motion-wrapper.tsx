'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface MotionWrapperProps {
  children: ReactNode
  animationProps?: object
}

export default function MotionWrapper({
  children,
  animationProps,
}: MotionWrapperProps) {
  return <motion.div {...animationProps}>{children}</motion.div>
}
