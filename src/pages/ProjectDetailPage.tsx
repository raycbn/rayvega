import { ArrowLeft, ArrowUpRight, Check, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { PROJECTS, statusLabel } from '../lib/data'
import { getDetailCopy, getProjectCopy, useLanguage } from '../lib/i18n'
import { Badge } from '../components/ui/Badge'
import { ButtonLink } from '../components/ui/Button'

const badgeStatus = {
  production: 'production',
  'in-progress': 'in-progress',
  archived: 'archived',
  draft: 'pending',
} as const

type ProjectDetailPageProps = {
  projectId: string
}

export function ProjectDetailPage({ projectId }: ProjectDetailPageProps) {
  const { language, t } = useLanguage()
  const project = PROJECTS.find((item) => item.id === projectId)
  const detail = getDetailCopy(language, projectId)
  const copy = getProjectCopy(language, projectId)

  if (!project || !detail) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-foreground">{t.detail.projectNotFound}</h1>
        <a href="/#projects" className="mt-5 inline-flex text-sm text-accent hover:underline">
          {t.detail.back}
        </a>
      </main>
    )
  }

  return (
    <main>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.14),transparent_38%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <a
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {t.detail.back}
          </a>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="mt-10 max-w-4xl"
          >            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                {detail.eyebrow}
              </span>
              <Badge status={badgeStatus[project.status]}>
                {copy ? (language === 'es'
                  ? ({ production: 'Producción', 'in-progress': 'En desarrollo', archived: 'Archivado', draft: 'Prototipo' }[project.status])
                  : statusLabel[project.status]) : statusLabel[project.status]}
              </Badge>
            </div>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              {detail.title}
            </h1>
            <p className="mt-5 max-w-3xl text-xl leading-8 text-muted-foreground sm:text-2xl">
              {detail.intro}
            </p>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-muted-foreground">
              {copy?.shortDescription ?? project.shortDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.githubUrl ? (
                <ButtonLink
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  rightIcon={<ArrowUpRight className="h-4 w-4" />}
                >
                  {t.detail.viewSource}
                </ButtonLink>
              ) : null}
              {project.demoUrl ? (
                <ButtonLink
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  rightIcon={<ExternalLink className="h-4 w-4" />}
                >
                  {t.detail.openLive}
                </ButtonLink>
              ) : null}
            </div>
          </motion.div>
        </div>
      </section>      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {detail.sections.map((section, index) => (
            <motion.article
              key={section.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px' }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="rounded-2xl border border-border bg-card/70 p-6 shadow-sm backdrop-blur-sm"
            >
              <h2 className="text-xl font-semibold tracking-tight text-foreground">{section.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{section.text}</p>
              {section.bullets ? (
                <ul className="mt-5 space-y-3">
                  {section.bullets.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </motion.article>
          ))}
        </div>        <section className="mt-12 rounded-2xl border border-border bg-card/60 p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">{t.detail.currentState}</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground">
                {t.detail.currentTitle}
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{detail.currentState}</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">{t.detail.next}</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground">
                {t.detail.direction}
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{detail.next}</p>
            </div>
          </div>
        </section>

        <section className="mt-12 border-t border-border pt-10">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">{t.detail.stack}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-border bg-muted/30 px-3 py-1.5 font-mono text-xs text-muted-foreground"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>
      </section>
    </main>
  )
}
