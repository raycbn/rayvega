import { Section } from '../ui/Section'
import { Timeline, TimelineItem } from '../ui/Timeline'

export function Experience() {
  return (
    <Section id="experience">
      <div className="flex flex-col gap-1">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Experience
        </h2>
        <p className="mt-2 max-w-2xl text-lg text-muted-foreground">
          Professional background — coming soon.
        </p>
      </div>

      <div className="mt-12 sm:mt-16">
        <Timeline>
          <TimelineItem>
            <p className="text-sm text-muted-foreground">
              Professional experience entries will be added here.
            </p>
          </TimelineItem>
        </Timeline>
      </div>
    </Section>
  )
}
