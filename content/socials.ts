import type { Social } from './schema'
import { profile } from './profile'

export const socials = [
  {
    id: 'email',
    label: 'Email',
    href: `mailto:${profile.email}`,
    icon: 'email',
    handle: profile.email,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/andrechandraputra',
    icon: 'linkedin',
    handle: 'linkedin.com/in/andrechandraputra',
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/andrechandra',
    icon: 'github',
    handle: 'github.com/andrechandra',
  },
  {
    id: 'x',
    label: 'X',
    href: 'https://x.com/andrechandraap',
    icon: 'x',
    handle: '@andrechandraap',
    surfaces: ['home', 'resume'],
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://instagram.com/andrechandraap',
    icon: 'instagram',
    handle: '@andrechandraap',
    surfaces: ['home', 'resume'],
  },
] satisfies Social[]
