import { Code } from 'lucide-react'
import type { ComponentPropsWithoutRef } from 'react'
import type { Project } from '../../lib/data'
import { statusLabel } from '../../lib/data'
import type { BadgeStatus } from './Badge'
import { Badge } from './Badge'
import { ButtonLink } from './Button'
import { cn } from '../../lib/utils'
import { GitHub } from './GitHubIcon'

type ProjectCardProps = {
  project: Project
} & ComponentPropsWithoutRef<'article'>

const badgeStatus: Record<NonNullable<Project['status']>, BadgeStatus> = {
  production: 'production',
  'in-progress': 'in-progress',
  archived: 'archived',
  draft: 'pending',
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const featured = Boolean(project.featured)

  return (
    <article
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-xl border bg-card text-card-foreground transition-[box-shadow,transform] hover:translate-y-[-2px] hover:shadow-lg',
        featured
          ? 'border-accent/50 ring-1 ring-accent/20'
          : 'border-border',
        className,
      )}
    >
      {featured ? (
        <span className="pointer-events-none absolute left-4 top-4 z-10 rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-medium text-accent">
          Featured
        </span>
      ) : null}

      {project.image ? (
        <img
          src={project.image}
          alt={`${project.name} screenshot`}
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
          <h3 className="text-xl font-semibold text-foreground">{project.name}</h3>
          {project.status ? (
            <Badge status={badgeStatus[project.status]}>{statusLabel[project.status]}</Badge>
          ) : null}
        </header>

        {project.description ? (
          <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
        ) : (
          <p className="mt-2 text-sm text-muted-foreground/60">
            Project details coming soon.
          </p>
        )}

        {project.technologies && project.technologies.length > 0 ? (
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <li key={tech}>
                <span className="text-xs text-muted-foreground/80">{tech}</span>
              </li>
            ))}
          </ul>
        ) : null}

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
              Code
            </ButtonLink>
          ) : null}
          {project.demoUrl ? (
            <ButtonLink
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              variant="secondary"
            >
              Demo
            </ButtonLink>
          ) : null}
        </div>
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5" />
    </article>
  )
}
