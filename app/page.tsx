import type { Metadata } from 'next'
import { Hero } from '@/components/home/hero'
import { ProofStrip } from '@/components/home/proof-strip'
import { SelectedWork } from '@/components/home/selected-work'
import { ExperienceTimeline } from '@/components/home/experience-timeline'
import { Skills } from '@/components/home/skills'
import { Playground } from '@/components/home/playground'
import { Contact } from '@/components/home/contact'
import { JsonLd } from '@/components/seo/json-ld'
import {
  buildPerson,
  buildProfilePage,
  buildWebSite,
  graph,
} from '@/lib/seo/json-ld'

// The only images here are project thumbnails, so the home result stays text only.
export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'none',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
}

export default function Home() {
  return (
    <>
      <JsonLd
        data={graph(buildPerson(), buildWebSite(), buildProfilePage('/'))}
      />
      <Hero />
      <ProofStrip />
      <SelectedWork />
      <ExperienceTimeline />
      <Skills />
      <Playground />
      <Contact />
    </>
  )
}
