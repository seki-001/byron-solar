import { cn } from '@/lib/cn'

interface GlassIconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  dark?: boolean
  children: React.ReactNode
}

export function GlassIconButton({
  dark = false,
  className,
  children,
  ...props
}: GlassIconButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        'glass-icon-btn',
        dark && 'glass-icon-btn-dark',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
