import { StaticImageData } from 'next/image'

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
  playStoreUrl?: string
  appStoreUrl?: string
}