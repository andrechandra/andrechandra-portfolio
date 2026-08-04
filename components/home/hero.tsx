import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { profile, socials, on } from '@/content'
import { socialIcons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { LinkButton } from '@/components/ui/link-button'
import { Reveal } from '@/components/ui/reveal'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { AvailabilityCard } from './availability-card'

export function Hero() {
  const links = socials.filter(on('home')).filter((s) => s.id !== 'email')

  return (
    <section className="bg-grid-hero" aria-labelledby="hero-heading">
      <div className="mx-auto grid max-w-5xl gap-10 px-4 pt-16 pb-14 sm:px-6 sm:pt-24 lg:grid-cols-[1.35fr_1fr] lg:items-start lg:gap-14 lg:pt-28 lg:pb-20">
        <div>
          <Reveal immediate>
            <p className="font-geist_mono text-xs tracking-widest text-[#55f89f] sm:text-sm">
              &gt;_hi, my name is
            </p>

            <h1
              id="hero-heading"
              className="mt-4 text-4xl font-light tracking-tight text-gray-100 sm:text-5xl"
            >
              {profile.name}
            </h1>

            <p className="font-geist_mono mt-3 text-lg tracking-tighter text-gray-300 sm:text-xl">
              {profile.title}
            </p>
          </Reveal>

          <Reveal immediate delay={120}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-400">
              {profile.positioning}
            </p>
          </Reveal>

          <Reveal
            immediate
            delay={240}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Button variant="secondary" asChild isExternal>
              <a href={`mailto:${profile.email}`}>
                <span className="font-geist_mono tracking-tighter">
                  Email me
                </span>
                <ArrowRight aria-hidden="true" />
              </a>
            </Button>

            <Button variant="primary" asChild>
              <Link href="/resume">
                <span className="font-geist_mono tracking-tighter">Resume</span>
              </Link>
            </Button>
          </Reveal>

          <Reveal
            immediate
            delay={320}
            as="ul"
            className="mt-7 flex items-center gap-5"
          >
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
                          <Icon className="size-5" />
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
          </Reveal>
        </div>

        <Reveal immediate delay={400} className="lg:pt-12">
          <AvailabilityCard />
        </Reveal>
      </div>
    </section>
  )
}
