import { forwardRef } from 'react'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '../../lib/utils'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg' | 'icon'

const buttonBase =
  'inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium whitespace-nowrap transition-[background-color,border-color,color,box-shadow,transform] hover:translate-y-[-1px] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'

const buttonVariant: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary',
  secondary:
    'bg-muted text-muted-foreground hover:bg-muted/80 focus-visible:ring-muted-foreground',
  ghost:
    'text-muted-foreground hover:bg-muted focus-visible:ring-muted-foreground',
}

const buttonSize: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-xs',
  md: 'h-9 px-4',
  lg: 'h-11 px-6 text-base',
  icon: 'h-9 w-9 px-0',
}

type ButtonShared = {
  variant?: ButtonVariant
  size?: ButtonSize
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

export type ButtonProps = ComponentPropsWithoutRef<'button'> & ButtonShared

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { className, variant = 'secondary', size = 'md', leftIcon, rightIcon, children, ...props },
    ref,
  ) {
    return (
      <button
        ref={ref}
        className={cn(buttonBase, buttonVariant[variant], buttonSize[size], className)}
        {...props}
      >
        {leftIcon}
        {children}
        {rightIcon}
      </button>
    )
  },
)
Button.displayName = 'Button'

export type ButtonLinkProps = ComponentPropsWithoutRef<'a'> & ButtonShared

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  function ButtonLink(
    { className, variant = 'secondary', size = 'md', leftIcon, rightIcon, children, ...props },
    ref,
  ) {
    return (
      <a
        ref={ref}
        className={cn(buttonBase, buttonVariant[variant], buttonSize[size], className)}
        {...props}
      >
        {leftIcon}
        {children}
        {rightIcon}
      </a>
    )
  },
)
ButtonLink.displayName = 'ButtonLink'
