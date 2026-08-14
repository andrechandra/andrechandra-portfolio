import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { partitionProjects } from '@/lib/projects'
import type { Project } from '@/types/project'
import { Badge } from '@/components/ui/badge'

type HeadingLevel = 2 | 3

function availability(project: Project) {
  const surfaces = [
    project.appStoreUrl ? 'iOS' : null,
    project.playStoreUrl ? 'Android' : null,
    project.href ? 'Web' : null,
  ].filter(Boolean)

  return surfaces.length > 1 ? `live on ${surfaces.join(' · ')}` : null
}

function FeaturedCard({
  project,
  headingLevel,
}: {
  project: Project
  headingLevel: HeadingLevel
}) {
  const Heading = (headingLevel === 2 ? 'h2' : 'h3') as 'h2' | 'h3'
  const live = availability(project)

  return (
    <li className="group relative grid overflow-hidden rounded-xl border border-[#1f1f1f] bg-[#0a0a0a] transition-colors hover:border-[#2f2f2f] sm:min-h-80 sm:grid-cols-[1.1fr_1fr]">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-[#1a1a1a] bg-[#0f0f0f] sm:aspect-auto sm:border-r sm:border-b-0">
        <Image
          src={project.thumbnail}
          alt=""
          fill
          sizes="(min-width: 640px) 54vw, 92vw"
          placeholder="blur"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-col justify-center p-6 sm:p-8">
        <Heading className="text-xl font-medium text-gray-100 sm:text-2xl">
          <Link
            href={`/projects/${project.slug}`}
            className="rounded-md focus-visible:ring-2 focus-visible:ring-[#55f89f] focus-visible:outline-none"
          >
            <span className="absolute inset-0" aria-hidden="true" />
            {project.title}
          </Link>
        </Heading>

        {live ? (
          <p className="font-geist_mono mt-2 text-xs tracking-tighter text-gray-500">
            {live}
          </p>
        ) : null}

        <p className="mt-3 text-sm leading-relaxed text-gray-400">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-1.5">
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

        <p className="font-geist_mono mt-5 flex items-center gap-1 text-xs tracking-tighter text-[#55f89f]">
          Read the case study
          <ArrowUpRight
            className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </p>
      </div>
    </li>
  )
}

function CompactRow({
  project,
  headingLevel,
}: {
  project: Project
  headingLevel: HeadingLevel
}) {
  const Heading = (headingLevel === 2 ? 'h3' : 'h4') as 'h3' | 'h4'

  return (
    <li className="group border-b border-[#1f1f1f] last:border-b-0">
      <Link
        href={`/projects/${project.slug}`}
        className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 rounded-md py-4 focus-visible:ring-2 focus-visible:ring-[#55f89f] focus-visible:outline-none"
      >
        <Heading className="text-base font-medium text-gray-300 transition-colors group-hover:text-gray-100">
          {project.title}
        </Heading>
        <p className="font-geist_mono text-xs tracking-tighter text-gray-600">
          {project.stack?.join(' · ')}
        </p>
      </Link>
    </li>
  )
}

export function WorkList({
  projects,
  headingLevel = 2,
}: {
  projects: Project[]
  headingLevel?: HeadingLevel
}) {
  const { featured, other } = partitionProjects(projects)
  const GroupHeading = (headingLevel === 2 ? 'h2' : 'h3') as 'h2' | 'h3'

  return (
    <div className="space-y-14">
      {featured.length ? (
        <ul className="reveal-stagger space-y-6">
          {featured.map((project) => (
            <FeaturedCard
              key={project.slug}
              project={project}
              headingLevel={headingLevel}
            />
          ))}
        </ul>
      ) : null}

      {other.length ? (
        <section>
          <GroupHeading className="font-geist_mono text-xs tracking-widest text-gray-500">
            <span aria-hidden="true">&gt;_</span>also built
          </GroupHeading>
          <ul className="mt-4">
            {other.map((project) => (
              <CompactRow
                key={project.slug}
                project={project}
                headingLevel={headingLevel}
              />
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  )
}
