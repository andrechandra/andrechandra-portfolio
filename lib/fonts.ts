import { Geist, Geist_Mono } from 'next/font/google'

const fontGeist = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist',
})

const fontGeistMono = Geist_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist_mono',
})

export const fonts = [fontGeist.variable, fontGeistMono.variable]
