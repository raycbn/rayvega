import { CheckCircle2, GitBranch, LockKeyhole, Workflow } from 'lucide-react'
import { PROJECTS } from '../../lib/data'
import { useLanguage } from '../../lib/i18n'

const DECISIONS = [
  { title: { en: 'Evidence before action', es: 'Evidencia antes de actuar' }, text: { en: 'Operational actions are described around observable signals, explicit controls and verification.', es: 'Las acciones operativas se plantean alrededor de señales observables, controles explícitos y verificación.' } },
  { title: { en: 'Local-first when appropriate', es: 'Local-first cuando procede' }, text: { en: 'Myridian and Windows Local MCP keep important operational components close to the environment they control.', es: 'Myridian y Windows Local MCP mantienen componentes operativos importantes cerca del entorno que controlan.' } },
  { title: { en: 'Deterministic cores', es: 'Núcleos deterministas' }, text: { en: 'PedalMap Fuel keeps its calculation engine deterministic instead of coupling core calculations to AI.', es: 'PedalMap Fuel mantiene su motor de cálculo determinista en lugar de acoplar el núcleo a IA.' } },
  { title: { en: 'Explicit safety boundaries', es: 'Límites de seguridad explícitos' }, text: { en: 'MCP and Infrastructure Intelligence expose clear authentication, sandbox or scope controls.', es: 'MCP e Infrastructure Intelligence exponen controles claros de autenticación, aislamiento o alcance.' } },
] as const

const PUBLIC_WORK = [
  { id: 'nexus', name: 'NEXUS', type: { en: 'Public repository · active development', es: 'Repositorio público · desarrollo activo' }, url: 'https://github.com/raycbn/nexus' },
  { id: 'pedalmap', name: 'PedalMap', type: { en: 'Public repository · production deployment', es: 'Repositorio público · despliegue en producción' }, url: 'https://github.com/raycbn/Projects/tree/master/pedalmap' },
  { id: 'myridian', name: 'Myridian', type: { en: 'Public repository · active development', es: 'Repositorio público · desarrollo activo' }, url: 'https://github.com/raycbn/myridian' },
  { id: 'firebase-pocket-admin', name: 'Firebase Pocket Admin', type: { en: 'Public repository · active development', es: 'Repositorio público · desarrollo activo' }, url: 'https://github.com/raycbn/Firebase-Pocket-Admin' },
  { id: 'tcp-exam-trainer', name: 'TCP Exam Trainer', type: { en: 'Public repository · open source', es: 'Repositorio público · código abierto' }, url: 'https://github.com/raycbn/tcp-exam-trainer' },
  { id: 'infrastructure-intelligence', name: 'Infrastructure Intelligence', type: { en: 'Public repository · phase 0', es: 'Repositorio público · fase 0' }, url: 'https://github.com/raycbn/infrastructure-intelligence' },
  { id: 'mcp-local-server', name: 'Windows Local MCP', type: { en: 'Local tooling · public repository', es: 'Herramienta local · repositorio público' }, url: 'https://github.com/raycbn' },
] as const

const ROLES = [
  { en: 'Systems Administrator / Systems Engineer', es: 'Administrador / Ingeniero de Sistemas', context: { en: 'Professional background', es: 'Trayectoria profesional' } },
  { en: 'Infrastructure / Virtualization Engineer', es: 'Ingeniero de Infraestructura / Virtualización', context: { en: 'Professional background', es: 'Trayectoria profesional' } },
  { en: 'Cloud / DevOps Engineer', es: 'Ingeniero Cloud / DevOps', context: { en: 'Professional + project evidence', es: 'Evidencia profesional + proyectos' } },
  { en: 'Automation / Platform Engineer', es: 'Ingeniero de Automatización / Plataforma', context: { en: 'Professional + project evidence', es: 'Evidencia profesional + proyectos' } },
  { en: 'Technical Project / Systems Coordinator', es: 'Responsable de Proyectos Técnicos / Sistemas', context: { en: 'Professional background', es: 'Trayectoria profesional' } },
  { en: 'Software / Tools Engineer', es: 'Ingeniero de Software / Herramientas', context: { en: 'Project evidence', es: 'Evidencia en proyectos' } },
] as const

const EDUCATION = [
  { title: { en: 'Higher Technician in Systems Administration', es: 'Grado Superior en Administración de Sistemas' }, type: { en: 'Education', es: 'Formación' } },
  { title: { en: 'Higher Technician in Web Application Development', es: 'Grado Superior en Desarrollo de Aplicaciones Web' }, type: { en: 'Education', es: 'Formación' } },
  { title: { en: 'TCP cabin crew training · Elite AirCrew Madrid', es: 'Formación TCP · Elite AirCrew Madrid' }, type: { en: 'Additional technical training', es: 'Formación adicional' } },
] as const

