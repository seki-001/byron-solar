PROJECT OVERVIEW
You are building SolarCo.co.ke — a premium solar solutions awareness website for a Kenyan solar company. This is NOT an e-commerce store. The goal is: showcase the brand, display products and completed projects, and capture enquiries from potential clients. Think of it as a high-converting digital brochure.

Stack: Next.js 14 App Router + TypeScript + Tailwind CSS + Framer Motion + Three.js (React Three Fiber) + Resend (email) + react-hook-form + zod
Deployment: Vercel (zero-config)
DESIGN SYSTEM
Palette:
  Base bg: #ffffff (light)
  Section alternates: #f8faf7 (light sage tint)
  Dark sections: #0d1f12 (deep forest green)
  Accent primary: #16a34a (green-600)
  Accent secondary: #f59e0b (amber — solar/energy warmth)
  Text primary: #111827
  Text secondary: #4b5563
  Font: Inter (next/font/google)
  Border radius: 12px cards, 8px inputs
  Transitions: Framer Motion fade + slide-up, stagger 0.1s delay per card

Glass card (for stats/highlights):
  background: rgba(255,255,255,0.6)
  backdrop-filter: blur(16px)
  border: 1px solid rgba(255,255,255,0.4)
  box-shadow: 0 4px 24px rgba(0,0,0,0.06)
SITE STRUCTURE
app/
├── page.tsx                     (Homepage)
├── products/
│   ├── page.tsx                 (Product catalogue)
│   └── [slug]/page.tsx          (Single product detail)
├── projects/page.tsx            (Completed installations gallery)
├── about/page.tsx               (About + team + certifications)
├── contact/page.tsx             (Contact + quote request)
├── privacy/page.tsx
├── layout.tsx
└── components/
    ├── Navbar.tsx
    ├── Footer.tsx
    ├── SolarScene.tsx           (3D component — see below)
    ├── CounterStrip.tsx         (Animated stats)
    ├── ProductCard.tsx
    ├── ProjectCard.tsx
    ├── QuoteForm.tsx
    ├── ContactForm.tsx
    └── WhatsAppButton.tsx

