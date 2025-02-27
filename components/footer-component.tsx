import Link from 'next/link'
import { LinkButton } from '@/components/ui/link-button'
import { Separator } from './ui/separator'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { SocialLink } from './social-links'
import { socialLinks } from '@/constants/socials'

export const Footer = () => {
  return (
    <footer className="py-6 text-center text-xs sm:text-sm text-muted-foreground space-y-4">
      <div className="relative flex items-center justify-center w-full">
        <div className="absolute left-0 w-1/4 h-[1px] bg-gradient-to-r from-transparent to-[#2c2c2c]"></div>
        <Separator className="w-1/2 bg-[#2c2c2c]" />
        <div className="absolute right-0 w-1/4 h-[1px] bg-gradient-to-l from-transparent to-[#2c2c2c]"></div>
      </div>
      <TooltipProvider>
        <div className="font-geist_mono space-x-4">
          {/* Starter Template */}
          <Tooltip>
            <TooltipTrigger asChild>
              <LinkButton
                variant="unstyled_link_right"
                asChild
                className="p-0 h-auto cursor-[var(--external-cursor)]"
              >
                <Link
                  href="https://github.com/andrechandra/next-tailwind-starter"
                  target="_blank"
                >
                  Starter Template
                </Link>
              </LinkButton>
            </TooltipTrigger>
            <TooltipContent>View starter template on GitHub</TooltipContent>
          </Tooltip>

          {/* Source Code */}
          <Tooltip>
            <TooltipTrigger asChild>
              <LinkButton
                variant="unstyled_link_right"
                asChild
                className="p-0 h-auto cursor-[var(--external-cursor)]"
              >
                <Link
                  href="https://github.com/andrechandra/andrechandra-portfolio"
                  target="_blank"
                >
                  Source Code
                </Link>
              </LinkButton>
            </TooltipTrigger>
            <TooltipContent>View full source code</TooltipContent>
          </Tooltip>

          {/* Design */}
          <Tooltip>
            <TooltipTrigger asChild>
              <LinkButton
                variant="unstyled_link_right"
                asChild
                className="p-0 h-auto"
              >
                <Link href="/design">Design</Link>
              </LinkButton>
            </TooltipTrigger>
            <TooltipContent>View design system</TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
      <div className="font-geist_mono">
        <p className="text-sm text-gray-400 mb-2">Reach me out</p>
        <div className="flex justify-center gap-4">
          {socialLinks.map((link) => (
            <SocialLink key={link.name} href={link.href}>
              <link.icon size={24} />
            </SocialLink>
          ))}
        </div>
      </div>
      <div className="font-geist_mono">
        <b>
          © {new Date().getFullYear()}{' '}
          <LinkButton
            variant="underline_link_right"
            asChild
            className="p-0 h-auto cursor-[var(--external-cursor)]"
          >
            <Link href="https://github.com/andrechandra" target="_blank">
              Andre Chandra
            </Link>
          </LinkButton>
          . All rights reserved. <br />
        </b>
      </div>
    </footer>
  )
}
