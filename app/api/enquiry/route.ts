import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'

// TODO: Replace with your Resend API key and verified sender domain
// RESEND_API_KEY=your_resend_key_here
// CONTACT_EMAIL=info@solarco.co.ke

const schema = z.object({
  name: z.string().min(2),
  phone: z.string().min(9),
  email: z.string().email().optional().or(z.literal('')),
  county: z.string().min(1),
  propertyType: z.string().min(1),
  monthlyBill: z.number().optional(),
  message: z.string().optional(),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    const resend = new Resend(process.env.RESEND_API_KEY)

    const emailBody = `
New Solar Enquiry from SolarCo Website

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email || 'Not provided'}
County: ${data.county}
Property Type: ${data.propertyType}
${data.monthlyBill ? `Monthly KPLC Bill: KES ${data.monthlyBill.toLocaleString()}` : ''}
${data.message ? `\nMessage:\n${data.message}` : ''}

---
Sent via solarco.co.ke
    `.trim()

    await resend.emails.send({
      from: 'SolarCo Website <noreply@solarco.co.ke>',
      to: process.env.CONTACT_EMAIL || 'info@solarco.co.ke',
      subject: `New Solar Enquiry from ${data.name} — ${data.county}`,
      text: emailBody,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid form data', details: err.issues }, { status: 400 })
    }
    console.error('Enquiry API error:', err)
    return NextResponse.json({ error: 'Failed to send enquiry' }, { status: 500 })
  }
}