lib/
├── products.ts                  (product data)
├── projects.ts                  (project data)
└── team.ts                      (team data)
PAGE 1 — HOMEPAGE (most important, make it stunning)
HERO SECTION (full viewport, dark bg #0d1f12):
  - 3D interactive component (React Three Fiber): rotating solar panel model with ambient light animation. Panel slowly rotates, particles float around it. On mobile: replace with a high-quality static SVG illustration (no R3F on mobile).
  - Headline: "Powering Kenya with Clean Solar Energy" — 60px Inter 700, white
  - Subheadline: "Residential and commercial solar installations across Kenya. Trusted by 500+ homes and businesses."
  - Two CTA buttons: "Get a Free Quote" (solid green #16a34a) + "View Our Work" (ghost/outline white)
  - Framer Motion stagger entrance (headline → sub → buttons, 0.2s delay each)
  - Scroll indicator: animated chevron at bottom

STATS STRIP (glass cards on dark bg, just below hero):
  - 500+ Installations
  - 10+ Years Experience
  - 47 Counties Covered
  - 5-Year Warranty
  Each stat: AnimatedCounter (count up on scroll into view using useInView)

WHY SOLAR SECTION (white bg, 3 columns):
  Cards with icon + title + description:
  - "Cut electricity bills by up to 80%"
  - "Energy independence from KPLC outages"
  - "Reduce your carbon footprint"
  - "Long-term investment that pays for itself"
  Framer Motion stagger on scroll

FEATURED PRODUCTS (alternating sage bg, card grid 3 cols):
  Pull from lib/products.ts (first 3 featured products)
  Each card: product image placeholder, name, short description, "View Details" link
  "View All Products" CTA at bottom

COMPLETED PROJECTS PREVIEW (dark bg, mosaic layout):
  3 large project cards with: image, location, system size (e.g. "10kW"), client type (Residential/Commercial), hover overlay with brief description
  "See All Projects" CTA

TESTIMONIALS (white bg, horizontal scroll on mobile):
  3 testimonial cards: quote, name, county, system type
  Use placeholder data

CONTACT CTA BANNER (full-width, green bg #16a34a):
  "Ready to go solar? Get your free site assessment today."
  Single input: name, phone → "Request Callback" button
  Also: WhatsApp quick-chat button
PAGE 2 — PRODUCTS
Categories (tabs/filter buttons at top):
  - All | Residential | Commercial | Solar Water Heaters | Accessories

Products grid (3 col desktop, 2 col tablet, 1 col mobile):
  Each ProductCard:
    - Image (placeholder)
    - Badge: category tag (green or amber)
    - Product name (18px bold)
    - Short description (2 lines)
    - Key specs (e.g. "5kW | Monocrystalline | Grid-tie")
    - "Learn More" button → /products/[slug]
  Filter by category is client-side (no page reload)

Single product page [slug]:
  - Large hero image area (placeholder)
  - Product name + category badge
  - Full description
  - Specs table (clean, zebra stripes)
  - "Enquire About This Product" button → scrolls to bottom form
  - Related products (3 cards)
  - Lead form: Name, Phone, Email, County (dropdown), Message → POST to /api/enquiry
PAGE 3 — PROJECTS (PORTFOLIO)
Hero: "Our Work Across Kenya" — dark section with subtitle

Filters: All | Residential | Commercial | Industrial

Masonry-style grid (CSS columns, not JS masonry library — keep it fast):
  Each ProjectCard:
    - Placeholder image
    - Overlay on hover (Framer Motion): project name, location, system size
    - Click → expand modal (use Framer Motion AnimatePresence) showing full project details: description, system specs, challenge + solution, outcomes

Callout strip: "Want results like these? Let's plan your installation."
  CTA → /contact
PAGE 4 — ABOUT
Sections:
1. Brand story (2-column: text left, abstract green geometric SVG right)
2. Mission + Vision cards (2 side-by-side glass cards)
3. Team grid (3 cards): placeholder avatar circle, name, role, short bio
4. Certifications & Partners strip: placeholder logos in grayscale row
5. Timeline: company history (2018 → 2024 → 2026), horizontal scrolling timeline on mobile
6. "Join 500+ happy customers" CTA → /contact
PAGE 5 — CONTACT
Two sections side by side (desktop), stacked (mobile):

LEFT — Quote Request Form (glass card):
  Fields: Full Name* | Phone Number* | Email | County (dropdown, all 47 Kenya counties) | Property Type (Residential / Commercial / Industrial) | Estimated Monthly KPLC Bill (KES range slider) | Message / Additional Info
  Submit → POST /api/enquiry → send email via Resend + show success toast
  Validation: react-hook-form + zod

RIGHT — General Contact Info + Map placeholder:
  Phone number placeholder
  Email placeholder
  Operating hours
  WhatsApp button: "Chat on WhatsApp" (opens wa.me/254... link)
  Embedded Google Maps iframe placeholder (leave src empty, add TODO comment)

Below form: FAQ accordion (5 items):
  - "Do you offer financing options?"
  - "How long does installation take?"
  - "What warranty do you offer?"
  - "Do you service all counties in Kenya?"
  - "How do I know what system size I need?"
  Each: Framer Motion layout animation on open/close
3D COMPONENT — SolarScene.tsx
Use @react-three/fiber + @react-three/drei.

Create a simple but polished 3D scene:
  - A solar panel (flat rectangular geometry, dark blue/black material with slight metallic sheen, grid lines on surface using a texture or shader)
  - Slow continuous rotation on Y axis (0.003 rad/frame)
  - Warm point light (amber, simulating sun) from top-right
  - Cool ambient light (dim white)
  - Floating particle system: 40 small white spheres randomly positioned, slowly drifting upward
  - Canvas: transparent background (alpha: true), no fog
  - Responsive: canvas fills parent container

Mobile detection: use a custom useIsMobile hook (checks window.innerWidth < 768). If mobile, render a static SVG solar panel illustration instead of the canvas — do NOT load R3F on mobile (dynamic import with ssr: false AND conditional rendering).

Wrap in React.Suspense with a simple loading skeleton.
DATA FILES
lib/products.ts — export const products array with 6 items:
  Interface: { id, slug, name, category, shortDesc, fullDesc, specs: Record, featured: boolean, image: string (placeholder path) }
  Categories: 'residential' | 'commercial' | 'water-heater' | 'accessory'
  Example products: 3kW Home System, 10kW Business System, Solar Water Heater 200L, Hybrid Inverter 5kW, Solar Street Light Kit, Battery Storage Unit 5kWh

lib/projects.ts — export const projects array with 6 items:
  Interface: { id, slug, title, location, county, clientType, systemSize, description, challenge, solution, outcomes: string[], image: string }
  Mix of residential + commercial across different Kenyan counties

lib/team.ts — 3 team members with name, role, bio, avatar placeholder
NAVBAR
Logo: Company name in bold + small solar icon (SVG sun)
Links: Home | Products | Projects | About | Contact
"Get a Quote" pill button (green, right side)

Behaviour:
  - Transparent with white text when overlapping dark hero
  - White bg with dark text after scrolling 80px (useScrollPosition hook)
  - Smooth transition between states (Framer Motion)
  - Mobile: hamburger → full-screen overlay menu (dark bg #0d1f12, white links)
  - Mobile menu: Framer Motion slide-in from right, stagger links entrance
  - Active link: green underline indicator
FOOTER
Dark bg #0d1f12, 4 columns:
  Col 1: Logo + tagline + social icons (placeholder links for Facebook, Instagram, LinkedIn, YouTube)
  Col 2: Quick Links (all pages)
  Col 3: Products (links to categories)
  Col 4: Contact info + WhatsApp CTA

Bottom bar: "© 2026 [Company Name]. All rights reserved." | Privacy Policy | Terms of Service
Disclaimer: "All images and project data are representative. Contact us for a site-specific assessment."
API ROUTES
app/api/enquiry/route.ts:
  POST handler
  Body: zod-validated (name, phone, email?, county, propertyType, message?)
  Action: send email using Resend (use process.env.RESEND_API_KEY)
  Email to: process.env.CONTACT_EMAIL (placeholder)
  Return: { success: true } or error 400/500
  Add TODO comment: "Replace with your Resend API key and verified sender domain"

WhatsApp integration:
  WhatsAppButton.tsx component: fixed bottom-right on all pages, green circle with WhatsApp SVG icon, opens wa.me/254XXXXXXXXX link in new tab. Add TODO comment for the phone number.
SEO CONFIG
Use Next.js built-in Metadata API (no next-seo needed in Next.js 14):

app/layout.tsx metadataBase: new URL('https://solarco.co.ke')
Homepage: title="Solar Solutions Kenya | [Company Name]", description="Professional solar panel installation for homes and businesses across Kenya. Get a free site assessment today."
Products: title="Solar Products Kenya | [Company Name]"
Projects: title="Solar Installation Projects Kenya | [Company Name]"
Contact: title="Get a Free Solar Quote Kenya | [Company Name]"

JSON-LD on homepage: LocalBusiness schema (type: ElectricalContractor, areaServed: Kenya)
JSON-LD on contact page: FAQPage schema from the FAQ accordion data

sitemap.ts: auto-generated using Next.js built-in sitemap
robots.ts: allow all
ANIMATIONS — GLOBAL RULES
Use Framer Motion for ALL animations. No CSS keyframes except for simple loaders.

Scroll animations: use whileInView={{ opacity: 1, y: 0 }} with initial={{ opacity: 0, y: 30 }}. Always add viewport={{ once: true }} so they only animate once.

Stagger children: wrap card grids in motion.div with staggerChildren: 0.1 in variants.

Page transitions: wrap page content in motion.main with initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}.

Hover on cards: whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300 }}.

Never use animate on every keystroke or mouse move (performance). The 3D scene handles its own animation loop.
PERFORMANCE RULES
- next/image for ALL images (width, height, loading="lazy" on below-fold)
- Dynamic import R3F: const SolarScene = dynamic(() => import('./SolarScene'), { ssr: false })
- No Three.js on mobile (conditional render + no import)
- Tailwind purge is automatic — no unused CSS
- All fonts via next/font (zero layout shift)
- Target Lighthouse score: 90+ performance on mobile
ENV VARIABLES (.env.local)
RESEND_API_KEY=your_resend_key_here
CONTACT_EMAIL=info@solarco.co.ke
NEXT_PUBLIC_WHATSAPP_NUMBER=254700000000
NEXT_PUBLIC_SITE_URL=https://solarco.co.ke
BUILD ORDER — FOLLOW EXACTLY
1. next.js 14 init + tailwind + framer-motion + @react-three/fiber + @react-three/drei + react-hook-form + zod + resend
2. Design tokens in globals.css + Tailwind config (extend theme with brand colours)
3. lib/products.ts + lib/projects.ts + lib/team.ts (all data, TypeScript interfaces)
4. Root layout.tsx + Navbar.tsx + Footer.tsx + WhatsAppButton.tsx
5. SolarScene.tsx (3D component) + test isolation at /test-3d
6. Homepage — build section by section, verify scroll animations
7. Products catalogue + single product page
8. Projects portfolio + modal
9. About page
10. Contact page + /api/enquiry route
11. Privacy page + Terms page (generated legal content)
12. SEO metadata + sitemap.ts + robots.ts
13. Final mobile check: test every page at 375px width. Confirm 3D scene fallback works.
14. vercel.json: {} (empty — Vercel auto-detects Next.js, zero config needed)