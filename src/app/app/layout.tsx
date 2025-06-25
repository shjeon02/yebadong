import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yebadong - Progressive Rock Korea Community',
  description: 'Korean Progressive Rock Community since 1994. Reviews, interviews, discussions about progressive rock music.',
  keywords: ['progressive rock', 'prog rock', 'korea', 'music community', 'reviews', 'interviews'],
  authors: [{ name: 'Yebadong Community' }],
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
      <body className={`${inter.className} bg-dark-950 text-white antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
} 