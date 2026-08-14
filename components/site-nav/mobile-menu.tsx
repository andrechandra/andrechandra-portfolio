'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { nav } from '@/content/site'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { LinkButton } from '@/components/ui/link-button'
import { Reveal } from '@/components/ui/reveal'
import { Separator } from '@/components/ui/separator'
import { MenuToggleIcon } from './menu-toggle-icon'

export function MobileMenu() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [open, setOpen] = useState(false)
  const [closing, setClosing] = useState(false)
  const pathname = usePathname()

  function show() {
    setClosing(false)
    dialogRef.current?.showModal()
    setOpen(true)
  }

  /** Plays the exit animation first; the panel's animationend does the close. */
  function hide() {
    if (!dialogRef.current?.open) return
    setClosing(true)
    // Safety net so the drawer can never get stuck open if animationend
    // never arrives (animations disabled at the OS or browser level).
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    closeTimeoutRef.current = setTimeout(() => dialogRef.current?.close(), 400)
  }

  useEffect(() => {
    if (dialogRef.current?.open) setClosing(true)
  }, [pathname])

  return (
    <div className="md:hidden">
      <Reveal immediate delay={140}>
        <Button
          variant="primary"
          size="icon"
          onClick={show}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <MenuToggleIcon open={open && !closing} />
          <span className="sr-only">Open menu</span>
        </Button>
      </Reveal>

      <dialog
        id="mobile-menu"
        ref={dialogRef}
        onClose={() => {
          if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
          setOpen(false)
          setClosing(false)
        }}
        onCancel={(event) => {
          // Let Escape run the exit animation instead of closing instantly.
          event.preventDefault()
          hide()
        }}
        onClick={(event) => {
          if (event.target === dialogRef.current) hide()
        }}
        className="m-0 h-full max-h-none w-full max-w-none bg-transparent p-0 backdrop:bg-black/80 backdrop:backdrop-blur-sm"
      >
        {/* A closed dialog is display:none, so these entrance animations
            restart every time the drawer is opened. */}
        <div
          className={cn(
            'flex min-h-full flex-col bg-[#0a0a0a] px-6 pb-5',
            closing ? 'drawer-out' : 'drawer-in'
          )}
          onAnimationEnd={(event) => {
            if (event.target === event.currentTarget && closing) {
              dialogRef.current?.close()
            }
          }}
        >
          {/* Mirrors the nav bar's h-14/px-4 box so the toggle sits exactly
              where the burger was and the morph reads as one continuous icon. */}
          <div className="-mx-6 flex h-14 shrink-0 items-center justify-between px-4">
            <span className="font-geist_mono text-sm tracking-tighter text-[#55f89f]">
              &gt;_
            </span>
            <Button variant="primary" size="icon" onClick={hide}>
              <MenuToggleIcon open={!closing} />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>

          <Separator className="-mx-6 w-auto bg-[#1f1f1f]" />

          <nav aria-label="Mobile" className="mt-8">
            <ul className="reveal-load-stagger space-y-2">
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
                          <span aria-hidden="true" className="text-gray-700">
                            &gt;_
                          </span>
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
