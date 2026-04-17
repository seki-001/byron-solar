import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy & Terms | Arcnad Systems Kenya',
  description: 'Privacy Policy and Terms of Service for Arcnad Systems Kenya.',
}

export default function PrivacyPage() {
  return (
    <main className="pt-14 md:pt-[92px] bg-ui-bg-alt min-h-screen">
      <div className="bg-white border-b border-ui-border py-5">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-ui-subtle mb-1">
            <Link href="/" className="hover:text-brand-navy">Home</Link> › Privacy Policy
          </p>
          <h1 className="text-2xl font-bold text-brand-navy">Privacy Policy</h1>
        </div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-8 max-w-3xl">
        <div className="bg-white border border-ui-border rounded-card p-8 space-y-8">
          <p className="text-xs text-ui-subtle">Last updated: April 2026</p>

          {[
            { title: '1. Information We Collect', body: 'When you submit a quote request, we collect: your name, phone number, email (optional), county, property type, and any additional information you provide. We do not collect payment information on this website.' },
            { title: '2. How We Use Your Information', body: 'We use your information solely to respond to your enquiry and prepare a solar proposal. We do not sell or rent your data to third parties.' },
            { title: '3. Data Storage', body: 'Your data is stored securely and retained for up to 3 years. You may request deletion at any time by emailing info@arcnadsystems.co.ke.' },
            { title: '4. Cookies', body: 'We use only essential cookies for functionality. No tracking or advertising cookies are used.' },
            { title: '5. Your Rights', body: 'You have the right to access, correct, or delete your personal data. Contact us at info@arcnadsystems.co.ke.' },
          ].map((s) => (
            <section key={s.title}>
              <h2 className="font-bold text-brand-navy mb-2 text-base">{s.title}</h2>
              <p className="text-ui-muted text-sm leading-relaxed">{s.body}</p>
            </section>
          ))}
        </div>

        <div id="terms" className="bg-white border border-ui-border rounded-card p-8 mt-6 space-y-8">
          <div>
            <h1 className="text-2xl font-bold text-brand-navy mb-1">Terms of Service</h1>
            <p className="text-xs text-ui-subtle">Last updated: April 2026</p>
          </div>

          {[
            { title: '1. Acceptance of Terms', body: 'By using arcnadsystems.co.ke, you accept these Terms of Service. If you do not agree, please do not use this website.' },
            { title: '2. Website Content', body: 'All content is provided for informational purposes only. Product specs and pricing are confirmed in writing during the formal quotation process.' },
            { title: '3. Enquiry Submissions', body: 'Submitting a quote request does not constitute a binding contract. A contract is only formed upon written acceptance of a signed proposal and payment of a deposit.' },
            { title: '4. Limitation of Liability', body: "Arcnad Systems shall not be liable for indirect, incidental, or consequential damages. Our liability is limited to the maximum extent permitted by Kenyan law." },
            { title: '5. Governing Law', body: 'These Terms are governed by the laws of the Republic of Kenya. Disputes shall be resolved in the courts of Nairobi, Kenya.' },
          ].map((s) => (
            <section key={s.title}>
              <h2 className="font-bold text-brand-navy mb-2 text-base">{s.title}</h2>
              <p className="text-ui-muted text-sm leading-relaxed">{s.body}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
