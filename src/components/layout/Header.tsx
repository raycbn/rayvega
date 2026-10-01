import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { NAV_LINKS } from '../../lib/data'
import { useLanguage } from '../../lib/i18n'
import { Button } from '../ui/Button'
import { ThemeToggle } from './ThemeToggle'

const navLink =
  'block w-full rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background md:inline-flex md:w-auto md:px-3 md:py-1.5'

export function Header() {
  const [open, setOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    if (!open) return
    closeButtonRef.current?.focus()
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open])

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-8">
        <a href="/#hero" className="text-lg font-semibold tracking-tight text-foreground">
          Ray Vega
        </a>

        <nav className="hidden md:block" aria-label={t.nav.main}>
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={navLink}>
                  {t.nav[link.label.toLowerCase() as keyof typeof t.nav]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">          <div
            className="flex items-center rounded-full border border-border bg-card/60 p-0.5"
            role="group"
            aria-label={t.nav.language}
          >
            {(['en', 'es'] as const).map((option) => (
              <button
                key={option}
                type="button"
                aria-pressed={language === option}
                aria-label={option === 'en' ? t.nav.english : t.nav.spanish}
                onClick={() => setLanguage(option)}
                className={
                  language === option
                    ? 'rounded-full bg-primary px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-primary-foreground'
                    : 'rounded-full px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground'
                }
              >
                {option}
              </button>
            ))}
          </div>
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={t.nav.openMenu}
            aria-controls="primary-menu"
            aria-expanded={open}
            aria-haspopup="dialog"
            onClick={() => setOpen(true)}
            ref={menuButtonRef}
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>            <motion.div
              aria-hidden="true"
              className="fixed inset-0 z-30 bg-background/60 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.nav
              id="primary-menu"
              role="dialog"
              aria-modal="true"
              aria-label={t.nav.primary}
              className="fixed inset-y-0 right-0 z-40 flex h-screen w-64 flex-col gap-2 overflow-y-auto border-l border-border bg-background p-6 shadow-lg md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.2 }}
            >
              <Button
                variant="ghost"
                size="icon"
                className="self-end"
                aria-label={t.nav.closeMenu}
                onClick={() => setOpen(false)}
                ref={closeButtonRef}
              >
                <X className="h-4 w-4" />
              </Button>
              <div className="flex items-center gap-1 pb-2 pt-2">                {(['en', 'es'] as const).map((option) => (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={language === option}
                    aria-label={option === 'en' ? t.nav.english : t.nav.spanish}
                    onClick={() => setLanguage(option)}
                    className={
                      language === option
                        ? 'rounded-md bg-primary px-3 py-2 font-mono text-xs font-semibold uppercase text-primary-foreground'
                        : 'rounded-md px-3 py-2 font-mono text-xs font-semibold uppercase text-muted-foreground hover:bg-muted'
                    }
                  >
                    {option}
                  </button>
                ))}
              </div>
              <ul className="flex flex-col gap-1 pt-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={navLink}
                    >
                      {t.nav[link.label.toLowerCase() as keyof typeof t.nav]}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
