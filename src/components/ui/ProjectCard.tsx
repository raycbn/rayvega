import { ArrowUpRight, Boxes, Cloud, Code2, Cpu, Wrench } from 'lucide-react'
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

const VISUAL_ICONS = {
  Infrastructure: Boxes,
  'Cloud / DevOps': Cloud,
  Development: Code2,
  'AI / Automation': Cpu,
  'Tools / Lab': Wrench,
} as const

function ProjectVisual({
  project,
  language,
  category,
}: {
  project: Project
  language: 'en' | 'es'
  category: string
}) {
  const Icon = VISUAL_ICONS[project.category]

  return (
    <div className="relative flex aspect-[16/9] w-full overflow-hidden bg-muted/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(99,102,241,0.25),transparent_32%),linear-gradient(135deg,rgba(99,102,241,0.08),transparent_55%)]" />
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:32px_32px] text-border" />
      <div className="relative flex w-full flex-col justify-between p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent/80">
            {language === 'es' ? 'Portada técnica' : 'Project visual'}
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/80 bg-background/50 text-accent backdrop-blur-sm">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground/70">{category}</p>
          <h3 className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{project.name}</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span key={tech} className="rounded-full border border-border/80 bg-background/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground backdrop-blur-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

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
          alt={project.name + (language === 'es' ? ' — visual del proyecto' : ' — project visual')}
          className="aspect-video w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <ProjectVisual project={project} language={language} category={copy?.category ?? project.category} />
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
