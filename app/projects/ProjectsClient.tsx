'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
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
      className="pt-14 md:pt-[92px]">
      {/* Page header */}
      <div className="bg-white border-b border-ui-border py-6">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-ui-subtle mb-1">
            <Link href="/" className="hover:text-brand-navy">Home</Link> › Projects
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold text-brand-navy">Our Work Across Kenya</h1>
          <p className="text-ui-muted text-sm mt-1">Real installations, real results — across all 47 counties.</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-ui-border sticky top-14 z-40">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1.5 py-2.5 overflow-x-auto scrollbar-hide">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`shrink-0 px-4 py-1.5 rounded-input text-sm font-medium transition-all ${
                  activeFilter === f
                    ? 'bg-brand-navy text-white'
                    : 'bg-ui-bg-alt text-ui-muted hover:bg-brand-cyan hover:text-brand-navy border border-ui-border'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Masonry grid */}
      <div className="bg-ui-bg-alt min-h-screen">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-6">
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

        {/* CTA strip */}
        <div className="bg-brand-navy border-t border-brand-navy-light py-12">
          <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Want results like these?</h2>
            <p className="text-white/60 text-sm mb-6">Let&apos;s plan your installation together.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-brand-aqua text-brand-navy px-6 py-2.5 rounded-input font-semibold text-sm hover:brightness-95 transition-all">
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
            <motion.div className="absolute inset-0 bg-black/50" onClick={() => setSelected(null)} />
            <motion.div
              className="relative bg-white rounded-card max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-ui-border"
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            >
              {/* Modal header */}
              <div className="bg-brand-navy p-5 rounded-t-card relative">
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-3.5 right-3.5 text-white/50 hover:text-white p-1.5 rounded hover:bg-white/10 transition-colors"
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
                <p className="text-ui-muted text-sm leading-relaxed">{selected.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-amber-50 border border-amber-100 rounded-card p-4">
                    <p className="text-xs font-semibold text-amber-800 mb-1.5">⚡ The Challenge</p>
                    <p className="text-amber-700 text-xs leading-relaxed">{selected.challenge}</p>
                  </div>
                  <div className="bg-brand-cyan/30 border border-brand-blue/20 rounded-card p-4">
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
