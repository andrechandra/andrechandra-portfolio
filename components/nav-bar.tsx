'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X, Home, FolderGit, FolderGit2, User } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMoreOpen] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    setHasAnimated(true)

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const links = [
    {
      href: '/',
      label: '>_home',
      icon: Home,
      description: 'Explore my digital space!',
    },
    {
      href: '/projects',
      label: '>_projects',
      icon: FolderGit2,
      description: 'Showcase of my projects',
    },
    {
      href: '/experiences',
      label: '>_experiences',
      icon: User,
      description: 'My experiences and skill',
    },
    {
      href: '/about',
      label: '>_about',
      icon: User,
      description: 'Get to know me better!',
    },
  ]

  const mainLinks = links.slice(0, 5)
  const moreLinks = links.slice(5)

  return (
    <>
      <motion.div
        className="fixed top-0 md:left-0 lg:left-0 right-0 z-50 px-8 py-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <nav className="max-w-[fit-content] mx-auto bg-[#111111] backdrop-blur-sm px-4 py-2 rounded-none border border-[#2c2c2c]">
          <div className="flex items-center justify-between mx-auto">
            <div className="hidden md:flex items-center space-x-8">
              {mainLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-geist_mono ${
                    pathname === link.href ||
                    (link.href === '/projects' &&
                      pathname?.startsWith('/projects/')) ||
                    (link.href === '/blog' && pathname?.startsWith('/blog/'))
                      ? 'text-[#55f89f]'
                      : 'text-gray-300 hover:text-[#55f89f]'
                  } transition-colors`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </nav>
      </motion.div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="fixed top-0 left-0 h-full w-64 bg-zinc-900/90 p-4 z-50 md:hidden"
            >
              {/* <div className="flex justify-between items-center mb-8">
                <span className="text-white font-semibold">
                  Navigation Menu
                </span>
                <motion.button
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-6 h-6 text-gray-300" />
                </motion.button>
              </div> */}
              <div className="space-y-4">
                {links.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="flex items-start space-x-3 text-gray-300 bg-black hover:text-white p-2 rounded-none hover:bg-black"
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex items-center p-2 bg-white/10 rounded-none">
                      <link.icon className="w-5 h-5 mt-0.5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">{link.label}</div>
                      <div className="text-xs text-gray-400">
                        {link.description}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
