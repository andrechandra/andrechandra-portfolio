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
  // Phone number withheld for privacy. Re-enable to expose WhatsApp contact
  // on the site, the resume page and the PDF.
  // {
  //   id: 'whatsapp',
  //   label: 'WhatsApp',
  //   href: 'https://wa.me/62XXXXXXXXXXX',
  //   icon: 'whatsapp',
  //   handle: '+62 XXX-XXXX-XXXX',
  // },
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
