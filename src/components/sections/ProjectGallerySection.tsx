import { motion } from 'framer-motion'
import { PROJECTS } from '../../lib/data'
import { useLanguage } from '../../lib/i18n'

export function ProjectGallerySection({ projectId }: { projectId: string }) {
  const { language } = useLanguage()
  const project = PROJECTS.find((item) => item.id === projectId)

  if (!project?.image) return null

  const title = language === 'es' ? 'Evidencia visual' : 'Visual evidence'
  const eyebrow = language === 'es' ? 'Media del proyecto' : 'Project media'
  const caption = language === 'es'
    ? 'Visual representativo del proyecto. Las galerías adicionales se incorporarán cuando exista material verificable.'
    : 'Representative project visual. Additional gallery items will be added when verifiable material is available.'
  const alt = language === 'es' ? `${project.name} — visual del proyecto` : `${project.name} — project visual`

  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px' }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="rounded-2xl border border-border bg-card/60 p-6 shadow-sm backdrop-blur-sm sm:p-8"
      >
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">{eyebrow}</p>
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{title}</h2>
        <div className="mt-6 overflow-hidden rounded-xl border border-border bg-background/40">
          <img
            src={project.image}
            alt={alt}
            className="aspect-video w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
        <p className="mt-4 text-sm leading-6 text-muted-foreground">{caption}</p>
      </motion.div>
    </section>
  )
}
