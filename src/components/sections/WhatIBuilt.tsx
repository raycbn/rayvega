import { Activity, Boxes, Code2, Database, Route, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { PROJECTS } from '../../lib/data'
import { useLanguage } from '../../lib/i18n'

const ITEMS = [
  { icon: Boxes, title: { en: 'Infrastructure platforms', es: 'Plataformas de infraestructura' }, text: { en: 'Operational tooling around servers, virtualization, storage and monitored estates.', es: 'Herramientas operativas alrededor de servidores, virtualización, almacenamiento y entornos monitorizados.' }, projects: ['myridian', 'infrastructure-intelligence'] },
  { icon: Database, title: { en: 'Observability & operations', es: 'Observabilidad y operaciones' }, text: { en: 'Operational signals into dashboards, diagnostics, alerts and evidence.', es: 'Señales operativas convertidas en paneles, diagnósticos, alertas y evidencias.' }, projects: ['myridian'] },
  { icon: Code2, title: { en: 'Software engineering', es: 'Ingeniería de software' }, text: { en: 'Web, mobile and backend projects from architecture through validation.', es: 'Proyectos web, móviles y backend desde la arquitectura hasta la validación.' }, projects: ['pedalmap', 'pedalmap-fuel', 'firebase-pocket-admin'] },
  { icon: Route, title: { en: 'Product tooling', es: 'Herramientas de producto' }, text: { en: 'Focused products around route planning, administration and training.', es: 'Productos enfocados en planificación, administración y formación.' }, projects: ['pedalmap', 'firebase-pocket-admin', 'tcp-exam-trainer'] },
  { icon: ShieldCheck, title: { en: 'Controlled automation', es: 'Automatización controlada' }, text: { en: 'Explicit boundaries and policy checks for automated actions.', es: 'Límites explícitos y comprobaciones de política para acciones automatizadas.' }, projects: ['nexus', 'mcp-local-server'] },
  { icon: Activity, title: { en: 'Integrated delivery', es: 'Entrega integrada' }, text: { en: 'Infrastructure, APIs, data, interfaces and verification in one flow.', es: 'Infraestructura, APIs, datos, interfaces y validación en un solo flujo.' }, projects: ['nexus', 'myridian', 'pedalmap'] },
] as const

export function WhatIBuilt() {
  const { language } = useLanguage()
  const title = language === 'es' ? 'Qué construyo' : 'What I build'
  const description = language === 'es'
    ? 'Capacidades representadas por proyectos concretos del portfolio.'
    : 'Capabilities represented by concrete projects in this portfolio.'

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">{language === 'es' ? 'Construcción' : 'Build profile'}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      <p className="mt-3 max-w-3xl text-lg leading-7 text-muted-foreground">{description}</p>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.article
              key={item.title.en}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px' }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="rounded-2xl border border-border bg-card/60 p-6 shadow-sm backdrop-blur-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">{item.title[language]}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text[language]}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.projects.map((id) => {
                  const project = PROJECTS.find((candidate) => candidate.id === id)
                  return project ? (
                    <a
                      key={id}
                      href={project.detailUrl ?? '/#projects'}
                      className="rounded-full border border-border bg-background/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground hover:border-accent/40 hover:text-foreground"
                    >
                      {project.name}
                    </a>
                  ) : null
                })}
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
