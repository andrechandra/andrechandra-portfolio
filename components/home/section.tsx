import type { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import { LinkButton } from '@/components/ui/link-button'

export function HomeSection({
  id,
  eyebrow,
  title,
  action,
  children,
}: {
  id: string
  eyebrow: string
  title: string
  action?: { href: string; label: string }
  children: ReactNode
}) {
  return (
    <Reveal as="section" aria-labelledby={`${id}-heading`} className="py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-geist_mono text-xs tracking-widest text-[#55f89f]">
              &gt;_{eyebrow}
            </p>
            <h2
              id={`${id}-heading`}
              className="mt-2 text-2xl font-light text-gray-100 sm:text-3xl"
            >
              {title}
            </h2>
          </div>
          {action ? (
            <LinkButton
              asChild
              variant="unstyled_link_right"
              className="font-geist_mono text-sm tracking-tighter"
            >
              <Link href={action.href} className="group flex items-center">
                {action.label}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </LinkButton>
          ) : null}
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </Reveal>
  )
}
