'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { nav } from '@/content/site'
import { LinkButton } from '@/components/ui/link-button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export function NavLinks() {
  const pathname = usePathname()

  return (
    <ul className="reveal-load-stagger hidden items-center gap-4 md:flex">
      {nav.map((item) => {
        const active =
          item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
        return (
          <li key={item.href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <LinkButton
                  variant="unstyled_link_right"
                  asChild
                  className={
                    active ? 'text-[#55f89f]' : 'text-gray-400 hover:text-white'
                  }
                >
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                  >
                    <span className="font-geist_mono tracking-tighter">
                      <span className="text-gray-700">&gt;_</span>
                      {item.label}
                    </span>
                  </Link>
                </LinkButton>
              </TooltipTrigger>
              <TooltipContent>{item.tooltip}</TooltipContent>
            </Tooltip>
          </li>
        )
      })}
    </ul>
  )
}
