'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import {
  SiNextdotjs as NextjsIcon,
  SiReact as ReactIcon,
  SiTailwindcss as TailwindIcon,
  SiShadcnui as ShadcnIcon,
  SiJavascript as JavascriptIcon,
  SiTypescript as TypescriptIcon,
} from 'react-icons/si'

export default function AboutCard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 items-start">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2, delay: 0.6, ease: 'easeOut' }}
        className="space-y-8 order-last lg:order-first"
      >
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Andre Chandra Putra
          </h2>
          <p className="text-gray-400 mb-4 font-roboto">
            IT Application Developer at{' '}
            <a
              href="https://www.panindai-ichilife.co.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-[var(--external-cursor)] relative w-fit text-yellow-400 after:absolute after:w-full after:scale-x-0 after:h-[0.05rem] after:bottom-0 after:left-0 after:origin-right after:bg-gradient-to-r after:from-yellow-400 after:to-pink-200 after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
            >
              Panin Dai-ichi Life
            </a>
          </p>
          <p className="text-gray-400 font-roboto">
            Hello! You can call me{' '}
            <span className="text-white font-medium">Acepe</span>. I am a
            Software Engineer working with the React ecosystem and passionate
            about teaching others how to understand and build with modern web
            technologies.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium text-white mb-4">My Journey</h3>
          <p className="text-gray-400 mb-4 font-roboto">
            Born and raised in Indonesia, I discovered my passion for web
            development during the pandemic. What started as a way to combat
            boredom turned into a full-fledged career in software engineering.
          </p>
          <p className="text-gray-400 font-roboto">
            I believe in learning in public and sharing knowledge through
            writing and teaching. This helps me solidify my understanding while
            helping others grow in their journey.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium text-white mb-4">Tech Stack</h3>
          <p className="text-gray-400 mb-4 font-roboto">
            Here are the few technologies that I&apos;m currently learning and
            working with.
          </p>
          <div className="flex flex-row flex-wrap gap-4">
            <TooltipProvider>
              {[
                { icon: NextjsIcon, name: 'Next.js' },
                { icon: ReactIcon, name: 'React' },
                { icon: TypescriptIcon, name: 'TypeScript' },
                { icon: JavascriptIcon, name: 'JavaScript' },
                { icon: TailwindIcon, name: 'Tailwind CSS' },
                { icon: ShadcnIcon, name: 'Shadcn UI' },
              ].map((tech, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <div className="p-1 rounded-full">
                      <tech.icon className="h-5 w-5" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{tech.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.6, ease: 'easeOut' }}
        className="space-y-8"
      >
        <div className="relative w-full max-w-md mx-auto">
          <div className="group">
            <div className="absolute -inset-0 bg-gradient-to-r from-yellow-400 to-pink-200 blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative p-2">
              <div className="bg-black shadow-xl overflow-hidden">
                <div className="relative aspect-square">
                  <div className="absolute inset-0 border-8 border-black z-10 transition-colors duration-300 ">
                    <Image
                      src="/profile/profile-picture.jpg"
                      alt="Andre Chandra Putra's Profile Picture"
                      fill
                      className="object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-2"
                    />
                  </div>
                </div>
                <div className="p-4 flex justify-end items-center">
                  <div className="w-24 h-12 relative">
                    <Image
                      src="/profile/signature.png"
                      alt="Andre Chandra Putra's signature"
                      fill
                      className="object-contain transition-all duration-300 opacity-75 group-hover:opacity-100 group-hover:scale-110 invert"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
