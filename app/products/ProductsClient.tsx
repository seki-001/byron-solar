'use client'

import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { products, type ProductCategory } from '@/lib/products'
import ProductCard from '../components/ProductCard'

type FilterTab = 'all' | ProductCategory

const VALID_CATS: ProductCategory[] = ['residential', 'commercial', 'water-heater', 'accessory']

const tabs: { value: FilterTab; label: string; count: number }[] = [
  { value: 'all', label: 'All', count: products.length },
  { value: 'residential', label: 'Residential', count: products.filter((p) => p.category === 'residential').length },
  { value: 'commercial', label: 'Commercial', count: products.filter((p) => p.category === 'commercial').length },
  { value: 'water-heater', label: 'Water Heaters', count: products.filter((p) => p.category === 'water-heater').length },
  { value: 'accessory', label: 'Accessories', count: products.filter((p) => p.category === 'accessory').length },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
}

export default function ProductsClient() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState<FilterTab>('all')

  useEffect(() => {
    const cat = searchParams.get('cat')
    if (cat && VALID_CATS.includes(cat as ProductCategory)) {
      setActiveTab(cat as ProductCategory)
    }
  }, [searchParams])

  const filtered = useMemo(
    () => (activeTab === 'all' ? products : products.filter((p) => p.category === activeTab)),
    [activeTab]
  )

  return (
    <main className="page-top glass-grid-bg min-h-screen">
      <div className="container-max px-4 sm:px-6 lg:px-8 pb-6">
        <div className="glass-panel-light rounded-3xl py-6 px-6 sm:px-8">
          <p className="text-xs text-ui-subtle mb-1">
            <Link href="/" className="hover:text-brand-navy">Home</Link> › Products
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-5">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-brand-navy">Solar Products</h1>
              <p className="text-ui-muted text-sm mt-1">
                Systems, inverters, batteries, and water heaters for Kenya.
              </p>
            </div>
            <p className="text-xs text-ui-subtle shrink-0">
              {filtered.length} product{filtered.length !== 1 ? 's' : ''}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/60">
            {tabs.map((tab) => {
              const active = activeTab === tab.value
              return (
                <button
                  key={tab.value}
                  type="button"
                  onClick={() => setActiveTab(tab.value)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    active
                      ? 'bg-brand-navy text-white'
                      : 'text-ui-muted hover:text-brand-navy hover:bg-white/50'
                  }`}
                >
                  {tab.label}
                  <span className={`text-[11px] tabular-nums ${active ? 'text-white/70' : 'text-ui-subtle'}`}>
                    {tab.count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 pb-10">
        <motion.div
          key={activeTab}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filtered.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-ui-muted text-sm py-12">No products in this category yet.</p>
        )}
      </div>
    </main>
  )
}
