'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { resumes } from '@/constants/resumes'
import Link from 'next/link'

export default function ResumeSection() {
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
            if (typeof window !== 'undefined') {
              history.replaceState(null, '', `#${entry.target.id}`)
            }
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

  const renderExperienceItem = (
    item: any,
    idx: number,
    type: 'work' | 'voluntary'
  ) => {
    const [company, ...rest] = item.location.split(' - ')
    const locationDetails = rest.join(' - ')

    return (
      <div
        key={idx}
        className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-4 lg:gap-12 items-start mb-12"
      >
        <p className="text-sm text-gray-400 font-geist_mono tracking-tighter">
          {item.duration}
        </p>
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-white mb-2">{item.title}</h2>
          <p className="text-gray-400 text-sm">
            <Link
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-[var(--external-cursor)] relative w-fit text-[#55f89f] after:absolute after:w-full after:scale-x-0 after:h-[0.05rem] after:bottom-0 after:left-0 after:origin-right after:bg-gradient-to-r after:from-[#55f89f] after:to-[#55f8d5] after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
            >
              {company}
            </Link>{' '}
            - {locationDetails}
          </p>
          <ul
            className="text-sm space-y-1 font-geist_mono tracking-tighter"
            aria-label={`${type === 'work' ? 'Work' : 'Voluntary'} responsibilities`}
          >
            {item.responsibilities.map(
              (responsibility: string, index: number) => (
                <li
                  key={index}
                  className="relative pl-6 flex items-center gap-2 before:content-['>_'] before:text-[#55f89f] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:font-geist_mono before:text-lg tracking-tighter"
                >
                  <span className="text-gray-400">{responsibility}</span>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="container mx-auto px-4 sm:px-6 lg:px-24 py-8 sm:py-12 lg:py-16 max-w-7xl"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[6fr_1fr] gap-4">
        <div className="space-y-24">
          <section
            id="working-experience"
            className="scroll-mt-12"
            aria-label="Working Experience"
          >
            <h2 className="text-2xl font-bold mb-4">Working Experience</h2>
            {workingExperience.map((item, idx) =>
              renderExperienceItem(item, idx, 'work')
            )}
          </section>

          <section
            id="voluntary-experience"
            className="scroll-mt-12"
            aria-label="Voluntary Experience"
          >
            <h2 className="text-2xl font-bold mb-4">Voluntary Experience</h2>
            {voluntaryExperience.map((item, idx) =>
              renderExperienceItem(item, idx, 'voluntary')
            )}
          </section>

          <section
            id="education"
            className="scroll-mt-12"
            aria-label="Education"
          >
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            {education.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-4 lg:gap-12 items-start mb-12"
              >
                <p className="text-sm text-gray-400 font-geist_mono tracking-tighter">
                  {item.duration}
                </p>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.institution}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.degree}</p>
                  <p className="text-gray-400 text-sm">{item.gpa}</p>
                  <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 font-geist_mono tracking-tighter">
                    {item.keySubjects.map((keySubject, index) => (
                      <li
                        className="relative pl-6 flex items-center gap-2 before:content-['>_'] before:text-[#55f89f] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:font-geist_mono before:text-lg tracking-tighter"
                        key={index}
                      >
                        {keySubject}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </section>

          <section
            id="additional-skills"
            className="scroll-mt-12"
            aria-label="Additional Skills"
          >
            <h2 className="text-2xl font-bold mb-4">Additional Skills</h2>
            <div className="space-y-2">
              {Object.entries(additionalSkills).map(([key, values]) => (
                <div
                  key={key}
                  className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4"
                >
                  <p className="text-sm text-gray-400 capitalize sm:w-1/3 font-geist_mono tracking-tighter">
                    {key.replace(/([A-Z])/g, ' $1')}:
                  </p>
                  <p className="text-sm text-gray-400 sm:w-2/3 font-geist_mono tracking-tighter">
                    {Array.isArray(values) ? values.join(', ') : values}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="hidden lg:block" aria-label="Section navigation">
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
                aria-current={activeSection === id ? 'true' : undefined}
              >
                {label}
              </a>
            ))}
          </div>
        </aside>
      </div>
    </motion.div>
  )
}
