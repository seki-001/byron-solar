'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { projects } from '@/lib/projects'

const preview = projects.slice(0, 3)

const clientTypePills: Record<string, string> = {
  Residential: 'bg-brand-cyan text-brand-navy',
  Commercial: 'bg-brand-lavender text-brand-navy',
  Industrial: 'bg-brand-aqua/20 text-brand-navy',
}

export default function ProjectsPreview() {
  return (
    <section className="section-padding">
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
              className="arc-card overflow-hidden cursor-pointer group"
            >
              <div className="relative h-44 m-3 mb-0 rounded-[1.25rem] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-4">
                  <p className="text-white/80 text-xs line-clamp-2">{project.description}</p>
                </div>
              </div>
              <div className="p-4 pt-3">
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
          <Link href="/projects" className="w-full block text-center arc-btn-outline">
            See All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