const NOTES = [
  { title: { en: 'How I build', es: 'Cómo construyo' }, text: { en: 'Discover the problem, define boundaries, choose the simplest architecture that fits, implement in small increments, validate, then document the operational path.', es: 'Descubrir el problema, definir límites, elegir la arquitectura más sencilla que encaje, implementar por incrementos, validar y documentar el camino operativo.' } },
  { title: { en: 'From infrastructure to AI', es: 'De infraestructura a IA' }, text: { en: 'The common thread is systems thinking: resources, dependencies, observability, controlled change and verification. Current AI work extends that foundation into agents, MCP and governed remediation.', es: 'El hilo común es el pensamiento de sistemas: recursos, dependencias, observabilidad, cambios controlados y verificación. El trabajo actual con IA extiende esa base hacia agentes, MCP y remediación gobernada.' } },
  { title: { en: 'Lab 2.0', es: 'Laboratorio 2.0' }, text: { en: 'Current lab work includes NEXUS self-hosting, Windows Local MCP, Infrastructure Intelligence discovery boundaries and Myridian observability experiments.', es: 'El trabajo actual de laboratorio incluye el autoalojado de NEXUS, Windows Local MCP, los límites de descubrimiento de Infrastructure Intelligence y experimentos de observabilidad de Myridian.' } },
] as const

