import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://arcnadsystems.vercel.app'),
  title: {
    default: 'Solar Solutions Kenya | Arcnad Systems',
    template: '%s | Arcnad Systems',
  },
  description:
    'Professional solar panel installation for homes and businesses across Kenya. Get a free site assessment today. 500+ installations, 10+ years experience.',
  keywords: ['solar energy Kenya', 'solar installation Nairobi', 'solar panels Kenya', 'commercial solar Kenya', 'Arcnad Systems'],
  openGraph: {
    siteName: 'Arcnad Systems Kenya',
    locale: 'en_KE',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
