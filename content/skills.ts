import type { SkillGroup } from './schema'

export const skills = [
  {
    id: 'languages',
    label: 'Languages',
    items: ['TypeScript', 'JavaScript', 'SQL', 'Java'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    items: ['React', 'Next.js', 'HTML/CSS', 'Tailwind CSS', 'shadcn/ui'],
  },
  {
    id: 'backend',
    label: 'Backend & Data',
    items: ['Node.js', 'PostgreSQL', 'Prisma', 'Supabase', 'REST APIs'],
  },
  {
    id: 'mobile',
    label: 'Mobile',
    items: ['React Native', 'Expo'],
  },
  {
    id: 'prior-stack',
    label: 'Prior stack',
    items: [
      'Spring Boot',
      'Cordova',
      'Ionic Angular',
      'Firebase',
      'MS SQL Server',
      'SQLite',
    ],
    surfaces: ['resume', 'pdf'],
  },
  {
    id: 'tooling',
    label: 'Tooling',
    items: ['Git', 'Vercel', 'Figma'],
    surfaces: ['resume', 'pdf'],
  },
] satisfies SkillGroup[]
