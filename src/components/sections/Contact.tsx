import { Mail } from 'lucide-react'
import type { ComponentType } from 'react'
import { SOCIAL } from '../../lib/data'
import { Section } from '../ui/Section'
import { cn } from '../../lib/utils'
import { GitHub } from '../ui/GitHubIcon'
import { LinkedIn } from '../ui/LinkedInIcon'

type Method = {
  id: string
  label: string
  Icon: ComponentType<{ className?: string }>
  href: string | undefined
}

const methods: Method[] = [
  { id: 'github', label: 'GitHub', Icon: GitHub, href: SOCIAL.github },
  { id: 'linkedin', label: 'LinkedIn', Icon: LinkedIn, href: SOCIAL.linkedin },
  {
    id: 'email',
    label: 'Email',
    Icon: Mail,
    href: SOCIAL.email ? `mailto:${SOCIAL.email}` : undefined,
  },
]

export function Contact() {
  return (
    <Section id="contact">
      <div className="flex flex-col gap-1">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Contact
        </h2>
        <p className="mt-2 max-w-2xl text-lg text-muted-foreground">
          Let's connect.
        </p>
      </div>

      <ul className="mt-8 flex flex-col gap-3 sm:gap-4">
        {methods.map((m) => (
          <li key={m.id} className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-muted-foreground"
            >
              <m.Icon className="h-4 w-4" />
            </span>
            {m.href ? (
              <a
                href={m.href}
                target={m.id === 'email' ? undefined : '_blank'}
                rel={m.id === 'email' ? undefined : 'noopener noreferrer'}
              className={cn(
                'text-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                m.id === 'email' ? 'text-accent hover:underline' : '',
              )}
              >
                {m.label}
              </a>
            ) : (
              <span className="text-sm text-muted-foreground">
                {m.label} — pending
              </span>
            )}
          </li>
        ))}
      </ul>
    </Section>
  )
}
