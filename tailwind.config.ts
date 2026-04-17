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
          border: '#e8eaf0',
          'border-strong': '#c8ccd8',
          text: '#1a1a2e',
          muted: '#5a6080',
          subtle: '#8890a8',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        card: '10px',
        input: '6px',
        pill: '999px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(30,36,64,0.08), 0 1px 2px rgba(30,36,64,0.04)',
        'card-hover': '0 4px 16px rgba(30,36,64,0.12)',
        'soft': '0 2px 8px rgba(144,190,222,0.18)',
      },
    },
  },
  plugins: [],
}

export default config
