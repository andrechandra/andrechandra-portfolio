import { ImageResponse } from 'next/og'
import { profile } from '@/content'
import { OG_CONTENT_TYPE, OG_SIZE, OgCard, ogFonts } from '@/lib/seo/og'

export const alt = `About ${profile.name}`
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="about"
        title={profile.name}
        subtitle={profile.positioning}
      />
    ),
    { ...size, fonts: ogFonts() }
  )
}
