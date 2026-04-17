import type { Metadata } from 'next'
import ProjectsClient from './ProjectsClient'

export const metadata: Metadata = {
  title: 'Solar Installation Projects Kenya',
  description:
    'View our completed solar installations across Kenya — residential, commercial, and industrial projects.',
}

export default function ProjectsPage() {
  return <ProjectsClient />
}
