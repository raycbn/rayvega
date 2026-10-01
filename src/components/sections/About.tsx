import { ShieldCheck, Terminal, Workflow } from 'lucide-react'
import { motion } from 'framer-motion'
import { Section } from '../ui/Section'

const PROFILE = [
  {
    icon: Terminal,
    label: 'Systems & infrastructure',
    text: 'Windows, Linux, RHEL, Active Directory, VMware, SAN/NAS, NetApp and enterprise middleware.',
  },
  {
    icon: Workflow,
    label: 'Cloud & automation',
    text: 'Azure, AWS, infrastructure automation with PowerShell, Ansible, Bash and Terraform.',
  },
  {
    icon: ShieldCheck,
    label: 'Security & operations',
    text: 'Hardening, MFA, security audits, critical incidents, continuity and controlled operational change.',
  },
]

export function About() {
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
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Profile</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Systems first. Build beyond operations.
          </h2>
        </div>

        <div className="max-w-3xl">
          <p className="text-lg leading-8 text-foreground/90">
            I’m a systems and infrastructure engineer focused on reliable enterprise environments,
            combining day-to-day operations with cloud, security, automation and software projects.
          </p>
          <p className="mt-5 text-base leading-7 text-muted-foreground">
            My background spans Windows and Linux administration, virtualization, storage, cloud platforms
            and technical project coordination. I also build my own tools and products, using code to
            reduce repetitive work, make infrastructure more observable and turn operational ideas into
            usable systems.
          </p>
          <p className="mt-5 text-base leading-7 text-muted-foreground">
            My education combines a Higher Technician qualification in Systems Administration with another
            in Web Application Development, giving me a practical bridge between infrastructure and software.
          </p>
        </div>
      </motion.div>      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {PROFILE.map(({ icon: Icon, label, text }, index) => (
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
          ['Systems', 'Windows · Linux · RHEL'],
          ['Infrastructure', 'VMware · SAN/NAS · NetApp · Citrix'],
          ['Automation', 'PowerShell · Ansible · Bash · Terraform'],
          ['Containers', 'OpenShift · Kubernetes'],
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
