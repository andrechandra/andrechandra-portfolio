import fs from 'node:fs'
import path from 'node:path'
import type { ReactElement } from 'react'
import { availability, profile } from '@/content'

export const OG_SIZE = { width: 1200, height: 630 }
export const OG_CONTENT_TYPE = 'image/png'

function font(file: string) {
  return fs.readFileSync(
    path.join(process.cwd(), 'node_modules', '@fontsource', file)
  )
}

export function ogFonts() {
  return [
    {
      name: 'Geist',
      data: font('geist-sans/files/geist-sans-latin-400-normal.woff'),
      weight: 400 as const,
      style: 'normal' as const,
    },
    {
      name: 'Geist',
      data: font('geist-sans/files/geist-sans-latin-600-normal.woff'),
      weight: 600 as const,
      style: 'normal' as const,
    },
    {
      name: 'Geist Mono',
      data: font('geist-mono/files/geist-mono-latin-400-normal.woff'),
      weight: 400 as const,
      style: 'normal' as const,
    },
  ]
}

export function OgCard({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle?: string
}): ReactElement {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#0a0a0a',
        padding: '64px 72px',
        fontFamily: 'Geist',
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            fontFamily: 'Geist Mono',
            fontSize: 24,
            color: '#55f89f',
            letterSpacing: 2,
          }}
        >
          &gt;_{eyebrow}
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 28,
            fontSize: title.length > 34 ? 62 : 76,
            fontWeight: 600,
            color: '#f5f5f5',
            lineHeight: 1.1,
            letterSpacing: -2,
          }}
        >
          {title}
        </div>
        {subtitle ? (
          <div
            style={{
              display: 'flex',
              marginTop: 22,
              fontSize: 30,
              color: '#a3a3a3',
              lineHeight: 1.35,
              maxWidth: 940,
            }}
          >
            {subtitle}
          </div>
        ) : null}
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px solid #262626',
          paddingTop: 28,
          fontFamily: 'Geist Mono',
          fontSize: 24,
        }}
      >
        <div style={{ display: 'flex', color: '#d4d4d4' }}>{profile.name}</div>
        <div style={{ display: 'flex', alignItems: 'center', color: '#737373' }}>
          <div
            style={{
              display: 'flex',
              width: 12,
              height: 12,
              borderRadius: 6,
              backgroundColor: '#55f89f',
              marginRight: 12,
            }}
          />
          {availability.headline} · {availability.timezone.label}
        </div>
      </div>
    </div>
  )
}
