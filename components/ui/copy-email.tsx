'use client'

import { useEffect, useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timer)
  }, [copied])

  return (
    <Button
      variant="primary"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email)
          setCopied(true)
        } catch {
        }
      }}
    >
      {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
      <span className="font-geist_mono tracking-tighter">
        {copied ? 'Copied' : 'Copy email'}
      </span>
      <span aria-live="polite" className="sr-only">
        {copied ? `${email} copied to clipboard` : ''}
      </span>
    </Button>
  )
}
