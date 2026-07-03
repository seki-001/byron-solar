type EnquiryPayload = {
  name: string
  phone: string
  email?: string
  county: string
  propertyType: string
  monthlyBill?: number
  message?: string
}

type SubmitResult = { ok: true } | { ok: false; error: string }

/** Web3Forms must be called from the browser (server-side requires paid plan + IP whitelist). */
export async function submitEnquiry(payload: EnquiryPayload): Promise<SubmitResult> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
  if (!accessKey) {
    return {
      ok: false,
      error: 'Form service is not configured. Please try WhatsApp or call us directly.',
    }
  }

  const lines = [
    `Name: ${payload.name}`,
    `Phone: ${payload.phone}`,
    `Email: ${payload.email || 'Not provided'}`,
    `County: ${payload.county}`,
    `Property type: ${payload.propertyType}`,
    payload.monthlyBill ? `Monthly KPLC bill: KES ${payload.monthlyBill.toLocaleString()}` : null,
    payload.message ? `\nMessage:\n${payload.message}` : null,
  ].filter(Boolean)

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New enquiry — ${payload.name} (${payload.county})`,
        from_name: 'Arcnad Website',
        name: payload.name,
        phone: payload.phone,
        email: payload.email || '',
        county: payload.county,
        property_type: payload.propertyType,
        monthly_bill: payload.monthlyBill ?? '',
        message: lines.join('\n'),
      }),
    })

    const result = (await res.json()) as { success?: boolean; message?: string }

    if (!res.ok || !result.success) {
      return {
        ok: false,
        error: result.message ?? 'Failed to send enquiry. Please try again or WhatsApp us.',
      }
    }

    return { ok: true }
  } catch {
    return {
      ok: false,
      error: 'Failed to send enquiry. Please check your connection and try again.',
    }
  }
}
