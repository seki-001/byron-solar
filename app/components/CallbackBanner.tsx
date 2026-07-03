'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { submitEnquiry } from '@/lib/submitEnquiry'

export default function CallbackBanner() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !phone) return
    setLoading(true)
    setSubmitError(null)
    const result = await submitEnquiry({
      name,
      phone,
      county: 'Not specified',
      propertyType: 'Callback Request',
    })
    setLoading(false)
    if (!result.ok) {
      setSubmitError(result.error)
      return
    }
    setSubmitted(true)
  }

  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="bg-brand-navy rounded-3xl overflow-hidden relative">
          <div className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 sm:p-10 lg:p-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Ready to go solar?
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">
                Leave your number and one of our solar consultants will call you back within 2 hours with a free
                site-specific recommendation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              {submitted ? (
                <div className="glass-panel-dark rounded-2xl px-6 py-5 text-white font-medium text-sm">
                  ✓ Thanks! We&apos;ll call you back shortly.
                </div>
              ) : (
                <>
                {submitError && (
                  <p className="mb-3 text-sm text-red-200 bg-red-900/30 border border-red-400/30 rounded-xl px-3 py-2">{submitError}</p>
                )}
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="flex-1 px-4 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-brand-blue/30"
                  />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="flex-1 px-4 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-brand-blue/30"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-aqua px-5 py-2.5 disabled:opacity-60 whitespace-nowrap"
                  >
                    {loading ? 'Sending…' : 'Request Callback'}
                  </button>
                </form>
                </>
              )}
              <p className="text-white/40 text-xs mt-3">
                Or{' '}
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '254714311669'}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-aqua hover:underline"
                >
                  chat on WhatsApp
                </a>
                {' '}for an instant response.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
