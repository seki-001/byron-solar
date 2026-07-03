import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          lavender: '#E5E1EE',
          cyan: '#DFFDFF',
          blue: '#90BEDE',
          aqua: '#68EDC6',
          electric: '#90F3FF',
          navy: '#1e2440',
          'navy-light': '#2d3a5e',
        },
        ui: {
          bg: '#ffffff',
          'bg-alt': '#f7f8fc',
          canvas: '#F7F7F8',
          surface: '#FAFAFA',
          'muted-bg': '#F4F4F4',
          border: '#e8eaf0',
          'border-strong': '#c8ccd8',
          text: '#1a1a2e',
          muted: '#5a6080',
          subtle: '#8890a8',
        },
        dark: '#1e2440',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        card: '1rem',
        panel: '1.5rem',
        input: '0.75rem',
        pill: '999px',
      },
      boxShadow: {
        card: '0 8px 32px rgba(30,36,64,0.07)',
        'card-hover': '0 12px 40px rgba(30,36,64,0.1)',
        soft: '0 2px 8px rgba(144,190,222,0.18)',
        glass: '0 8px 32px rgba(30,36,64,0.07), inset 0 1px 0 rgba(255,255,255,0.85)',
      },
    },
  },
  plugins: [],
}

export default config
