import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../../lib/useTheme'
import { useLanguage } from '../../lib/i18n'
import { Button } from '../ui/Button'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const { t } = useLanguage()
  const next = theme === 'dark' ? 'light' : 'dark'
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={t.common.toggleColorScheme}
      title={t.common.toggleColorScheme}
      onClick={() => setTheme(next)}
    >
      {theme === 'dark' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </Button>
  )
}
