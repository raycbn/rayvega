export const SITE = {
  name: 'Ray Vega',
  headline: 'IT & Systems · Cloud · Cybersecurity · Automation · AI',
  description:
    'Infrastructure, cloud, cybersecurity, automation and AI engineer building reliable systems and tooling. Portfolio of independent projects.',
  url: 'https://rayvega.dev',
  email: undefined,
} as const

export const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Technologies', href: '#technologies' },
  { label: 'Lab', href: '#lab' },
  { label: 'Contact', href: '#contact' },
] as const

export const SOCIAL = {
  github: 'https://github.com/raycbn',
  linkedin: undefined,
  email: undefined,
} as const

export type ProjectStatus = 'production' | 'in-progress' | 'archived' | 'draft'

export type Project = {
  id: string
  name: string
  description?: string
  technologies?: string[]
  status?: ProjectStatus
  githubUrl?: string
  demoUrl?: string
  image?: string
  featured?: boolean
}

export const PROJECTS: Project[] = [
  { id: 'nexus', name: 'NEXUS', featured: true, status: 'draft' },
  { id: 'pedalmap', name: 'PedalMap', status: 'draft' },
  { id: 'firebase-pocket-admin', name: 'Firebase Pocket Admin', status: 'draft' },
  { id: 'tcp-exam-trainer', name: 'TCP Exam Trainer', status: 'draft' },
  { id: 'myridian', name: 'Myridian / DBA Monitoring', status: 'draft' },
]

export const TECH_CATEGORIES = [
  { id: 'infrastructure', label: 'Infrastructure' },
  { id: 'cloud', label: 'Cloud / DevOps' },
  { id: 'development', label: 'Development' },
  { id: 'ai', label: 'AI / Automation' },
] as const

export const statusLabel: Record<ProjectStatus, string> = {
  production: 'Production',
  'in-progress': 'In progress',
  archived: 'Archived',
  draft: 'Próximamente',
}
