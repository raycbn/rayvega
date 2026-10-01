import { ArrowRight, Boxes, Database, Map, Shield } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '../../lib/i18n'

const ARCHITECTURES = [
  {
    id: 'nexus',
    icon: Shield,
    title: 'NEXUS',
    subtitle: { en: 'Governed operations loop', es: 'Ciclo operativo gobernado' },
    nodes: ['AgentRuntime', 'Policy', 'Connector / MCP', 'Resource', 'Result / Observation'],
  },
  {
    id: 'myridian',
    icon: Database,
    title: 'Myridian',
    subtitle: { en: 'Local SQL Server observability', es: 'Observabilidad local de SQL Server' },
    nodes: ['React / Vite', 'Node / Express', 'Collector', 'SQLite', 'SQL Server'],
  },
  {
    id: 'pedalmap',
    icon: Map,
    title: 'PedalMap',
    subtitle: { en: 'Web routing and product platform', es: 'Plataforma web de rutas y producto' },
    nodes: ['React / TypeScript', 'MapLibre', 'OpenRouteService', 'Firebase', 'User / Route'],
  },
  {
    id: 'mcp-local-server',
    icon: Boxes,
    title: 'Windows Local MCP',
    subtitle: { en: 'Self-hosted local tooling bridge', es: 'Puente autoalojado de herramientas locales' },
    nodes: ['ChatGPT', 'Auth / Tunnel', 'MCP Server', 'Tool controls', 'Windows resources'],
  },
] as const

function NodeChain({ nodes }: { nodes: readonly string[] }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-2">
      {nodes.map((node, index) => (
        <div key={node} className="flex items-center gap-2">
          <span className="rounded-lg border border-border bg-background/50 px-3 py-2 font-mono text-[10px] text-muted-foreground">
            {node}
          </span>
          {index < nodes.length - 1 ? <ArrowRight className="h-3 w-3 text-accent" aria-hidden="true" /> : null}
        </div>
      ))}
    </div>
  )
}

export function ArchitectureShowcase() {
  const { language } = useLanguage()
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="architecture-showcase-title">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
        {language === 'es' ? 'Arquitectura' : 'Architecture'}
      </p>
      <h2 id="architecture-showcase-title" className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {language === 'es' ? 'Cómo conecto las piezas' : 'How the pieces connect'}
      </h2>
      <p className="mt-3 max-w-3xl text-lg leading-7 text-muted-foreground">
        {language === 'es'
          ? 'Esquemas simplificados basados en las arquitecturas descritas de los proyectos.'
          : 'Simplified diagrams based on the architectures documented for the projects.'}
      </p>
      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {ARCHITECTURES.map((architecture, index) => {
          const Icon = architecture.icon
          return (
            <motion.article
              key={architecture.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px' }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="rounded-2xl border border-border bg-card/60 p-6 shadow-sm backdrop-blur-sm sm:p-7"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">{architecture.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{architecture.subtitle[language]}</p>
                </div>
              </div>
              <NodeChain nodes={architecture.nodes} />
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
