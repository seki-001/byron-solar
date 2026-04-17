import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Product } from '@/lib/products'

const categoryStyles: Record<string, { pill: string; label: string }> = {
  residential: { pill: 'bg-brand-cyan text-brand-navy', label: 'Residential' },
  commercial: { pill: 'bg-brand-lavender text-brand-navy', label: 'Commercial' },
  'water-heater': { pill: 'bg-[#DFFDFF] text-brand-navy', label: 'Water Heater' },
  accessory: { pill: 'bg-brand-aqua/20 text-brand-navy', label: 'Accessory' },
}

interface Props {
  product: Product
  compact?: boolean
}

export default function ProductCard({ product, compact = false }: Props) {
  const cat = categoryStyles[product.category] ?? { pill: 'bg-ui-bg-alt text-ui-muted', label: product.category }
  const specEntries = Object.entries(product.specs).slice(0, 3)

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: 'spring', stiffness: 400 }}
      className="bg-white border border-ui-border rounded-card hover:border-brand-blue hover:shadow-card-hover transition-all overflow-hidden flex flex-col"
    >
      {/* Image area */}
      <div className="relative h-44 bg-gradient-to-br from-brand-cyan to-brand-lavender flex items-center justify-center">
        <PanelIllustration />
        <span className={`pill absolute top-2.5 left-2.5 text-[11px] font-semibold ${cat.pill}`}>
          {cat.label}
        </span>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-brand-navy text-sm leading-snug mb-1">{product.name}</h3>
        <p className="text-ui-muted text-xs leading-relaxed mb-3 line-clamp-2">{product.shortDesc}</p>

        {/* Specs */}
        {!compact && (
          <div className="flex flex-wrap gap-1 mb-4 mt-auto">
            {specEntries.map(([, val]) => (
              <span key={val} className="text-[11px] bg-ui-bg-alt text-ui-muted border border-ui-border px-2 py-0.5 rounded-pill">
                {val}
              </span>
            ))}
          </div>
        )}

        <Link
          href={`/products/${product.slug}`}
          className="mt-auto w-full text-center bg-brand-navy text-white py-2 rounded-input text-sm font-medium hover:bg-brand-navy-light transition-colors"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  )
}

function PanelIllustration() {
  return (
    <svg width="100" height="70" viewBox="0 0 100 70" fill="none">
      <rect x="5" y="8" width="90" height="54" rx="4" fill="#1e2440" opacity="0.12" />
      <rect x="8" y="11" width="40" height="24" rx="2" fill="#90BEDE" opacity="0.45" />
      <rect x="52" y="11" width="40" height="24" rx="2" fill="#90BEDE" opacity="0.45" />
      <rect x="8" y="39" width="40" height="20" rx="2" fill="#90BEDE" opacity="0.45" />
      <rect x="52" y="39" width="40" height="20" rx="2" fill="#90BEDE" opacity="0.45" />
      <line x1="5" y1="37" x2="95" y2="37" stroke="#90F3FF" strokeWidth="0.7" opacity="0.6" />
      <line x1="50" y1="8" x2="50" y2="62" stroke="#90F3FF" strokeWidth="0.7" opacity="0.6" />
      <circle cx="82" cy="12" r="7" fill="#68EDC6" opacity="0.55" />
    </svg>
  )
}
