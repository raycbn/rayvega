import { Code } from 'lucide-react'
import { Section } from '../ui/Section'

export function Lab() {
  return (
    <Section id="lab">
      <div className="flex flex-col gap-1">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Lab
        </h2>
        <p className="mt-2 max-w-2xl text-lg text-muted-foreground">
          Experiments, write-ups, and tooling explored in the lab — coming soon.
        </p>
        <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground/70">
          <Code className="h-4 w-4" aria-hidden="true" />
          <span>No lab entries yet.</span>
        </div>
      </div>
    </Section>
  )
}
