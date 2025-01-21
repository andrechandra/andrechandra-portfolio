import '@/app/globals.css'
import React from 'react'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ThemeProvider } from '@/components/theme-provider'
import Footer from '@/components/footer-component'
import Navbar from '@/components/nav-bar'
import { Poppins, Roboto } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
})

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://andrechandra.vercel.app'),
  title: {
    default: 'Andre Chandra Putra',
    template: '%s | Andre Chandra Putra',
  },
  description:
    "Andre Chandra Putra's personal website - A software engineer passionate about building innovative solutions. Explore my projects, blog posts, and journey in tech.",
  keywords: [
    'software engineer',
    'frontend developer',
    'web development',
    'tech blog',
    'portfolio',
    'Andre Chandra Putra',
  ],
  authors: [{ name: 'Andre Chandra Putra' }],
  creator: 'Andre Chandra Putra',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://andrechandra.vercel.app',
    title: 'Andre Chandra Putra - Software Engineer',
    description:
      "Andre Chandra Putra's personal website - A software engineer passionate about building innovative solutions.",
    siteName: 'Andre Chandra Putra',
    images: [
      {
        url: '/open-graph/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Andre Chandra Putra - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andre Chandra Putra - Software Engineer',
    description:
      'Software engineer passionate about building innovative solutions',
    images: ['/images/og-image.png'],
  },
  icons: {
    icon: [{ url: '/images/logo.svg', type: 'image/svg+xml' }],
    shortcut: '/images/logo.svg',
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${roboto.variable}`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <header>
            <Navbar />
          </header>
          <div className="min-h-screen flex flex-col">
            <main className="flex-1" aria-label="Main content">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
