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

// Liat Rumah
import liatRumah1 from '@/public/projects/liat-rumah/liatrumah-1.webp'
import liatRumah2 from '@/public/projects/liat-rumah/liatrumah-2.webp'
import liatRumah3 from '@/public/projects/liat-rumah/liatrumah-3.webp'
import liatRumah4 from '@/public/projects/liat-rumah/liatrumah-4.webp'
import liatRumah5 from '@/public/projects/liat-rumah/liatrumah-5.webp'
import liatRumah6 from '@/public/projects/liat-rumah/liatrumah-6.webp'
import liatRumahThumbnail from '@/public/projects/liat-rumah/liatrumah-thumbnail.webp'

import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    href: 'https://brokerid.app',
    repo: '',
    title: 'BrokerID',
    category: 'freelance',
    featured: true,
    description: `BrokerID is an application designed to serve as a bridge and the primary platform for property agents in Indonesia, helping them fulfill all their needs in the real estate brokerage industry.`,
    thumbnail: brokerIdThumbnailNew,
    webImages: [brokerId1, brokerId2, brokerId3, brokerId4, brokerId5],
    mobileImages: [
      brokerId6,
      brokerId7,
      brokerId8,
      brokerId9,
      brokerId10,
      brokerId11,
      brokerId12,
    ],
    stack: [
      'Expo',
      'Next.js',
      'React Native',
      'shadcn/ui',
      'Supabase',
      'Tailwind CSS',
    ],
    slug: 'brokerid',
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.andrechandra.brokerid&hl=id',
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
        images: [
          brokerId6,
          brokerId7,
          brokerId8,
          brokerId9,
          brokerId10,
          brokerId11,
          brokerId12,
        ],
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
        images: [
          brokerIdv217,
          brokerIdv218,
          brokerIdv219,
          brokerIdv220,
          brokerIdv221,
          brokerIdv222,
          brokerIdv223,
          brokerIdv224,
          brokerIdv225,
        ],
        imageLayout: 'web',
      },
      {
        id: 'version-2-mobile',
        title: 'Version 2 - Mobile',
        content: `The mobile app received the largest overhaul. Alongside the refreshed co-broking feed, it now carries the full super-app experience, CRM, client and media management, bank products, and the primary developer directory, all in an agent's pocket.`,
        images: [
          brokerIv2d1,
          brokerIv2d2,
          brokerIdv23,
          brokerIdv24,
          brokerIdv25,
          brokerIdv26,
          brokerIdv27,
          brokerIdv28,
          brokerIdv29,
          brokerIdv210,
          brokerIdv211,
          brokerIdv212,
          brokerIdv213,
          brokerIdv214,
          brokerIdv215,
          brokerIdv216,
        ],
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
    href: 'https://liatrumah.com',
    repo: '',
    title: 'Liat Rumah',
    category: 'freelance',
    featured: true,
    description: `Liat Rumah is the public face of BrokerID. It takes the listings agents already keep inside the agent app and puts them in front of the people actually buying and renting, with a WhatsApp message as the only step between a buyer and the agent.`,
    thumbnail: liatRumahThumbnail,
    webImages: [
      liatRumah1,
      liatRumah2,
      liatRumah3,
      liatRumah4,
      liatRumah5,
      liatRumah6,
    ],
    stack: ['Next.js', 'React 19', 'shadcn/ui', 'Supabase', 'Tailwind CSS'],
    slug: 'liat-rumah',
    sections: [
      {
        id: 'the-missing-half',
        title: 'The Missing Half',
        content: `BrokerID solved a problem agents had with each other. Thousands of listings went into it, agents co-broked with each other, managed their clients, and ran their day out of it. But every one of those listings sat behind a login that only another agent could pass.

So agents kept doing what they had always done to reach actual buyers. Screenshot the listing, post it to WhatsApp status, drop it in a Facebook group, hope somebody scrolls past it that day. The listing data was already clean and structured inside BrokerID, and it was being retyped into a chat app to reach the one audience that matters most.

That is the gap Liat Rumah was built to close. **BrokerID is the B2B side. Liat Rumah is the B2C side.** Same listings, same database, a completely different audience.`,
      },
      {
        id: 'one-database-two-audiences',
        title: 'One Database, Two Audiences',
        content: `The rule I set on day one was that Liat Rumah adds nothing to the database. It only reads.

It is a third codebase on the same Supabase project, holding the anonymous key and nothing else. The service role key is not allowed anywhere near it. Everything a buyer sees comes through a single view, \`public_listings\`, and one file in the whole project is permitted to touch Supabase at all.

That constraint is what makes the two products safe to run side by side. An agent's private client records, their documents, their CRM notes, none of it is reachable from the public site, because the public site has no key that could reach it. Only listings marked for sale or for rent ever render, and everything else an agent might post stays where it was posted.`,
      },
      {
        id: 'built-for-buyers',
        title: 'Built for Buyers, Not Agents',
        content: `The hardest part was resisting the urge to make it a second agent app.

There is no sign up. No account, no saved searches, no favourites, no messaging inbox, no social features. A buyer lands on the site and can immediately do the only three things a buyer actually wants to do: search by keyword, area, or agent name, narrow it down by price, land size, building size, and rooms, and then contact the agent directly on WhatsApp.

Every screen is in Indonesian, because that is the language of the people buying houses here. Buttons are verbs, never labels. \`Tampilkan hasil\`, not \`OK\`. A buyer should never have to guess what a button will do.`,
      },
      {
        id: 'a-feed-not-a-search-form',
        title: 'A Feed, Not a Search Form',
        content: `Every property site in Indonesia opens the same way. A hero image, a big search box, and a form asking you to pick a city, a property type, and a price range before you are allowed to see a single house.

I did not want that. Someone opening Liat Rumah on their phone during a lunch break is not ready to fill in a form. They just want to look at houses.

So the site opens the way **Threads and Instagram** open. You land straight on a feed of real listings and you scroll. The agent's name and office sit at the top, their own words underneath, then the price and specs, then the photos. It reads like a post because it is a post, written by the agent, not squeezed into a property card template.

The whole shell follows from that. A slim icon rail down the left holds home, search, and filter, the feed sits centred beside it, and on mobile the rail becomes a bottom bar exactly where a thumb already rests. Filtering is something you reach for once you know what you want, not a toll gate you pay on arrival.

The palette is deliberately monotone, with no hue in any token anywhere. Property photos are loud, mismatched, and covered in watermarks. The interface stays out of their way so the houses are the only colour on the screen.`,
      },
      {
        id: 'screenshots',
        title: 'Screenshots',
        content: `The feed, a filtered feed with its active chips, the filter sheet, an SEO category page, a listing detail with its WhatsApp handoff, and the full screen photo lightbox.`,
        images: [
          liatRumah1,
          liatRumah2,
          liatRumah3,
          liatRumah4,
          liatRumah5,
          liatRumah6,
        ],
        imageLayout: 'web',
      },
      {
        id: 'google-as-the-front-door',
        title: 'Making Google the Front Door',
        content: `A B2C property site lives or dies on search. Nobody wakes up and types in a brand new property site's name, they type "rumah dijual di tangerang" into Google.

So the site generates a category page for every combination worth having. \`/rumah-dijual-tangerang\`, \`/apartemen-dijual\`, \`/dijual-jakarta\`, each one statically generated, revalidated hourly, and carrying its own title, description, breadcrumbs, and structured data.

Which pages exist is decided by the listings themselves, not by a keyword list I guessed at. One pass over the catalogue counts how many listings fall into every possible slug, and anything too thin to be useful is left out of the prebuild, out of the sitemap, and marked noindex. That way a page is never in the sitemap while telling Google to ignore it.

Individual listings sit at \`/properti/<kata-kata>-<id>\`, so the words in front of the id can change as a listing gets edited without ever breaking a link somebody already shared.`,
      },
      {
        id: 'the-messy-parts',
        title: 'The Messy Parts',
        content: `Real data is never as tidy as the schema suggests.

Agents have been typing city and area names by hand for years, so roughly sixty spellings reach the database for about a dozen cities. Jakarta, jakarta, DKI Jakarta, Jkt. Every query folds those variants together in one place, so a lowercase city is not treated as a different city, and Jakarta as a page is the union of its five kota.

Filters live in the URL in Indonesian, \`cari\`, \`tipe\`, \`properti\`, \`harga_min\`, because a buyer sees that URL in the address bar and shares it with their spouse. Changing a filter is a navigation, not local state, so the link a buyer sends is always the exact result set they were looking at, and it is the indexable version of that link whenever one exists.

Nothing on the site snaps. Changing a filter fades the old results out and animates the new ones in, filter chips animate away as you remove them, and the return to the top of the feed is animated by hand because a feed resetting under a native smooth scroll cancels it halfway.`,
      },
      {
        id: 'tech-stack',
        title: 'Tech Stack',
        content: `- **Next.js App Router** - server rendered feed with an infinite scroll client fetcher for page two onward
- **React 19 + Tailwind v4** - shadcn components built on Base UI, dark mode through next-themes
- **Supabase** - the same PostgreSQL project BrokerID writes to, read here through the anonymous key only`,
      },
      {
        id: 'looking-ahead',
        title: 'Looking Ahead',
        content: `Liat Rumah exists so an agent's work does not stop at the edge of the agent app. Every listing they enter into BrokerID now reaches buyers on its own, gets indexed, and can be shared as a link that survives.

The next stretch is about reach. More category pages as the catalogue grows, better structured data, and eventually giving agents a public profile that a buyer can browse the way they would browse a listing.`,
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
