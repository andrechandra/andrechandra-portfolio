'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function BlogNavigation({
  headings,
}: {
  headings: { id: string; text: string; level: number }[]
}) {
  const [activeId, setActiveId] = useState<string | null>(null)

  // Helper function to sanitize IDs
  const sanitizeId = (id: string) => id.replace(/:/g, '')

  useEffect(() => {
    const handleScroll = () => {
      const offsets = headings
        .map((heading) => {
          const sanitizedId = sanitizeId(heading.id)
          const el = document.getElementById(sanitizedId) // Use sanitized ID
          if (!el) return null
          return { id: sanitizedId, offsetTop: el.offsetTop }
        })
        .filter(Boolean) as { id: string; offsetTop: number }[]

      const scrollPosition = window.scrollY + 100 // Add offset for better UX
      const activeHeading = offsets
        .reverse()
        .find((heading) => scrollPosition >= heading.offsetTop)

      setActiveId(activeHeading ? activeHeading.id : null)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [headings])

  return (
    <motion.nav
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="hidden lg:block w-64 shrink-0"
    >
      <div className="sticky top-24 space-y-4">
        <div className="space-y-2 text-gray-400 font-roboto">
          {headings.map((heading, index) => {
            const sanitizedId = sanitizeId(heading.id)
            return (
              <a
                key={index}
                href={`#${sanitizedId}`}
                className={`block hover:text-white transition-colors ${
                  activeId === sanitizedId ? 'text-white font-bold' : ''
                }`}
                style={{ paddingLeft: `${heading.level * 0.5}rem` }}
              >
                {heading.text}
              </a>
            )
          })}
        </div>
      </div>
    </motion.nav>
  )
}
