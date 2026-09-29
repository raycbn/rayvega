import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../../lib/useTheme'
import { Button } from '../ui/Button'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const next = theme === 'dark' ? 'light' : 'dark'
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle color scheme"
      title="Toggle color scheme"
      onClick={() => setTheme(next)}
    >
      {theme === 'dark' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </Button>
  )
}
