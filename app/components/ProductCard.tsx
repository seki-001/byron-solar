import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Product } from '@/lib/products'

const categoryStyles: Record<string, { pill: string; label: string }> = {
  residential: { pill: 'bg-brand-cyan/80 text-brand-navy', label: 'Residential' },
  commercial: { pill: 'bg-brand-lavender/90 text-brand-navy', label: 'Commercial' },
  'water-heater': { pill: 'bg-brand-cyan/70 text-brand-navy', label: 'Water Heater' },
  accessory: { pill: 'bg-brand-aqua/30 text-brand-navy', label: 'Accessory' },
}

interface Props {
  product: Product
  compact?: boolean
}

export default function ProductCard({ product, compact = false }: Props) {
  const cat = categoryStyles[product.category] ?? { pill: 'glass-subtle text-ui-muted', label: product.category }
  const specEntries = Object.entries(product.specs).slice(0, 3)

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: 'spring', stiffness: 400 }}
      className="arc-card overflow-hidden flex flex-col"
    >
      <div className="relative h-44 m-3 mb-0 rounded-[1.25rem] overflow-hidden bg-ui-bg-alt">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span className={`pill absolute top-2.5 left-2.5 text-[11px] font-semibold backdrop-blur-sm ${cat.pill}`}>
          {cat.label}
        </span>
      </div>

      <div className="p-4 pt-3 flex flex-col flex-1">
        <h3 className="font-semibold text-brand-navy text-sm leading-snug mb-1">{product.name}</h3>
        <p className="text-ui-muted text-xs leading-relaxed mb-3 line-clamp-2">{product.shortDesc}</p>

        {!compact && (
          <div className="flex flex-wrap gap-1 mb-4 mt-auto">
            {specEntries.map(([, val]) => (
              <span key={val} className="text-[11px] glass-subtle text-ui-muted px-2 py-0.5 rounded-full">
                {val}
              </span>
            ))}
          </div>
        )}

        <Link
          href={`/products/${product.slug}`}
          className="mt-auto w-full text-center btn-primary py-2 block"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  )
}
