import { Suspense } from 'react'
import type { Metadata } from 'next'
import ProductsClient from './ProductsClient'

export const metadata: Metadata = {
  title: 'Solar Products Kenya',
  description: 'Quality solar systems, inverters, batteries, and water heaters — designed for Kenya.',
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <main className="page-top glass-grid-bg min-h-screen">
          <div className="container-max px-4 sm:px-6 lg:px-8 pb-6">
            <div className="glass-panel-light rounded-3xl py-6 px-6 sm:px-8 animate-pulse h-40" />
          </div>
        </main>
      }
    >
      <ProductsClient />
    </Suspense>
  )
}
