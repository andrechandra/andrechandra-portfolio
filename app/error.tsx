'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { LinkButton } from '@/components/ui/link-button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="bg-grid flex min-h-[70vh] items-center justify-center px-4 py-24">
      <div className="max-w-lg text-center">
        <p className="font-geist_mono text-sm tracking-widest text-[#55f89f]">
          &gt;_error
        </p>
        <h1 className="mt-4 text-3xl font-light text-gray-200 sm:text-4xl">
          Something went wrong
        </h1>
        <p className="font-geist_mono mt-4 text-sm tracking-tighter text-gray-400">
          An unexpected error occurred while rendering this page.
          {error.digest ? (
            <span className="mt-2 block text-xs text-gray-600">
              Reference: {error.digest}
            </span>
          ) : null}
        </p>
        <div className="font-geist_mono mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm tracking-tighter">
          <Button variant="primary" onClick={reset}>
            <span className="font-geist_mono tracking-tighter">Try again</span>
          </Button>
          <LinkButton variant="unstyled_link_right" asChild className="text-gray-400">
            <Link href="/">
              <span className="font-geist_mono tracking-tighter">Go home</span>
            </Link>
          </LinkButton>
        </div>
      </div>
    </main>
  )
}
