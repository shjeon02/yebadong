import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../components/theme-provider'
import Header from '../components/Header'
import { Footer } from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yebadong - Progressive Rock Korea Community',
  description: 'Korean Progressive Rock Community since 1994. Reviews, interviews, discussions about progressive rock music.',
  keywords: ['progressive rock', 'prog rock', 'korea', 'music community', 'reviews', 'interviews'],
  authors: [{ name: 'Yebadong Community' }],
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'Yebadong - Progressive Rock Korea',
    description: 'Korean Progressive Rock Community since 1994',
    type: 'website',
    locale: 'ko_KR',
    siteName: 'Yebadong',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yebadong - Progressive Rock Korea',
    description: 'Korean Progressive Rock Community since 1994',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-gray-800 antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
} 