'use client'

import { motion } from 'framer-motion'

export const Dots = () => {
  const dots = [
    { top: '15%', left: '10%' },
    { top: '20%', left: '70%' },
    { top: '35%', left: '85%' },
    { top: '90%', left: '20%' },
    { top: '80%', left: '60%' },
    { top: '70%', left: '80%' },
    { top: '55%', left: '5%' },
    { top: '65%', left: '95%' },
  ]

  return (
    <>
      {dots.map((dot, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [1, 0.7, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          viewport={{ once: true }}
          className="absolute w-[6px] h-[6px] bg-[#55f89f] rounded-full z-11"
          style={{
            top: dot.top,
            left: dot.left,
            boxShadow: '0px 0px 8px 2px rgba(85, 248, 159, 0.8)',
          }}
        >
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            whileInView={{ opacity: 1, height: '40px' }}
            transition={{ duration: 0.8, delay: index * 0.15, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="absolute w-[1px] bg-gradient-to-t from-[#55f89f] to-transparent -top-10 left-1/2 transform -translate-x-1/2"
          />
        </motion.div>
      ))}
    </>
  )
}
