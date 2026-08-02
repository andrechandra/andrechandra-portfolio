import Link from 'next/link'
import type { Metadata } from 'next'
import { LinkButton } from '@/components/ui/link-button'

export const metadata: Metadata = {
  title: 'Page not found',
  description: 'That page does not exist.',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <main className="bg-grid flex min-h-[70vh] items-center justify-center px-4 py-24">
      <div className="max-w-lg text-center">
        <p className="font-geist_mono text-sm tracking-widest text-[#55f89f]">
          &gt;_404
        </p>
        <h1 className="mt-4 text-3xl font-light text-gray-200 sm:text-4xl">
          This page does not exist
        </h1>
        <p className="font-geist_mono mt-4 text-sm tracking-tighter text-gray-400">
          The link may be outdated, or the page has moved.
        </p>
        <div className="font-geist_mono mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm tracking-tighter">
          <LinkButton variant="underline_link_right" asChild>
            <Link href="/">
              <span className="font-geist_mono tracking-tighter">Go home</span>
            </Link>
          </LinkButton>
          <LinkButton
            variant="unstyled_link_right"
            asChild
            className="text-gray-400"
          >
            <Link href="/projects">
              <span className="font-geist_mono tracking-tighter">Selected work</span>
            </Link>
          </LinkButton>
          <LinkButton
            variant="unstyled_link_right"
            asChild
            className="text-gray-400"
          >
            <Link href="/resume">
              <span className="font-geist_mono tracking-tighter">Resume</span>
            </Link>
          </LinkButton>
        </div>
      </div>
    </main>
  )
}
