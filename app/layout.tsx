import type { Metadata } from 'next'
import './globals.css'
import LocalBusinessSchema from '@/components/ui/LocalBusinessSchema'

const SITE_URL = 'https://possessionsinsurance.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Possessions Insurance | Local Insurance Agency — West Palm Beach, FL',
    template: '%s | Possessions Insurance',
  },
  description: 'Possessions Insurance is a local independent insurance agency in West Palm Beach, FL. Real agents, real answers. Home, auto, health, business & more. Get a free coverage check today.',
  keywords: ['insurance west palm beach','florida home insurance','auto insurance palm beach county','local insurance agent','south florida insurance','independent insurance agency'],
  authors: [{ name: 'Possessions Insurance' }],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Possessions Insurance',
    title: 'Possessions Insurance | Local Insurance. Real People. Zero Runaround.',
    description: 'Local independent insurance agency in West Palm Beach, FL. Home, auto, health & business coverage — real agents, no bots.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Possessions Insurance' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Possessions Insurance | West Palm Beach, FL',
    description: 'Local insurance. Real people. Zero runaround.',
    images: ['/og-image.png'],
  },
  alternates: { canonical: SITE_URL },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#33A64D" />
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="West Palm Beach" />
        <LocalBusinessSchema />
      </head>
      <body>{children}</body>
    </html>
  )
}
