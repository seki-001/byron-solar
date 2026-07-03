import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

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
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY
  if (!accessKey) {
    console.error('Enquiry API: WEB3FORMS_ACCESS_KEY is not set')
    return NextResponse.json(
      { error: 'Form service is not configured. Please try WhatsApp or call us directly.' },
      { status: 503 }
    )
  }

  try {
    const body = await req.json()
    const data = schema.parse(body)

    const lines = [
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email || 'Not provided'}`,
      `County: ${data.county}`,
      `Property type: ${data.propertyType}`,
      data.monthlyBill ? `Monthly KPLC bill: KES ${data.monthlyBill.toLocaleString()}` : null,
      data.message ? `\nMessage:\n${data.message}` : null,
    ].filter(Boolean)

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New enquiry — ${data.name} (${data.county})`,
        from_name: 'Arcnad Website',
        name: data.name,
        phone: data.phone,
        email: data.email || '',
        county: data.county,
        property_type: data.propertyType,
        monthly_bill: data.monthlyBill ?? '',
        message: lines.join('\n'),
      }),
    })

    const result = (await res.json()) as { success?: boolean; message?: string }

    if (!res.ok || !result.success) {
      console.error('Web3Forms error:', result.message ?? res.status)
      return NextResponse.json({ error: 'Failed to send enquiry. Please try again or WhatsApp us.' }, { status: 502 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid form data', details: err.issues }, { status: 400 })
    }
    console.error('Enquiry API error:', err)
    return NextResponse.json({ error: 'Failed to send enquiry' }, { status: 500 })
  }
}
