import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '../../lib/utils'

export function Section({ className, children, ...props }: ComponentPropsWithoutRef<'section'>) {
  return (
    <section
      className={cn('mx-auto w-full max-w-7xl px-6 md:px-8 py-16 sm:py-20 lg:py-24', className)}
      {...props}
    >
      {children}
    </section>
  )
}
