import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { projects } from '@/constants/projects'
import { markdownToHtml } from '@/lib/markdown'
import { Gallery } from '@/components/project/gallery'
import { profile } from '@/content'
import { Badge } from '@/components/ui/badge'
import { LinkButton } from '@/components/ui/link-button'
import { JsonLd } from '@/components/seo/json-ld'
import {
  buildBreadcrumbs,
  buildCaseStudy,
  buildPerson,
  buildWebSite,
  graph,
} from '@/lib/seo/json-ld'

type Props = {
  params: Promise<{ slug: string }>
}

/** Prerender the known slugs; anything else is a real 404 rather than a render. */
export const dynamicParams = false

export function generateStaticParams() {
  return projects
    .filter((project) => Boolean(project.slug))
    .map((project) => ({ slug: project.slug as string }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((entry) => entry.slug === slug)
  if (!project) notFound()

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: `${project.title} | ${profile.name}`,
      description: project.description,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | ${profile.name}`,
      description: project.description,
    },
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((entry) => entry.slug === slug)
  if (!project) notFound()

  const links = [
    project.href ? { label: 'Live site', href: project.href } : null,
    project.appStoreUrl ? { label: 'App Store', href: project.appStoreUrl } : null,
    project.playStoreUrl
      ? { label: 'Google Play', href: project.playStoreUrl }
      : null,
    project.repo ? { label: 'Source', href: project.repo } : null,
  ].filter((link): link is { label: string; href: string } => link !== null)

  return (
    <main className="bg-grid">
      <JsonLd
        data={graph(
          buildPerson(),
          buildWebSite(),
          buildCaseStudy({
            slug,
            title: project.title,
            description: project.description,
            image: project.thumbnail.src,
            stack: project.stack,
            href: project.href,
            appStoreUrl: project.appStoreUrl,
            playStoreUrl: project.playStoreUrl,
          }),
          buildBreadcrumbs([
            { name: 'Home', path: '/' },
            { name: 'Work', path: '/projects' },
            { name: project.title, path: `/projects/${slug}` },
          ])
        )}
      />
      <article className="mx-auto max-w-3xl px-4 pt-16 pb-20 sm:px-6 sm:pt-24">
        <LinkButton
          asChild
          variant="unstyled_link_left"
          size="small"
          className="font-geist_mono text-xs tracking-tighter"
        >
          <Link href="/projects" className="group flex items-center">
            <ArrowLeft
              className="size-3.5 transition-transform duration-300 group-hover:-translate-x-1"
              aria-hidden="true"
            />
            All work
          </Link>
        </LinkButton>

        <h1 className="mt-6 text-3xl font-light tracking-tight text-gray-100 sm:text-4xl">
          {project.title}
        </h1>

        <p className="mt-4 text-base leading-relaxed text-gray-400">
          {project.description}
        </p>

        {project.stack?.length ? (
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li key={tech}>
                <Badge
                  variant="outline"
                  className="border-[#1f1f1f] bg-[#0c0c0c] font-normal text-gray-400"
                >
                  {tech}
                </Badge>
              </li>
            ))}
          </ul>
        ) : null}

        {links.length ? (
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {links.map((link) => (
              <li key={link.label}>
                <LinkButton
                  variant="unstyled_link_right"
                  asChild
                  className="cursor-[var(--external-cursor)] text-[#55f89f]"
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <span className="font-geist_mono tracking-tighter">
                      {link.label}
                    </span>
                    <ExternalLink aria-hidden="true" />
                  </a>
                </LinkButton>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-xl border border-[#1f1f1f] bg-[#0d0d0d]">
          <Image
            src={project.thumbnail}
            alt={`${project.title} cover`}
            fill
            priority
            sizes="(min-width: 768px) 48rem, 92vw"
            placeholder="blur"
            className="object-cover"
          />
        </div>

        {project.sections?.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="mt-14 scroll-mt-20"
            aria-labelledby={`${section.id}-heading`}
          >
            <h2
              id={`${section.id}-heading`}
              className="text-xl font-light text-gray-100 sm:text-2xl"
            >
              {section.title}
            </h2>

            {section.content ? (
              <div
                className="prose-case mt-4"
                dangerouslySetInnerHTML={{
                  __html: markdownToHtml(section.content),
                }}
              />
            ) : null}

            {section.images?.length ? (
              <div className="mt-6">
                <Gallery
                  images={section.images}
                  layout={section.imageLayout ?? 'web'}
                  label={`${project.title} ${section.title}`}
                />
              </div>
            ) : null}
          </section>
        ))}

        <div className="mt-16 border-t border-[#1a1a1a] pt-8">
          <p className="font-geist_mono text-sm tracking-tighter text-gray-500">
            Want to talk about this work?{' '}
            <LinkButton
              variant="underline_link_right"
              asChild
              isExternal
              className="text-[#55f89f]"
            >
              <a href={`mailto:${profile.email}`}>Email me</a>
            </LinkButton>
            .
          </p>
        </div>
      </article>
    </main>
  )
}
