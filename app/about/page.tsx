import type { Metadata } from 'next'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: 'About Us | Arcnad Systems Kenya',
  description:
    'Learn about Arcnad Systems — Kenya\'s most trusted solar installation company since 2018. Meet our team and see our certifications.',
}

export default function AboutPage() {
  return <AboutClient />
}
