'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function CallbackBanner() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !phone) return
    setLoading(true)
    try {
      await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, county: 'Not specified', propertyType: 'Callback Request' }),
      })
    } finally {
      setLoading(false)
      setSubmitted(true)
    }
  }

  return (
    <section className="bg-brand-navy border-b border-brand-navy-light section-padding">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
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
              <div className="bg-white/10 border border-white/20 rounded-card px-6 py-5 text-white font-medium text-sm">
                ✓ Thanks! We&apos;ll call you back shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="flex-1 px-4 py-2.5 rounded-input bg-white text-brand-navy text-sm placeholder-ui-subtle focus:outline-none focus:ring-2 focus:ring-brand-blue"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="flex-1 px-4 py-2.5 rounded-input bg-white text-brand-navy text-sm placeholder-ui-subtle focus:outline-none focus:ring-2 focus:ring-brand-blue"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-brand-aqua text-brand-navy px-5 py-2.5 rounded-input text-sm font-semibold hover:brightness-95 disabled:opacity-60 whitespace-nowrap transition-all"
                >
                  {loading ? 'Sending…' : 'Request Callback'}
                </button>
              </form>
            )}
            <p className="text-white/40 text-xs mt-2">
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
    </section>
  )
}
