import { ImageResponse } from 'next/og'
import { profile } from '@/content'
import { OG_CONTENT_TYPE, OG_SIZE, OgCard, ogFonts } from '@/lib/seo/og'

export const alt = `Selected work by ${profile.name}`
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="selected work"
        title="Things I have shipped"
        subtitle="Production software, including a property platform serving 500+ agents on iOS, Android and web."
      />
    ),
    { ...size, fonts: ogFonts() }
  )
}
