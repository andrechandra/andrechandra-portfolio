import { ImageResponse } from 'next/og'
import { profile } from '@/content'
import { OG_CONTENT_TYPE, OG_SIZE, OgCard, ogFonts } from '@/lib/seo/og'

export const alt = `${profile.name} - ${profile.title}`
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="hi, my name is"
        title={profile.name}
        subtitle={profile.title}
      />
    ),
    { ...size, fonts: ogFonts() }
  )
}
