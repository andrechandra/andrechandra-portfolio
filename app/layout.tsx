import type { Metadata } from 'next'
import '@/app/globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import React from 'react'
import Footer from '@/components/Footer'
import Navbar from '@/components/nav-bar'
import { Poppins, Roboto } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Andre Chandra Putra',
  description: 'Andre Chandra Putra&apos;s personal website',
  icons: {
    icon: '/images/logo.svg',
  },
}

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/logo.svg" type="image/svg+xml" />
      </head>
      <body className={`${poppins.variable} ${roboto.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="min-h-screen flex flex-col">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
