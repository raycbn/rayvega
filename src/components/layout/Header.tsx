import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { NAV_LINKS } from '../../lib/data'
import { Button } from '../ui/Button'
import { ThemeToggle } from './ThemeToggle'

const navLink =
  'block w-full rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background md:inline-flex md:w-auto md:px-3 md:py-1.5'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/60 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-8">
        <a href="#hero" className="text-lg font-semibold tracking-tight text-foreground">
          Ray Vega
        </a>

        <nav className="hidden md:block" aria-label="Main">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={navLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Open menu"
            aria-controls="primary-menu"
            aria-expanded={open}
            aria-haspopup
            onClick={() => setOpen(true)}
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              aria-hidden="true"
              className="fixed inset-0 z-30 bg-background/60 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.nav
              id="primary-menu"
              aria-label="Primary"
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
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
              <ul className="flex flex-col gap-1 pt-4">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={navLink}
                    >
                      {link.label}
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
