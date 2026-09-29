import { TECH_CATEGORIES } from '../../lib/data'
import { Section } from '../ui/Section'

export function Technologies() {
  return (
    <Section id="technologies">
      <div className="flex flex-col gap-1">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Technologies
        </h2>
        <p className="mt-2 max-w-2xl text-lg text-muted-foreground">
          Tools and platforms I work with — organized by domain.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {TECH_CATEGORIES.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center"
          >
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {category.label}
            </span>
            <p className="text-sm text-muted-foreground">Pending</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
