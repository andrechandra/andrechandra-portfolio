import '@/styles/globals.css'
import React from 'react'
import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Footer } from '@/components/footer-component'
import { SiteNav } from '@/components/site-nav'
import { TooltipProvider } from '@/components/ui/tooltip'
import { fonts } from '@/lib/fonts'
import { site } from '@/content/site'

const description =
  'Fullstack software engineer building production SaaS with Next.js, TypeScript and PostgreSQL. Based in Jakarta (GMT+7) and open to remote roles worldwide.'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.title} - Fullstack Software Engineer`,
    template: `%s | ${site.title}`,
  },
  description,
  keywords: [
    'fullstack software engineer',
    'remote software engineer',
    'Next.js developer',
    'React developer',
    'TypeScript',
    'PostgreSQL',
    'Supabase',
    'React Native',
    'Andre Chandra Putra',
  ],
  authors: [{ name: site.title, url: site.url }],
  creator: site.title,
  alternates: {
    canonical: './',
  },
  openGraph: {
    type: 'website',
    locale: site.locale,
    url: site.url,
    title: `${site.title} - Fullstack Software Engineer`,
    description,
    siteName: site.title,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.title} - Fullstack Software Engineer`,
    description,
  },
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

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang={site.lang} className={`dark ${fonts.join(' ')}`}>
      <body className="bg-black">
        <a
          href="#main"
          className="font-geist_mono sr-only rounded-md bg-[#55f89f] px-4 py-2 text-sm text-black focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100]"
        >
          Skip to content
        </a>
        <TooltipProvider delayDuration={150}>
          <SiteNav />
          <div className="flex min-h-screen flex-col">
            <main id="main" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </TooltipProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
