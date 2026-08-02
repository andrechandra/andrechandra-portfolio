import Link from 'next/link'
import { on, profile, socials } from '@/content'
import { socialIcons } from '@/components/icons'
import { footerLinks, nav } from '@/content/site'
import { LinkButton } from '@/components/ui/link-button'
import { Separator } from '@/components/ui/separator'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black print:hidden">
      <div className="relative flex w-full items-center justify-center">
        <div className="absolute left-0 h-px w-1/4 bg-gradient-to-r from-transparent to-[#2c2c2c]" />
        <Separator className="w-1/2 bg-[#2c2c2c]" />
        <div className="absolute right-0 h-px w-1/4 bg-gradient-to-l from-transparent to-[#2c2c2c]" />
      </div>

      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-geist_mono text-sm tracking-tighter text-gray-400">
            <span className="text-[#55f89f]">&gt;_</span>
            {profile.name}
          </p>
          <p className="font-geist_mono mt-1 text-xs tracking-tighter text-gray-600">
            © {year} · Built with Next.js · {profile.location.city},{' '}
            {profile.location.country}
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {nav
                .filter((item) => item.href !== '/')
                .map((item) => (
                  <li key={item.href}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <LinkButton
                          variant="unstyled_link_right"
                          size="small"
                          asChild
                          className="text-gray-500 hover:text-white"
                        >
                          <Link href={item.href}>
                            <span className="font-geist_mono text-xs tracking-tighter">
                              {item.label}
                            </span>
                          </Link>
                        </LinkButton>
                      </TooltipTrigger>
                      <TooltipContent>{item.tooltip}</TooltipContent>
                    </Tooltip>
                  </li>
                ))}

              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <LinkButton
                        variant="unstyled_link_right"
                        size="small"
                        asChild
                        className="cursor-[var(--external-cursor)] text-gray-500 hover:text-white"
                      >
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="font-geist_mono text-xs tracking-tighter">
                            {item.label}
                          </span>
                        </a>
                      </LinkButton>
                    </TooltipTrigger>
                    <TooltipContent>{item.tooltip}</TooltipContent>
                  </Tooltip>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex items-center gap-4">
            {socials.filter(on('home')).map((social) => {
              const Icon = socialIcons[social.icon]
              const external = social.id !== 'email'
              return (
                <li key={social.id}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <LinkButton
                        variant="unstyled_link"
                        size="icon"
                        asChild
                        isExternal
                        className="text-gray-600 hover:text-white"
                      >
                        <a
                          href={social.href}
                          target={external ? '_blank' : undefined}
                          rel={external ? 'noopener noreferrer' : undefined}
                        >
                          <Icon className="size-4" />
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
          </ul>
        </div>
      </div>
    </footer>
  )
}
