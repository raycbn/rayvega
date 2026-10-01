import { Mail } from 'lucide-react'
import { SOCIAL, SITE } from '../../lib/data'
import { GitHub } from '../ui/GitHubIcon'
import { LinkedIn } from '../ui/LinkedInIcon'
import { useLanguage } from '../../lib/i18n'
import { IconLink } from '../ui/IconLink'

const CURRENT_YEAR = new Date().getFullYear()

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto flex min-h-16 max-w-7xl flex-col items-center justify-center gap-3 px-6 py-3 sm:flex-row sm:justify-between md:px-8">
        <span className="text-sm text-muted-foreground">
          © {CURRENT_YEAR} {SITE.name}. {t.common.allRightsReserved}
        </span>
        <div className="flex items-center gap-1">
          <IconLink href={SOCIAL.github} icon={GitHub} label="GitHub" />
          <IconLink href={SOCIAL.linkedin} icon={LinkedIn} label="LinkedIn" />
          {SOCIAL.email ? (
            <IconLink href={`mailto:${SOCIAL.email}`} icon={Mail} label={t.contact.email} />
          ) : null}
        </div>
      </div>
    </footer>
  )
}
