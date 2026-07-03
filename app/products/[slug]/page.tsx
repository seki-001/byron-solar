import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
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
  residential: { pill: 'bg-brand-cyan/80 text-brand-navy', label: 'Residential' },
  commercial: { pill: 'bg-brand-lavender/90 text-brand-navy', label: 'Commercial' },
  'water-heater': { pill: 'bg-brand-cyan/70 text-brand-navy', label: 'Water Heater' },
  accessory: { pill: 'bg-brand-aqua/30 text-brand-navy', label: 'Accessory' },
}

export default function ProductDetailPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug)
  if (!product) notFound()

  const cat = categoryStyles[product.category] ?? { pill: 'glass-subtle text-ui-muted', label: product.category }
  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 3)
  const relatedProducts = related.length > 0 ? related : products.filter((p) => p.id !== product.id).slice(0, 3)

  return (
    <main className="page-top glass-grid-bg min-h-screen">
      <div className="container-max px-4 sm:px-6 lg:px-8 pb-4">
        <div className="glass-subtle rounded-full py-2.5 px-5 text-xs text-ui-subtle flex items-center gap-1.5 mb-4">
          <Link href="/" className="hover:text-brand-navy">Home</Link>
          <span>›</span>
          <Link href="/products" className="hover:text-brand-navy">Products</Link>
          <span>›</span>
          <span className="text-brand-navy font-medium">{product.name}</span>
        </div>

        <div className="glass-panel-light rounded-3xl p-6 sm:p-8 mb-6">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="relative w-full md:w-[380px] shrink-0 h-64 img-frame bg-ui-bg-alt">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 380px"
              />
            </div>

            <div className="flex-1">
              <span className={`pill text-[11px] font-semibold mb-3 inline-block backdrop-blur-sm ${cat.pill}`}>
                {cat.label}
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-2">{product.name}</h1>
              <p className="text-ui-muted text-sm leading-relaxed mb-6 max-w-lg">{product.shortDesc}</p>

              <a href="#enquiry" className="btn-primary inline-flex items-center gap-2 px-6 py-2.5">
                Enquire About This Product
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-4 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="glass-card rounded-2xl p-6">
            <h2 className="font-bold text-brand-navy mb-3 text-base">About This Product</h2>
            <p className="text-ui-muted text-sm leading-relaxed">{product.fullDesc}</p>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <h2 className="font-bold text-brand-navy mb-3 text-base">Technical Specifications</h2>
            <table className="w-full text-sm">
              <tbody>
                {Object.entries(product.specs).map(([key, val], i) => (
                  <tr key={key} className={i % 2 === 0 ? 'glass-subtle' : ''}>
                    <td className="px-3 py-2 text-ui-muted text-xs font-medium rounded-l-lg">{key}</td>
                    <td className="px-3 py-2 text-brand-navy text-xs font-semibold rounded-r-lg">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-8">
            <h2 className="font-bold text-brand-navy mb-4 text-base">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedProducts.map((p) => (
                <Link
                  key={p.id}
                  href={`/products/${p.slug}`}
                  className="arc-card p-4 block"
                >
                  <span className={`pill text-[11px] mb-2 inline-block ${categoryStyles[p.category]?.pill ?? 'glass-subtle text-ui-muted'}`}>
                    {categoryStyles[p.category]?.label ?? p.category}
                  </span>
                  <h3 className="font-semibold text-brand-navy text-sm mb-1">{p.name}</h3>
                  <p className="text-ui-muted text-xs line-clamp-2">{p.shortDesc}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div id="enquiry" className="mt-8 glass-card rounded-2xl p-6 max-w-2xl">
          <h2 className="font-bold text-brand-navy mb-1 text-base">Enquire About This Product</h2>
          <p className="text-ui-muted text-sm mb-5">Our team will get back to you within 2 hours.</p>
          <ProductEnquiryForm productName={product.name} />
        </div>
      </div>
    </main>
  )
}
