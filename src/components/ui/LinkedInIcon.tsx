import type { ComponentType } from 'react'

export const LinkedIn: ComponentType<{ className?: string }> = function LinkedIn({
  className,
}: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a3.066 3.066 0 1 1-6.132 0 3.066 3.066 0 0 1 6.132 0zm-5.716 12.019h5.716v-14.03H2.621v14.03z" />
    </svg>
  )
}
