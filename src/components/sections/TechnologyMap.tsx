import { Boxes, ChevronRight, Cloud, Code2, Cpu, Database, Server, ShieldCheck, TestTube2 } from 'lucide-react'
import { useMemo, useState } from 'react'
import { PROJECTS, TECH_CATEGORIES } from '../../lib/data'
import { useLanguage } from '../../lib/i18n'

const ICONS = {
  systems: Server,
  cloud: Cloud,
  development: Code2,
  backend: Database,
  platforms: Boxes,
  security: ShieldCheck,
  ai: Cpu,
  quality: TestTube2,
} as const

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

const ARCHITECTURES = [
  { title: 'NEXUS', subtitle: { en: 'Governed operations', es: 'Operaciones gobernadas' }, nodes: ['AgentRuntime', 'Policy', 'Connector / MCP', 'Resource', 'Observation'] },
  { title: 'Myridian', subtitle: { en: 'Local observability', es: 'Observabilidad local' }, nodes: ['React / Vite', 'Node / Express', 'Collector', 'SQLite', 'SQL Server'] },
  { title: 'PedalMap', subtitle: { en: 'Routing product', es: 'Producto de rutas' }, nodes: ['React / TypeScript', 'MapLibre', 'Routing', 'Firebase', 'Route'] },
  { title: 'Windows Local MCP', subtitle: { en: 'Self-hosted bridge', es: 'Puente autoalojado' }, nodes: ['ChatGPT', 'Auth / Tunnel', 'MCP Server', 'Tool controls', 'Windows'] },
]

function relatedProjects(technology: string) {
  return PROJECTS.filter((project) =>
    project.technologies.some((item) => item.toLowerCase().trim() === technology.toLowerCase().trim()),
  )
}

export function TechnologyMap() {
  const { language } = useLanguage()
  const [activeId, setActiveId] = useState(TECH_CATEGORIES[0]?.id ?? 'systems')
  const active = useMemo(
    () => TECH_CATEGORIES.find((category) => category.id === activeId) ?? TECH_CATEGORIES[0],
    [activeId],
  )

  if (!active) return null

  const activeProjects = Array.from(
    new Map(
      active.technologies
        .flatMap((technology) => relatedProjects(technology))
        .map((project) => [project.id, project]),
    ).values(),
  )

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="technology-map-title">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
        {language === 'es' ? 'Mapa del stack' : 'Stack map'}
      </p>
      <h2 id="technology-map-title" className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {language === 'es' ? 'Del dominio al proyecto' : 'From domain to project'}
      </h2>
      <p className="mt-3 max-w-3xl text-lg leading-7 text-muted-foreground">
        {language === 'es'
          ? 'Selecciona un dominio para ver sus tecnologías y los proyectos que las representan.'
          : 'Select a domain to see its technologies and the projects that represent them.'}
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1" role="tablist" aria-label={language === 'es' ? 'Dominios tecnológicos' : 'Technology domains'}>
          {TECH_CATEGORIES.map((category) => {
            const Icon = ICONS[category.id as keyof typeof ICONS]
            const selected = category.id === activeId
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveId(category.id)}
                className={selected
                  ? 'flex items-center justify-between rounded-xl border border-accent/40 bg-accent/10 px-4 py-3 text-left text-foreground'
                  : 'flex items-center justify-between rounded-xl border border-border bg-card/50 px-4 py-3 text-left text-muted-foreground hover:border-accent/30 hover:text-foreground'}
              >
                <span className="flex items-center gap-3">
                  <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
                  <span className="text-sm font-medium">{language === 'es' ? CATEGORY_ES[category.id] : category.label}</span>
                </span>
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            )
          })}
        </div>
        <div className="rounded-2xl border border-border bg-card/60 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
              {(() => {
                const Icon = ICONS[active.id as keyof typeof ICONS]
                return <Icon className="h-6 w-6" aria-hidden="true" />
              })()}
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                {active.technologies.length} {language === 'es' ? 'tecnologías' : 'technologies'}
              </p>
              <h3 className="mt-1 text-2xl font-bold tracking-tight text-foreground">
                {language === 'es' ? CATEGORY_ES[active.id] : active.label}
              </h3>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {active.technologies.map((technology) => (
              <span key={technology} className="rounded-full border border-border bg-background/50 px-3 py-1.5 font-mono text-xs text-muted-foreground">
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-8 border-t border-border pt-6">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground/60">
              {language === 'es' ? 'Proyectos conectados' : 'Connected projects'}
            </p>            <div className="mt-4 flex flex-wrap gap-2">
              {activeProjects.length > 0 ? activeProjects.map((project) => (
                <span key={project.id} className="rounded-full border border-border bg-card px-3 py-1.5 text-sm text-foreground">
                  {project.name}
                </span>
              )) : (
                <span className="text-sm text-muted-foreground">
                  {language === 'es' ? 'Sin proyecto público asociado.' : 'No public project linked.'}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-border pt-10">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
          {language === 'es' ? 'Arquitecturas' : 'Architectures'}
        </p>
        <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground">
          {language === 'es' ? 'Cómo se conectan las piezas' : 'How the pieces connect'}
        </h3>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {ARCHITECTURES.map((architecture) => (
            <div key={architecture.title} className="rounded-xl border border-border bg-background/30 p-5">
              <p className="text-sm font-semibold text-foreground">{architecture.title}</p>
              <p className="mt-1 text-xs text-muted-foreground">{architecture.subtitle[language]}</p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {architecture.nodes.map((node, index) => (
                  <span key={node} className="flex items-center gap-2">
                    <span className="rounded-lg border border-border bg-card px-2.5 py-1.5 font-mono text-[10px] text-muted-foreground">
                      {node}
                    </span>
                    {index < architecture.nodes.length - 1 ? <span className="text-accent" aria-hidden="true">→</span> : null}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}