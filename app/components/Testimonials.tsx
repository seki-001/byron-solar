'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'My KPLC bill dropped from KES 22,000 to under KES 3,000. Installation was clean, professional, and done in a single day.',
    name: 'Margaret Wanjiku',
    county: 'Nairobi',
    system: '5kW Home System',
    initials: 'MW',
  },
  {
    quote: 'As a hotel owner in Mombasa, power reliability is critical. Arcnad Systems installed our 50kW system and we haven\'t had a single grid-related outage in two years.',
    name: 'Hassan Omari',
    county: 'Mombasa',
    system: '50kW Commercial',
    initials: 'HO',
  },
  {
    quote: 'The solar pump system eliminated KES 45,000 in monthly diesel costs. ROI was under 14 months. Best investment we\'ve ever made on the farm.',
    name: 'Peter Kimani',
    county: 'Nakuru',
    system: '7.5kW Pump System',
    initials: 'PK',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-white border-b border-ui-border section-padding">
      <div className="container-max">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-ui-subtle mb-1">Testimonials</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">What customers say</h2>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2 md:overflow-visible md:grid md:grid-cols-3 -mx-4 px-4 sm:mx-0 sm:px-0">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="min-w-[280px] md:min-w-0 bg-white border border-ui-border rounded-card p-5 flex flex-col hover:border-brand-blue hover:shadow-card transition-all"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-brand-aqua fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-ui-muted text-sm leading-relaxed flex-1 mb-4">&ldquo;{t.quote}&rdquo;</p>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-brand-cyan flex items-center justify-center text-brand-navy text-xs font-bold shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-brand-navy text-xs">{t.name}</p>
                  <p className="text-ui-subtle text-[11px]">{t.county} · {t.system}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
