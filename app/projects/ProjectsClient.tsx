'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, type Project, type ClientType } from '@/lib/projects'
import ProjectCard from '../components/ProjectCard'

type Filter = 'All' | ClientType

const filters: Filter[] = ['All', 'Residential', 'Commercial', 'Industrial']

const clientTypePills: Record<string, string> = {
  Residential: 'bg-brand-cyan text-brand-navy',
  Commercial: 'bg-brand-lavender text-brand-navy',
  Industrial: 'bg-brand-aqua/20 text-brand-navy',
}

export default function ProjectsClient() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All')
  const [selected, setSelected] = useState<Project | null>(null)

  const filtered = useMemo(
    () => activeFilter === 'All' ? projects : projects.filter((p) => p.clientType === activeFilter),
    [activeFilter]
  )

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}
      className="page-top glass-grid-bg min-h-screen">
      <div className="container-max px-4 sm:px-6 lg:px-8 pb-6">
        <div className="glass-panel-light rounded-3xl py-6 px-6 sm:px-8">
          <p className="text-xs text-ui-subtle mb-1">
            <Link href="/" className="hover:text-brand-navy">Home</Link> › Projects
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-5">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-brand-navy">Our Work Across Kenya</h1>
              <p className="text-ui-muted text-sm mt-1">Real installations across all 47 counties.</p>
            </div>
            <p className="text-xs text-ui-subtle shrink-0">
              {filtered.length} project{filtered.length !== 1 ? 's' : ''}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/60">
            {filters.map((f) => {
              const active = activeFilter === f
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setActiveFilter(f)}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    active
                      ? 'bg-brand-navy text-white'
                      : 'text-ui-muted hover:text-brand-navy hover:bg-white/50'
                  }`}
                >
                  {f}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-4 pb-0">
        <div style={{ columnCount: 'auto', columnWidth: '280px', columnGap: '1rem' }}>
          {filtered.map((project, i) => (
            <div key={project.id} className="break-inside-avoid mb-4">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.35 }}
              >
                <ProjectCard project={project} onClick={setSelected} />
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-brand-navy rounded-3xl py-12 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />
          <div className="relative">
            <h2 className="text-2xl font-bold text-white mb-2">Want results like these?</h2>
            <p className="text-white/60 text-sm mb-6">Let&apos;s plan your installation together.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 btn-aqua px-6 py-2.5 font-semibold text-sm">
              Start Your Project
            </Link>
          </div>
        </div>
      </div>

      {/* Project detail modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div className="glass-overlay" onClick={() => setSelected(null)} />
            <motion.div
              className="relative glass-panel-dropdown rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            >
              {/* Modal header */}
              <div className="bg-brand-navy p-5 rounded-t-card relative">
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-3.5 right-3.5 glass-icon-btn glass-icon-btn-dark"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <span className={`pill text-[11px] font-semibold mb-2 inline-block ${clientTypePills[selected.clientType]}`}>
                  {selected.clientType}
                </span>
                <h2 className="text-xl font-bold text-white mb-1">{selected.title}</h2>
                <p className="text-white/50 text-xs">{selected.location}, {selected.county} · {selected.systemSize} System</p>
              </div>

              {/* Modal body */}
              <div className="p-5 space-y-5">
                <div className="relative h-52 rounded-2xl overflow-hidden img-frame">
                  <Image src={selected.image} alt={selected.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 700px" />
                </div>
                <p className="text-ui-muted text-sm leading-relaxed">{selected.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="glass-panel-brand rounded-2xl p-4">
                    <p className="text-xs font-semibold text-brand-navy mb-1.5">⚡ The Challenge</p>
                    <p className="text-brand-navy/70 text-xs leading-relaxed">{selected.challenge}</p>
                  </div>
                  <div className="glass-subtle rounded-2xl p-4">
                    <p className="text-xs font-semibold text-brand-navy mb-1.5">✓ Our Solution</p>
                    <p className="text-brand-navy/70 text-xs leading-relaxed">{selected.solution}</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-brand-navy mb-2">Outcomes</p>
                  <ul className="space-y-1.5">
                    {selected.outcomes.map((o, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-ui-muted">
                        <span className="text-brand-aqua font-bold mt-0.5">✓</span>{o}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="block w-full text-center bg-brand-navy text-white py-2.5 rounded-input text-sm font-semibold hover:bg-brand-navy-light transition-colors"
                  onClick={() => setSelected(null)}
                >
                  Get a Similar Installation
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  )
}
