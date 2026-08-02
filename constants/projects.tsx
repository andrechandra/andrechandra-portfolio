// BCS-Serpong
import bcs1 from '@/public/projects/bcs-serpong/bcs-1.webp'
import bcs2 from '@/public/projects/bcs-serpong/bcs-2.webp'
import bcs3 from '@/public/projects/bcs-serpong/bcs-3.webp'
import bcs4 from '@/public/projects/bcs-serpong/bcs-4.webp'
import bcs5 from '@/public/projects/bcs-serpong/bcs-5.webp'
import bcs6 from '@/public/projects/bcs-serpong/bcs-6.webp'
import bcs7 from '@/public/projects/bcs-serpong/bcs-7.webp'
import bcs8 from '@/public/projects/bcs-serpong/bcs-8.webp'
import bcsThumbnailNew from '@/public/projects/bcs-serpong/bcs-thumbnail-new.webp'

// BrokerID
import brokerId1 from '@/public/projects/brokerid/brokerid-1.webp'
import brokerId2 from '@/public/projects/brokerid/brokerid-2.webp'
import brokerId3 from '@/public/projects/brokerid/brokerid-3.webp'
import brokerId4 from '@/public/projects/brokerid/brokerid-4.webp'
import brokerId5 from '@/public/projects/brokerid/brokerid-5.webp'
import brokerId6 from '@/public/projects/brokerid/brokerid-6.webp'
import brokerId7 from '@/public/projects/brokerid/brokerid-7.webp'
import brokerId8 from '@/public/projects/brokerid/brokerid-8.webp'
import brokerId9 from '@/public/projects/brokerid/brokerid-9.webp'
import brokerId10 from '@/public/projects/brokerid/brokerid-10.webp'
import brokerId11 from '@/public/projects/brokerid/brokerid-11.webp'
import brokerId12 from '@/public/projects/brokerid/brokerid-12.webp'

import brokerIv2d1 from '@/public/projects/brokerid/brokerid-v2-1.webp'
import brokerIv2d2 from '@/public/projects/brokerid/brokerid-v2-2.webp'
import brokerIdv23 from '@/public/projects/brokerid/brokerid-v2-3.webp'
import brokerIdv24 from '@/public/projects/brokerid/brokerid-v2-4.webp'
import brokerIdv25 from '@/public/projects/brokerid/brokerid-v2-5.webp'
import brokerIdv26 from '@/public/projects/brokerid/brokerid-v2-6.webp'
import brokerIdv27 from '@/public/projects/brokerid/brokerid-v2-7.webp'
import brokerIdv28 from '@/public/projects/brokerid/brokerid-v2-8.webp'
import brokerIdv29 from '@/public/projects/brokerid/brokerid-v2-9.webp'
import brokerIdv210 from '@/public/projects/brokerid/brokerid-v2-10.webp'
import brokerIdv211 from '@/public/projects/brokerid/brokerid-v2-11.webp'
import brokerIdv212 from '@/public/projects/brokerid/brokerid-v2-12.webp'
import brokerIdv213 from '@/public/projects/brokerid/brokerid-v2-13.webp'
import brokerIdv214 from '@/public/projects/brokerid/brokerid-v2-14.webp'
import brokerIdv215 from '@/public/projects/brokerid/brokerid-v2-15.webp'
import brokerIdv216 from '@/public/projects/brokerid/brokerid-v2-16.webp'
import brokerIdv217 from '@/public/projects/brokerid/brokerid-v2-17.webp'
import brokerIdv218 from '@/public/projects/brokerid/brokerid-v2-18.webp'
import brokerIdv219 from '@/public/projects/brokerid/brokerid-v2-19.webp'
import brokerIdv220 from '@/public/projects/brokerid/brokerid-v2-20.webp'
import brokerIdv221 from '@/public/projects/brokerid/brokerid-v2-21.webp'
import brokerIdv222 from '@/public/projects/brokerid/brokerid-v2-22.webp'
import brokerIdv223 from '@/public/projects/brokerid/brokerid-v2-23.webp'
import brokerIdv224 from '@/public/projects/brokerid/brokerid-v2-24.webp'
import brokerIdv225 from '@/public/projects/brokerid/brokerid-v2-25.webp'

