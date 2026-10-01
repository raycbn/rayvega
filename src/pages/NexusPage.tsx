import { ArrowLeft, ArrowUpRight, Check, GitBranch, ShieldCheck, Workflow } from 'lucide-react'
import { motion } from 'framer-motion'
import { PROJECTS } from '../lib/data'
import { Badge } from '../components/ui/Badge'
import { ButtonLink } from '../components/ui/Button'

const nexus = PROJECTS.find((project) => project.id === 'nexus')

const LOOP = [
  'Detect',
  'Investigate',
  'Prove root cause',
  'Remediate safely',
  'Verify',
  'Resolve',
]

const CAPABILITIES = [
  'Investigation and incident engines',
  'Resource graph with infrastructure connectors',
  'Policy-governed remediation and autonomous resolution',
  'Scheduled discovery and discovery history',
  'Approval workflows and bulk operations',
  'Self-hosted Docker deployment',
]

const RELEASE_GATES = [
  'Reproducible, pinned self-hosted release',
  'Explicit AI / Ollama deployment support',
  'Clean-machine end-to-end validation',
  'Single end-to-end smoke test and CI',
  'TLS, reverse-proxy and backup/restore documentation',
]

export function NexusPage() {
  if (!nexus) return null

  return (
    <main>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.18),transparent_36%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <a
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to projects
          </a>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="mt-10 max-w-4xl"
          >            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                {nexus.category}
              </span>
              <Badge status="in-progress">{nexus.phase}</Badge>
            </div>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              NEXUS
            </h1>
            <p className="mt-5 max-w-3xl text-xl leading-8 text-muted-foreground sm:text-2xl">
              Autonomous AI Operations for investigating incidents, proving root cause,
              executing governed remediation and verifying the result.
            </p>
            <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
              A multi-tenant operations platform designed around an evidence-driven control loop:
              detect what changed, investigate the system, prove why it changed, remediate within policy,
              verify the outcome and close the incident.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink
                href={nexus.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                rightIcon={<ArrowUpRight className="h-4 w-4" />}
              >
                View on GitHub
              </ButtonLink>
              <a
                href="/#projects"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-background/70 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:bg-muted"
              >
                All projects
              </a>
            </div>
          </motion.div>
        </div>
      </section>      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {LOOP.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px' }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="rounded-2xl border border-border bg-card/70 p-5 shadow-sm backdrop-blur-sm"
            >
              <span className="font-mono text-xs text-accent">0{index + 1}</span>
              <h2 className="mt-3 text-lg font-semibold text-foreground">{step}</h2>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Architecture</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground">A governed operations loop</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
              NEXUS separates observation, reasoning, policy and execution. The agent can reason about
              resources and incidents, but remediation is constrained by explicit policy and execution controls.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">            {[
              ['AgentRuntime', 'Orchestrates the operational loop.'],
              ['Policy', 'Defines what the system is allowed to do.'],
              ['Connector / MCP', 'Bridges the platform to real resources.'],
            ].map(([title, description]) => (
              <div key={title} className="rounded-xl border border-border bg-card/60 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Workflow className="h-4 w-4 text-accent" aria-hidden="true" />
                  {title}
                </div>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-border bg-card/70 p-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-accent" aria-hidden="true" />
              <h2 className="text-xl font-semibold text-foreground">Safety model</h2>
            </div>
            <ul className="mt-5 space-y-3">
              {[
                'Evidence before action',
                'Policy checks and preflight controls',
                'Approval paths for governed operations',
                'Controlled execution against connectors',
                'Post-change verification and audit trail',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-border bg-card/70 p-6">
            <div className="flex items-center gap-2">
              <GitBranch className="h-5 w-5 text-accent" aria-hidden="true" />
              <h2 className="text-xl font-semibold text-foreground">Capabilities</h2>
            </div>
            <ul className="mt-5 space-y-3">
              {CAPABILITIES.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>        <section className="mt-16 rounded-2xl border border-border bg-card/60 p-6 sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Current state</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground">V1 release readiness</h2>
            </div>
            <span className="text-sm text-muted-foreground">October 2026 project status</span>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-muted-foreground">
            The core investigation, incident, resource-graph, connector, remediation, discovery and
            self-hosted foundations are implemented. Remaining work is concentrated on release hardening,
            clean-machine validation and operational documentation.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {RELEASE_GATES.map((gate) => (
              <div key={gate} className="rounded-xl border border-border/80 bg-background/50 px-4 py-3 text-sm text-muted-foreground">
                {gate}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 border-t border-border pt-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Stack</p>
              <div className="mt-3 flex flex-wrap gap-2">                {nexus.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-border bg-muted/30 px-3 py-1.5 font-mono text-xs text-muted-foreground"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
            <ButtonLink
              href={nexus.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              rightIcon={<ArrowUpRight className="h-4 w-4" />}
            >
              Source repository
            </ButtonLink>
          </div>
        </section>
      </section>
    </main>
  )
}
