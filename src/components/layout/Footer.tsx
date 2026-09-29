import { Mail } from 'lucide-react'
import { SOCIAL, SITE } from '../../lib/data'
import { GitHub } from '../ui/GitHubIcon'
import { LinkedIn } from '../ui/LinkedInIcon'
import { IconLink } from '../ui/IconLink'

const CURRENT_YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-8">
        <span className="text-sm text-muted-foreground">
          © {CURRENT_YEAR} {SITE.name}. All rights reserved.
        </span>
        <div className="flex items-center gap-1">
          <IconLink href={SOCIAL.github} icon={GitHub} label="GitHub" />
          <IconLink href={SOCIAL.linkedin} icon={LinkedIn} label="LinkedIn" />
          {SOCIAL.email ? (
            <IconLink href={`mailto:${SOCIAL.email}`} icon={Mail} label="Email" />
          ) : null}
        </div>
      </div>
    </footer>
  )
}
