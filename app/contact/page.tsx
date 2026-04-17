import type { Metadata } from 'next'
import ContactClient from './ContactClient'

const faqs = [
  {
    q: 'Do you offer financing options?',
    a: 'Yes! We partner with several Kenyan financial institutions to offer solar financing with flexible repayment terms from 12 to 60 months. In many cases, your monthly loan repayment is less than your current electricity bill — meaning you save money from day one.',
  },
  {
    q: 'How long does installation take?',
    a: 'Most residential systems (3–10kW) are installed in a single day. Larger commercial systems typically take 2–5 days. Our team handles all permitting, grid interconnection paperwork, and commissioning.',
  },
  {
    q: 'What warranty do you offer?',
    a: 'We offer a comprehensive 5-year system warranty covering workmanship, inverter, and battery. Solar panels carry a manufacturer\'s 25-year performance warranty guaranteeing at least 80% output after 25 years.',
  },
  {
    q: 'Do you service all counties in Kenya?',
    a: 'Yes — we serve all 47 counties. We have regional teams in Nairobi, Mombasa, Kisumu, Nakuru, and Eldoret, and we mobilise to other counties with advance booking.',
  },
  {
    q: 'How do I know what system size I need?',
    a: 'The simplest way is to look at your average monthly KPLC bill. We use this plus a site survey to calculate your daily energy consumption and recommend the perfect system size. Our free site assessment is exactly for this.',
  },
]

export const metadata: Metadata = {
  title: 'Get a Free Solar Quote Kenya',
  description:
    'Contact SolarCo for a free solar site assessment. Get a customised quote for your home or business.',
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: { '@type': 'Answer', text: faq.a },
            })),
          }),
        }}
      />
      <ContactClient faqs={faqs} />
    </>
  )
}
