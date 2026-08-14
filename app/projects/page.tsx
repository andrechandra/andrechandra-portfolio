import type { Metadata } from 'next'
import { projects } from '@/constants/projects'
import { profile } from '@/content'
import { WorkList } from '@/components/project/work-list'
import { Reveal } from '@/components/ui/reveal'

export const metadata: Metadata = {
  title: 'Work',
  description: `Case studies from ${profile.name}: production software built with Next.js, TypeScript, React Native and PostgreSQL.`,
  alternates: { canonical: '/projects' },
  openGraph: {
    title: `Work | ${profile.name}`,
    description:
      'Case studies from production software, including a property platform serving 500+ agents on iOS, Android and web.',
    type: 'website',
  },
}

export default function ProjectsPage() {
  return (
    <main className="bg-grid">
      <div className="mx-auto max-w-5xl px-4 pt-16 pb-20 sm:px-6 sm:pt-24">
        <Reveal immediate>
          <p className="font-geist_mono text-xs tracking-widest text-[#55f89f]">
            &gt;_work
          </p>
          <h1 className="mt-4 text-3xl font-light tracking-tight text-gray-100 sm:text-4xl">
            Selected work
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-400">
            Products I have designed, built and shipped. Each case study covers
            the problem, the decisions, and what actually happened.
          </p>
        </Reveal>

        <div className="mt-12">
          <WorkList projects={projects} headingLevel={2} />
        </div>
      </div>
    </main>
  )
}
