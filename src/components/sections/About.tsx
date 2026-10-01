import { ShieldCheck, Terminal, Workflow } from 'lucide-react'
import { motion } from 'framer-motion'
import { Section } from '../ui/Section'
import { useLanguage } from '../../lib/i18n'

export function About() {
  const { language, t } = useLanguage()
  const profile = [
    { icon: Terminal, label: t.about.systems, text: t.about.systemsText },
    { icon: Workflow, label: t.about.cloud, text: t.about.cloudText },
    { icon: ShieldCheck, label: t.about.security, text: t.about.securityText },
  ]

  return (
    <Section id="about">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"
      >
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">{t.about.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.about.title}
          </h2>
        </div>

        <div className="max-w-3xl">
          <p className="text-lg leading-8 text-foreground/90">{t.about.intro}</p>
          <p className="mt-5 text-base leading-7 text-muted-foreground">{t.about.background}</p>
          <p className="mt-5 text-base leading-7 text-muted-foreground">{t.about.education}</p>
        </div>
      </motion.div>      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {profile.map(({ icon: Icon, label, text }, index) => (
          <motion.article
            key={label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px' }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.05 }}
            className="rounded-2xl border border-border bg-card/70 p-5 shadow-sm backdrop-blur-sm"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <h3 className="font-semibold text-foreground">{label}</h3>
            </div>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">{text}</p>
          </motion.article>
        ))}
      </div>

      <div className="mt-12 grid gap-6 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-4">
        {[
          [language === 'es' ? 'Sistemas' : 'Systems', 'Windows · Linux · RHEL'],
          [language === 'es' ? 'Infraestructura' : 'Infrastructure', 'VMware · SAN/NAS · NetApp · Citrix'],
          [language === 'es' ? 'Automatización' : 'Automation', 'PowerShell · Ansible · Bash · Terraform'],
          [language === 'es' ? 'Contenedores' : 'Containers', 'OpenShift · Kubernetes'],
        ].map(([label, value]) => (
          <div key={label}>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground/60">{label}</p>
            <p className="mt-2 text-sm font-medium leading-6 text-foreground">{value}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
