import { Cloud, Server, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '../../lib/i18n'

const META = [
  {
    company: 'Mnemo',
    period: '2025 – 2026',
    icon: ShieldCheck,
    role: { en: 'IT & System Director', es: 'Director de Sistemas IT' },
    environment: { en: 'On-premise + cloud', es: 'Local + cloud' },
    areas: {
      en: ['Windows & Linux', 'VMware / virtualization', 'SAN / NAS / NetApp', 'Azure / AWS', 'Automation & security'],
      es: ['Windows y Linux', 'VMware / virtualización', 'SAN / NAS / NetApp', 'Azure / AWS', 'Automatización y seguridad'],
    },
  },
  {
    company: 'Libnova / GSS',
    period: '2022 – 2025',
    icon: Cloud,
    role: { en: 'Systems & Projects Manager', es: 'Responsable de Proyectos y Sistemas' },
    environment: { en: 'Enterprise services', es: 'Servicios empresariales' },
    areas: {
      en: ['Systems operations', 'Infrastructure services', 'Technical coordination', 'Incident resolution'],
      es: ['Operación de sistemas', 'Servicios de infraestructura', 'Coordinación técnica', 'Resolución de incidencias'],
    },
  },
  {
    company: 'DACHSER',
    period: '2021 – 2022',
    icon: Server,
    role: { en: 'Technical Support & Customer Service Specialist', es: 'Técnico de Soporte y Atención al Cliente' },
    environment: { en: 'On-site user support', es: 'Soporte presencial a usuarios' },
    areas: {
      en: ['Incident handling', 'User support', 'Operational follow-up', 'Multinational environment'],
      es: ['Gestión de incidencias', 'Soporte a usuarios', 'Seguimiento operativo', 'Entorno multinacional'],
    },
  },
] as const

export function Experience2() {
  const { language } = useLanguage()
  const technicalTitle = language === 'es' ? 'Entorno técnico por etapa' : 'Technical environment by stage'
  const technicalText = language === 'es'
    ? 'Contexto técnico asociado a cada etapa, manteniendo separado lo que está descrito en la trayectoria de lo que aparece en los proyectos.'
    : 'Technical context associated with each stage, keeping professional experience separate from project implementation.'
  const timelineTitle = language === 'es' ? 'Línea temporal' : 'Career timeline'
  const timelineText = language === 'es' ? 'Una vista rápida de la evolución de responsabilidades.' : 'A compact view of the progression of responsibilities.'

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="experience-2-title">
      <div className="flex items-end justify-between gap-5">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">{language === 'es' ? 'Contexto profesional' : 'Professional context'}</p>
          <h2 id="experience-2-title" className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{technicalTitle}</h2>
          <p className="mt-3 max-w-3xl text-lg leading-7 text-muted-foreground">{technicalText}</p>
        </div>
      </div>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">        {META.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.article
              key={item.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px' }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="rounded-2xl border border-border bg-card/60 p-6 shadow-sm backdrop-blur-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="rounded-full border border-border bg-background/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground">{item.period}</span>
              </div>
              <p className="mt-5 font-mono text-xs uppercase tracking-[0.14em] text-accent">{item.company}</p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">{item.role[language]}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.environment[language]}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.areas[language].map((area) => (
                  <span key={area} className="rounded-full border border-border bg-background/40 px-2.5 py-1 font-mono text-[10px] text-muted-foreground">
                    {area}
                  </span>
                ))}
              </div>
            </motion.article>
          )
        })}
      </div>

      <div className="mt-14 border-t border-border pt-10">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">{language === 'es' ? 'Cronología' : 'Timeline'}</p>
        <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground">{timelineTitle}</h3>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">{timelineText}</p>
        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {META.map((item) => (
            <div key={item.company} className="relative rounded-xl border border-border bg-background/30 p-5">
              <span className="font-mono text-xs text-accent">{item.period}</span>
              <p className="mt-2 text-sm font-semibold text-foreground">{item.company}</p>
              <p className="mt-1 text-xs text-muted-foreground">{item.role[language]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}