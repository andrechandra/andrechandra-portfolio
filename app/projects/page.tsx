import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/constants/projects'
import { profile } from '@/content'
import { Badge } from '@/components/ui/badge'

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

        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <li
              key={project.slug}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-[#1f1f1f] bg-[#0a0a0a] transition-colors hover:border-[#2f2f2f]"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-[#1a1a1a] bg-[#0f0f0f]">
                <Image
                  src={project.thumbnail}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 48vw, 92vw"
                  placeholder="blur"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h2 className="text-lg font-medium text-gray-100">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="rounded-md focus-visible:ring-2 focus-visible:ring-[#55f89f] focus-visible:outline-none"
                  >
                    <span className="absolute inset-0" aria-hidden="true" />
                    {project.title}
                  </Link>
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-400">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack?.map((tech) => (
                    <li key={tech}>
                      <Badge
                        variant="outline"
                        className="border-[#1f1f1f] font-normal text-gray-500"
                      >
                        {tech}
                      </Badge>
                    </li>
                  ))}
                </ul>
                <p className="font-geist_mono mt-4 flex items-center gap-1 text-xs tracking-tighter text-[#55f89f]">
                  Read the case study
                  <ArrowUpRight
                    className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
