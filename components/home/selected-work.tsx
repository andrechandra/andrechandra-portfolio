import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/constants/projects'
import { Badge } from '@/components/ui/badge'
import { HomeSection } from './section'

export function SelectedWork() {
  return (
    <HomeSection
      id="work"
      eyebrow="selected work"
      title="Things I have shipped"
      action={{ href: '/projects', label: 'All work' }}
    >
      <ul className="grid gap-6 sm:grid-cols-2">
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
              <h3 className="text-lg font-medium text-gray-100">
                <Link
                  href={`/projects/${project.slug}`}
                  className="rounded-md focus-visible:ring-2 focus-visible:ring-[#55f89f] focus-visible:outline-none"
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  {project.title}
                </Link>
              </h3>

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
    </HomeSection>
  )
}
