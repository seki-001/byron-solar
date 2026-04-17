'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { projects } from '@/lib/projects'

const preview = projects.slice(0, 3)

const clientTypePills: Record<string, string> = {
  Residential: 'bg-brand-cyan text-brand-navy',
  Commercial: 'bg-brand-lavender text-brand-navy',
  Industrial: 'bg-brand-aqua/20 text-brand-navy',
}

function ProjectBg({ type }: { type: string }) {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" fill="none">
      <rect width="400" height="200" fill="#1e2440" />
      <rect x="20" y="20" width="160" height="90" rx="4" fill="#90BEDE" opacity="0.15" />
      <line x1="20" y1="65" x2="180" y2="65" stroke="#90F3FF" strokeWidth="0.7" opacity="0.4" />
      <line x1="100" y1="20" x2="100" y2="110" stroke="#90F3FF" strokeWidth="0.7" opacity="0.4" />
      <circle cx="330" cy="30" r="22" fill="#68EDC6" opacity="0.15" />
      {type === 'Residential' && <path d="M280 80L230 120H240V160H320V120H330L280 80Z" fill="#90BEDE" opacity="0.1" />}
      {type === 'Commercial' && <rect x="220" y="90" width="160" height="90" fill="#90BEDE" opacity="0.1" />}
      {type === 'Industrial' && <>
        <rect x="200" y="80" width="180" height="100" fill="#90BEDE" opacity="0.08" />
        <rect x="200" y="60" width="180" height="50" fill="#68EDC6" opacity="0.08" />
      </>}
    </svg>
  )
}

export default function ProjectsPreview() {
  return (
    <section className="bg-ui-bg-alt border-b border-ui-border section-padding">
      <div className="container-max">
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-ui-subtle mb-1">Our Work</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">Recent installations</h2>
          </div>
          <Link
            href="/projects"
            className="hidden sm:flex items-center gap-1 text-sm text-brand-blue hover:text-brand-navy font-medium transition-colors"
          >
            See all projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {preview.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              whileHover={{ y: -2 }}
              className="bg-white border border-ui-border rounded-card overflow-hidden hover:border-brand-blue hover:shadow-card-hover transition-all cursor-pointer group"
            >
              <div className="relative h-44 overflow-hidden">
                <ProjectBg type={project.clientType} />
                <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-4">
                  <p className="text-white/80 text-xs line-clamp-2">{project.description}</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-semibold text-brand-navy text-sm leading-snug">{project.title}</h3>
                  <span className={`pill shrink-0 text-[11px] ${clientTypePills[project.clientType]}`}>{project.clientType}</span>
                </div>
                <p className="text-xs text-ui-subtle">{project.location} · {project.systemSize}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 sm:hidden">
          <Link href="/projects" className="w-full block text-center border border-ui-border-strong text-brand-navy py-2.5 rounded-input text-sm font-medium hover:bg-white transition-colors">
            See All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
