import { Code } from 'lucide-react'
import { Section } from '../ui/Section'
import { useLanguage } from '../../lib/i18n'

export function Lab() {
  const { t } = useLanguage()

  return (
    <Section id="lab">
      <div className="flex flex-col gap-1">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t.lab.title}
        </h2>
        <p className="mt-2 max-w-2xl text-lg text-muted-foreground">
          {t.lab.description}
        </p>
        <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground/70">
          <Code className="h-4 w-4" aria-hidden="true" />
          <span>{t.lab.empty}</span>
        </div>
      </div>
    </Section>
  )
}
