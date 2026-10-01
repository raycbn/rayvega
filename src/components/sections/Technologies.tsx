import { Boxes, Cloud, Code2, Cpu, Database, Server, ShieldCheck, TestTube2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { TECH_CATEGORIES } from '../../lib/data'
import { useLanguage } from '../../lib/i18n'
import { Section } from '../ui/Section'

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

export function Technologies() {
  const { language, t } = useLanguage()
  const totalTechnologies = TECH_CATEGORIES.reduce(
    (total, category) => total + category.technologies.length,
    0,
  )

  return (
    <Section id="technologies">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex flex-col gap-3"
      >
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
          {language === 'es' ? 'Stack técnico' : 'Technical stack'}
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t.technologies.title}
        </h2>
        <p className="max-w-3xl text-lg leading-7 text-muted-foreground">
          {t.technologies.description}
        </p>
        <p className="font-mono text-xs text-muted-foreground/70">
          {TECH_CATEGORIES.length} {language === 'es' ? 'dominios' : 'domains'} · {totalTechnologies} {t.technologies.technologyCount}
        </p>
      </motion.div>      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {TECH_CATEGORIES.map((category, index) => {
          const Icon = ICONS[category.id as keyof typeof ICONS]
          const description = t.technologies[category.id]

          return (
            <motion.article
              key={category.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px' }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.04 }}
              className="rounded-2xl border border-border bg-card/70 p-6 shadow-sm backdrop-blur-sm"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">
                      {language === 'es'
                        ? ({
                            systems: 'Sistemas y empresa',
                            cloud: 'Cloud y DevOps',
                            development: 'Ingeniería de software',
                            backend: 'Backend, datos y APIs',
                            platforms: 'Producto y plataformas',
                            security: 'Seguridad e identidad',
                            ai: 'IA, agentes y automatización',
                            quality: 'Testing y calidad',
                          }[category.id])
                        : category.label}
                    </h3>
                    <span className="rounded-full border border-border/80 bg-background/50 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground/70">
                      {category.evidence === 'professional'
                        ? t.technologies.evidenceProfessional
                        : category.evidence === 'projects'
                          ? t.technologies.evidenceProjects
                          : t.technologies.evidenceMixed}
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {description}
                  </p>
                </div>
              </div>

              <ul className="mt-6 flex flex-wrap gap-2" aria-label={category.label}>
                {category.technologies.map((technology) => (
                  <li key={technology}>
                    <span className="inline-flex rounded-full border border-border bg-background/60 px-2.5 py-1.5 font-mono text-[11px] text-muted-foreground transition-colors hover:border-accent/30 hover:text-foreground">
                      {technology}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.article>
          )
        })}
      </div>

      <div className="mt-10 border-t border-border pt-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground/60">
          {t.technologies.evidenceTitle}
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {[
            ['professional', t.technologies.evidenceProfessional, t.technologies.evidenceProfessionalText],
            ['projects', t.technologies.evidenceProjects, t.technologies.evidenceProjectsText],
            ['mixed', t.technologies.evidenceMixed, t.technologies.evidenceMixedText],
          ].map(([key, label, text]) => (
            <div key={key} className="rounded-xl border border-border/80 bg-background/40 p-4">
              <p className="text-sm font-semibold text-foreground">{label}</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs leading-5 text-muted-foreground/70">{t.technologies.evidenceNote}</p>
      </div>
    </Section>
  )
}
