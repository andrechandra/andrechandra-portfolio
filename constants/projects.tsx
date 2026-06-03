import { MiniProject } from '@/types/project'

// Anugerah Teknik Mandiri
import cvAtmThumbnail from '@/public/projects/cv-atm/cv-atm-thumbnail.png'
import cvAtm from '@/public/projects/cv-atm/cv-atm.png'
import cvAtm2 from '@/public/projects/cv-atm/cv-atm-2.png'
import cvAtmThumbnailNew from '@/public/projects/cv-atm/cv-atm-thumbnail-new.png'

// BCS-Serpong
import bcsThumbnail from '@/public/projects/bcs-serpong/bcs-thumbnail.png'
import bcs1 from '@/public/projects/bcs-serpong/bcs-1.png'
import bcs2 from '@/public/projects/bcs-serpong/bcs-2.png'
import bcs3 from '@/public/projects/bcs-serpong/bcs-3.png'
import bcs4 from '@/public/projects/bcs-serpong/bcs-4.png'
import bcs5 from '@/public/projects/bcs-serpong/bcs-5.png'
import bcs6 from '@/public/projects/bcs-serpong/bcs-6.png'
import bcs7 from '@/public/projects/bcs-serpong/bcs-7.png'
import bcs8 from '@/public/projects/bcs-serpong/bcs-8.png'
import bcsThumbnailNew from '@/public/projects/bcs-serpong/bcs-thumbnail-new.png'

// BrokerID
import brokerIdThumbnail from '@/public/projects/brokerid/brokerid-thumbnail.png'
import brokerId1 from '@/public/projects/brokerid/brokerid-1.png'
import brokerId2 from '@/public/projects/brokerid/brokerid-2.png'
import brokerId3 from '@/public/projects/brokerid/brokerid-3.png'
import brokerId4 from '@/public/projects/brokerid/brokerid-4.png'
import brokerId5 from '@/public/projects/brokerid/brokerid-5.png'
import brokerId6 from '@/public/projects/brokerid/brokerid-6.png'
import brokerId7 from '@/public/projects/brokerid/brokerid-7.png'
import brokerId8 from '@/public/projects/brokerid/brokerid-8.png'
import brokerId9 from '@/public/projects/brokerid/brokerid-9.png'
import brokerId10 from '@/public/projects/brokerid/brokerid-10.png'
import brokerId11 from '@/public/projects/brokerid/brokerid-11.png'
import brokerId12 from '@/public/projects/brokerid/brokerid-12.png'

import brokerIv2d1 from '@/public/projects/brokerid/brokerid-v2-1.png'
import brokerIv2d2 from '@/public/projects/brokerid/brokerid-v2-2.png'
import brokerIdv23 from '@/public/projects/brokerid/brokerid-v2-3.png'
import brokerIdv24 from '@/public/projects/brokerid/brokerid-v2-4.png'
import brokerIdv25 from '@/public/projects/brokerid/brokerid-v2-5.png'
import brokerIdv26 from '@/public/projects/brokerid/brokerid-v2-6.png'
import brokerIdv27 from '@/public/projects/brokerid/brokerid-v2-7.png'
import brokerIdv28 from '@/public/projects/brokerid/brokerid-v2-8.png'
import brokerIdv29 from '@/public/projects/brokerid/brokerid-v2-9.png'
import brokerIdv210 from '@/public/projects/brokerid/brokerid-v2-10.png'
import brokerIdv211 from '@/public/projects/brokerid/brokerid-v2-11.png'
import brokerIdv212 from '@/public/projects/brokerid/brokerid-v2-12.png'
import brokerIdv213 from '@/public/projects/brokerid/brokerid-v2-13.png'
import brokerIdv214 from '@/public/projects/brokerid/brokerid-v2-14.png'
import brokerIdv215 from '@/public/projects/brokerid/brokerid-v2-15.png'
import brokerIdv216 from '@/public/projects/brokerid/brokerid-v2-16.png'
import brokerIdv217 from '@/public/projects/brokerid/brokerid-v2-17.png'
import brokerIdv218 from '@/public/projects/brokerid/brokerid-v2-18.png'
import brokerIdv219 from '@/public/projects/brokerid/brokerid-v2-19.png'
import brokerIdv220 from '@/public/projects/brokerid/brokerid-v2-20.png'
import brokerIdv221 from '@/public/projects/brokerid/brokerid-v2-21.png'
import brokerIdv222 from '@/public/projects/brokerid/brokerid-v2-22.png'
import brokerIdv223 from '@/public/projects/brokerid/brokerid-v2-23.png'
import brokerIdv224 from '@/public/projects/brokerid/brokerid-v2-24.png'
import brokerIdv225 from '@/public/projects/brokerid/brokerid-v2-25.png'

