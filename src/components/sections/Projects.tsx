import { motion } from 'framer-motion'
import { ProjectCard } from '../ui/ProjectCard'
import { Section } from '../ui/Section'
import { PROJECTS } from '../../lib/data'
import { useLanguage } from '../../lib/i18n'

export function Projects() {
  const { t } = useLanguage()
  const featured = PROJECTS.find((p) => p.featured)
  const others = PROJECTS.filter((p) => !p.featured)

  return (
    <Section id="projects">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex flex-col gap-1"
      >
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t.projects.title}
        </h2>
        <p className="mt-2 max-w-2xl text-lg text-muted-foreground">
          {t.projects.description}
        </p>
        <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground/60">
          {PROJECTS.length} {t.projects.tracked}
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
        {featured ? (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="md:col-span-2"
          >
            <ProjectCard project={featured} />
          </motion.div>
        ) : null}

        {others.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px' }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.05 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
