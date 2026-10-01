import { ArrowUpRight, Code } from 'lucide-react'
import type { ComponentPropsWithoutRef } from 'react'
import type { Project } from '../../lib/data'
import { getProjectCopy, useLanguage } from '../../lib/i18n'
import type { BadgeStatus } from './Badge'
import { Badge } from './Badge'
import { ButtonLink } from './Button'
import { cn } from '../../lib/utils'
import { GitHub } from './GitHubIcon'

type ProjectCardProps = {
  project: Project
} & ComponentPropsWithoutRef<'article'>

const badgeStatus: Record<Project['status'], BadgeStatus> = {
  production: 'production',
  'in-progress': 'in-progress',
  archived: 'archived',
  draft: 'pending',
}

const STATUS_LABELS = {
  en: { production: 'Production', 'in-progress': 'In progress', archived: 'Archived', draft: 'Prototype' },
  es: { production: 'Producción', 'in-progress': 'En desarrollo', archived: 'Archivado', draft: 'Prototipo' },
} as const

export function ProjectCard({ project, className }: ProjectCardProps) {
  const { language, t } = useLanguage()
  const copy = getProjectCopy(language, project.id)
  const featured = Boolean(project.featured)

  return (
    <article
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-2xl border bg-card/80 text-card-foreground shadow-sm backdrop-blur-sm transition-[border-color,box-shadow,transform] hover:translate-y-[-2px] hover:border-accent/40 hover:shadow-xl',
        featured ? 'border-accent/50 ring-1 ring-accent/20' : 'border-border',
        className,
      )}
    >      {featured ? (
        <span className="pointer-events-none absolute left-4 top-4 z-10 rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-medium text-accent">
          {t.projects.featured}
        </span>
      ) : null}

      {project.image ? (
        <img
          src={project.image}
          alt={project.name + (language === 'es' ? ' captura de pantalla' : ' screenshot')}
          className="aspect-video w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="flex aspect-[16/9] w-full items-center justify-center bg-muted/30">
          <Code className="h-7 w-7 text-muted-foreground/40" strokeWidth={1.5} />
        </div>
      )}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <header className="flex items-start justify-between gap-3">
          <div>
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                {copy?.category ?? project.category}
              </span>
              {copy?.phase || project.phase ? (
                <span className="text-[11px] text-muted-foreground/70">
                  · {copy?.phase ?? project.phase}
                </span>
              ) : null}
            </div>
            <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              {project.name}
            </h3>
          </div>
          <Badge status={badgeStatus[project.status]}>
            {STATUS_LABELS[language][project.status]}
          </Badge>
        </header>        <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
          {copy?.shortDescription ?? project.shortDescription}
        </p>

        {copy?.highlights && copy.highlights.length > 0 ? (
          <ul className="mt-4 space-y-2">
            {copy.highlights.slice(0, 4).map((highlight) => (
              <li key={highlight} className="flex gap-2 text-sm text-muted-foreground">
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80"
                  aria-hidden="true"
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        ) : null}

        <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1.5">
          {project.technologies.map((tech) => (
            <li key={tech}>
              <span className="font-mono text-[11px] text-muted-foreground/75">{tech}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.githubUrl ? (
            <ButtonLink
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              variant="secondary"
              leftIcon={<GitHub className="h-3.5 w-3.5" />}
            >
              {t.projects.code}
            </ButtonLink>
          ) : null}
          {project.detailUrl ? (            <ButtonLink
              href={project.detailUrl}
              size="sm"
              variant="primary"
              rightIcon={<ArrowUpRight className="h-3.5 w-3.5" />}
            >
              {t.projects.caseStudy}
            </ButtonLink>
          ) : null}
          {project.demoUrl ? (
            <ButtonLink
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              variant="secondary"
              rightIcon={<ArrowUpRight className="h-3.5 w-3.5" />}
            >
              {t.projects.live}
            </ButtonLink>
          ) : null}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5"
      />
    </article>
  )
}