import brokerIdThumbnailNew from '@/public/projects/brokerid/brokerid-thumbnail-new.png'

// Typra
import typraThumbnail from '@/public/projects/typra/typra-thumbnail.png'
import typra1 from '@/public/projects/typra/typra-1.png'
import typra2 from '@/public/projects/typra/typra-2.png'
import typra3 from '@/public/projects/typra/typra-3.png'
import typra4 from '@/public/projects/typra/typra-4.png'
import typra5 from '@/public/projects/typra/typra-5.png'
import typra6 from '@/public/projects/typra/typra-6.png'
import typra7 from '@/public/projects/typra/typra-7.png'
import typra8 from '@/public/projects/typra/typra-8.png'
import typra9 from '@/public/projects/typra/typra-9.png'
import typra10 from '@/public/projects/typra/typra-10.png'
import typra11 from '@/public/projects/typra/typra-11.png'
import typra12 from '@/public/projects/typra/typra-12.png'
import typraApp1 from '@/public/projects/typra/typra-app-1.png'
import typraApp2 from '@/public/projects/typra/typra-app-2.png'
import typraApp3 from '@/public/projects/typra/typra-app-3.png'
import typraApp4 from '@/public/projects/typra/typra-app-4.png'


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
    stack: ['Expo Go', 'Nextjs', 'React Native', 'Shadcn', 'Supabase', 'Tailwindcss'],
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
        title: 'Version 1 — The Co-Broking App',
        content: `We moved forward with the idea and built the first version: a focused co-broking platform. Agents could list their properties, browse other agents' listings, and filter by the specifications that mattered, location, price range, property type, and more.

It was clean, purposeful, and solved exactly the problem we set out to fix.`,
      },
      {
        id: 'version-1-mobile',
        title: 'Version 1 — Mobile',
        content: `A look at the original mobile app.`,
        images: [brokerId6, brokerId7, brokerId8, brokerId9, brokerId10, brokerId11, brokerId12],
        imageLayout: 'mobile',
      },
      {
        id: 'version-1-web',
        title: 'Version 1 — Web',
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

- **CRM** — input and manage your clients, track what they're looking for, store their documents and preferences
- **Media management** — attach images, videos, and files directly to client records
- **Bank products** — browse current mortgage offerings and bank representative contacts
- **Primary developers** — access developer profiles, projects, and collateral in one tap
- **And more** — the platform keeps growing as new agent needs surface

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
        title: 'Version 2 — Web',
        content: `The web platform keeps the same familiar design language as Version 1, but grows well beyond co-broking. Agents now get a public **agent profile page**, a dedicated **listing page** for their own properties, a **primary listing page** for developer projects, and a **search page** to find and connect with other agents.`,
        images: [brokerIdv217, brokerIdv218, brokerIdv219, brokerIdv220, brokerIdv221, brokerIdv222, brokerIdv223, brokerIdv224, brokerIdv225],
        imageLayout: 'web',
      },
      {
        id: 'version-2-mobile',
        title: 'Version 2 — Mobile',
        content: `The mobile app received the largest overhaul. Alongside the refreshed co-broking feed, it now carries the full super-app experience, CRM, client and media management, bank products, and the primary developer directory, all in an agent's pocket.`,
        images: [brokerIv2d1, brokerIv2d2, brokerIdv23, brokerIdv24, brokerIdv25, brokerIdv26, brokerIdv27, brokerIdv28, brokerIdv29, brokerIdv210, brokerIdv211, brokerIdv212, brokerIdv213, brokerIdv214, brokerIdv215, brokerIdv216],
        imageLayout: 'mobile',
      },
      {
        id: 'tech-stack',
        title: 'Tech Stack',
        content: `- **React Native + Expo Go** — cross-platform mobile development for iOS and Android
- **Supabase** — authentication, PostgreSQL database, and real-time subscriptions
- **Next.js** — web frontend with server-side rendering and SEO optimization`,
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
    href: 'https://typra.vercel.app',
    repo: '',
    title: 'Typra',
    category: 'personal',
    description: `Typra started as a simple journaling app with typewriter sounds and slowly evolved into my personal productivity machine: habit tracking, task management, daily reflection, and goal tracking, all in one place.`,
    thumbnail: typraThumbnail,
    stack: ['Nextjs', 'Shadcn', 'Supabase', 'Tailwindcss'],
    slug: 'typra',
    sections: [
      {
        id: 'the-beginning',
        title: 'The Beginning',
        content: `It started with a simple itch: I wanted to journal, but I wanted it to feel *intentional*. So I built **Typra**, a web app that simulated the feel of a typewriter, complete with the clicking sounds as you type.

That was it. Nothing fancy. Just a blank page, your thoughts, and the satisfying clack of keys that made you actually want to write.`,
      },
      {
        id: 'it-grew',
        title: 'It Grew',
        content: `But I kept using it. And the more I used it, the more I noticed what I was missing.

I started adding features, not because I planned to, but because I needed them. A habit tracker. A task list. A space for daily reflection. A way to set and revisit goals.

One by one, Typra quietly turned from a journaling tool into a full personal productivity system. Not by design, but by necessity.`,
      },
      {
        id: 'desktop',
        title: 'Desktop',
        content: `Here's a look at Typra on desktop. What started as a blank journaling canvas grew into a full suite of tools, each one built because I personally needed it.

The **Journal** is where it all began: a distraction-free writing space with typewriter sounds that make every keystroke feel intentional. The **Habit Tracker** helps me stay consistent on the things that matter, with a simple daily check-in that keeps streaks visible and honest. The **Task Manager** is my daily to-do list, lightweight enough to not get in the way but structured enough to keep me on track. **Daily Reflection** gives me a dedicated space to pause, review the day, and course-correct before the next one. And **Goal Tracking** ties it all together - a place to define what I'm working toward and check in on progress over time.`,
        images: [typra1, typra2, typra3, typra4, typra5, typra6, typra7, typra8, typra9, typra10, typra11, typra12],
        imageLayout: 'web',
      },
      {
        id: 'mobile',
        title: 'Mobile Web App',
        content: `Typra is also a progressive web app, saved as a shortcut on my iPhone home screen so it feels and opens like a native app. It's the first thing I open in the morning.`,
        images: [typraApp1, typraApp2, typraApp3, typraApp4],
        imageLayout: 'mobile',
      },
      {
        id: 'my-everyday-tool',
        title: 'My Everyday Tool',
        content: `Today, I use Typra every single day.

It helps me manage my full-time job and my freelance project, [BrokerID](https://brokerid.app), without losing my mind. It's where I check in with my habits, clear my head before a busy day, and make sure I'm moving toward the things that actually matter to me.`,
      },
      {
        id: 'the-real-lesson',
        title: 'The Real Lesson',
        content: `What I learned from building and using Typra is that my biggest bottleneck was never my workload. It was me.

Instead of working longer hours, I built a tool that made me more *intentional* with my time and decisions. The result was better consistency, better focus, and the ability to juggle multiple responsibilities without feeling overwhelmed.

That mindset carried over into how I work. In a fast, naturally chaotic startup environment, I took the same initiative: build structure where there isn't any. Set up systems. Reduce friction. Move faster without burning out.

Typra is a small app, but it taught me something big: when a process isn't working, the best move isn't to work harder within a broken system. It's to build a better one.`,
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
    stack: ['Nextjs', 'Shadcn', 'Tailwindcss'],
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
  {
    href: 'https://cv-atm.com/',
    repo: '',
    title: 'Anugerah Teknik Mandiri',
    category: 'freelance',
    description:
      'Company website for Anugerah Teknik Mandiri to displays their services and products. Made for commercial purposes.',
    thumbnail: cvAtmThumbnailNew,
    images: [cvAtm, cvAtm2],
    stack: ['HTML', 'CSS', 'Javascript'],
    slug: 'cvatm',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        content: `In 2020, during the COVID-19 pandemic, a friend offered me a freelance opportunity to create a website for his parent's company. Despite having no prior experience with web development at the time, I decided to take on the challenge.

Through determination and self-learning, I successfully built and deployed a fully functional website within the given timeframe using only **HTML**, **CSS**, and **JavaScript**. This experience was particularly rewarding as I managed to achieve this without using any frameworks, relying solely on fundamental web development principles.`,
      },
      {
        id: 'screenshots',
        title: 'Screenshots',
        content: `A glimpse of the final delivered website.`,
        images: [cvAtm, cvAtm2],
        imageLayout: 'web',
      },
    ],
  },
]

export const miniProjects: MiniProject[] = [
  // {
  //   title: 'Typra',
  //   description:
  //     'A journaling typewriter app that simulates the feel of a typewriter. Built for focused, distraction-free writing and daily reflection.',
  //   images: [brokerId1, brokerId2, brokerId3, brokerId4, brokerId5],
  //   href: 'https://typra.vercel.app',
  //   stack: ['React', 'Tailwind'],
  // },
  // {
  //   title: 'Personal To-Do List',
  //   description:
  //     'A personalized to-do list app tailored to my own daily workflow. Supports task categorization and simple prioritization to stay on top of things.',
  //   images: [brokerId6, brokerId7, brokerId8, brokerId9, brokerId10],
  //   href: 'https://todo.andrechandra.vercel.app',
  //   repo: 'https://github.com/andrechandra/todo',
  //   stack: ['React', 'Tailwind'],
  // },
]
