import { ArrowLeft, Check, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { PROJECTS, TECH_CATEGORIES } from '../lib/data'
import { useLanguage } from '../lib/i18n'

const CATEGORY_ES: Record<string, string> = {
  systems: 'Sistemas y empresa',
  cloud: 'Cloud y DevOps',
  development: 'Ingeniería de software',
  backend: 'Backend, datos y APIs',
  platforms: 'Producto y plataformas',
  security: 'Seguridad e identidad',
  ai: 'IA, agentes y automatización',
  quality: 'Testing y calidad',
}

function slugify(value: string) {
  return value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

function findTechnology(value: string) {
  return TECH_CATEGORIES
    .flatMap((category) => category.technologies.map((technology) => ({ category, technology })))
    .find((item) => slugify(item.technology) === value)
}

function projectsFor(technology: string) {
  const target = technology.toLowerCase().trim()
  return PROJECTS.filter((project) => project.technologies.some((item) => item.toLowerCase().trim() === target))
}

export function TechnologyDetailPage({ technologySlug }: { technologySlug: string }) {
  const { language } = useLanguage()
  const item = findTechnology(technologySlug)

  if (!item) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-foreground">
          {language === 'es' ? 'Tecnología no encontrada' : 'Technology not found'}
        </h1>
        <a href="/#technologies" className="mt-5 inline-flex items-center gap-2 text-sm text-accent hover:underline">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {language === 'es' ? 'Volver al stack' : 'Back to stack'}
        </a>
      </main>
    )
  }

  const relatedProjects = projectsFor(item.technology)
  const evidence = item.category.evidence
  const evidenceLabel = evidence === 'professional'
    ? (language === 'es' ? 'Trayectoria profesional' : 'Professional background')
    : evidence === 'projects'
      ? (language === 'es' ? 'Implementación en proyectos' : 'Project implementation')
      : (language === 'es' ? 'Profesional + proyectos' : 'Professional + projects')

  return (
    <main>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <a href="/#technologies" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {language === 'es' ? 'Volver a tecnologías' : 'Back to technologies'}
          </a>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <p className="mt-10 font-mono text-xs uppercase tracking-[0.16em] text-accent">
              {language === 'es' ? CATEGORY_ES[item.category.id] : item.category.label}
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">{item.technology}</h1>
            <span className="mt-5 inline-flex rounded-full border border-border bg-muted/30 px-3 py-1.5 font-mono text-xs text-muted-foreground">
              {evidenceLabel}
            </span>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              {language === 'es'
                ? 'Esta ficha muestra cómo aparece esta tecnología en el perfil público y en los proyectos representados en este portfolio.'
                : 'This page shows how this technology is represented in the public profile and in the projects represented in this portfolio.'}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-border bg-card/60 p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
              {language === 'es' ? 'Contexto' : 'Context'}
            </p>
            <h2 className="mt-3 text-2xl font-bold text-foreground">
              {language === 'es' ? CATEGORY_ES[item.category.id] : item.category.label}
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              {language === 'es'
                ? 'La tecnología está incluida dentro de este dominio técnico y comparte el mismo criterio de evidencia que el resto de elementos de la categoría.'
                : 'The technology sits inside this technical domain and follows the same evidence basis as the other items in the category.'}
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-card/60 p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
              {language === 'es' ? 'Proyectos relacionados' : 'Related projects'}
            </p>
            {relatedProjects.length > 0 ? (
              <ul className="mt-5 space-y-3">
                {relatedProjects.map((project) => (
                  <li key={project.id} className="flex items-center justify-between gap-4 rounded-xl border border-border/80 bg-background/40 px-4 py-3">
                    <span className="text-sm font-medium text-foreground">{project.name}</span>
                    {project.detailUrl ? (
                      <a href={project.detailUrl} className="text-accent hover:text-foreground" aria-label={project.name}>
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      </a>
                    ) : null}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-5 text-sm leading-6 text-muted-foreground">
                {language === 'es'
                  ? 'No hay un proyecto público del portfolio enlazado directamente a esta tecnología.'
                  : 'There is no public portfolio project directly linked to this technology.'}
              </p>
            )}
          </article>
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-card/60 p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
            {language === 'es' ? 'Criterio de evidencia' : 'Evidence note'}
          </p>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            <li className="flex gap-3 text-sm leading-6 text-muted-foreground">
              <Check className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <span>{language === 'es' ? 'No es una valoración de nivel.' : 'This is not a skill rating.'}</span>
            </li>
            <li className="flex gap-3 text-sm leading-6 text-muted-foreground">
              <Check className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <span>{language === 'es' ? 'La relación con proyectos procede del stack publicado.' : 'Project relationships come from the published project stack.'}</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}
