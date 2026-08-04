import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { availability, on, orList, profile, skills, socials } from '@/content'
import { socialIcons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { LinkButton } from '@/components/ui/link-button'
import { Badge } from '@/components/ui/badge'
import { Reveal } from '@/components/ui/reveal'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { JsonLd } from '@/components/seo/json-ld'
import {
  buildPerson,
  buildProfilePage,
  buildWebSite,
  graph,
} from '@/lib/seo/json-ld'

export const metadata: Metadata = {
  title: 'About',
  description: `About ${profile.name}, ${profile.title.toLowerCase()} based in ${profile.location.city}, ${profile.location.country}. ${profile.positioning}`,
  alternates: { canonical: '/about' },
  openGraph: {
    type: 'profile',
    title: `About | ${profile.name}`,
    description: profile.positioning,
  },
}

export default function AboutPage() {
  const links = socials.filter(on('home')).filter((s) => s.id !== 'email')

  return (
    <main className="bg-grid">
      <JsonLd
        data={graph(buildPerson(), buildWebSite(), buildProfilePage('/about'))}
      />
      <div className="mx-auto max-w-3xl px-4 pt-16 pb-20 sm:px-6 sm:pt-24">
        <Reveal immediate>
          <p className="font-geist_mono text-xs tracking-widest text-[#55f89f]">
            &gt;_about
          </p>
          <h1 className="mt-4 text-3xl font-light tracking-tight text-gray-100 sm:text-4xl">
            {profile.name}
          </h1>
          <p className="font-geist_mono mt-2 text-base tracking-tighter text-gray-400">
            {profile.title} · {profile.location.city},{' '}
            {profile.location.country}
          </p>
        </Reveal>

        <Reveal
          immediate
          delay={120}
          className="mt-10 sm:float-right sm:mb-6 sm:ml-8 sm:w-56"
        >
          <Image
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            width={448}
            height={448}
            sizes="(min-width: 640px) 14rem, 100vw"
            className="w-full rounded-xl border border-[#1f1f1f] object-cover"
          />
        </Reveal>

        <Reveal immediate delay={200} className="mt-8 space-y-5">
          {profile.bio.map((paragraph, index) => (
            <p key={index} className="text-base leading-relaxed text-gray-400">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <div className="clear-both" />

        <Reveal as="section" aria-labelledby="about-stack" className="mt-14">
          <h2
            id="about-stack"
            className="font-geist_mono border-b border-[#2c2c2c] pb-2 text-xs tracking-widest text-[#55f89f] uppercase"
          >
            Stack
          </h2>
          <dl className="mt-6 space-y-4">
            {skills.map((group) => (
              <div key={group.id} className="sm:flex sm:gap-4">
                <dt className="font-geist_mono w-36 shrink-0 text-xs tracking-tighter text-gray-600">
                  {group.label}
                </dt>
                <dd>
                  <ul className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <li key={item}>
                        <Badge
                          variant="outline"
                          className="border-[#1f1f1f] bg-[#0c0c0c] font-normal text-gray-300"
                        >
                          {item}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal
          as="section"
          aria-labelledby="about-contact"
          className="mt-14 rounded-xl border border-[#2c2c2c] bg-[#0c0c0c] p-6"
        >
          <h2 id="about-contact" className="text-lg font-light text-gray-100">
            {availability.headline}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-400">
            {orList(availability.employmentTypes)} ·{' '}
            {orList(availability.workArrangement)} ·{' '}
            {availability.timezone.label} · {availability.timezone.overlapNote}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <Button variant="secondary" asChild isExternal>
              <a href={`mailto:${profile.email}`}>
                <span className="font-geist_mono tracking-tighter">
                  Email me
                </span>
                <ArrowRight aria-hidden="true" />
              </a>
            </Button>
            <LinkButton
              variant="unstyled_link_right"
              asChild
              className="text-gray-400"
            >
              <Link href="/resume">
                <span className="font-geist_mono tracking-tighter">Resume</span>
              </Link>
            </LinkButton>
            <ul className="flex items-center gap-4">
              {links.map((social) => {
                const Icon = socialIcons[social.icon]
                return (
                  <li key={social.id}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <LinkButton
                          variant="unstyled_link"
                          size="icon"
                          asChild
                          className="text-gray-500 hover:text-white"
                          isExternal
                        >
                          <a
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Icon className="size-4" />
                            <span className="sr-only">{social.label}</span>
                          </a>
                        </LinkButton>
                      </TooltipTrigger>
                      <TooltipContent>
                        {social.handle ?? social.label}
                      </TooltipContent>
                    </Tooltip>
                  </li>
                )
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </main>
  )
}
