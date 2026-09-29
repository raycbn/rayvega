import { motion } from 'framer-motion'
import { SOCIAL, SITE } from '../../lib/data'
import { ButtonLink } from '../ui/Button'
import { GitHub } from '../ui/GitHubIcon'
import { LinkedIn } from '../ui/LinkedInIcon'

export function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden">
      <div className="mx-auto flex min-h-[calc(100dvh-4rem)] w-full max-w-3xl flex-col items-center gap-8 px-6 py-20 text-center lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="w-full"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
            {SITE.name}
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl/tight">
            {SITE.headline}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            {SITE.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.08 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <ButtonLink href="#projects" variant="primary" size="lg">
            View projects
          </ButtonLink>
          <ButtonLink
            href={SOCIAL.github}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            leftIcon={<GitHub className="h-4 w-4" />}
          >
            GitHub
          </ButtonLink>
          {SOCIAL.linkedin ? (
            <ButtonLink
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              leftIcon={<LinkedIn className="h-4 w-4" />}
            >
              LinkedIn
            </ButtonLink>
          ) : null}
        </motion.div>
      </div>

      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 h-80 w-80 -z-1 rounded-full bg-accent/10 blur-3xl"
      />
    </section>
  )
}
