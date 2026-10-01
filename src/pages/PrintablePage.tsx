import { Printer } from 'lucide-react'
import { PROJECTS, TECH_CATEGORIES } from '../lib/data'
import { getExperienceCopy, useLanguage } from '../lib/i18n'

export function PrintablePage({ kind }: { kind: 'projects' | 'technical' }) {
  const { language } = useLanguage()
  const es = language === 'es'
  const projects = kind === 'projects' ? PROJECTS : PROJECTS.slice(0, 6)
  const title = kind === 'projects'
    ? (es ? 'Proyectos - Ray Vega' : 'Projects - Ray Vega')
    : (es ? 'Perfil técnico - Ray Vega' : 'Technical Profile - Ray Vega')
  const description = kind === 'projects'
    ? (es ? 'Selección de proyectos, tecnologías, estado y enlaces públicos.' : 'Selected projects, technologies, status and public links.')
    : (es ? 'Perfil de sistemas, infraestructura, cloud, automatización, seguridad y software.' : 'Profile across systems, infrastructure, cloud, automation, security and software.')

  return (
    <main className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
      <div className="cv-actions mb-8 flex justify-end">
        <button type="button" onClick={() => window.print()} className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-sm font-medium text-foreground">
          <Printer className="h-4 w-4" aria-hidden="true" />
          {es ? 'Imprimir / Guardar PDF' : 'Print / Save PDF'}
        </button>
      </div>

      <article className="rounded-3xl border border-border bg-card p-7 sm:p-10">
        <header className="border-b border-border pb-7">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Ray Vega</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground">{title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">{description}</p>
        </header>

        {kind === 'technical' ? (
          <>
            <section className="mt-8">
              <h2 className="text-2xl font-bold text-foreground">{es ? 'Experiencia' : 'Experience'}</h2>
              <div className="mt-5 space-y-5">
                {getExperienceCopy(language).map((experience) => (
                  <div key={experience.company} className="rounded-xl border border-border p-5">
                    <p className="font-mono text-xs uppercase tracking-[0.12em] text-accent">{experience.company}</p>
                    <h3 className="mt-1 font-semibold text-foreground">{experience.role}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{experience.summary}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-bold text-foreground">{es ? 'Stack técnico' : 'Technical stack'}</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {TECH_CATEGORIES.map((category) => (
                  <div key={category.id} className="rounded-xl border border-border p-5">
                    <h3 className="font-semibold text-foreground">{category.label}</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {category.technologies.map((technology) => (
                        <span key={technology} className="rounded-full border border-border bg-muted/30 px-2.5 py-1 font-mono text-[10px] text-muted-foreground">{technology}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        ) : null}

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-foreground">{es ? 'Proyectos seleccionados' : 'Selected projects'}</h2>
          <div className="mt-5 space-y-4">
            {projects.map((project) => (
              <div key={project.id} className="rounded-xl border border-border p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-semibold text-foreground">{project.name}</h3>
                  <span className="font-mono text-xs text-muted-foreground">{project.category}</span>
                </div>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.shortDescription}</p>
                <div className="mt-3 flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="rounded-full border border-border bg-muted/30 px-2 py-1 font-mono text-[10px] text-muted-foreground">{technology}</span>)}</div>
                {project.githubUrl ? <p className="mt-3 break-all text-xs text-muted-foreground">{project.githubUrl}</p> : null}
              </div>
            ))}
          </div>
        </section>
      </article>
    </main>
  )
}
