import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10">
          {/* Col 1: Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-brand-aqua flex items-center justify-center">
                <svg className="w-4 h-4 text-brand-navy" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                </svg>
              </div>
              <span className="font-bold text-white">SolarCo</span>
            </Link>
            <p className="text-white/50 text-xs leading-relaxed mb-4">
              Powering Kenya with clean, affordable solar energy since 2018.
            </p>
            <div className="flex gap-2">
              {['Facebook', 'Instagram', 'LinkedIn', 'YouTube'].map((s) => (
                <a key={s} href="#" aria-label={s}
                  className="w-8 h-8 rounded bg-white/5 border border-white/10 hover:border-brand-blue flex items-center justify-center text-white/50 hover:text-white transition-colors text-[10px] font-medium">
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-3">Navigation</p>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/products', label: 'Products' },
                { href: '/projects', label: 'Projects' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
                { href: '/privacy', label: 'Privacy Policy' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/55 hover:text-white text-xs transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Products */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-3">Products</p>
            <ul className="space-y-2">
              {[
                { href: '/products?cat=residential', label: 'Residential Systems' },
                { href: '/products?cat=commercial', label: 'Commercial Systems' },
                { href: '/products?cat=water-heater', label: 'Solar Water Heaters' },
                { href: '/products?cat=accessory', label: 'Accessories' },
                { href: '/products', label: 'View All Products' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/55 hover:text-white text-xs transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-3">Contact</p>
            <ul className="space-y-2.5 text-xs text-white/55">
              <li>+254 700 000 000</li>
              <li>info@solarco.co.ke</li>
              <li>Mon–Fri 8am–5pm<br />Sat 9am–1pm</li>
            </ul>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '254700000000'}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 bg-[#25D366] text-white px-3 py-1.5 rounded-input text-xs font-semibold hover:bg-[#1db954] transition-colors"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/30 text-xs">© 2026 SolarCo Kenya. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-white/30 hover:text-white/60 text-xs transition-colors">Privacy</Link>
            <Link href="/privacy#terms" className="text-white/30 hover:text-white/60 text-xs transition-colors">Terms</Link>
          </div>
        </div>
        <div className="container-max px-4 sm:px-6 lg:px-8 pb-3">
          <p className="text-white/20 text-[10px] text-center">
            All images and project data are representative. Contact us for a site-specific assessment.
          </p>
        </div>
      </div>
    </footer>
  )
}
