'use client'

import { motion } from 'framer-motion'

const colors = [
  { name: 'White Background', hex: '#ffffff' },
  { name: 'Dark Background', hex: '#0e1111' },
  { name: 'Primary', hex: '#55f89f' },
  { name: 'Secondary', hex: '#34c477' },
  { name: 'Gradient', gradient: 'linear-gradient(90deg, #55f89f, #55f8d5)' },
]

const fonts = [
  { name: 'Alliance No.2', style: 'font-alliance' },
  { name: 'Geist', style: 'font-geist' },
  { name: 'Geist Mono', style: 'font-geist_mono' },
  { name: 'Roboto Mono', style: 'font-roboto_mono' },
]

export default function DesignSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="container mx-auto px-4 sm:px-6 lg:px-24 py-8 sm:py-12 lg:py-16 max-w-7xl space-y-4 bg-grid"
    >
      <h3 className="text-xl font-semibold text-white mb-4">Color Palettes</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 border border-[#2c2c2c] bg-[#111111] rounded-none">
        {colors.map((color, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4"
          >
            <div
              className="w-12 h-12 rounded-lg border border-gray-600"
              style={{
                background: color.gradient || color.hex,
              }}
            />
            <div>
              <p className="text-white font-medium">{color.name}</p>
              <p className="text-xs text-gray-400">
                {color.gradient
                  ? color.gradient
                      .replace('linear-gradient(90deg, ', '')
                      .replace(')', '')
                  : color.hex}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Typography</h3>
        <div className="space-y-4">
          {fonts.map((font, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-4 border border-[#2c2c2c] bg-[#111111] rounded-none ${font.style}`}
            >
              <p className="text-lg text-white">{font.name}</p>
              <p className="text-sm text-gray-400">
                The quick brown fox jumps over the lazy dog.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
