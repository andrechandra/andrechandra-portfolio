// Tailwind Starter
import nextStarterThumbnail from '@/public/projects/next-starter/next-thumbnail.png'
import nextStarter from '@/public/projects/next-starter/tailwind-starter.png'
import nextStarter2 from '@/public/projects/next-starter/tailwind-starter-2.png'
import nextStarter3 from '@/public/projects/next-starter/tailwind-starter-3.png'

// Notion-Links
import notionLinksThumbnail from '@/public/projects/notion-links/notion-links-thumbnail.png'
import notionLinks from '@/public/projects/notion-links/notion-links.png'
import notionLinks2 from '@/public/projects/notion-links/notion-links-2.png'

import { Project } from '@/types/project'
import { motion } from 'framer-motion'

export const miniProjects: Project[] = [
  {
    href: 'https://notionlinks.vercel.app/',
    repo: 'https://github.com/andrechandra/notion-links',
    title: 'Notion Links',
    category: 'short-projects',
    description:
      'A personalized Linktree-style website built with Next.js, using the Notion API as a CMS for seamless link management.',
    thumbnail: notionLinksThumbnail,
    images: [notionLinks, notionLinks2],
    stack: ['Nextjs', 'Tailwindcss', 'Notion'],
    slug: 'notion-links',
    content: (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="font-geist_mono tracking-tighter text-gray-400">
          Notion Links is a Linktree-style website built with Next.js, using the
          Notion API as a CMS for effortless link management. It allows users to
          update and organize links directly from their Notion workspace, making
          customization seamless and intuitive.
        </p>
        <p className="font-geist_mono tracking-tighter text-gray-400">
          This project leverages Tailwind CSS for styling and shadcn/ui for
          modern UI components, ensuring a clean and responsive design. With its
          dynamic content fetching from Notion, users can manage their personal
          or professional links without modifying code, offering both
          flexibility and efficiency.
        </p>
      </motion.div>
    ),
  },
  {
    href: 'https://next-shadcn-starter-template.vercel.app/',
    repo: 'https://github.com/andrechandra/next-tailwind-starter',
    title: 'Next + Tailwind + Shadcn Starter Template',
    category: 'short-projects',
    description:
      'A starter template for building modern web applications with Next.js, Tailwind CSS, and shadcn/ui components. Pre-configured with TypeScript and ESLint.',
    thumbnail: nextStarterThumbnail,
    images: [nextStarter, nextStarter2, nextStarter3],
    stack: ['Nextjs', 'Tailwindcss', 'Shadcn'],
    slug: 'starter',
    content: (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="font-geist_mono tracking-tighter text-gray-400">
          Creating a starter template for Next.js is a valuable endeavor as it
          streamlines the development process by providing a solid foundation
          for building modern web applications. This template is pre-configured
          with powerful tools like Tailwind CSS for styling, shadcn/ui
          components for accessible and customizable UI elements, and TypeScript
          for type safety, ensuring a scalable and maintainable codebase.
        </p>
        <p className="font-geist_mono tracking-tighter text-gray-400">
          By using this template, developers can save significant time setting
          up repetitive configurations and jump straight into building features.
          It&apos;s particularly useful for quickly prototyping ideas or
          starting new projects with best practices already in place. My
          personal website is also built using this starter template, showcasing
          its flexibility and efficiency in real-world applications.
        </p>
      </motion.div>
    ),
  },
]
