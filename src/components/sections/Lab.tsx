import { ArrowUpRight, Code } from 'lucide-react'
import { motion } from 'framer-motion'
import { Section } from '../ui/Section'
import { useLanguage } from '../../lib/i18n'

type LabEntry = {
  id: string
  title: string
  category: string
  text: string
  href: string
}

export function Lab() {
  const { language, t } = useLanguage()
  const entries: LabEntry[] = language === 'es'
    ? [
        { id: 'nexus', title: 'NEXUS', category: 'IA / Operaciones', text: 'Ciclo operativo basado en evidencias, investigación de incidencias, remediación gobernada y despliegue autoalojado.', href: '/projects/nexus' },
        { id: 'mcp', title: 'Windows Local MCP', category: 'MCP / Windows', text: 'Servidor MCP autoalojado para exponer herramientas locales controladas, con autenticación y límites de ejecución.', href: '/projects/mcp-local-server' },
        { id: 'myridian', title: 'Myridian', category: 'SQL Server / Observabilidad', text: 'Laboratorio de observabilidad local para múltiples servidores SQL Server, con diagnósticos y señales operativas.', href: '/projects/myridian' },
        { id: 'discovery', title: 'Infrastructure Intelligence', category: 'Descubrimiento', text: 'MVP de descubrimiento acotado con verificación de propiedad y controles explícitos sobre destinos públicos.', href: '/projects/infrastructure-intelligence' },
        { id: 'pedalmap', title: 'PedalMap', category: 'Mapas / Routing', text: 'Construcción de una plataforma de planificación ciclista con MapLibre, rutas y servicios Firebase.', href: '/projects/pedalmap' },
      ]
    : [
        { id: 'nexus', title: 'NEXUS', category: 'AI / Operations', text: 'Evidence-driven operational loop combining incident investigation, governed remediation and self-hosted deployment.', href: '/projects/nexus' },
        { id: 'mcp', title: 'Windows Local MCP', category: 'MCP / Windows', text: 'Self-hosted MCP server exposing controlled local tooling with authentication and execution boundaries.', href: '/projects/mcp-local-server' },
        { id: 'myridian', title: 'Myridian', category: 'SQL Server / Observability', text: 'Local observability lab for multi-server SQL Server estates, diagnostics and operational signals.', href: '/projects/myridian' },
        { id: 'discovery', title: 'Infrastructure Intelligence', category: 'Discovery', text: 'Bounded infrastructure-discovery MVP with ownership verification and explicit public-destination controls.', href: '/projects/infrastructure-intelligence' },
        { id: 'pedalmap', title: 'PedalMap', category: 'Maps / Routing', text: 'Cycling route-planning platform built with MapLibre, routing services and Firebase.', href: '/projects/pedalmap' },
      ]

  return (
    <Section id="lab">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
          {language === 'es' ? 'Laboratorio técnico' : 'Technical lab'}
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t.lab.title}
        </h2>
        <p className="mt-3 max-w-3xl text-lg leading-7 text-muted-foreground">
          {t.lab.description}
        </p>
      </motion.div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {entries.map((entry, index) => (
          <motion.a
            key={entry.id}
            href={entry.href}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px' }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.04 }}
            className="group rounded-2xl border border-border bg-card/70 p-5 shadow-sm backdrop-blur-sm transition-colors hover:border-accent/40 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Code className="h-4 w-4" aria-hidden="true" />
              </span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground/50 transition-colors group-hover:text-accent" aria-hidden="true" />
            </div>            <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground/60">
              {entry.category}
            </p>
            <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">{entry.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{entry.text}</p>
          </motion.a>
        ))}
      </div>
    </Section>
  )
}
