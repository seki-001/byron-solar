import type { Metadata } from 'next'
import HeroContent from './components/HeroContent'
import CounterStrip from './components/CounterStrip'
import WhySolarSection from './components/WhySolarSection'
import FeaturedProducts from './components/FeaturedProducts'
import ProjectsPreview from './components/ProjectsPreview'
import Testimonials from './components/Testimonials'
import CallbackBanner from './components/CallbackBanner'

export const metadata: Metadata = {
  title: 'Solar Solutions Kenya | SolarCo',
  description:
    'Professional solar panel installation for homes and businesses across Kenya. Get a free site assessment today.',
  openGraph: {
    title: 'Solar Solutions Kenya | SolarCo',
    description: 'Residential and commercial solar installations across Kenya. Trusted by 500+ homes and businesses.',
  },
}

export default function HomePage() {
  return (
    <main>
      {/* JSON-LD: LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ElectricalContractor',
            name: 'SolarCo Kenya',
            description: 'Professional solar panel installation across Kenya',
            url: 'https://solarco.co.ke',
            telephone: '+254700000000',
            email: 'info@solarco.co.ke',
            areaServed: 'Kenya',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'KE',
            },
            openingHours: ['Mo-Fr 08:00-17:00', 'Sa 09:00-13:00'],
          }),
        }}
      />

      <HeroContent />
      <CounterStrip />
      <WhySolarSection />
      <FeaturedProducts />
      <ProjectsPreview />
      <Testimonials />
      <CallbackBanner />
    </main>
  )
}
