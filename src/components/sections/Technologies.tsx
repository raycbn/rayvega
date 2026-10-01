import { TECH_CATEGORIES } from '../../lib/data'
import { useLanguage } from '../../lib/i18n'
import { Section } from '../ui/Section'

export function Technologies() {
  const { language, t } = useLanguage()
  const labels = language === 'es'
    ? { infrastructure: 'Infraestructura', cloud: 'Cloud / DevOps', development: 'Desarrollo', ai: 'IA / Automatización' }
    : { infrastructure: 'Infrastructure', cloud: 'Cloud / DevOps', development: 'Development', ai: 'AI / Automation' }

  return (
    <Section id="technologies">
      <div className="flex flex-col gap-1">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t.technologies.title}
        </h2>
        <p className="mt-2 max-w-2xl text-lg text-muted-foreground">
          {t.technologies.description}
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {TECH_CATEGORIES.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center"
          >
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {labels[category.id as keyof typeof labels]}
            </span>
            <p className="text-sm text-muted-foreground">{t.technologies.pending}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
