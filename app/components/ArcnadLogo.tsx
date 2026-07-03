import Link from 'next/link'
import { cn } from '@/lib/cn'

type LogoTheme = 'light' | 'dark'
type LogoVariant = 'full' | 'mark' | 'wordmark'

interface ArcnadLogoProps {
  variant?: LogoVariant
  theme?: LogoTheme
  className?: string
  href?: string
  size?: 'sm' | 'md' | 'lg'
}

const markSizes = { sm: 28, md: 32, lg: 40 } as const

/** Panel grid + small sun accent — clear solar identity at any size */
export function ArcnadMark({
  size = 32,
  theme = 'light',
  className,
}: {
  size?: number
  theme?: LogoTheme
  className?: string
}) {
  const bg = theme === 'dark' ? '#0f1428' : '#1e2440'
  const cell = '#68EDC6'
  const sun = theme === 'dark' ? '#90F3FF' : '#90BEDE'

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('shrink-0', className)}
      aria-hidden
    >
      <rect width="32" height="32" rx="8" fill={bg} />
      <circle cx="24" cy="8" r="3.5" fill={sun} opacity="0.9" />
      <g stroke={sun} strokeWidth="1.2" strokeLinecap="round" opacity="0.7">
        <line x1="24" y1="2.5" x2="24" y2="0.5" />
        <line x1="28.5" y1="4" x2="30" y2="3" />
        <line x1="19.5" y1="4" x2="18" y2="3" />
      </g>
      <rect x="5" y="14" width="22" height="13" rx="2" fill={cell} fillOpacity="0.2" stroke={cell} strokeWidth="0.75" strokeOpacity="0.5" />
      {[0, 1, 2].map((col) =>
        [0, 1].map((row) => (
          <rect
            key={`${col}-${row}`}
            x={6.5 + col * 7}
            y={15.5 + row * 5.5}
            width="6"
            height="4.5"
            rx="0.5"
            fill={cell}
            fillOpacity={0.35 + col * 0.08}
            stroke="#1e2440"
            strokeWidth="0.35"
            strokeOpacity="0.25"
          />
        ))
      )}
    </svg>
  )
}

export function ArcnadWordmark({
  theme = 'light',
  size = 'md',
  className,
}: {
  theme?: LogoTheme
  size?: 'sm' | 'md' | 'lg'
  className?: string
}) {
  const textSize = size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : 'text-[15px]'
  const color = theme === 'dark' ? 'text-white' : 'text-brand-navy'

  return (
    <span className={cn('font-bold tracking-tight whitespace-nowrap', textSize, color, className)}>
      ARCNAD{' '}
      <span className={cn('font-semibold', theme === 'dark' ? 'text-white/70' : 'text-brand-blue')}>
        SYSTEMS
      </span>
    </span>
  )
}

export default function ArcnadLogo({
  variant = 'full',
  theme = 'light',
  className,
  href = '/',
  size = 'md',
}: ArcnadLogoProps) {
  const markPx = markSizes[size]

  const inner =
    variant === 'mark' ? (
      <ArcnadMark size={markPx} theme={theme} />
    ) : variant === 'wordmark' ? (
      <ArcnadWordmark theme={theme} size={size} />
    ) : (
      <span className="flex items-center gap-2">
        <ArcnadMark size={markPx} theme={theme} />
        <ArcnadWordmark theme={theme} size={size} />
      </span>
    )

  if (!href) {
    return <span className={cn('inline-flex items-center', className)}>{inner}</span>
  }

  return (
    <Link href={href} className={cn('inline-flex items-center', className)} aria-label="Arcnad Systems — Home">
      {inner}
    </Link>
  )
}
