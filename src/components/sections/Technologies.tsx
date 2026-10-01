import { Boxes, Cloud, Code2, Cpu } from 'lucide-react'
import { motion } from 'framer-motion'
import { TECH_CATEGORIES } from '../../lib/data'
import { useLanguage } from '../../lib/i18n'
import { Section } from '../ui/Section'

const ICONS = {
  infrastructure: Boxes,
  cloud: Cloud,
  development: Code2,
  ai: Cpu,
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
          4 {language === 'es' ? 'dominios' : 'domains'} · {totalTechnologies} {t.technologies.technologyCount}
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
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {language === 'es'
                      ? ({
                          infrastructure: 'Infraestructura',
                          cloud: 'Cloud / DevOps',
                          development: 'Desarrollo',
                          ai: 'IA / Automatización',
                        }[category.id])
                      : category.label}
                  </h3>
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

      <div className="mt-10 grid gap-4 border-t border-border pt-8 sm:grid-cols-3">
        {[
          {
            label: language === 'es' ? 'Sistemas' : 'Systems',
            value: language === 'es' ? 'Windows · Linux · Virtualización' : 'Windows · Linux · Virtualization',
          },
          {
            label: language === 'es' ? 'Cloud' : 'Cloud',
            value: language === 'es' ? 'Azure · AWS · Contenedores' : 'Azure · AWS · Containers',
          },
          {
            label: language === 'es' ? 'Automatización' : 'Automation',
            value: language === 'es' ? 'PowerShell · Bash · Ansible · Terraform' : 'PowerShell · Bash · Ansible · Terraform',
          },
        ].map(({ label, value }) => (
          <div key={label}>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground/60">
              {label}
            </p>
            <p className="mt-2 text-sm font-medium leading-6 text-foreground">{value}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
