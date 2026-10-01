import { Cloud, Cog, Database, Server, ShieldCheck, Workflow } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '../../lib/i18n'

const ITEMS = [
  { icon: Server, title: { en: 'Enterprise systems administration', es: 'Administración de sistemas empresariales' }, text: { en: 'Operate and support Windows and Linux environments, core services and enterprise platforms.', es: 'Operar y dar soporte a entornos Windows y Linux, servicios base y plataformas empresariales.' } },
  { icon: Database, title: { en: 'Infrastructure & virtualization', es: 'Infraestructura y virtualización' }, text: { en: 'Work across VMware, storage, SAN/NAS and infrastructure operations.', es: 'Trabajar con VMware, almacenamiento, SAN/NAS y operación de infraestructura.' } },
  { icon: Cloud, title: { en: 'Cloud & hybrid environments', es: 'Entornos cloud e híbridos' }, text: { en: 'Operate across on-premise and cloud contexts, including Azure and AWS.', es: 'Trabajar entre entornos locales y cloud, incluyendo Azure y AWS.' } },
  { icon: Workflow, title: { en: 'Automation & scripting', es: 'Automatización y scripting' }, text: { en: 'Reduce repetitive operational work with PowerShell, Bash and infrastructure automation.', es: 'Reducir trabajo operativo repetitivo con PowerShell, Bash y automatización de infraestructura.' } },
  { icon: ShieldCheck, title: { en: 'Security & continuity', es: 'Seguridad y continuidad' }, text: { en: 'Handle security-focused operations, critical incidents and controlled change.', es: 'Gestionar operaciones orientadas a seguridad, incidencias críticas y cambios controlados.' } },
  { icon: Cog, title: { en: 'Technical coordination', es: 'Coordinación técnica' }, text: { en: 'Coordinate teams, suppliers, clients and technical projects around operational outcomes.', es: 'Coordinar equipos, proveedores, clientes y proyectos técnicos hacia resultados operativos.' } },
] as const

export function Capabilities() {
  const { language } = useLanguage()
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="capabilities-title">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">{language === 'es' ? 'Capacidades profesionales' : 'Professional capabilities'}</p>
      <h2 id="capabilities-title" className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {language === 'es' ? 'Qué sé hacer' : 'What I do'}
      </h2>
      <p className="mt-3 max-w-3xl text-lg leading-7 text-muted-foreground">
        {language === 'es' ? 'Áreas de trabajo derivadas de la trayectoria profesional descrita en este portfolio.' : 'Work areas derived from the professional experience described in this portfolio.'}
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.article key={item.title.en} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px' }} transition={{ duration: 0.4, delay: index * 0.04 }} className="rounded-2xl border border-border bg-card/60 p-6 shadow-sm backdrop-blur-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent"><Icon className="h-5 w-5" aria-hidden="true" /></span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{item.title[language]}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text[language]}</p>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
