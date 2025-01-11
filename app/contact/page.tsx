import Header from '@/components/header'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-7xl">
        <div className="space-y-8 sm:space-y-12">
          <Header
            title="Contact"
            title2="Me"
            description="Contact me through these links"
            backgroundVariant="contact"
          />
        </div>
      </div>
    </main>
  )
}
