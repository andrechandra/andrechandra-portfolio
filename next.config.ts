import { NextConfig } from 'next'
import {
  RESUME_PDF_DOWNLOAD_NAME,
  RESUME_PDF_PATH,
  RESUME_PDF_YEAR,
} from './lib/resume/constants'

const pastResumeYears = Array.from(
  { length: 6 },
  (_, i) => RESUME_PDF_YEAR - (i + 1)
)

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 85],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    remotePatterns: [],
  },
  async redirects() {
    return [
      { source: '/experiences', destination: '/resume', permanent: true },
      { source: '/experiences/:path*', destination: '/resume', permanent: true },
      { source: '/design', destination: '/', permanent: true },
      { source: '/projects/typra', destination: '/projects', permanent: true },
      { source: '/projects/cvatm', destination: '/projects', permanent: true },
      { source: '/cv', destination: RESUME_PDF_PATH, permanent: true },
      { source: '/resume.pdf', destination: RESUME_PDF_PATH, permanent: true },
      {
        source: '/andre-chandra-putra-resume.pdf',
        destination: RESUME_PDF_PATH,
        permanent: true,
      },
      // previous years' filenames keep working after the year rolls over
      ...pastResumeYears.map((year) => ({
        source: `/AndreChandraPutra_CV_${year}.pdf`,
        destination: RESUME_PDF_PATH,
        permanent: true,
      })),
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
      {
        source: RESUME_PDF_PATH,
        headers: [
          {
            key: 'Content-Disposition',
            value: `inline; filename="${RESUME_PDF_DOWNLOAD_NAME}"`,
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ]
  },
}

export default nextConfig
