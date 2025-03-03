import { Metadata } from 'next'
import Header from '@/components/header-component'
import AboutCard from '@/components/about-card'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn more about Andre Chandra Putra - a passionate software engineer with expertise in web development, cloud technologies, and building innovative solutions.',
  openGraph: {
    title: 'About Andre Chandra Putra',
    description:
      'Learn more about Andre Chandra Putra - a passionate software engineer with expertise in web development, cloud technologies, and building innovative solutions.',
    type: 'profile',
    images: [
      {
        url: '/open-graph/about-og.png',
        width: 1200,
        height: 630,
        alt: 'Andre Chandra Putra - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Andre Chandra Putra',
    description:
      'Learn more about Andre Chandra Putra - a passionate software engineer',
    images: ['/open-graph/about-og.png'],
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-grid">
      <Header
        title="About"
        title2="Me"
        description="A brief description of me."
        backgroundVariant="about"
      />
      <section
        className="container mx-auto px-4 sm:px-6 lg:px-16 py-8 sm:py-12 lg:py-16 max-w-7xl"
        aria-label="About Andre Chandra Putra"
      >
        <div className="space-y-8 sm:space-y-12">
          <AboutCard />
        </div>
      </section>
    </main>
  )
}
