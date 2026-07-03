'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import type { Project } from '@/lib/projects'

interface Props {
  project: Project
  onClick: (project: Project) => void
}

const clientTypePills: Record<string, string> = {
  Residential: 'bg-brand-cyan/80 text-brand-navy',
  Commercial: 'bg-brand-lavender/90 text-brand-navy',
  Industrial: 'bg-brand-aqua/30 text-brand-navy',
}

export default function ProjectCard({ project, onClick }: Props) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: 'spring', stiffness: 400 }}
      className="arc-card overflow-hidden cursor-pointer group"
      onClick={() => onClick(project)}
    >
      <div className="relative h-48 m-3 mb-0 rounded-[1.25rem] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-brand-navy/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4">
          <p className="text-white/80 text-xs leading-relaxed line-clamp-3">{project.description}</p>
          <span className="text-brand-aqua text-xs font-semibold mt-2">View details →</span>
        </div>
      </div>
      <div className="p-4 pt-3">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className="font-semibold text-brand-navy text-sm leading-snug">{project.title}</h3>
          <span className={`pill shrink-0 text-[11px] backdrop-blur-sm ${clientTypePills[project.clientType]}`}>
            {project.clientType}
          </span>
        </div>
        <div className="flex items-center gap-2.5 text-xs text-ui-subtle">
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
            {project.location}
          </span>
          <span>·</span>
          <span>{project.systemSize} System</span>
        </div>
      </div>
    </motion.div>
  )
}
