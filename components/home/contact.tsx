import { ArrowRight } from 'lucide-react'
import { availability, on, orList, profile, socials } from '@/content'
import { socialIcons } from '@/components/icons'
import { CopyEmail } from '@/components/ui/copy-email'
import { Button } from '@/components/ui/button'
import { LinkButton } from '@/components/ui/link-button'
import { Reveal } from '@/components/ui/reveal'

export function Contact() {
  const links = socials
    .filter(on('home'))
    .filter((s) => s.id !== 'email' && s.id !== 'whatsapp')
  const whatsapp = socials.find((s) => s.id === 'whatsapp')

  return (
    <Reveal
      as="section"
      aria-labelledby="contact-heading"
      className="border-t border-[#1a1a1a] bg-[#070707] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className="font-geist_mono text-xs tracking-widest text-[#55f89f]">
          &gt;_contact
        </p>
        <h2
          id="contact-heading"
          className="mt-2 text-2xl font-light text-gray-100 sm:text-3xl"
        >
          {availability.status === 'not-looking'
            ? 'Say hello'
            : 'Hiring? Let us talk.'}
        </h2>

        <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-400">
          {availability.headline}: {orList(availability.employmentTypes)},{' '}
          {orList(availability.workArrangement)}, based in{' '}
          {profile.location.city} on {availability.timezone.label}
          {availability.engagement.openToRelocation
            ? ' and open to relocation'
            : ''}
          . {availability.engagement.note}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button variant="secondary" asChild isExternal>
            <a href={`mailto:${profile.email}`}>
              <span className="font-geist_mono tracking-tighter">
                {profile.email}
              </span>
              <ArrowRight aria-hidden="true" />
            </a>
          </Button>
          {whatsapp ? (
            <Button variant="secondary" asChild isExternal>
              <a href={whatsapp.href} target="_blank" rel="noopener noreferrer">
                <span className="font-geist_mono tracking-tighter">
                  {whatsapp.handle ?? whatsapp.label}
                </span>
                <ArrowRight aria-hidden="true" />
              </a>
            </Button>
          ) : null}
          <CopyEmail email={profile.email} />
        </div>

        <ul className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
          {links.map((social) => {
            const Icon = socialIcons[social.icon]
            return (
              <li key={social.id}>
                <LinkButton
                  variant="unstyled_link_right"
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
                    <span className="font-geist_mono tracking-tighter">
                      {social.handle ?? social.label}
                    </span>
                  </a>
                </LinkButton>
              </li>
            )
          })}
        </ul>
      </div>
    </Reveal>
  )
}
