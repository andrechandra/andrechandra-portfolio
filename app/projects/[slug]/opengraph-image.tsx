import { ImageResponse } from 'next/og'
import { projects } from '@/constants/projects'
import { OG_CONTENT_TYPE, OG_SIZE, OgCard, ogFonts } from '@/lib/seo/og'

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export function generateStaticParams() {
  return projects
    .filter((project) => Boolean(project.slug))
    .map((project) => ({ slug: project.slug as string }))
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((entry) => entry.slug === slug)

  return new ImageResponse(
    (
      <OgCard
        eyebrow="case study"
        title={project?.title ?? 'Case study'}
        subtitle={project?.stack?.join(' · ')}
      />
    ),
    { ...size, fonts: ogFonts() }
  )
}
