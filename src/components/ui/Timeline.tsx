import type { ReactNode } from 'react'

export function Timeline({ children }: { children: ReactNode }) {
  return (
    <div className="relative border-l border-border pl-4 sm:pl-6">
      <div
        aria-hidden="true"
        className="absolute left-[-7px] top-0 bottom-0 w-px bg-border"
      />
      <div className="space-y-6">{children}</div>
    </div>
  )
}

export function TimelineItem({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <span
        aria-hidden="true"
        className="absolute left-[-2.375rem] top-0.5 block h-2.5 w-2.5 rounded-full border-2 border-background bg-accent"
      />
      <div className="rounded-lg border border-border bg-card p-5">{children}</div>
    </div>
  )
}
