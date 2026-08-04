import type { Profile } from './schema'

export const profile = {
  name: 'Andre Chandra Putra',
  shortName: 'Andre Chandra',
  alternateName: 'Acepe',
  title: 'Fullstack Software Engineer',
  email: 'andrechandra.work@gmail.com',
  location: {
    city: 'Tangerang',
    region: 'Banten',
    country: 'Indonesia',
    countryCode: 'ID',
  },
  positioning:
    'I build and ship production SaaS with Next.js, TypeScript and PostgreSQL. Project Lead Developer at Star Generation, and building BrokerID, a property platform used by 500+ agents across Indonesia.',
  bio: [
    'I am a fullstack engineer based near Jakarta. I work across the whole stack, from PostgreSQL schema design through to the interface people actually touch, and I care most about the last mile where a product either feels considered or does not.',
    'Most of my career has been in application development. I spent close to two years at Panin Dai-ichi Life shipping and maintaining mobile and Spring Boot applications inside a regulated insurance environment, which is where I learned what running software in production actually costs. Today I am Project Lead Developer at Star Generation, where I took the v2 platform from planning through build and testing to launch.',
    'Alongside that I co-founded BrokerID with a friend I met playing badminton. It started as a co-broking tool for property agents, did not earn the daily usage we hoped for, and we rebuilt it into a full agent CRM and workflow hub. It now serves 500+ agents and is live on both the App Store and Google Play.',
    'I am currently open to work. I have worked remotely with teams outside Indonesia and am comfortable operating async-first, and I am equally open to hybrid or on-site roles, including relocating for the right one. If you are hiring, the fastest way to reach me is email or WhatsApp.',
  ],
  photo: '/profile/andre-chandra.webp',
} satisfies Profile
