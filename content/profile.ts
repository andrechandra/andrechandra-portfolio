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
    'I build and ship production SaaS with Next.js, TypeScript and PostgreSQL. Full-time at Star Generation, and building BrokerID, a property platform used by 500+ agents across Indonesia.',
  bio: [
    'I am a fullstack engineer based near Jakarta. I work across the whole stack, from PostgreSQL schema design through to the interface people actually touch, and I care most about the last mile where a product either feels considered or does not.',
    'Most of my career has been in application development. I spent close to two years at Panin Dai-ichi Life shipping and maintaining mobile and Spring Boot applications inside a regulated insurance environment, which is where I learned what running software in production actually costs. Today I lead the architecture and delivery of the v2 dashboard at Star Generation.',
    'Alongside that I co-founded BrokerID with a friend I met playing badminton. It started as a co-broking tool for property agents, did not earn the daily usage we hoped for, and we rebuilt it into a full agent CRM and workflow hub. It now serves 500+ agents and is live on both the App Store and Google Play.',
    'I also build my own tools. Typra began as a journaling app with typewriter sounds and became the productivity system I use every day to hold a full-time role and a startup at the same time. Building it taught me something I keep coming back to: when a process is not working, the better move is usually to build a better system rather than to work harder inside a broken one.',
    'I work remotely with teams outside Indonesia and I am comfortable operating async-first. If you are hiring, the fastest way to reach me is email.',
  ],
  photo: '/profile/andre-chandra.webp',
} satisfies Profile
