export const SITE = {
  name: 'Ray Vega',
  headline: 'IT & Systems · Cloud · Cybersecurity · Automation · AI',
  description:
    'Infrastructure, cloud, cybersecurity, automation and AI engineer building reliable systems and tooling. Portfolio of independent projects.',
  url: 'https://rayvega.portfolio-81e.workers.dev',
  email: undefined,
} as const

export const NAV_LINKS = [
  { label: 'Home', href: '/#hero' },
  { label: 'Projects', href: '/#projects' },
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'CV', href: '/cv' },
  { label: 'Technologies', href: '/#technologies' },

  { label: 'Lab', href: '/#lab' },
  { label: 'Contact', href: '/#contact' },
] as const

export const SOCIAL = {
  github: 'https://github.com/raycbn',
  linkedin: undefined,
  email: undefined,
} as const

export type ProjectStatus = 'production' | 'in-progress' | 'archived' | 'draft'

export type ProjectCategory =
  | 'AI / Automation'
  | 'Infrastructure'
  | 'Cloud / DevOps'
  | 'Development'
  | 'Tools / Lab'

export type Project = {
  id: string
  name: string
  shortDescription: string
  phase?: string
  category: ProjectCategory
  technologies: string[]
  status: ProjectStatus
  githubUrl?: string
  demoUrl?: string
  detailUrl?: string
  image?: string
  featured?: boolean
  highlights?: string[]
}

