import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Education Bridge — Career Architects | From Dreams to Degrees. From Degrees to Careers.',
  description:
    "India's premier career guidance and education architecture partner. Psychometric career counselling, honest college comparison, admission and scholarship support, hostel verification, and placement preparation — from Class 10 until your first job.",
  keywords: [
    'career counselling India',
    'career guidance Bangalore',
    'college admission consultancy',
    'career guidance after 10th',
    'career guidance after 12th',
    'engineering admission support',
    'college comparison',
    'placement support',
    'psychometric career assessment',
  ],
  openGraph: {
    title: 'Education Bridge — Career Architects, not admission agents',
    description:
      'Discover the right career, choose the best college, secure admission, and get supported until you land your dream job.',
    type: 'website',
    url: 'https://www.educationtocareerbridge.com/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-dark-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a1827',
}

import { SchemaOrg } from '@/components/site/schema-org'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark bg-black ${inter.variable} ${manrope.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <SchemaOrg />
      </head>
      <body suppressHydrationWarning className="font-sans antialiased bg-black text-white">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
