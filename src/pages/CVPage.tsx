import { ArrowLeft, Printer } from 'lucide-react'
import { useMemo } from 'react'
import { PROJECTS, TECH_CATEGORIES } from '../lib/data'
import { getExperienceCopy, useLanguage } from '../lib/i18n'
import { Button } from '../components/ui/Button'
import { GitHub } from '../components/ui/GitHubIcon'

const periods = ['2025 – 2026', '2022 – 2025', '2021 – 2022'] as const

export function CVPage() {
  const { language, t } = useLanguage()
  const experiences = getExperienceCopy(language)
  const skillGroups = useMemo(
    () => TECH_CATEGORIES.map((group) => ({
      label: language === 'es'
        ? ({
            systems: 'Sistemas y empresa',
            cloud: 'Cloud / DevOps',
            development: 'Desarrollo',
            backend: 'Backend, datos y APIs',
            platforms: 'Producto y plataformas',
            security: 'Seguridad e identidad',
            ai: 'IA / Automatización',
            quality: 'Testing y calidad',
          }[group.id])
        : group.label,
      technologies: group.technologies,
    })),
    [language],
  )
  const selectedProjects = PROJECTS.slice(0, 5)

  return (
    <main className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
      <div className="cv-actions mb-8 flex flex-wrap items-center justify-between gap-3">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {t.detail.back}
        </a>
        <Button type="button" variant="secondary" onClick={() => window.print()} leftIcon={<Printer className="h-4 w-4" />}>
          {t.cv.print}
        </Button>
      </div>

      <article className="rounded-3xl border border-border bg-card/80 p-7 shadow-xl shadow-black/5 backdrop-blur-sm sm:p-10">
        <header className="border-b border-border pb-8">          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">{t.cv.current}</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Ray Vega</h1>
              <p className="mt-2 text-xl font-medium text-foreground">{t.cv.subtitle}</p>
              <p className="mt-2 text-sm text-muted-foreground">{t.cv.location}</p>
            </div>
            <a
              href="https://github.com/raycbn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
            >
              <GitHub className="h-4 w-4" aria-hidden="true" />
              github.com/raycbn
            </a>
          </div>
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">{t.cv.summary}</p>
        </header>

        <section className="mt-8">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">{t.cv.experience}</h2>
          <div className="mt-5 space-y-7">
            {experiences.map((experience, index) => (
              <div key={experience.company} className="border-l-2 border-accent/40 pl-5">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-semibold text-foreground">{experience.role}</h3>
                  <span className="font-mono text-xs text-muted-foreground">{periods[index]}</span>
                </div>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.12em] text-accent">{experience.company}</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{experience.summary}</p>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight} className="text-sm leading-6 text-muted-foreground">• {highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>        <section className="mt-10 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">{t.cv.education}</h2>
            <div className="mt-5 space-y-4">
              <div>
                <h3 className="font-semibold text-foreground">
                  {language === 'es' ? 'Grado Superior en Administración de Sistemas' : 'Higher Technician — Systems Administration'}
                </h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {language === 'es' ? 'Formación técnica orientada a sistemas, infraestructura y administración empresarial.' : 'Technical training focused on systems, infrastructure and enterprise administration.'}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  {language === 'es' ? 'Grado Superior en Desarrollo de Aplicaciones Web' : 'Higher Technician — Web Application Development'}
                </h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {language === 'es' ? 'Formación de desarrollo que complementa el perfil de infraestructura con software.' : 'Development training that complements the infrastructure profile with software engineering.'}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">{t.cv.skills}</h2>
            <div className="mt-5 space-y-4">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground/70">{group.label}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {group.technologies.map((technology) => (
                      <span key={technology} className="rounded-full border border-border bg-muted/30 px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>        <section className="mt-10 border-t border-border pt-8">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">{t.cv.projects}</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {selectedProjects.map((project) => (
              <a
                key={project.id}
                href={project.detailUrl ?? '/#projects'}
                className="rounded-xl border border-border bg-background/50 p-4 transition-colors hover:border-accent/40 hover:bg-muted/30"
              >
                <h3 className="font-semibold text-foreground">{project.name}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.shortDescription}</p>
              </a>
            ))}
          </div>
        </section>

        <p className="mt-10 border-t border-border pt-6 text-xs leading-5 text-muted-foreground/70">{t.cv.sourceNote}</p>
      </article>
    </main>
  )
}
