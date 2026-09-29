import { useEffect, useState } from 'react'

export type Theme = 'dark' | 'light'

function readTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'
  const saved = localStorage.getItem('theme')
  if (saved === 'light' || saved === 'dark') return saved
  return 'dark'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readTheme)

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  return { theme, setTheme }
}
