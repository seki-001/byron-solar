'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { products, type ProductCategory } from '@/lib/products'
import ProductCard from '../components/ProductCard'

type FilterTab = 'all' | ProductCategory

const tabs: { value: FilterTab; label: string; count: number }[] = [
  { value: 'all', label: 'All Products', count: products.length },
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

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState<FilterTab>('all')

  const filtered = useMemo(
    () => (activeTab === 'all' ? products : products.filter((p) => p.category === activeTab)),
    [activeTab]
  )

  return (
    <main className="pt-14 md:pt-[92px]">
      {/* Page header */}
      <div className="bg-white border-b border-ui-border py-6">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-ui-subtle mb-1">
            <span className="hover:underline cursor-pointer">Home</span> › Products
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold text-brand-navy">Solar Products Kenya</h1>
          <p className="text-ui-muted text-sm mt-1">
            Quality solar systems, inverters, batteries, and water heaters — designed for Kenya.
          </p>
        </div>
      </div>

      {/* Sticky filter tabs */}
      <div className="bg-white border-b border-ui-border sticky top-14 z-40">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-2.5 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`shrink-0 flex items-center gap-1.5 px-4 py-1.5 rounded-input text-sm font-medium transition-all ${
                  activeTab === tab.value
                    ? 'bg-brand-navy text-white'
                    : 'bg-ui-bg-alt text-ui-muted hover:bg-brand-cyan hover:text-brand-navy border border-ui-border'
                }`}
              >
                {tab.label}
                <span className={`text-[11px] px-1.5 py-0.5 rounded-pill font-semibold ${
                  activeTab === tab.value ? 'bg-white/20 text-white' : 'bg-ui-border text-ui-subtle'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products grid */}
      <div className="bg-ui-bg-alt min-h-screen">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-xs text-ui-subtle mb-4">
            {filtered.length} result{filtered.length !== 1 ? 's' : ''}
          </p>
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
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
        </div>
      </div>
    </main>
  )
}
