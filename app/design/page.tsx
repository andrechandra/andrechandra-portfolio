import { Metadata } from 'next'
import Header from '@/components/header-component'
import DesignSection from '@/components/sections/design-section'

export const metadata: Metadata = {
  title: 'Design',
  description: 'All of the color palettes and fonts used in this website.',
  openGraph: {
    title: 'Design',
    description: 'Professional experience and skills in software engineering',
    images: [
      {
        url: '/images/resume-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Andre Chandra Putra - Design',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Andre Chandra Putra's Design",
    description: 'Professional experience and skills in software engineering',
    images: ['/images/resume-og.jpg'],
  },
}

export default function DesignPage() {
  return (
    <main className="min-h-screen bg-grid">
      <Header
        title="Website's"
        title2="Design"
        description="All of the color palettes and fonts used in this website."
        backgroundVariant="resume"
      />
      <DesignSection />
    </main>
  )
}
