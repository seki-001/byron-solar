import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { products } from '@/lib/products'
import ProductEnquiryForm from './ProductEnquiryForm'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug)
  if (!product) return {}
  return {
    title: `${product.name} | Solar Products Kenya`,
    description: product.shortDesc,
  }
}

const categoryStyles: Record<string, { pill: string; label: string }> = {
  residential: { pill: 'bg-brand-cyan text-brand-navy', label: 'Residential' },
  commercial: { pill: 'bg-brand-lavender text-brand-navy', label: 'Commercial' },
  'water-heater': { pill: 'bg-[#DFFDFF] text-brand-navy', label: 'Water Heater' },
  accessory: { pill: 'bg-brand-aqua/20 text-brand-navy', label: 'Accessory' },
}

export default function ProductDetailPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug)
  if (!product) notFound()

  const cat = categoryStyles[product.category] ?? { pill: 'bg-ui-bg-alt text-ui-muted', label: product.category }
  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 3)
  const relatedProducts = related.length > 0 ? related : products.filter((p) => p.id !== product.id).slice(0, 3)

  return (
    <main className="pt-14 md:pt-[92px] bg-ui-bg-alt min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-ui-border">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-3 text-xs text-ui-subtle flex items-center gap-1.5">
          <Link href="/" className="hover:text-brand-navy">Home</Link>
          <span>›</span>
          <Link href="/products" className="hover:text-brand-navy">Products</Link>
          <span>›</span>
          <span className="text-brand-navy font-medium">{product.name}</span>
        </div>
      </div>

      {/* Product hero */}
      <div className="bg-white border-b border-ui-border">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Visual */}
            <div className="w-full md:w-[380px] shrink-0 h-64 bg-gradient-to-br from-brand-cyan to-brand-lavender rounded-card flex items-center justify-center">
              <svg width="160" height="110" viewBox="0 0 160 110" fill="none">
                <rect x="8" y="14" width="144" height="82" rx="6" fill="#1e2440" opacity="0.1" />
                <rect x="12" y="18" width="66" height="36" rx="3" fill="#90BEDE" opacity="0.5" />
                <rect x="82" y="18" width="66" height="36" rx="3" fill="#90BEDE" opacity="0.5" />
                <rect x="12" y="58" width="66" height="34" rx="3" fill="#90BEDE" opacity="0.5" />
                <rect x="82" y="58" width="66" height="34" rx="3" fill="#90BEDE" opacity="0.5" />
                <line x1="8" y1="56" x2="152" y2="56" stroke="#90F3FF" strokeWidth="0.8" opacity="0.7" />
                <line x1="78" y1="14" x2="78" y2="96" stroke="#90F3FF" strokeWidth="0.8" opacity="0.7" />
                <circle cx="132" cy="18" r="14" fill="#68EDC6" opacity="0.5" />
              </svg>
            </div>

            {/* Info */}
            <div className="flex-1">
              <span className={`pill text-[11px] font-semibold mb-3 inline-block ${cat.pill}`}>
                {cat.label}
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-2">{product.name}</h1>
              <p className="text-ui-muted text-sm leading-relaxed mb-6 max-w-lg">{product.shortDesc}</p>

              <a
                href="#enquiry"
                className="inline-flex items-center gap-2 bg-brand-navy text-white px-6 py-2.5 rounded-input font-semibold text-sm hover:bg-brand-navy-light transition-colors"
              >
                Enquire About This Product
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Description + Specs */}
      <div className="container-max px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white border border-ui-border rounded-card p-6">
            <h2 className="font-bold text-brand-navy mb-3 text-base">About This Product</h2>
            <p className="text-ui-muted text-sm leading-relaxed">{product.fullDesc}</p>
          </div>

          <div className="bg-white border border-ui-border rounded-card p-6">
            <h2 className="font-bold text-brand-navy mb-3 text-base">Technical Specifications</h2>
            <table className="w-full text-sm">
              <tbody>
                {Object.entries(product.specs).map(([key, val], i) => (
                  <tr key={key} className={i % 2 === 0 ? 'bg-ui-bg-alt' : 'bg-white'}>
                    <td className="px-3 py-2 text-ui-muted text-xs font-medium">{key}</td>
                    <td className="px-3 py-2 text-brand-navy text-xs font-semibold">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Related */}
        {relatedProducts.length > 0 && (
          <div className="mt-8">
            <h2 className="font-bold text-brand-navy mb-4 text-base">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedProducts.map((p) => (
                <Link
                  key={p.id}
                  href={`/products/${p.slug}`}
                  className="bg-white border border-ui-border rounded-card p-4 hover:border-brand-blue hover:shadow-card transition-all"
                >
                  <span className={`pill text-[11px] mb-2 inline-block ${categoryStyles[p.category]?.pill ?? 'bg-ui-bg-alt text-ui-muted'}`}>
                    {categoryStyles[p.category]?.label ?? p.category}
                  </span>
                  <h3 className="font-semibold text-brand-navy text-sm mb-1">{p.name}</h3>
                  <p className="text-ui-muted text-xs line-clamp-2">{p.shortDesc}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Enquiry form */}
        <div id="enquiry" className="mt-8 bg-white border border-ui-border rounded-card p-6 max-w-2xl">
          <h2 className="font-bold text-brand-navy mb-1 text-base">Enquire About This Product</h2>
          <p className="text-ui-muted text-sm mb-5">Our team will get back to you within 2 hours.</p>
          <ProductEnquiryForm productName={product.name} />
        </div>
      </div>
    </main>
  )
}
