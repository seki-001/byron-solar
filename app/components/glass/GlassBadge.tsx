import { cn } from '@/lib/cn'

interface GlassBadgeProps {
  tone?: 'light' | 'dark'
  dot?: boolean
  className?: string
  children: React.ReactNode
}

export function GlassBadge({
  tone = 'light',
  dot = false,
  className,
  children,
}: GlassBadgeProps) {
  return (
    <span
      className={cn(
        tone === 'dark' ? 'glass-badge-dark' : 'glass-badge-light',
        className
      )}
    >
      {dot && <span className="glass-badge-dot" aria-hidden />}
      {children}
    </span>
  )
}
