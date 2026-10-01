import { useMemo, useState } from 'react'
import { PROJECTS, TECH_CATEGORIES } from '../../lib/data'
import { useLanguage } from '../../lib/i18n'

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

function norm(value: string) {
  return value.toLowerCase().trim()
}

function technologySlug(value: string) {
  return norm(value).normalize('NFD').replace(/[\\u0300-\\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

function projectsFor(technology: string) {
  return PROJECTS.filter((project) =>
    project.technologies.some((item) => norm(item) === norm(technology)),
  )
}

export function TechnologyMatrix() {
  const { language } = useLanguage()
  const [query, setQuery] = useState('')
  const [categoryId, setCategoryId] = useState('all')

  const rows = useMemo(
    () => TECH_CATEGORIES
      .filter((category) => categoryId === 'all' || category.id === categoryId)
      .flatMap((category) => category.technologies.map((technology) => ({
        category,
        technology,
        projects: projectsFor(technology),
      })))
      .filter((row) => row.technology.toLowerCase().includes(query.toLowerCase().trim())),
    [categoryId, query],
  )

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="technology-matrix-title">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
        {language === 'es' ? 'Matriz de evidencia' : 'Evidence matrix'}
      </p>
      <h2 id="technology-matrix-title" className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {language === 'es' ? 'Tecnología conectada a proyectos' : 'Technology connected to projects'}
      </h2>
      <p className="mt-3 max-w-3xl text-lg leading-7 text-muted-foreground">
        {language === 'es'
          ? 'Busca una tecnología y comprueba en qué proyectos está representada.'
          : 'Search a technology and see which projects represent it.'}
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <label className="relative flex-1">
          <span className="sr-only">{language === 'es' ? 'Buscar tecnología' : 'Search technology'}</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={language === 'es' ? 'Python, Kubernetes, React...' : 'Python, Kubernetes, React...'}
            className="w-full rounded-xl border border-border bg-card/70 py-3 pl-10 pr-4 text-sm text-foreground outline-none ring-accent/40 placeholder:text-muted-foreground/60 focus:ring-2"
          />
        </label>
        <select
          value={categoryId}
          onChange={(event) => setCategoryId(event.target.value)}
          className="rounded-xl border border-border bg-card/70 px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-accent/40"
          aria-label={language === 'es' ? 'Filtrar por dominio' : 'Filter by domain'}
        >
          <option value="all">{language === 'es' ? 'Todos los dominios' : 'All domains'}</option>
          {TECH_CATEGORIES.map((category) => (
            <option key={category.id} value={category.id}>
              {language === 'es' ? CATEGORY_ES[category.id] : category.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card/50">
        <div className="hidden grid-cols-[1.2fr_1fr_1.5fr] gap-4 border-b border-border px-5 py-3 text-[11px] font-mono uppercase tracking-[0.14em] text-muted-foreground/70 md:grid">
          <span>{language === 'es' ? 'Tecnología' : 'Technology'}</span>
          <span>{language === 'es' ? 'Dominio' : 'Domain'}</span>
          <span>{language === 'es' ? 'Proyectos' : 'Projects'}</span>
        </div>
        {rows.map((row) => (
          <div key={row.category.id + row.technology} className="grid gap-2 border-b border-border/70 px-5 py-4 last:border-0 md:grid-cols-[1.2fr_1fr_1.5fr] md:gap-4">
            <a href={`/technologies/${technologySlug(row.technology)}`} className="font-mono text-sm font-medium text-foreground hover:text-accent">
              {row.technology}
            </a>
            <span className="text-sm text-muted-foreground">
              {language === 'es' ? CATEGORY_ES[row.category.id] : row.category.label}
            </span>
            <div className="flex flex-wrap gap-2">
              {row.projects.length > 0 ? row.projects.map((project) => (
                <span key={project.id} className="rounded-full border border-border bg-background/50 px-2.5 py-1 text-xs text-muted-foreground">
                  {project.name}
                </span>
              )) : (
                <span className="text-xs text-muted-foreground/60">
                  {language === 'es' ? 'Trayectoria profesional' : 'Professional background'}
                </span>
              )}
            </div>
          </div>
        ))}
        {rows.length === 0 ? (
          <p className="px-5 py-8 text-sm text-muted-foreground">
            {language === 'es' ? 'No hay tecnologías que coincidan.' : 'No matching technologies.'}
          </p>
        ) : null}
      </div>
    </section>
  )
}
