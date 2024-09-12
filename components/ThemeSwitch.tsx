'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

interface IconProps {
  className?: string
}
const Sun = ({ className = '' }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={`h-6 w-6 ${className}`}
  >
    <path
      fillRule="evenodd"
      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
      clipRule="evenodd"
    />
  </svg>
)
const Moon = ({ className = '' }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={`h-6 w-6 ${className}`}
  >
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
  </svg>
)
const Monitor = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="group:hover:text-gray-100 h-6 w-6"
  >
    <rect x="3" y="3" width="14" height="10" rx="2" ry="2"></rect>
    <line x1="7" y1="17" x2="13" y2="17"></line>
    <line x1="10" y1="13" x2="10" y2="17"></line>
  </svg>
)

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [isToggling, setIsToggling] = useState(false)

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  const toggleTheme = () => {
    setIsToggling(true)
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
    setTimeout(() => setIsToggling(false), 300) // Duration for the animation
  }

  return (
    <button
      aria-label="Toggle Theme"
      type="button"
      className="transform p-2 transition-transform duration-300 hover:scale-110 focus:outline-none"
      onClick={toggleTheme}
    >
      {resolvedTheme === 'dark' ? (
        <Sun
          className={`transform transition-transform duration-300 ${
            isToggling ? 'rotate-180 scale-110' : ''
          } hover:text-sun-400 dark:hover:text-sun-300`}
        />
      ) : (
        <Moon
          className={`transform transition-transform duration-300 ${
            isToggling ? 'rotate-180 scale-110' : ''
          } hover:text-moon-300 dark:hover:text-moon-200`}
        />
      )}
    </button>
  )
}

export default ThemeSwitch
