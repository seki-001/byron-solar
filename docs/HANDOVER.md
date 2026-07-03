# ARCNAD SYSTEMS — Project Handover

**Site:** [arcnad.co.ke](https://arcnad.co.ke)  
**Repo:** `seki-001/byron-solar`  
**Stack:** Next.js 14 · TypeScript · Tailwind · Framer Motion · React Three Fiber · Web3Forms · react-hook-form · zod

---

## Brand

| Field | Value |
|-------|-------|
| Company | ARCNAD SYSTEMS |
| Phone / WhatsApp | +254 714 311 669 |
| Email | info@arcnad.co.ke |
| Address | Maridadi Business Plaza, Nyamakima, P.O. Box 74429-00200, Nairobi |

---

## Environment Variables (Vercel + `.env.local`)

```
NEXT_PUBLIC_SITE_URL=https://arcnad.co.ke
NEXT_PUBLIC_WHATSAPP_NUMBER=254714311669
WEB3FORMS_ACCESS_KEY=<from web3forms.com dashboard>
```

Copy `.env.example` to `.env.local` for local dev. Redeploy after changing env vars.

### Form delivery — Web3Forms (free)

1. Sign up at [web3forms.com](https://web3forms.com) (free: **250 submissions/month**)
2. Create a form → set notification email (e.g. `info@arcnad.co.ke`)
3. Copy the **Access Key** → `WEB3FORMS_ACCESS_KEY` in Vercel
4. Submit a test enquiry on `/contact`

No domain verification or paid email plan required. Submissions also appear in the Web3Forms dashboard.

**Alternatives if you outgrow 250/month:** Supabase free tier (store rows in Postgres), Google Forms embed, or Formspree free tier (50/month).

---

## Deploy Flow

1. Push to GitHub → Vercel auto-deploys
2. Add env vars in Vercel → redeploy
3. Point **arcnad.co.ke** DNS to Vercel (A/CNAME per Vercel dashboard)
4. Test contact form + WhatsApp button

---

## Known TODOs

- Footer social links: replace with real profile URLs
- Commit & push if local changes not on remote

---

## API

`POST /api/enquiry` — validates with Zod, forwards to Web3Forms server-side (key never exposed to browser)

---

*Glass UI spec and content paths: see rest of this file / `app/globals.css`*
