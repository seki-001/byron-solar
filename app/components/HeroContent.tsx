'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Suspense, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const SolarScene = dynamic(() => import('./SolarScene'), { ssr: false })

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  return isMobile
}

function MobileSolarSVG() {
  return (
    <svg width="260" height="180" viewBox="0 0 260 180" fill="none">
      {/* Sun */}
      <circle cx="200" cy="36" r="24" fill="#68EDC6" opacity="0.35" />
      <circle cx="200" cy="36" r="15" fill="#68EDC6" opacity="0.6" />
      <line x1="200" y1="8" x2="200" y2="3" stroke="#68EDC6" strokeWidth="2" strokeLinecap="round" />
      <line x1="221" y1="36" x2="226" y2="36" stroke="#68EDC6" strokeWidth="2" strokeLinecap="round" />
      <line x1="215" y1="21" x2="219" y2="17" stroke="#68EDC6" strokeWidth="2" strokeLinecap="round" />
      {/* Panel */}
      <rect x="14" y="60" width="188" height="110" rx="6" fill="#1e2440" />
      <rect x="20" y="66" width="86" height="46" rx="3" fill="#90BEDE" opacity="0.3" />
      <rect x="110" y="66" width="86" height="46" rx="3" fill="#90BEDE" opacity="0.3" />
      <rect x="20" y="118" width="86" height="46" rx="3" fill="#90BEDE" opacity="0.3" />
      <rect x="110" y="118" width="86" height="46" rx="3" fill="#90BEDE" opacity="0.3" />
      <line x1="14" y1="116" x2="202" y2="116" stroke="#90F3FF" strokeWidth="0.8" opacity="0.5" />
      <line x1="106" y1="60" x2="106" y2="170" stroke="#90F3FF" strokeWidth="0.8" opacity="0.5" />
      {/* Stand */}
      <rect x="55" y="170" width="8" height="10" rx="2" fill="#5a6080" />
      <rect x="153" y="170" width="8" height="10" rx="2" fill="#5a6080" />
      <rect x="38" y="178" width="140" height="4" rx="2" fill="#5a6080" />
    </svg>
  )
}

const stats = [
  { value: '500+', label: 'Installations' },
  { value: '10+', label: 'Years' },
  { value: '47', label: 'Counties' },
  { value: '5yr', label: 'Warranty' },
]

export default function HeroContent() {
  const isMobile = useIsMobile()

  return (
    /* eBay-like hero: not full viewport, structured two-column, light bg */
    <section className="bg-white pt-14 md:pt-[92px] border-b border-ui-border">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center min-h-[420px] py-10 md:py-0">
          {/* Left: copy */}
          <div className="py-6 pr-0 md:pr-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-navy bg-brand-cyan border border-brand-electric px-3 py-1 rounded-pill mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-aqua" />
                Kenya&apos;s Most Trusted Solar Solutions
              </span>
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

            {/* Quick stats row */}
            <motion.div
              className="flex flex-wrap gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-xl font-bold text-brand-navy">{s.value}</div>
                  <div className="text-xs text-ui-subtle">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: 3D or SVG */}
          <motion.div
            className="relative h-[320px] md:h-[420px] flex items-center justify-center bg-gradient-to-br from-brand-cyan via-brand-lavender to-white rounded-xl md:rounded-none md:rounded-r-none overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            {isMobile ? (
              <MobileSolarSVG />
            ) : (
              <Suspense
                fallback={
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-10 h-10 border-2 border-brand-blue border-t-transparent rounded-full animate-spin" />
                  </div>
                }
              >
                <SolarScene />
              </Suspense>
            )}

            {/* Floating badges */}
            <div className="absolute top-4 right-4 bg-white border border-ui-border rounded-card px-3 py-2 shadow-card text-xs font-semibold text-brand-navy">
              ⚡ Zero electricity bills
            </div>
            <div className="absolute bottom-4 left-4 bg-brand-aqua rounded-card px-3 py-2 text-xs font-semibold text-brand-navy">
              ✓ 5-Year Warranty
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="bg-ui-bg-alt border-t border-ui-border py-2.5">
        <div className="container-max px-4 sm:px-6 lg:px-8">
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
