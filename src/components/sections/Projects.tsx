import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ProjectCard } from '../ui/ProjectCard'
import { Section } from '../ui/Section'
import { PROJECTS } from '../../lib/data'
import { useLanguage } from '../../lib/i18n'

export function Projects() {
  const { language, t } = useLanguage()
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const visibleProjects = useMemo(() => PROJECTS.filter((project) => {
    const matchesQuery = `${project.name} ${project.shortDescription} ${project.technologies.join(' ')}`.toLowerCase().includes(query.toLowerCase().trim())
    const matchesCategory = category === 'all' || project.category === category
    return matchesQuery && matchesCategory
  }), [category, query])
  const featured = visibleProjects.find((p) => p.featured)
  const others = visibleProjects.filter((p) => !p.featured)

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
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <label className="flex-1">
            <span className="sr-only">{language === 'es' ? 'Buscar proyecto' : 'Search projects'}</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={language === 'es' ? 'Buscar por proyecto, tecnología...' : 'Search by project, technology...'}
              className="w-full rounded-xl border border-border bg-card/60 px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-accent/40"
            />
          </label>
          <select value={category} onChange={(event) => setCategory(event.target.value)} className="rounded-xl border border-border bg-card/60 px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-accent/40" aria-label={language === 'es' ? 'Filtrar por categoría' : 'Filter by category'}>
            <option value="all">{language === 'es' ? 'Todas las categorías' : 'All categories'}</option>
            <option value="AI / Automation">AI / Automation</option>
            <option value="Infrastructure">{language === 'es' ? 'Infraestructura' : 'Infrastructure'}</option>
            <option value="Cloud / DevOps">Cloud / DevOps</option>
            <option value="Development">{language === 'es' ? 'Desarrollo' : 'Development'}</option>
            <option value="Tools / Lab">{language === 'es' ? 'Herramientas / Laboratorio' : 'Tools / Lab'}</option>
          </select>
        </div>
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