export const PROJECTS: Project[] = [
  {
    id: 'nexus',
    name: 'NEXUS',
    shortDescription:
      'Multi-tenant AI Operations Platform built around a governed loop: detect, investigate, prove root cause, remediate safely, verify and resolve.',
    phase: 'v1 release readiness',
    category: 'AI / Automation',
    technologies: ['Python', 'FastAPI', 'MCP', 'Ollama', 'React', 'Docker', 'PostgreSQL', 'Redis'],
    status: 'in-progress',
    githubUrl: 'https://github.com/raycbn/nexus',
    detailUrl: '/projects/nexus',
    featured: true,
    highlights: [
      'Investigation and incident engines',
      'Resource graph and infrastructure connectors',
      'Policy-governed remediation and autonomous resolution',
      'Scheduled discovery and self-hosted deployment',
    ],
  },
  {
    id: 'myridian',
    name: 'Myridian',
    shortDescription:
      'On-premise multi-server database observability platform for SQL Server, combining performance, queries, blocking, deadlocks, storage, backups, alerts and SQL Agent operations.',
    phase: 'core platform implemented',
    category: 'Infrastructure',
    technologies: ['React', 'Vite', 'Node.js', 'Express', 'Chart.js', 'SQLite', 'SQL Server'],
    status: 'in-progress',
    githubUrl: 'https://github.com/raycbn/myridian',
    detailUrl: '/projects/myridian',
    highlights: [
      'Operations Center and multi-server estate',
      '14-tab server diagnostics surface',
      'Live and simulated data modes',
      'Local collector, API and encrypted credential handling',
    ],
  },
  {
    id: 'pedalmap',
    name: 'PedalMap',
    shortDescription:
      'Web application for creating, planning, saving and sharing bicycle routes with interactive mapping, routing and account features.',
    phase: 'phases 1–6 complete',
    category: 'Development',
    technologies: ['React', 'TypeScript', 'Vite', 'MapLibre', 'Firebase', 'OpenRouteService', 'Playwright'],
    status: 'production',
    githubUrl: 'https://github.com/raycbn/Projects/tree/master/pedalmap',
    demoUrl: 'https://pedalmap-79b3a.web.app',
    detailUrl: '/projects/pedalmap',
    highlights: [
      'Guest-first route planning',
      'MapLibre mapping and routing provider abstraction',
      'Firebase Auth / Firestore / Hosting',
      'Freemium feature base and community foundation',
    ],
  },
  {
    id: 'pedalmap-fuel',
    name: 'PedalMap Fuel',
    shortDescription:
      'Independent nutrition and hydration planner for sports activities, with deterministic calculations, timelines, shopping lists and saved plans.',
    phase: 'phase 2 complete · phase 3 next',
    category: 'Development',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Vitest', 'Firebase', 'Stripe'],
    status: 'in-progress',
    githubUrl: 'https://github.com/raycbn/SportFuel',
    detailUrl: '/projects/pedalmap-fuel',
    highlights: [
      'Cycling, running, trail, hiking, triathlon and football flows',
      'Deterministic nutrition and hydration engine',
      'Sweat-rate calculator and shareable plans',
      'Zero-cost MVP architecture with optional Firebase and Stripe',
    ],
  },
  {
    id: 'firebase-pocket-admin',
    name: 'Firebase Pocket Admin',
    shortDescription:
      'Flutter administration app for working with Firebase projects and their operational data from a mobile-oriented interface.',
    phase: 'active development',
    category: 'Development',
    technologies: ['Flutter', 'Dart', 'Firebase Auth', 'Firestore', 'Storage', 'Analytics', 'Remote Config'],
    status: 'in-progress',
    githubUrl: 'https://github.com/raycbn/Firebase-Pocket-Admin',
    detailUrl: '/projects/firebase-pocket-admin',
    highlights: [
      'Firebase project and workspace management',
      'Firestore explorer and document history/diff',
      'Remote Config and Storage tooling',
      'Analytics and dashboard surfaces',
    ],
  },
  {
    id: 'tcp-exam-trainer',
    name: 'TCP Exam Trainer',
    shortDescription:
      'Open-source TCP cabin-crew exam training platform focused on AESA certification preparation.',
    phase: 'core flow complete · expansion in progress',
    category: 'Development',
    technologies: ['HTML', 'CSS', 'JavaScript', 'JSON', 'Firebase'],
    status: 'in-progress',
    githubUrl: 'https://github.com/raycbn/tcp-exam-trainer',
    detailUrl: '/projects/tcp-exam-trainer',
    highlights: [
      'GitHub Pages deployment',
      'JSON question bank and navigation',
      'Practice, exam, review, favourites and smart-mode surfaces',
      'Statistics and verified-question bank still being expanded',
    ],
  },
  {
    id: 'infrastructure-intelligence',
    name: 'Infrastructure Intelligence',
    shortDescription:
      'Local infrastructure discovery MVP designed around explicit ownership verification, bounded discovery and public-destination safety controls.',
    phase: 'phase 0',
    category: 'Infrastructure',
    technologies: ['Next.js', 'React', 'PostgreSQL', 'Drizzle ORM', 'Vitest', 'Zod'],
    status: 'draft',
    githubUrl: 'https://github.com/raycbn/infrastructure-intelligence',
    detailUrl: '/projects/infrastructure-intelligence',
    highlights: [
      'DNS TXT or /.well-known ownership verification',
      'Scoped discovery worker',
      'Public-destination restrictions',
      'No port scanning, crawling or exploitation',
    ],
  },
  {
    id: 'mcp-local-server',
    name: 'Windows Local MCP',
    shortDescription:
      'Self-hosted MCP server that exposes controlled local PC tooling to ChatGPT through an authenticated tunnel.',
    phase: 'working prototype',
    category: 'Tools / Lab',
    technologies: ['Node.js', 'TypeScript', 'MCP SDK', 'Express', 'OAuth 2.1', 'Cloudflare Tunnel'],
    status: 'in-progress',
    detailUrl: '/projects/mcp-local-server',
    highlights: [
      'File read/write/edit and project discovery tools',
      'Git and process inspection',
      'OAuth and bearer authentication modes',
      'Sandboxed paths and command safety controls',
    ],
  },
]

export const TECH_CATEGORIES = [
  {
    id: 'infrastructure',
    label: 'Infrastructure',
    technologies: ['Windows Server', 'Linux / RHEL', 'Active Directory', 'VMware vSphere / ESXi / vCenter', 'SAN / NAS', 'NetApp', 'Citrix', 'SQL Server', 'PostgreSQL', 'Kubernetes', 'OpenShift'],
  },
  {
    id: 'cloud',
    label: 'Cloud / DevOps',
    technologies: ['Azure', 'AWS', 'Docker', 'Terraform', 'Ansible', 'PowerShell', 'Bash', 'Vite', 'Firebase', 'Cloudflare'],
  },
  {
    id: 'development',
    label: 'Development',
    technologies: ['Python', 'TypeScript', 'JavaScript', 'React', 'Flutter', 'Dart', 'FastAPI', 'Node.js', 'Express', 'Tailwind CSS', 'Vitest', 'Playwright'],
  },
  {
    id: 'ai',
    label: 'AI / Automation',
    technologies: ['MCP', 'Ollama', 'AI agents', 'Automation', 'Policy-driven execution', 'Infrastructure tooling'],
  },
] as const

export const statusLabel: Record<ProjectStatus, string> = {
  production: 'Production',
  'in-progress': 'In progress',
  archived: 'Archived',
  draft: 'Prototype',
}
