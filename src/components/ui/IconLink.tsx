import type { ComponentPropsWithoutRef, ComponentType } from 'react'
import { cn } from '../../lib/utils'

export type IconLinkProps = ComponentPropsWithoutRef<'a'> & {
  icon: ComponentType<{ className?: string }>
  label: string
}

export function IconLink({ href, icon: Icon, label, className, ...props }: IconLinkProps) {
  if (!href) return null
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        className,
      )}
      {...props}
    >
      <Icon className="h-4 w-4" />
    </a>
  )
}
