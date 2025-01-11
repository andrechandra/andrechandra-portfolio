'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import { resumes } from '@/constants/resumes'
import { motion } from 'framer-motion'

export default function ResumePage() {
  const {
    workingExperience,
    education,
    voluntaryExperience,
    additionalSkills,
  } = resumes
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
            history.replaceState(null, '', `#${entry.target.id}`)
          }
        })
      },
      {
        threshold: 0.5,
        rootMargin: '0px 0px -35% 0px',
      }
    )

    const sections = document.querySelectorAll(
      '#working-experience, #voluntary-experience, #education, #additional-skills'
    )
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Header
        title="My"
        title2="Experiences"
        description="My professional career, experiences, and skills."
        backgroundVariant="resume"
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.6, ease: 'easeOut' }}
        className="container mx-auto px-4 sm:px-6 lg:px-16 py-8 sm:py-12 lg:py-16 max-w-7xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[6fr_1fr] gap-4">
          <div className="space-y-24">
            <div id="working-experience" className="scroll-mt-12">
              <h1 className="text-2xl font-bold mb-4">Working Experience</h1>
              {workingExperience.map((item, idx) => {
                const [company, ...rest] = item.location.split(' - ')
                const locationDetails = rest.join(' - ')

                return (
                  <div
                    key={idx}
                    className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-4 lg:gap-12 items-start mb-12"
                  >
                    <p className="text-sm text-gray-400 font-roboto">
                      {item.duration}
                    </p>
                    <div className="space-y-2">
                      <h1 className="text-xl font-bold text-white mb-2">
                        {item.title}
                      </h1>
                      <p className="text-gray-400 text-sm">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative w-fit text-yellow-400 after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:origin-right after:bg-gradient-to-r after:from-yellow-400 after:to-pink-200 after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
                        >
                          {company}
                        </a>{' '}
                        - {locationDetails}
                      </p>
                      <ul className=" text-sm space-y-1 font-roboto">
                        {item.responsibilities.map((responsibility, index) => (
                          <li
                            key={index}
                            className="relative pl-4 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-yellow-400 before:to-pink-200"
                          >
                            <span className="text-gray-400">
                              {responsibility}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>

            <div id="voluntary-experience" className="scroll-mt-12">
              <h1 className="text-2xl font-bold mb-4">Voluntary Experience</h1>
              {voluntaryExperience.map((item, idx) => {
                const [company, ...rest] = item.location.split(' - ')
                const locationDetails = rest.join(' - ')

                return (
                  <div
                    key={idx}
                    className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-4 lg:gap-12 items-start mb-12"
                  >
                    <p className="text-sm text-gray-400 font-roboto">
                      {item.duration}
                    </p>
                    <div className="space-y-2">
                      <h1 className="text-xl font-bold text-white mb-2">
                        {item.title}
                      </h1>
                      <p className="text-gray-400 text-sm">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative w-fit text-yellow-400 after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:origin-right after:bg-gradient-to-r after:from-yellow-400 after:to-pink-200 after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
                        >
                          {company}
                        </a>{' '}
                        - {locationDetails}
                      </p>
                      <ul className=" text-sm space-y-1 font-roboto">
                        {item.responsibilities.map((responsibility, index) => (
                          <li
                            key={index}
                            className="relative pl-4 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-yellow-400 before:to-pink-200"
                          >
                            <span className="text-gray-400">
                              {responsibility}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
            <div id="education" className="scroll-mt-12">
              <h1 className="text-2xl font-bold mb-4">Education</h1>
              {education.map((item, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-4 lg:gap-12 items-start mb-12"
                >
                  <p className="text-sm text-gray-400">{item.duration}</p>
                  <div className="space-y-2">
                    <h1 className="text-xl font-bold text-white mb-2">
                      {item.institution}
                    </h1>
                    <p className="text-gray-400 text-sm">{item.degree}</p>
                    <p className="text-gray-400 text-sm">{item.gpa}</p>
                    <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 font-roboto">
                      {item.keySubjects.map((keySubject, index) => (
                        <li key={index}>{keySubject}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div id="additional-skills" className="scroll-mt-12">
              <h1 className="text-2xl font-bold mb-4">Additional Skills</h1>
              <div className="space-y-2">
                {Object.entries(additionalSkills).map(([key, values]) => (
                  <div
                    key={key}
                    className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4"
                  >
                    <p className="text-sm font-semibold text-gray-400 capitalize sm:w-1/3">
                      {key.replace(/([A-Z])/g, ' $1')}:
                    </p>
                    <p className="text-sm text-gray-400 sm:w-2/3">
                      {values.join(', ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <nav className="hidden lg:block">
            <div className="sticky top-24 space-y-4 border-l border-gray-800 pl-4">
              {[
                { id: 'working-experience', label: 'Working Experience' },
                { id: 'voluntary-experience', label: 'Voluntary Experience' },
                { id: 'education', label: 'Education' },
                { id: 'additional-skills', label: 'Additional Skills' },
              ].map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`block text-gray-400 hover:text-white transition-colors duration-200
                    ${activeSection === id ? 'text-white font-medium' : ''}`}
                >
                  {label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </motion.div>
    </main>
  )
}
