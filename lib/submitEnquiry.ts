export async function submitEnquiry(payload: Record<string, unknown>): Promise<{ ok: true } | { ok: false; error: string }> {
  const res = await fetch('/api/enquiry', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  const data = (await res.json().catch(() => ({}))) as { error?: string }

  if (!res.ok) {
    return { ok: false, error: data.error ?? 'Something went wrong. Please try again or WhatsApp us.' }
  }

  return { ok: true }
}
