import Link from 'next/link'
import { profile } from '@/content'
import { RESUME_PDF_PATH } from '@/lib/resume/constants'
import { Button } from '@/components/ui/button'
import { LinkButton } from '@/components/ui/link-button'
import { Reveal } from '@/components/ui/reveal'
import { NavLinks } from './nav-links'
import { MobileMenu } from './mobile-menu'

export function SiteNav() {
  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-50 border-b border-[#1a1a1a] bg-black/80 backdrop-blur-md print:hidden"
    >
      <div className="reveal-nav mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Reveal immediate>
          <LinkButton variant="unstyled_link" asChild>
            <Link href="/">
              <span className="font-geist_mono tracking-tighter">
                <span className="text-[#55f89f]">&gt;_</span>
                {profile.shortName.toLowerCase().replace(' ', '')}
              </span>
            </Link>
          </LinkButton>
        </Reveal>

        <div className="flex items-center gap-3">
          <NavLinks />
          <Reveal immediate delay={280} className="hidden sm:block">
            <Button variant="primary" size="small" asChild isExternal>
              <a
                href={RESUME_PDF_PATH}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-geist_mono tracking-tighter">
                  resume.pdf
                </span>
              </a>
            </Button>
          </Reveal>
          <MobileMenu />
        </div>
      </div>
    </nav>
  )
}
