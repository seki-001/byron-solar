'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { GlassBadge } from './glass'

const stats = [
  { value: '500+', label: 'Installations' },
  { value: '10+', label: 'Years' },
  { value: '47', label: 'Counties' },
  { value: '5yr', label: 'Warranty' },
]

export default function HeroContent() {
  return (
    <section className="page-top">
      <div className="container-max px-4 sm:px-6 lg:px-8 pb-6">
        <div className="glass-panel-light rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch min-h-[420px]">
            <div className="py-8 px-6 sm:px-8 md:pr-6 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
              >
                <GlassBadge dot className="mb-4 text-xs font-semibold">
                  Kenya&apos;s Most Trusted Solar Solutions
                </GlassBadge>
              </motion.div>

              <motion.h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy leading-tight mb-4"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 }}
              >
                Powering Kenya with
                <br />
                <span className="text-brand-blue">Clean Solar Energy</span>
              </motion.h1>

              <motion.p
                className="text-ui-muted text-base leading-relaxed mb-6 max-w-md"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.2 }}
              >
                Residential and commercial solar installations across all 47 counties. 500+ homes and businesses already
                saving up to 80% on electricity.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-3 mb-8"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.3 }}
              >
                <Link href="/contact" className="btn-primary">
                  Get a Free Quote
                </Link>
                <Link href="/projects" className="btn-outline">
                  View Projects
                </Link>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                {stats.map((s) => (
                  <div key={s.label} className="glass-subtle rounded-2xl px-4 py-2.5 text-center min-w-[72px]">
                    <div className="text-lg font-bold text-brand-navy">{s.value}</div>
                    <div className="text-[11px] text-ui-subtle">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              className="relative min-h-[280px] md:min-h-[420px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              <Image
                src="/images/projects/residential-rooftop-nairobi.jpg"
                alt="Rooftop solar panel installation in Nairobi by Arcnad Systems"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
              {/* Soft blend into glass panel on the left */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/20 to-transparent md:from-white/80 md:via-transparent" />
              {/* Sky warmth overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/25 via-transparent to-brand-cyan/10" />

              <div className="absolute top-4 right-4 glass-badge-light text-xs font-semibold shadow-sm">
                ⚡ Zero electricity bills
              </div>
              <div className="absolute bottom-4 left-4 glass-panel-brand rounded-2xl px-3 py-2 text-xs font-semibold text-brand-navy shadow-sm">
                ✓ 5-Year Warranty
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 pb-4">
        <div className="glass-panel-light rounded-full py-2.5 px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-1 text-xs text-ui-muted">
            <span className="flex items-center gap-1.5"><CheckIcon />Free site assessment</span>
            <span className="flex items-center gap-1.5"><CheckIcon />EPRA licensed installers</span>
            <span className="flex items-center gap-1.5"><CheckIcon />All 47 counties serviced</span>
            <span className="flex items-center gap-1.5"><CheckIcon />Flexible financing available</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function CheckIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-brand-aqua" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  )
}
