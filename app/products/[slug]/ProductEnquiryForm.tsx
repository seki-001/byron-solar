'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { KENYA_COUNTIES } from '@/lib/counties'
import { submitEnquiry } from '@/lib/submitEnquiry'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(9, 'Please enter a valid phone number'),
  email: z.string().email('Invalid email').optional().or(z.literal('')),
  county: z.string().min(1, 'Please select a county'),
  message: z.string().optional(),
})

type FormData = z.infer<typeof schema>

interface Props {
  productName: string
}

export default function ProductEnquiryForm({ productName }: Props) {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setSubmitError(null)
    const result = await submitEnquiry({
      ...data,
      propertyType: 'Product Enquiry',
      message: `Product: ${productName}\n\n${data.message || ''}`,
    })
    if (!result.ok) {
      setSubmitError(result.error)
      return
    }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="glass-panel-brand rounded-2xl p-6 text-center">
        <div className="w-10 h-10 bg-brand-aqua rounded-full flex items-center justify-center mx-auto mb-3">
          <svg className="w-5 h-5 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-semibold text-brand-navy mb-1">Enquiry Sent!</h3>
        <p className="text-ui-muted text-sm">We&apos;ll contact you within 2 hours.</p>
      </div>
    )
  }

  const inputClass = "arc-input arc-input-square px-3.5 py-2.5 text-sm text-brand-navy placeholder-ui-subtle w-full"

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5">
      {submitError && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-3 py-2">{submitError}</p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
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

      <div>
        <label className="block text-xs font-medium text-brand-navy mb-1">County *</label>
        <select {...register('county')} className={inputClass}>
          <option value="">Select county...</option>
          {KENYA_COUNTIES.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
        {errors.county && <p className="text-red-500 text-xs mt-1">{errors.county.message}</p>}
      </div>

      <div>
        <label className="block text-xs font-medium text-brand-navy mb-1">Message (optional)</label>
        <textarea {...register('message')} rows={3} placeholder="Any specific questions..." className={`${inputClass} resize-none`} />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary py-2.5 disabled:opacity-60"
      >
        {isSubmitting ? 'Sending…' : 'Send Enquiry'}
      </button>
    </form>
  )
}
