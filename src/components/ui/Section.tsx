import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '../../lib/utils'

export function Section({ className, children, ...props }: ComponentPropsWithoutRef<'section'>) {
  return (
    <section
      className={cn('mx-auto w-full max-w-6xl px-6 py-20 sm:py-24 md:px-8 lg:py-28', className)}
      {...props}
    >
      {children}
    </section>
  )
}
