import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { SOCIAL } from '../../lib/data'
import { Section } from '../ui/Section'
import { useLanguage } from '../../lib/i18n'
import { GitHub } from '../ui/GitHubIcon'

export function Contact() {
  const { t } = useLanguage()

  return (
    <Section id="contact">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
          {t.contact.primaryLabel}
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t.contact.title}
        </h2>
        <p className="mt-3 max-w-2xl text-lg leading-7 text-muted-foreground">
          {t.contact.description}
        </p>
      </motion.div>      <motion.a
        href={SOCIAL.github}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px' }}
        transition={{ duration: 0.45, ease: 'easeOut', delay: 0.08 }}
        className="group mt-10 block max-w-3xl rounded-2xl border border-border bg-card/70 p-6 shadow-sm backdrop-blur-sm transition-colors hover:border-accent/40 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <GitHub className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground/60">
                {t.contact.profileNote}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-foreground">
                {t.contact.primaryLabel}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {t.contact.primaryText}
              </p>
            </div>
          </div>
          <span className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-border bg-background/70 px-4 py-2.5 text-sm font-medium text-foreground transition-colors group-hover:border-accent/30 group-hover:text-accent">
            {t.contact.openProfile}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
      </motion.a>
    </Section>
  )
}