export function Portfolio2() {
  const { language } = useLanguage()
  const es = language === 'es'
  const sectionTitle = (es ? 'Portfolio 2.0' : 'Portfolio 2.0')
  const sectionText = es ? 'Contexto profesional, decisiones de ingeniería, trabajo público y criterios de evidencia reunidos en una sola capa.' : 'Professional context, engineering decisions, public work and evidence criteria brought together in one layer.'

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <header>
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">37–65</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{sectionTitle}</h2>
        <p className="mt-3 max-w-3xl text-lg leading-7 text-muted-foreground">{sectionText}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          <a href="/cv" className="rounded-xl border border-border bg-card px-3.5 py-2 text-sm font-medium text-foreground hover:border-accent/40">CV</a>
          <a href="/documents/projects" className="rounded-xl border border-border bg-card px-3.5 py-2 text-sm font-medium text-foreground hover:border-accent/40">{es ? 'Proyectos PDF' : 'Projects PDF'}</a>
          <a href="/documents/technical-profile" className="rounded-xl border border-border bg-card px-3.5 py-2 text-sm font-medium text-foreground hover:border-accent/40">{es ? 'Perfil técnico PDF' : 'Technical profile PDF'}</a>
        </div>
      </header>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <article className="rounded-2xl border border-border bg-card/60 p-6 sm:p-8">
          <div className="flex items-center gap-3"><Workflow className="h-5 w-5 text-accent" aria-hidden="true" /><h3 className="text-xl font-semibold text-foreground">{es ? 'Decisiones de ingeniería' : 'Engineering decisions'}</h3></div>
          <div className="mt-6 grid gap-4">
            {DECISIONS.map((item) => <div key={item.title.en} className="rounded-xl border border-border/80 bg-background/40 p-4"><p className="font-medium text-foreground">{item.title[language]}</p><p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text[language]}</p></div>)}
          </div>
        </article>

        <article className="rounded-2xl border border-border bg-card/60 p-6 sm:p-8">
          <div className="flex items-center gap-3"><LockKeyhole className="h-5 w-5 text-accent" aria-hidden="true" /><h3 className="text-xl font-semibold text-foreground">{es ? 'Seguridad y fiabilidad' : 'Security & reliability'}</h3></div>
          <ul className="mt-6 grid gap-3">
            {[
              es ? 'Autenticación y control de acceso explícitos donde el proyecto lo requiere.' : 'Explicit authentication and access controls where the project requires them.',
              es ? 'Límites de alcance antes de acciones potencialmente destructivas.' : 'Scope boundaries before potentially destructive actions.',
              es ? 'Verificación posterior y trazabilidad en flujos operativos de NEXUS.' : 'Post-change verification and traceability in NEXUS operational flows.',
              es ? 'Sin convertir las pruebas o el descubrimiento en capacidades no soportadas por el proyecto.' : 'No turning testing or discovery into capabilities the project does not support.',
            ].map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" /><span>{item}</span></li>)}
          </ul>
        </article>
      </div>

      <div className="mt-5 rounded-2xl border border-border bg-card/60 p-6 sm:p-8">
        <h3 className="text-xl font-semibold text-foreground">{es ? 'Aportación al equipo y áreas profesionales' : 'Team contribution & professional areas'}</h3>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">{es ? 'Separación explícita entre experiencia profesional y dirección de proyecto.' : 'Explicit separation between professional experience and project direction.'}</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{ROLES.map((role) => <div key={role.en} className="rounded-xl border border-border/80 bg-background/40 p-4"><p className="font-medium text-foreground">{role[language]}</p><p className="mt-2 text-xs font-mono text-muted-foreground/70">{role.context[language]}</p></div>)}</div>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <article className="rounded-2xl border border-border bg-card/60 p-6 sm:p-8">
          <div className="flex items-center gap-3"><GitBranch className="h-5 w-5 text-accent" aria-hidden="true" /><h3 className="text-xl font-semibold text-foreground">{es ? 'Trabajo público y evidencia GitHub' : 'Public work & GitHub evidence'}</h3></div>
          <div className="mt-6 grid gap-3">{PUBLIC_WORK.map((repo) => <a key={repo.id} href={repo.url} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-border/80 bg-background/40 p-4 hover:border-accent/40"><p className="font-medium text-foreground">{repo.name}</p><p className="mt-1 text-xs text-muted-foreground">{repo.type[language]}</p></a>)}</div>
        </article>

        <article className="rounded-2xl border border-border bg-card/60 p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-foreground">{es ? 'Formación' : 'Education'}</h3>
          <div className="mt-6 grid gap-3">{EDUCATION.map((item) => <div key={item.title.en} className="rounded-xl border border-border/80 bg-background/40 p-4"><p className="text-xs font-mono uppercase tracking-[0.12em] text-accent">{item.type[language]}</p><p className="mt-2 font-medium text-foreground">{item.title[language]}</p></div>)}</div>
        </article>
      </div>

      <div className="mt-5 rounded-2xl border border-border bg-card/60 p-6 sm:p-8">
        <h3 className="text-xl font-semibold text-foreground">{es ? 'Notas técnicas y laboratorio' : 'Technical notes & lab'}</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-3">{NOTES.map((note) => <details key={note.title.en} className="rounded-xl border border-border/80 bg-background/40 p-4"><summary className="cursor-pointer font-medium text-foreground">{note.title[language]}</summary><p className="mt-3 text-sm leading-6 text-muted-foreground">{note.text[language]}</p></details>)}</div>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <article className="rounded-2xl border border-border bg-card/60 p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-foreground">{es ? 'Sistema visual y experiencia' : 'Visual system & experience'}</h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {(es
              ? ['Sistema claro/oscuro', 'Diseño responsive', 'Jerarquía visual consistente', 'Foco visible y navegación por teclado', 'Imágenes secundarias lazy-load', 'Bordes y controles coherentes']
              : ['Dark/light system', 'Responsive layout', 'Consistent visual hierarchy', 'Visible focus and keyboard navigation', 'Lazy-loaded secondary images', 'Consistent borders and controls']).map((item) => <div key={item} className="rounded-xl border border-border/80 bg-background/40 px-4 py-3 text-sm text-muted-foreground">{item}</div>)}
          </div>
        </article>
        <article className="rounded-2xl border border-border bg-card/60 p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-foreground">{es ? 'SEO, rendimiento y accesibilidad' : 'SEO, performance & accessibility'}</h3>
          <div className="mt-5 grid gap-3">
            {(es
              ? ['Canonical y meta dinámicos por ruta', 'Open Graph y Twitter metadata', 'JSON-LD para Person, WebSite y WebPage', 'Code-splitting de páginas secundarias', 'Skip link, ARIA y gestión del menú móvil', 'CSP y Referrer-Policy configuradas']
              : ['Dynamic canonical and meta by route', 'Open Graph and Twitter metadata', 'JSON-LD for Person, WebSite and WebPage', 'Code-split secondary pages', 'Skip link, ARIA and mobile-menu handling', 'Configured CSP and Referrer-Policy']).map((item) => <div key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" /><span>{item}</span></div>)}
          </div>
        </article>
      </div>

      <div className="mt-5 rounded-2xl border border-border bg-card/60 p-6 sm:p-8">
        <h3 className="text-xl font-semibold text-foreground">{es ? 'Auditoría y release' : 'Audit & release'}</h3>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: es ? 'Contenido' : 'Content', value: es ? 'EN / ES' : 'EN / ES' },
            { label: es ? 'Evidencia' : 'Evidence', value: es ? 'Por contexto' : 'By context' },
            { label: es ? 'Proyectos' : 'Projects', value: String(PROJECTS.length) },
            { label: es ? 'Release' : 'Release', value: 'Portfolio 2.0' },
          ].map((item) => <div key={item.label} className="rounded-xl border border-border bg-background/30 p-5"><p className="text-xs font-mono uppercase tracking-[0.14em] text-muted-foreground/60">{item.label}</p><p className="mt-2 text-sm font-semibold text-foreground">{item.value}</p></div>)}
        </div>
        <p className="mt-5 text-xs leading-5 text-muted-foreground/70">{es ? 'La auditoría describe controles y contenido presentes en el código; la validación automática de ejecución queda sujeta al entorno de build.' : 'The audit describes controls and content present in the code; automated execution validation remains dependent on the build environment.'}</p>
      </div>
    </section>
  )
}
