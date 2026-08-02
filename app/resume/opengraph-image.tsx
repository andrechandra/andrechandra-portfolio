import { ImageResponse } from 'next/og'
import { availability, orList, profile } from '@/content'
import { OG_CONTENT_TYPE, OG_SIZE, OgCard, ogFonts } from '@/lib/seo/og'

export const alt = `Resume - ${profile.name}`
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="resume"
        title={profile.title}
        subtitle={`${orList(availability.employmentTypes)} · ${orList(availability.workArrangement)} · ${profile.location.city} (${availability.timezone.label})`}
      />
    ),
    { ...size, fonts: ogFonts() }
  )
}
