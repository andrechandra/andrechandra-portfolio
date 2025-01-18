'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/constants/projects'
import { ArrowUpRight, Github, Link2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import {
  SiNextdotjs as NextjsIcon,
  SiTailwindcss as TailwindIcon,
  SiShadcnui as ShadcnIcon,
  SiHtml5 as HtmlIcon,
  SiJavascript as JavascriptIcon,
  SiTypescript as TypescriptIcon,
  SiReact as ReactIcon,
  SiCss3 as CssIcon,
  SiSass as SassIcon,
  SiFigma as FigmaIcon,
  SiUnity as UnityIcon,
  SiPhp as PhpIcon,
} from 'react-icons/si'
import { cn } from '@/lib/utils'
import { useState } from 'react'

const ToolIcon = ({ tool }: { tool: string }) => {
  switch (tool.toLowerCase()) {
    case 'nextjs':
      return <NextjsIcon className="h-5 w-5" />
    case 'tailwindcss':
      return <TailwindIcon className="h-5 w-5" />
    case 'shadcn':
      return <ShadcnIcon className="h-5 w-5" />
    case 'html':
      return <HtmlIcon className="h-5 w-5" />
    case 'javascript':
      return <JavascriptIcon className="h-5 w-5" />
    case 'typescript':
      return <TypescriptIcon className="h-5 w-5" />
    case 'react':
      return <ReactIcon className="h-5 w-5" />
    case 'css':
      return <CssIcon className="h-5 w-5" />
    case 'sass':
      return <SassIcon className="h-5 w-5" />
    case 'figma':
      return <FigmaIcon className="h-5 w-5" />
    case 'unity':
      return <UnityIcon className="h-5 w-5" />
    case 'php':
      return <PhpIcon className="h-5 w-5" />
    default:
      return null
  }
}

const projectVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: i * 0.1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.3,
    },
  },
}

export default function ProjectCard({
  limit,
  initialCategory = 'all',
  showTabs = true,
}: {
  limit?: number
  initialCategory?: string
  showTabs?: boolean
}) {
  const [activeCategory, setActiveCategory] = useState(initialCategory)
  const categories = ['all', 'university', 'freelance', 'short-projects']

  const filteredProjects = projects
    .filter(
      (project) =>
        activeCategory === 'all' || project.category === activeCategory
    )
    .slice(0, limit || undefined)

  return (
    <div className="w-full bg-background text-foreground min-h-screen py-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
        >
          {showTabs && (
            <Tabs
              defaultValue={initialCategory}
              className=" hidden lg:block w-full"
              onValueChange={setActiveCategory}
            >
              <TabsList className="grid w-full grid-cols-4">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className={cn(
                      'capitalize',
                      activeCategory === category && 'text-primary'
                    )}
                  >
                    {category.replace('-', ' ')}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          )}
        </motion.div>

        <motion.div
          className="space-y-16"
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={projectVariants}
              custom={index}
              layout
              className="relative"
            >
              <div
                className={`grid grid-cols-1 gap-8 items-center ${
                  index % 2 === 0
                    ? 'lg:grid-cols-[2fr_1fr]'
                    : 'lg:[&>*:first-child]:order-last lg:grid-cols-[1fr_2fr]'
                }`}
              >
                <div className="space-y-6 order-2 lg:order-none">
                  <h2 className="text-xl font-bold tracking-tight">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-400 font-roboto">
                    {project.description}
                  </p>

                  {project.stack && (
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">Tools:</span>
                      <TooltipProvider>
                        {project.stack.map((tech) => (
                          <Tooltip key={tech}>
                            <TooltipTrigger asChild>
                              <div className="p-1 rounded-full">
                                <ToolIcon tool={tech} />
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{tech}</p>
                            </TooltipContent>
                          </Tooltip>
                        ))}
                      </TooltipProvider>
                    </div>
                  )}

                  <div className="flex items-center flex-wrap gap-4 pt-4 justify-between">
                    <div>
                      <HoverBorderGradient
                        as="button"
                        className="flex items-center space-x-2"
                      >
                        <Link
                          href={
                            project.slug
                              ? `/projects/${project.slug}`
                              : project.href || '#'
                          }
                          className="flex items-center gap-2"
                        >
                          <span>View Project</span>
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      </HoverBorderGradient>
                    </div>

                    <div>
                      {project.href && (
                        <Button
                          asChild
                          variant="link_right"
                          className="rounded-full text-gray-400 hover:text-white"
                        >
                          <Link href={project.href} target="_blank">
                            <Link2 className="mr-2 h-4 w-4" />
                            Live Site
                          </Link>
                        </Button>
                      )}

                      {project.repo && (
                        <Button
                          asChild
                          variant="link_right"
                          className="rounded-full text-gray-400 hover:text-white"
                        >
                          <Link href={project.repo} target="_blank">
                            <Github className="mr-2 h-4 w-4" />
                            Repository
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                <div className="relative aspect-[4/3] w-full mx-auto overflow-hidden rounded-lg">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    className="object-cover rounded-lg"
                    priority={index === 0}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {limit && limit < projects.length && (
          <motion.div
            variants={projectVariants}
            custom={filteredProjects.length}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex justify-center"
          >
            <Button asChild variant="link_right" className="text-white">
              <Link href="/projects">
                View more projects
                <ArrowRight className="mr-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
