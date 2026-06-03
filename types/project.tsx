import { StaticImageData } from 'next/image'

export type MiniProject = {
  title: string
  description: string
  images: (StaticImageData | string)[]
  href?: string
  repo?: string
  stack?: string[]
}

export type ProjectSection = {
  id: string
  title: string
  content: string
  images?: (StaticImageData | string)[]
  imageLayout?: 'web' | 'mobile'
}

export type Project = {
  title: string
  category: string
  description: string
  thumbnail: StaticImageData
  images?: StaticImageData[] | string[]
  mobileImages?: StaticImageData[] | string[]
  webImages?: StaticImageData[] | string[]
  href: string
  repo: string
  slug?: string
  stack?: string[]
  content?: React.ReactNode | string
  sections?: ProjectSection[]
  playStoreUrl?: string
  appStoreUrl?: string
}
