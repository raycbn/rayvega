import { motion } from 'framer-motion'
import { Section } from '../ui/Section'
import { Timeline, TimelineItem } from '../ui/Timeline'

const EXPERIENCES = [
  {
    role: 'IT & System Director',
    company: 'Mnemo',
    location: 'Madrid',
    period: '2025 – 2026',
    summary:
      'Dirección y coordinación de sistemas e infraestructura IT en entornos on-premise y cloud, con foco en disponibilidad, continuidad y seguridad.',
    highlights: [
      'Gestión de incidencias críticas y seguridad de sistemas.',
      'Administración de entornos VMware y servicios cloud.',
      'Coordinación de equipos técnicos, proveedores y proyectos de infraestructura.',
      'Participación en automatización y evolución de la plataforma.',
    ],
  },
  {
    role: 'Responsable de Proyectos y Sistemas',
    company: 'Libnova / GSS',
    location: 'Madrid',
    period: '2022 – 2025',
    summary:
      'Gestión y coordinación de proyectos y servicios relacionados con sistemas e infraestructura tecnológica.',
    highlights: [
      'Administración, soporte y seguimiento de entornos y servicios.',
      'Coordinación con clientes, proveedores y equipos técnicos.',
      'Resolución de incidencias y necesidades operativas.',
    ],
  },
  {
    role: 'Técnico de Soporte y Atención al Cliente',
    company: 'DACHSER',
    location: 'Madrid',
    period: '2021 – 2022',
    summary:
      'Soporte presencial a usuarios en un entorno multinacional, gestionando incidencias, solicitudes y necesidades técnicas.',
    highlights: [
      'Resolución y seguimiento de incidencias.',
      'Comunicación directa con usuarios y equipos implicados.',
      'Atención en entornos internacionales y multiculturales.',
    ],
  },
] as const

export function Experience() {
  return (
    <Section id="experience">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex flex-col gap-1"
      >
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
          Career
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Experience
        </h2>
        <p className="mt-2 max-w-3xl text-lg leading-7 text-muted-foreground">
          Systems, infrastructure and technical project experience across enterprise operations,
          on-premise environments and cloud platforms.
        </p>
      </motion.div>      <div className="mt-12 sm:mt-16">
        <Timeline>
          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={experience.company + experience.role}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px' }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.06 }}
            >
              <TimelineItem>
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-3xl">
                    <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                      {experience.company}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground">
                      {experience.role}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{experience.location}</p>
                    <p className="mt-4 text-sm leading-6 text-muted-foreground">
                      {experience.summary}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-border bg-muted/30 px-3 py-1.5 font-mono text-xs text-muted-foreground">
                    {experience.period}
                  </span>
                </div>

                <ul className="mt-5 grid gap-3 md:grid-cols-2">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </TimelineItem>
            </motion.div>
          ))}
        </Timeline>
      </div>      <div className="mt-12 grid gap-4 border-t border-border pt-8 sm:grid-cols-3">
        {[
          ['Scope', 'Systems · Infrastructure · Projects'],
          ['Environment', 'On-premise · Hybrid · Cloud'],
          ['Focus', 'Availability · Security · Operations'],
        ].map(([label, value]) => (
          <div key={label}>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground/60">
              {label}
            </p>
            <p className="mt-2 text-sm font-medium text-foreground">{value}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