import brokerIdThumbnailNew from '@/public/projects/brokerid/brokerid-thumbnail-new.webp'

import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    href: 'https://brokerid.app',
    repo: '',
    title: 'BrokerID',
    category: 'freelance',
    description: `BrokerID is an application designed to serve as a bridge and the primary platform for property agents in Indonesia, helping them fulfill all their needs in the real estate brokerage industry.`,
    thumbnail: brokerIdThumbnailNew,
    webImages: [brokerId1, brokerId2, brokerId3, brokerId4, brokerId5],
    mobileImages: [brokerId6, brokerId7, brokerId8, brokerId9, brokerId10, brokerId11, brokerId12],
    stack: ['Expo', 'Next.js', 'React Native', 'shadcn/ui', 'Supabase', 'Tailwind CSS'],
    slug: 'brokerid',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.andrechandra.brokerid&hl=id',
    appStoreUrl: 'https://apps.apple.com/id/app/brokerid/id6754389922',
    sections: [
      {
        id: 'the-beginning',
        title: 'The Beginning',
        content: `It all started when I was approached by a good friend of mine, [Alvin Chandra](https://www.instagram.com/_alvinchandra). We actually met through badminton, and somewhere along the way, I had already built a website for his property office, [Atlantis Realty](https://atlantisrealty.id).

One day, Alvin sat me down and started explaining a problem he'd been living with as a property agent. Co-broke groups were flooding his WhatsApp. Finding a listing to co-broke meant scrolling endlessly through WhatsApp groups, hoping you'd catch the right post at the right time. It was messy, inefficient, and frankly exhausting.

That's when it hit us. **Why not build an application specifically for co-broking?** A dedicated space where agents could see each other's listings, search by property type, filter by specifications, and find the right co-broke partner without the noise.`,
      },
      {
        id: 'version-1',
        title: 'Version 1 - The Co-Broking App',
        content: `We moved forward with the idea and built the first version: a focused co-broking platform. Agents could list their properties, browse other agents' listings, and filter by the specifications that mattered, location, price range, property type, and more.

It was clean, purposeful, and solved exactly the problem we set out to fix.`,
      },
      {
        id: 'version-1-mobile',
        title: 'Version 1 - Mobile',
        content: `A look at the original mobile app.`,
        images: [brokerId6, brokerId7, brokerId8, brokerId9, brokerId10, brokerId11, brokerId12],
        imageLayout: 'mobile',
      },
      {
        id: 'version-1-web',
        title: 'Version 1 - Web',
        content: `A look at the original web platform.`,
        images: [brokerId1, brokerId2, brokerId3, brokerId4, brokerId5],
        imageLayout: 'web',
      },
      {
        id: 'the-pivot',
        title: 'The Pivot',
        content: `But here's the thing, agents weren't really using it.

We had to step back and ask the harder question: not just *what problem does this solve*, but *why would an agent open this app every single day?* A co-broking tool alone wasn't enough of a reason.

That's when the vision shifted. We started thinking bigger.`,
      },
      {
        id: 'the-super-app',
        title: 'The Super App',
        content: `What if BrokerID became the **central hub of being a property agent** in Indonesia?

Not just co-broking, but everything an agent needs, all in one place:

- **CRM** - input and manage your clients, track what they're looking for, store their documents and preferences
- **Media management** - attach images, videos, and files directly to client records
- **Bank products** - browse current mortgage offerings and bank representative contacts
- **Primary developers** - access developer profiles, projects, and collateral in one tap
- **And more** - the platform keeps growing as new agent needs surface

The goal became clear: make agents so reliant on BrokerID that leaving it behind would mean leaving behind their entire workflow.`,
      },
      {
        id: 'where-we-are-now',
        title: 'Where We Are Now',
        content: `**Version 2 is now live.** It carries the full weight of that expanded vision. The CRM, the co-broking feed, the bank products, the developer directory, all of it.

It's been a long road from a badminton conversation to a full-blown property agent super app. We're proud of how far it's come, and we're even more excited about where it's going.

Here's hoping Version 2 sticks the landing.`,
      },
      {
        id: 'version-2-web',
        title: 'Version 2 - Web',
        content: `The web platform keeps the same familiar design language as Version 1, but grows well beyond co-broking. Agents now get a public **agent profile page**, a dedicated **listing page** for their own properties, a **primary listing page** for developer projects, and a **search page** to find and connect with other agents.`,
        images: [brokerIdv217, brokerIdv218, brokerIdv219, brokerIdv220, brokerIdv221, brokerIdv222, brokerIdv223, brokerIdv224, brokerIdv225],
        imageLayout: 'web',
      },
      {
        id: 'version-2-mobile',
        title: 'Version 2 - Mobile',
        content: `The mobile app received the largest overhaul. Alongside the refreshed co-broking feed, it now carries the full super-app experience, CRM, client and media management, bank products, and the primary developer directory, all in an agent's pocket.`,
        images: [brokerIv2d1, brokerIv2d2, brokerIdv23, brokerIdv24, brokerIdv25, brokerIdv26, brokerIdv27, brokerIdv28, brokerIdv29, brokerIdv210, brokerIdv211, brokerIdv212, brokerIdv213, brokerIdv214, brokerIdv215, brokerIdv216],
        imageLayout: 'mobile',
      },
      {
        id: 'tech-stack',
        title: 'Tech Stack',
        content: `- **React Native + Expo Go** - cross-platform mobile development for iOS and Android
- **Supabase** - authentication, PostgreSQL database, and real-time subscriptions
- **Next.js** - web frontend with server-side rendering and SEO optimization`,
      },
      {
        id: 'looking-ahead',
        title: 'Looking Ahead',
        content: `My hope is that BrokerID keeps growing far beyond what it is today. There is still so much room to expand, and I want to keep shipping updates that come straight from what agents actually ask for.

The agents are the heart of this platform, and as long as they keep telling us what they need, we will keep building it.`,
      },
    ],
  },
  {
    href: 'https://bcs-serpong.org',
    repo: '',
    title: 'GKKK BCS Serpong',
    category: 'freelance',
    description: `A dedicated website for GKKK BCS Serpong, showcasing our church's mission, values, and community activities.`,
    thumbnail: bcsThumbnailNew,
    images: [bcs1, bcs2, bcs3, bcs4, bcs5, bcs6, bcs7, bcs8],
    stack: ['Next.js', 'shadcn/ui', 'Tailwind CSS'],
    slug: 'bcs-serpong',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        content: `I created a website for my church, **GKKK BCS Serpong**, to provide a comprehensive online platform that represents our community, mission, and values. The website serves as a central hub for sharing our church's vision of spreading God's love and building a strong community grounded in faith.

It also provides visitors with information about our church activities, worship schedules, and opportunities to get involved.`,
      },
      {
        id: 'motivation',
        title: 'Motivation',
        content: `My motivation for building this website was to make it easier for people to connect with our church, learn about who we are, and understand how they can support our ministry.

It's a tool to share updates, encourage participation, and reflect the welcoming spirit of GKKK BCS Serpong, extending our reach to those who might be seeking a place to grow in their faith.`,
      },
      {
        id: 'screenshots',
        title: 'Screenshots',
        content: `A look at the pages and sections that make up the site.`,
        images: [bcs1, bcs2, bcs3, bcs4, bcs5, bcs6, bcs7, bcs8],
        imageLayout: 'web',
      },
    ],
  },
]
