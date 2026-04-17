import type { Metadata } from 'next'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: 'About Us | SolarCo Kenya',
  description:
    'Learn about SolarCo — Kenya\'s most trusted solar installation company since 2018. Meet our team and see our certifications.',
}

export default function AboutPage() {
  return <AboutClient />
}
