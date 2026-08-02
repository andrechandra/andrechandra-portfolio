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
    id: 'whatsapp',
    label: 'WhatsApp',
    href: 'https://wa.me/6287819337088',
    icon: 'whatsapp',
    handle: '+62 878-1933-7088',
  },
  {
    id: 'website',
    label: 'Website',
    href: 'https://andrechandra.dev',
    icon: 'website',
    handle: 'andrechandra.dev',
    surfaces: ['resume', 'pdf'],
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
    id: 'instagram',
    label: 'Instagram',
    href: 'https://instagram.com/andrechandraap',
    icon: 'instagram',
    handle: '@andrechandraap',
    surfaces: ['home', 'resume'],
  },
] satisfies Social[]
