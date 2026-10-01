import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { SOCIAL } from '../../lib/data'
import { useLanguage } from '../../lib/i18n'
import { ButtonLink } from '../ui/Button'
import { GitHub } from '../ui/GitHubIcon'
import { LinkedIn } from '../ui/LinkedInIcon'

export function Hero() {
  const { t } = useLanguage()
  const focusAreas = [t.hero.focusSystems, t.hero.focusCloud, t.hero.focusSecurity, t.hero.focusAutomation, t.hero.focusAI]
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[calc(100dvh-4rem)] items-center overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_75%_35%,var(--accent)/0.12,transparent_30%),radial-gradient(circle_at_20%_80%,var(--primary)/0.08,transparent_28%)]"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -z-10 h-px w-[70vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/30 to-transparent"
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-20 sm:py-24 md:px-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(260px,0.55fr)] lg:gap-16 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/70 px-3 py-1 text-xs font-medium tracking-[0.18em] text-muted-foreground shadow-sm backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            RAY VEGA
          </div>

          <h1 className="mt-7 max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl">
            {t.hero.headline}
            <span className="mt-1 block text-accent">{t.hero.subline}</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            {t.hero.description}
          </p>

          <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="/#projects" variant="primary" size="lg" rightIcon={<ArrowUpRight className="h-4 w-4" />}>
              {t.hero.viewProjects}
            </ButtonLink>
            <ButtonLink
              href={SOCIAL.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
              leftIcon={<GitHub className="h-4 w-4" />}
            >
              GitHub
            </ButtonLink>
            {SOCIAL.linkedin ? (
              <ButtonLink
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
                leftIcon={<LinkedIn className="h-4 w-4" />}
              >
                LinkedIn
              </ButtonLink>
            ) : null}
          </div>

          <a
            href="/#about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.hero.exploreProfile}
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </a>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.12 }}
          className="hidden lg:block"
          aria-label={t.hero.areasLabel}
        >
          <div className="rounded-2xl border border-border/80 bg-card/65 p-5 shadow-xl shadow-black/5 backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-border/70 pb-4">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {t.hero.focusAreas}
              </span>
              <span className="font-mono text-[10px] text-muted-foreground/70">01—05</span>
            </div>

            <ul className="mt-2 divide-y divide-border/60">
              {focusAreas.map((area, index) => (
                <li key={area} className="flex items-center justify-between py-4">
                  <span className="font-mono text-xs text-muted-foreground/70">
                    0{index + 1}
                  </span>
                  <span className="text-sm font-medium text-foreground">{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.aside>
      </div>
    </section>
  )
}
