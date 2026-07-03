import { cn } from '@/lib/cn'

type GlassTone = 'light' | 'dark' | 'brand'
type GlassRounded = 'xl' | '2xl' | '3xl' | 'full' | 'none'

const toneClass: Record<GlassTone, string> = {
  light: 'glass-panel-light',
  dark: 'glass-panel-dark',
  brand: 'glass-panel-brand',
}

const roundedClass: Record<GlassRounded, string> = {
  none: '',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  '3xl': 'rounded-3xl',
  full: 'rounded-full',
}

interface GlassPanelProps {
  tone?: GlassTone
  rounded?: GlassRounded
  className?: string
  children: React.ReactNode
}

export function GlassPanel({
  tone = 'light',
  rounded = '2xl',
  className,
  children,
}: GlassPanelProps) {
  return (
    <div className={cn(toneClass[tone], roundedClass[rounded], className)}>
      {children}
    </div>
  )
}
