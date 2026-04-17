'use client'

import { motion } from 'framer-motion'
import type { Project } from '@/lib/projects'

interface Props {
  project: Project
  onClick: (project: Project) => void
}

const clientTypePills: Record<string, string> = {
  Residential: 'bg-brand-cyan text-brand-navy',
  Commercial: 'bg-brand-lavender text-brand-navy',
  Industrial: 'bg-brand-aqua/20 text-brand-navy',
}

function BgIllustration({ type }: { type: string }) {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 220" preserveAspectRatio="xMidYMid slice" fill="none">
      <rect width="400" height="220" fill="#1e2440" />
      {type === 'Residential' ? (
        <>
          <path d="M200 40L90 120H110V190H290V120H310L200 40Z" fill="#90BEDE" opacity="0.1" />
          <rect x="90" y="130" width="120" height="60" fill="#68EDC6" opacity="0.08" />
          <rect x="210" y="130" width="80" height="60" fill="#68EDC6" opacity="0.08" />
        </>
      ) : type === 'Industrial' ? (
        <>
          <rect x="30" y="70" width="340" height="120" fill="#90BEDE" opacity="0.08" />
          <rect x="30" y="50" width="340" height="60" fill="#68EDC6" opacity="0.08" />
          <line x1="150" y1="50" x2="150" y2="110" stroke="#90F3FF" strokeWidth="0.8" opacity="0.3" />
          <line x1="250" y1="50" x2="250" y2="110" stroke="#90F3FF" strokeWidth="0.8" opacity="0.3" />
        </>
      ) : (
        <>
          <rect x="30" y="60" width="340" height="130" fill="#90BEDE" opacity="0.08" />
          <rect x="30" y="60" width="340" height="70" fill="#68EDC6" opacity="0.08" />
          <line x1="200" y1="60" x2="200" y2="130" stroke="#90F3FF" strokeWidth="0.8" opacity="0.3" />
        </>
      )}
      {/* Solar panel grid overlay */}
      <rect x="30" y="20" width="160" height="90" rx="4" fill="#90BEDE" opacity="0.12" />
      <line x1="30" y1="65" x2="190" y2="65" stroke="#90F3FF" strokeWidth="0.6" opacity="0.4" />
      <line x1="110" y1="20" x2="110" y2="110" stroke="#90F3FF" strokeWidth="0.6" opacity="0.4" />
      <circle cx="320" cy="28" r="18" fill="#68EDC6" opacity="0.18" />
    </svg>
  )
}

export default function ProjectCard({ project, onClick }: Props) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: 'spring', stiffness: 400 }}
      className="bg-white border border-ui-border rounded-card hover:border-brand-blue hover:shadow-card-hover transition-all overflow-hidden cursor-pointer group"
      onClick={() => onClick(project)}
    >
      <div className="relative h-48 overflow-hidden">
        <BgIllustration type={project.clientType} />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-brand-navy/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4">
          <p className="text-white/80 text-xs leading-relaxed line-clamp-3">{project.description}</p>
          <span className="text-brand-aqua text-xs font-semibold mt-2">View details →</span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className="font-semibold text-brand-navy text-sm leading-snug">{project.title}</h3>
          <span className={`pill shrink-0 text-[11px] ${clientTypePills[project.clientType]}`}>
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
