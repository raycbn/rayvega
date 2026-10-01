import { ArrowLeft, ArrowUpRight, Check, GitBranch, ShieldCheck, Workflow } from 'lucide-react'
import { motion } from 'framer-motion'
import { PROJECTS } from '../lib/data'
import { getProjectCopy, useLanguage } from '../lib/i18n'
import { Badge } from '../components/ui/Badge'
import { ButtonLink } from '../components/ui/Button'

const nexus = PROJECTS.find((project) => project.id === 'nexus')

export function NexusPage() {
  const { language, t } = useLanguage()
  const copy = getProjectCopy(language, 'nexus')
  const loop = t.nexus.loop as string[]
  const architectureLayers = t.nexus.architectureLayers as string[]
  const architectureDescriptions = t.nexus.architectureDescriptions as string[]
  const safetyItems = t.nexus.safetyItems as string[]
  const capabilitiesItems = t.nexus.capabilitiesItems as string[]
  const releaseGates = t.nexus.releaseGates as string[]

  if (!nexus || !copy) return null

  return (
    <main>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.18),transparent_36%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <a
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {t.detail.back}
          </a>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="mt-10 max-w-4xl"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                {copy.category}
              </span>
              <Badge status="in-progress">{copy.phase}</Badge>
            </div>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              NEXUS
            </h1>

            <p className="mt-4 max-w-3xl font-mono text-xs uppercase tracking-[0.16em] text-accent sm:text-sm">
              {t.nexus.productTagline}
            </p>

            <p className="mt-5 max-w-3xl text-xl leading-8 text-muted-foreground sm:text-2xl">
              {t.nexus.intro}
            </p>

            <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
              {t.nexus.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink
                href={nexus.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                rightIcon={<ArrowUpRight className="h-4 w-4" />}
              >
                {t.nexus.sourceRepository}
              </ButtonLink>
              <a
                href="/#projects"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-background/70 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:bg-muted"
              >
                {t.nexus.allProjects}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">{t.nexus.loopTitle}</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{t.nexus.architectureTitle}</h2>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {loop.map((step, index) => (
            <motion.article
              key={step}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px' }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="relative overflow-hidden rounded-2xl border border-border bg-card/70 p-5 shadow-sm backdrop-blur-sm"
            >
              <span className="font-mono text-xs text-accent">0{index + 1}</span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{step}</h3>
              {index < loop.length - 1 ? (
                <span className="pointer-events-none absolute right-4 top-5 hidden text-muted-foreground/40 lg:block" aria-hidden="true">
                  →
                </span>
              ) : null}
            </motion.article>
          ))}
        </div>
      </section>      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">{t.nexus.problemTitle}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t.nexus.problemTitle}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground">
              {t.nexus.problemText}
            </p>

            <div className="mt-8 rounded-2xl border border-border bg-card/60 p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Workflow className="h-4 w-4 text-accent" aria-hidden="true" />
                {t.nexus.architecture}
              </div>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {t.nexus.architectureText}
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {architectureLayers.map((title, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '0px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-2xl border border-border bg-card/70 p-5 shadow-sm backdrop-blur-sm"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-semibold text-foreground">{title}</h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground/60">
                    0{index + 1}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {architectureDescriptions[index]}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-border bg-card/70 p-6 shadow-sm backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-accent" aria-hidden="true" />
              <h2 className="text-xl font-semibold text-foreground">{t.nexus.safety}</h2>
            </div>
            <ul className="mt-5 space-y-3">
              {safetyItems.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-border bg-card/70 p-6 shadow-sm backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <GitBranch className="h-5 w-5 text-accent" aria-hidden="true" />
              <h2 className="text-xl font-semibold text-foreground">{t.nexus.capabilities}</h2>
            </div>
            <ul className="mt-5 space-y-3">
              {capabilitiesItems.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-card/60 p-6 sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">{t.nexus.currentState}</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground">{t.nexus.implementationTitle}</h2>
            </div>
            <span className="text-sm text-muted-foreground">{t.nexus.releaseStatus}</span>
          </div>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-muted-foreground">
            {t.nexus.implementationText}
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-border/80 bg-background/50 p-5">
              <h3 className="font-semibold text-foreground">{t.nexus.currentFocusTitle}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{t.nexus.currentFocusText}</p>
            </div>

            <div className="rounded-xl border border-border/80 bg-background/50 p-5">
              <h3 className="font-semibold text-foreground">{t.nexus.v1GatesTitle}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{t.nexus.v1GatesText}</p>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {releaseGates.map((gate) => (
              <div
                key={gate}
                className="rounded-xl border border-border/80 bg-background/50 px-4 py-3 text-sm text-muted-foreground"
              >
                {gate}
              </div>
            ))}
          </div>
        </div>
      </section>      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="border-t border-border pt-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">{t.detail.stack}</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground">NEXUS</h2>
            </div>
            <ButtonLink
              href={nexus.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              rightIcon={<ArrowUpRight className="h-4 w-4" />}
            >
              {t.nexus.sourceRepository}
            </ButtonLink>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {nexus.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-border bg-muted/30 px-3 py-1.5 font-mono text-xs text-muted-foreground"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
