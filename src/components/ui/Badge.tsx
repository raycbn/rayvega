import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '../../lib/utils'

export type BadgeVariant = 'default' | 'outline' | 'soft'
export type BadgeStatus = 'production' | 'in-progress' | 'archived' | 'pending'

const variantClass: Record<BadgeVariant, string> = {
  default: 'bg-muted text-muted-foreground',
  outline: 'border border-border text-muted-foreground',
  soft: 'bg-muted/40 text-muted-foreground',
}

const statusClass: Record<BadgeStatus, string> = {
  production: 'bg-emerald-500/15 text-emerald-400',
  'in-progress': 'bg-amber-500/15 text-amber-400',
  archived: 'bg-zinc-500/15 text-zinc-400',
  pending: 'bg-blue-500/15 text-blue-400',
}

export type BadgeProps = ComponentPropsWithoutRef<'span'> & {
  variant?: BadgeVariant
  status?: BadgeStatus
}

export function Badge({ className, variant = 'default', status, children }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        status ? statusClass[status] : variantClass[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
