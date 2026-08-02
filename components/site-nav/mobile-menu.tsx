'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { nav } from '@/content/site'
import { Button } from '@/components/ui/button'
import { LinkButton } from '@/components/ui/link-button'
import { Separator } from '@/components/ui/separator'

export function MobileMenu() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  function show() {
    dialogRef.current?.showModal()
    setOpen(true)
  }

  function hide() {
    dialogRef.current?.close()
  }
  
  useEffect(() => {
    if (dialogRef.current?.open) dialogRef.current.close()
  }, [pathname])

  return (
    <div className="md:hidden">
      <Button
        variant="primary"
        size="icon"
        onClick={show}
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        <Menu aria-hidden="true" />
        <span className="sr-only">Open menu</span>
      </Button>

      <dialog
        id="mobile-menu"
        ref={dialogRef}
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === dialogRef.current) hide()
        }}
        className="m-0 h-full max-h-none w-full max-w-none bg-transparent p-0 backdrop:bg-black/80 backdrop:backdrop-blur-sm"
      >
        <div className="flex min-h-full flex-col bg-[#0a0a0a] px-6 py-5">
          <div className="flex items-center justify-between">
            <span className="font-geist_mono text-sm tracking-tighter text-[#55f89f]">
              &gt;_
            </span>
            <Button variant="primary" size="icon" onClick={hide}>
              <X aria-hidden="true" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>

          <Separator className="mt-5 bg-[#1f1f1f]" />

          <nav aria-label="Mobile" className="mt-8">
            <ul className="space-y-2">
              {nav.map((item) => {
                const active =
                  item.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(item.href)
                return (
                  <li key={item.href}>
                    <LinkButton
                      variant="unstyled_link_right"
                      size="large"
                      asChild
                      className={
                        active
                          ? 'text-[#55f89f]'
                          : 'text-gray-300 hover:text-white'
                      }
                    >
                      <Link
                        href={item.href}
                        onClick={hide}
                        aria-current={active ? 'page' : undefined}
                      >
                        <span className="font-geist_mono text-2xl tracking-tighter">
                          <span className="text-gray-700">&gt;_</span>
                          {item.label}
                        </span>
                      </Link>
                    </LinkButton>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </dialog>
    </div>
  )
}
