'use client'

import { motion } from 'framer-motion'
import { FaReact, FaJs, FaHtml5, FaCss3 } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si'

export function AnimatedGraphic() {
  return (
    <motion.div
      className="relative w-full h-96"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300, damping: 10 }}
    >
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        <div className="w-64 h-64 rounded-full border-2 border-gray-700 flex items-center justify-center">
          <div className="w-48 h-48 rounded-full border-2 border-gray-600 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full border-2 border-gray-500 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center">
                <FaReact className="w-10 h-10 text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-1/4 left-1/4 bg-gray-800 rounded-lg p-2"
        whileHover={{ scale: 1.1 }}
      >
        <FaJs className="w-8 h-8 text-yellow-400" />
      </motion.div>

      <motion.div
        className="absolute top-1/4 right-1/4 bg-gray-800 rounded-lg p-2"
        whileHover={{ scale: 1.1 }}
      >
        <SiNextdotjs className="w-8 h-8 text-white" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-1/4 bg-gray-800 rounded-lg p-2"
        whileHover={{ scale: 1.1 }}
      >
        <FaHtml5 className="w-8 h-8 text-orange-500" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 right-1/4 bg-gray-800 rounded-lg p-2"
        whileHover={{ scale: 1.1 }}
      >
        <FaCss3 className="w-8 h-8 text-blue-500" />
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 rounded-lg p-2"
        whileHover={{ scale: 1.1 }}
      >
        <SiTailwindcss className="w-8 h-8 text-teal-400" />
      </motion.div>

      <motion.div
        className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 rounded-full px-4 py-2"
        whileHover={{ scale: 1.1 }}
      >
        <span className="text-sm font-mono">hello world!</span>
      </motion.div>
    </motion.div>
  )
}
