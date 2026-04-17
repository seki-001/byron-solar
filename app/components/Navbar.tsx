'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 4)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200 ${
          scrolled ? 'shadow-sm border-b border-ui-border' : 'border-b border-ui-border'
        }`}
      >
        {/* Top bar */}
        <div className="container-max px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-brand-navy flex items-center justify-center">
              <SunIcon className="w-5 h-5 text-brand-aqua" />
            </div>
            <span className="text-base font-bold text-brand-navy tracking-tight">SolarCo</span>
          </Link>

          {/* Desktop nav — centre */}
          <nav className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-sm font-medium rounded transition-colors ${
                    active
                      ? 'text-brand-navy'
                      : 'text-ui-muted hover:text-brand-navy hover:bg-ui-bg-alt'
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute bottom-0.5 left-3.5 right-3.5 h-0.5 bg-brand-blue rounded-full"
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Right: CTA + phone */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a href="tel:+254700000000" className="text-xs text-ui-muted hover:text-brand-navy transition-colors">
              +254 700 000 000
            </a>
            <Link
              href="/contact"
              className="bg-brand-navy text-white text-sm font-semibold px-4 py-2 rounded-input hover:bg-brand-navy-light transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden p-2 rounded text-ui-muted hover:text-brand-navy hover:bg-ui-bg-alt transition-colors"
            aria-label="Open menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Category strip */}
        <div className="hidden md:block border-t border-ui-border bg-ui-bg-alt">
          <div className="container-max px-4 sm:px-6 lg:px-8 h-9 flex items-center gap-4 text-xs text-ui-muted">
            <Link href="/products?cat=residential" className="hover:text-brand-navy transition-colors">Residential Systems</Link>
            <span className="text-ui-border-strong">|</span>
            <Link href="/products?cat=commercial" className="hover:text-brand-navy transition-colors">Commercial Systems</Link>
            <span className="text-ui-border-strong">|</span>
            <Link href="/products?cat=water-heater" className="hover:text-brand-navy transition-colors">Solar Water Heaters</Link>
            <span className="text-ui-border-strong">|</span>
            <Link href="/products?cat=accessory" className="hover:text-brand-navy transition-colors">Accessories & Batteries</Link>
            <span className="text-ui-border-strong">|</span>
            <Link href="/projects" className="hover:text-brand-navy transition-colors">Completed Projects</Link>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-[100] bg-white flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.25 }}
          >
            <div className="flex items-center justify-between px-4 h-14 border-b border-ui-border">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-brand-navy flex items-center justify-center">
                  <SunIcon className="w-4 h-4 text-brand-aqua" />
                </div>
                <span className="font-bold text-brand-navy">SolarCo</span>
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 text-ui-muted hover:text-brand-navy rounded"
                aria-label="Close menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col px-4 pt-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center py-3.5 text-base border-b border-ui-border font-medium transition-colors ${
                      pathname === link.href ? 'text-brand-navy' : 'text-ui-muted hover:text-brand-navy'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-5"
              >
                <Link href="/contact" className="btn-primary block text-center rounded-input">
                  Get a Free Quote
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  )
}
