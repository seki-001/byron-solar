'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { team } from '@/lib/team'

const timeline = [
  { year: '2018', title: 'Company Founded', desc: 'Arcnad Systems was founded in Nairobi with a mission to make clean solar energy accessible to every Kenyan.' },
  { year: '2020', title: '100th Installation', desc: 'Reached our first 100 installations across 8 counties, serving residential and commercial clients.' },
  { year: '2022', title: 'National Expansion', desc: 'Expanded to all 47 counties, establishing regional offices in Mombasa, Kisumu, Nakuru, and Eldoret.' },
  { year: '2024', title: '500+ Customers', desc: "Crossed 500 installations, including Kenya's largest residential rooftop project in Karen, Nairobi." },
  { year: '2026', title: 'Future of Energy', desc: 'Launching battery storage and solar EV charging solutions for commercial clients across Kenya.' },
]

const certifications = [
  'Kenya Renewable Energy Association (KREA)',
  'Energy & Petroleum Regulatory Authority (EPRA)',
  'Kenya Bureau of Standards (KEBS)',
  'ISO 9001:2015 Certified',
  'GreenTech Kenya Partner',
]

export default function AboutClient() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}
      className="pt-14 md:pt-[92px]">
      {/* Page header */}
      <div className="bg-white border-b border-ui-border py-6">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-ui-subtle mb-1">
            <Link href="/" className="hover:text-brand-navy">Home</Link> › About
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold text-brand-navy">About Arcnad Systems</h1>
          <p className="text-ui-muted text-sm mt-1">Kenya&apos;s most trusted solar installation company since 2018.</p>
        </div>
      </div>

      {/* Brand story */}
      <section className="bg-white border-b border-ui-border section-padding">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>
              <p className="text-xs font-semibold uppercase tracking-widest text-ui-subtle mb-2">Our Story</p>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">Why We Do What We Do</h2>
              <p className="text-ui-muted text-sm leading-relaxed mb-3">
                Arcnad Systems was born out of frustration. Our founder watched his mother&apos;s business in
                Nairobi lose thousands of shillings monthly to KPLC bills and diesel generators. He knew there was a better way.
              </p>
              <p className="text-ui-muted text-sm leading-relaxed mb-3">
                With a background in electrical engineering and a passion for clean energy, the team started Arcnad Systems
                in 2018 with one promise: make solar affordable, reliable, and accessible to every Kenyan.
              </p>
              <p className="text-ui-muted text-sm leading-relaxed">
                Today, our certified team has installed 500+ systems, saved customers over KES 200 million in energy
                costs, and prevented thousands of tonnes of CO₂ from entering the atmosphere.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}
              className="bg-gradient-to-br from-brand-cyan to-brand-lavender rounded-card p-10 flex items-center justify-center h-64">
              <svg width="320" height="180" viewBox="0 0 320 180" fill="none">
                <rect x="20" y="30" width="120" height="80" rx="8" fill="#90BEDE" opacity="0.3" />
                <rect x="160" y="30" width="140" height="80" rx="8" fill="#68EDC6" opacity="0.25" />
                <rect x="20" y="125" width="280" height="35" rx="8" fill="#1e2440" opacity="0.08" />
                <rect x="30" y="38" width="100" height="64" rx="5" fill="#1e2440" opacity="0.12" />
                <line x1="80" y1="38" x2="80" y2="102" stroke="#90F3FF" strokeWidth="0.8" opacity="0.5" />
                <line x1="30" y1="70" x2="130" y2="70" stroke="#90F3FF" strokeWidth="0.8" opacity="0.5" />
                <circle cx="265" cy="45" r="20" fill="#68EDC6" opacity="0.4" />
                <circle cx="265" cy="45" r="12" fill="#68EDC6" opacity="0.5" />
                <line x1="265" y1="20" x2="265" y2="15" stroke="#68EDC6" strokeWidth="1.5" opacity="0.6" strokeLinecap="round" />
                <line x1="283" y1="45" x2="288" y2="45" stroke="#68EDC6" strokeWidth="1.5" opacity="0.6" strokeLinecap="round" />
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="bg-brand-navy section-padding">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>,
                title: 'Our Mission',
                body: "To accelerate Kenya's transition to clean energy by delivering world-class solar installations — affordable, reliable, and backed by exceptional after-sales service.",
              },
              {
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
                title: 'Our Vision',
                body: 'A Kenya where every rooftop generates clean energy, where no family loses food to power outages, and where businesses thrive without the burden of high electricity costs.',
              },
            ].map((card, i) => (
              <motion.div key={card.title}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="bg-white/5 border border-white/10 rounded-card p-6"
              >
                <div className="text-brand-aqua mb-3">{card.icon}</div>
                <h3 className="font-bold text-white mb-2">{card.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{card.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white border-b border-ui-border section-padding">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-ui-subtle mb-1">Team</p>
            <h2 className="text-2xl font-bold text-brand-navy">The experts behind the panels</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div key={member.id}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="bg-white border border-ui-border rounded-card p-5 hover:border-brand-blue hover:shadow-card transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-brand-cyan flex items-center justify-center text-brand-navy text-xl font-bold mb-4">
                  {member.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <h3 className="font-semibold text-brand-navy">{member.name}</h3>
                <p className="text-brand-blue text-xs font-medium mb-2">{member.role}</p>
                <p className="text-ui-muted text-xs leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-ui-bg-alt border-b border-ui-border py-10">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-ui-subtle mb-5 text-center">Certifications & Memberships</p>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, i) => (
              <motion.span key={cert}
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.35 }}
                className="bg-white border border-ui-border rounded-card px-4 py-2 text-xs text-ui-muted font-medium hover:border-brand-blue hover:text-brand-navy transition-all"
              >
                {cert}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white border-b border-ui-border section-padding">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-ui-subtle mb-1">History</p>
            <h2 className="text-2xl font-bold text-brand-navy">Our journey</h2>
          </div>

          {/* Desktop vertical timeline */}
          <div className="hidden md:block relative">
            <div className="absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-px bg-ui-border" />
            <div className="space-y-8">
              {timeline.map((item, idx) => (
                <motion.div key={item.year}
                  initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.4 }}
                  className={`flex items-center gap-6 ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className={`inline-block bg-white border border-ui-border rounded-card p-4 max-w-xs hover:border-brand-blue transition-colors ${idx % 2 === 0 ? 'ml-auto' : ''}`}>
                      <p className="font-bold text-brand-navy text-sm mb-1">{item.title}</p>
                      <p className="text-ui-muted text-xs">{item.desc}</p>
                    </div>
                  </div>
                  <div className="relative z-10 w-10 h-10 rounded-full bg-brand-navy border-2 border-brand-cyan flex items-center justify-center text-brand-aqua text-xs font-bold shrink-0">
                    {item.year.slice(2)}
                  </div>
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile horizontal scroll */}
          <div className="md:hidden flex gap-3 overflow-x-auto pb-2 -mx-4 px-4">
            {timeline.map((item) => (
              <div key={item.year} className="min-w-[200px] bg-white border border-ui-border rounded-card p-4 shrink-0">
                <span className="text-brand-blue font-bold text-lg">{item.year}</span>
                <p className="font-semibold text-brand-navy text-xs mt-1 mb-1">{item.title}</p>
                <p className="text-ui-muted text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy py-12">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Join 500+ happy customers</h2>
          <p className="text-white/50 text-sm mb-6">Start your solar journey with Kenya&apos;s most experienced team.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-brand-aqua text-brand-navy px-6 py-2.5 rounded-input font-semibold text-sm hover:brightness-95 transition-all">
            Get a Free Assessment
          </Link>
        </div>
      </section>
    </motion.main>
  )
}
