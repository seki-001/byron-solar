'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import ArcnadLogo from './ArcnadLogo'

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
      <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 pt-3">
        <div
          className={`container-max glass-nav rounded-full transition-shadow duration-200 ${
            scrolled ? 'shadow-card-hover' : ''
          }`}
        >
          <div className="px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
            <ArcnadLogo size="md" className="shrink-0 hidden sm:inline-flex" />
            <ArcnadLogo variant="mark" size="md" className="shrink-0 sm:hidden" />

            <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
              {navLinks.map((link) => {
                const active = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3.5 py-2 text-sm font-medium rounded-full transition-colors ${
                      active
                        ? 'glass-nav-link-active text-brand-navy'
                        : 'text-ui-muted hover:text-brand-navy hover:glass-nav-pill'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            <div className="hidden md:flex items-center gap-3 shrink-0">
              <a
                href="tel:+254714311669"
                className="text-xs text-ui-muted hover:text-brand-navy transition-colors"
              >
                +254 714 311 669
              </a>
              <Link href="/contact" className="btn-primary px-4 py-2">
                Get a Quote
              </Link>
            </div>

            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden glass-icon-btn"
              aria-label="Open menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="menu-backdrop"
              className="glass-overlay z-[90] md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              key="mobile-menu"
              className="fixed top-3 right-3 bottom-3 left-3 z-[100] glass-panel-dropdown rounded-3xl flex flex-col md:hidden"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ type: 'tween', duration: 0.22 }}
            >
              <div className="flex items-center justify-between px-5 h-14 border-b border-white/50">
                <ArcnadLogo size="sm" />
                <button
                  onClick={() => setMenuOpen(false)}
                  className="glass-icon-btn"
                  aria-label="Close menu"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col px-4 pt-4 flex-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center py-3.5 px-3 text-base rounded-2xl font-medium transition-colors mb-1 ${
                        pathname === link.href
                          ? 'glass-nav-link-active text-brand-navy'
                          : 'text-ui-muted hover:text-brand-navy hover:glass-subtle'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.04 }}
                  className="pt-4 mt-auto pb-6"
                >
                  <Link href="/contact" className="btn-primary block text-center w-full">
                    Get a Free Quote
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
