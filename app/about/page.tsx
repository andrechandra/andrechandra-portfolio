import Header from '@/components/header-component'
import { Metadata } from 'next'
import AboutCard from '@/components/about-card'

export const metadata: Metadata = {
  title: 'About | Andre Chandra Putra',
  description: "Andre Chandra Putra's personal website",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header
        title="About"
        title2="Me"
        description="A brief description of me."
        backgroundVariant="about"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-32 py-8 sm:py-12 lg:py-16 max-w-7xl">
        <div className="space-y-8 sm:space-y-12">
          <AboutCard />
        </div>
      </div>
    </main>
  )
}
