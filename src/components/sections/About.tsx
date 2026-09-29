import { Section } from '../ui/Section'

export function About() {
  return (
    <Section id="about">
      <div className="flex flex-col gap-1">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          About
        </h2>
        <p className="mt-2 max-w-2xl text-lg text-muted-foreground">
          A short bio is coming soon.
        </p>
      </div>
    </Section>
  )
}
