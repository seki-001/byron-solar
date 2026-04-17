'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { KENYA_COUNTIES } from '@/lib/counties'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(9, 'Please enter a valid phone number'),
  email: z.string().email('Invalid email').optional().or(z.literal('')),
  county: z.string().min(1, 'Please select a county'),
  propertyType: z.enum(['Residential', 'Commercial', 'Industrial']).refine((v) => v, {
    message: 'Please select a property type',
  }),
  monthlyBill: z.number().min(500).max(500000).optional(),
  message: z.string().optional(),
})

type FormData = z.infer<typeof schema>

interface FAQ { q: string; a: string }
interface Props { faqs: FAQ[] }

const inputClass = "w-full px-3.5 py-2.5 border border-ui-border rounded-input text-sm text-brand-navy placeholder-ui-subtle focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30 bg-white"

export default function ContactClient({ faqs }: Props) {
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [billValue, setBillValue] = useState(5000)

  const { register, handleSubmit, formState: { errors, isSubmitting }, setValue } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { monthlyBill: 5000 },
  })

  const onSubmit = async (data: FormData) => {
    await fetch('/api/enquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    setSubmitted(true)
  }

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}
      className="pt-14 md:pt-[92px]">
      {/* Page header */}
      <div className="bg-white border-b border-ui-border py-6">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-ui-subtle mb-1">
            <Link href="/" className="hover:text-brand-navy">Home</Link> › Contact
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold text-brand-navy">Get a Free Solar Quote</h1>
          <p className="text-ui-muted text-sm mt-1">Tell us about your property and we&apos;ll send you a tailored proposal within 24 hours.</p>
        </div>
      </div>

      <div className="bg-ui-bg-alt min-h-screen">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* LEFT: Form (2/3 width) */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-ui-border rounded-card p-6">
                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="w-14 h-14 bg-brand-aqua rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-7 h-7 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-brand-navy mb-1">Quote Request Received!</h3>
                    <p className="text-ui-muted text-sm">We&apos;ll contact you within 2 business hours.</p>
                  </div>
                ) : (
                  <>
                    <h2 className="font-bold text-brand-navy mb-5 text-base">Request a Quote</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-brand-navy mb-1">Full Name *</label>
                          <input {...register('name')} placeholder="Jane Mwangi" className={inputClass} />
                          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-brand-navy mb-1">Phone *</label>
                          <input {...register('phone')} placeholder="+254 714 311 669" className={inputClass} />
                          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-brand-navy mb-1">Email (optional)</label>
                        <input {...register('email')} type="email" placeholder="jane@example.com" className={inputClass} />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-brand-navy mb-1">County *</label>
                          <select {...register('county')} className={inputClass}>
                            <option value="">Select county...</option>
                            {KENYA_COUNTIES.map((c) => <option key={c} value={c}>{c}</option>)}
                          </select>
                          {errors.county && <p className="text-red-500 text-xs mt-1">{errors.county.message}</p>}
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-brand-navy mb-1">Property Type *</label>
                          <select {...register('propertyType')} className={inputClass}>
                            <option value="">Select...</option>
                            <option value="Residential">Residential</option>
                            <option value="Commercial">Commercial</option>
                            <option value="Industrial">Industrial</option>
                          </select>
                          {errors.propertyType && <p className="text-red-500 text-xs mt-1">{errors.propertyType.message}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-brand-navy mb-1.5">
                          Monthly KPLC Bill:{' '}
                          <span className="text-brand-blue font-semibold">KES {billValue.toLocaleString()}</span>
                        </label>
                        <input type="range" min={500} max={500000} step={500} value={billValue}
                          onChange={(e) => { const v = Number(e.target.value); setBillValue(v); setValue('monthlyBill', v) }}
                          className="w-full" />
                        <div className="flex justify-between text-[11px] text-ui-subtle mt-1">
                          <span>KES 500</span><span>KES 500,000</span>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-brand-navy mb-1">Additional Info (optional)</label>
                        <textarea {...register('message')} rows={3}
                          placeholder="E.g. 4-bedroom house in Karen, 4hr daily outages..."
                          className={`${inputClass} resize-none`} />
                      </div>

                      <button type="submit" disabled={isSubmitting}
                        className="w-full bg-brand-navy text-white py-2.5 rounded-input text-sm font-semibold hover:bg-brand-navy-light transition-colors disabled:opacity-60">
                        {isSubmitting ? 'Sending…' : 'Request Free Quote'}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* RIGHT: Contact info sidebar */}
            <div className="space-y-4">
              <div className="bg-white border border-ui-border rounded-card p-5">
                <h3 className="font-semibold text-brand-navy mb-4 text-sm">Contact Details</h3>
                <ul className="space-y-3 text-sm">
                  {[
                    { icon: '📞', label: 'Phone', value: '+254 714 311 669' },
                    { icon: '✉️', label: 'Email', value: 'info@arcnadsystems.co.ke' },
                    { icon: '📍', label: 'Address', value: 'Maridadi Business Plaza\nNyamakima, P.O. Box 74429-00200\nNairobi, Kenya' },
                    { icon: '🕐', label: 'Hours', value: 'Mon–Fri 8am–5pm\nSat 9am–1pm' },
                  ].map((item) => (
                    <li key={item.label} className="flex items-start gap-2.5">
                      <span className="text-base">{item.icon}</span>
                      <div>
                        <p className="text-[11px] text-ui-subtle">{item.label}</p>
                        <p className="text-brand-navy text-xs font-medium whitespace-pre-line">{item.value}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '254714311669'}?text=Hi%20Arcnad%20Systems!%20I%27d%20like%20a%20solar%20quote.`}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] text-white px-4 py-3 rounded-card hover:bg-[#1db954] transition-colors"
              >
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                <div>
                  <p className="font-semibold text-sm">Chat on WhatsApp</p>
                  <p className="text-white/80 text-xs">Usually replies in minutes</p>
                </div>
              </a>

              {/* Map placeholder */}
              <div className="bg-white border border-ui-border rounded-card overflow-hidden h-40 flex items-center justify-center">
                {/* TODO: Replace with your Google Maps embed iframe */}
                <div className="text-center text-ui-subtle">
                  <svg className="w-8 h-8 mx-auto mb-1.5 text-ui-border-strong" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <p className="text-xs font-medium text-ui-muted">Nairobi, Kenya</p>
                  <p className="text-[11px] text-ui-subtle">Map placeholder</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-8 bg-white border border-ui-border rounded-card p-6 max-w-3xl">
            <h2 className="font-bold text-brand-navy mb-4 text-base">Frequently Asked Questions</h2>
            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-ui-border rounded-card overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-ui-bg-alt transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-medium text-brand-navy text-sm pr-4">{faq.q}</span>
                    <motion.span
                      animate={{ rotate: openFaq === i ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-ui-muted shrink-0"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        className="overflow-hidden"
                      >
                        <p className="px-4 pb-4 text-ui-muted text-sm leading-relaxed">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  )
}
