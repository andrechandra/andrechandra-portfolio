import { Metadata } from 'next'
import Header from '@/components/header-component'
import ResumeSection from '@/components/sections/resume-section'

export const metadata: Metadata = {
  title: 'Experiences',
  description:
    "Explore Andre Chandra Putra's professional experience, education, and skills. View my career journey and achievements in software engineering.",
  openGraph: {
    title: 'Resume',
    description: 'Professional experience and skills in software engineering',
    images: [
      {
        url: '/images/resume-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Andre Chandra Putra - Resume',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Andre Chandra Putra's Resume",
    description: 'Professional experience and skills in software engineering',
    images: ['/images/resume-og.jpg'],
  },
}

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-grid">
      <Header
        title="My"
        title2="Experiences"
        description="My professional career, experiences, and skills."
        backgroundVariant="resume"
      />
      <ResumeSection />
    </main>
  )
}
