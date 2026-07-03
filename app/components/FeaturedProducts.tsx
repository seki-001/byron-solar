'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { products } from '@/lib/products'
import ProductCard from './ProductCard'

const featured = products.filter((p) => p.featured).slice(0, 3)

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function FeaturedProducts() {
  return (
    <section className="section-padding">
      <div className="container-max">
        {/* Section header — eBay style: label + title + "see all" link on right */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-ui-subtle mb-1">Products</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">Popular solar solutions</h2>
          </div>
          <Link
            href="/products"
            className="hidden sm:flex items-center gap-1 text-sm text-brand-blue hover:text-brand-navy font-medium transition-colors"
          >
            See all products
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featured.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-5 sm:hidden">
          <Link
            href="/products"
            className="w-full block text-center arc-btn-outline"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
