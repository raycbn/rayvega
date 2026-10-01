export type ProjectDetail = {
  eyebrow: string
  title: string
  intro: string
  sections: Array<{
    title: string
    text: string
    bullets?: string[]
  }>
  currentState: string
  next: string
}

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  myridian: {
    eyebrow: 'Infrastructure · SQL Server',
    title: 'Myridian',
    intro:
      'On-premise observability for SQL Server estates, focused on giving operators a single operational surface for database health, performance and incidents.',
    sections: [
      {
        title: 'Operations center',
        text:
          'The platform brings multiple SQL Server instances into one local operations view, with server-level diagnostics and operational signals.',
        bullets: [
          'Performance, queries and waits',
          'Blocking and deadlocks',
          'Storage, backups and SQL Agent operations',
          'Alerts, search and live or simulated modes',
        ],
      },
      {
        title: 'Architecture',
        text:
          'The frontend is React and Vite, while the local backend uses Node.js and Express with SQLite for local state. The project is designed to keep the operational backend on-premise.',
        bullets: [
          'React + Vite + Chart.js frontend',
          'Node.js + Express API',
          'SQLite local persistence',
          'SQL Server as the monitored estate',
        ],
      },
    ],
    currentState:
      'Core platform capabilities are implemented; the project roadmap continues with native Windows delivery, more database providers and AI-assisted diagnosis.',
    next:
      'Expand the collector and provider model while preserving the local-first operational design.',
  },
  pedalmap: {
    eyebrow: 'Development · Cycling',
    title: 'PedalMap',
    intro:
      'A guest-first web application for creating, planning, saving and sharing bicycle routes through interactive maps and routing.',
    sections: [
      {
        title: 'Product flow',
        text:
          'The application is organized around getting a cyclist from route idea to a usable plan with minimal friction.',
        bullets: [
          'Guest-first route planning',
          'Interactive MapLibre mapping',
          'Route saving and sharing',
          'Authentication and community foundations',
        ],
      },
      {
        title: 'Technical foundation',
        text:
          'PedalMap combines a modern React frontend with Firebase services and a routing provider abstraction.',
        bullets: [
          'React + TypeScript + Vite',
          'MapLibre for map rendering',
          'OpenRouteService routing',
          'Firebase Auth, Firestore and Hosting',
          'Playwright coverage for the web flow',
        ],
      },
    ],
    currentState:
      'The documented F1–F6 product phases are complete and the deployed application is available through Firebase Hosting.',
    next:
      'Continue product and monetization work while keeping routing and infrastructure boundaries explicit.',
  },
  'pedalmap-fuel': {
    eyebrow: 'Development · Sports nutrition',
    title: 'PedalMap Fuel',
    intro:
      'An independent nutrition and hydration planner that turns activity inputs into deterministic fueling and hydration plans.',
    sections: [
      {
        title: 'Planning engine',
        text:
          'The core model is deterministic rather than AI-driven, so the same inputs produce reproducible recommendations and timelines.',
        bullets: [
          'Cycling, running, trail, hiking, triathlon and football flows',
          'Nutrition and hydration timelines',
          'Sweat-rate calculation',
          'Shopping lists and shareable plans',
        ],
      },
      {
        title: 'Delivery model',
        text:
          'The MVP is designed to work with local calculations and optional managed services, keeping the baseline architecture low-cost.',
        bullets: [
          'React + TypeScript + Vite',
          'Tailwind UI and Vitest',
          'Optional Firebase persistence',
          'Stripe integration reserved for premium flows',
        ],
      },
    ],
    currentState:
      'Phase 2 is complete; the roadmap moves next into affiliate/catalog features before the later premium and wearable integrations.',
    next:
      'Turn the deterministic engine into a broader product layer without coupling the calculation core to external services.',
  },  'firebase-pocket-admin': {
    eyebrow: 'Mobile development · Firebase',
    title: 'Firebase Pocket Admin',
    intro:
      'A Flutter administration interface for inspecting and operating Firebase projects from a mobile-oriented workflow.',
    sections: [
      {
        title: 'Administration surface',
        text:
          'The project brings common Firebase administration tasks into a focused app experience.',
        bullets: [
          'Firebase project and workspace management',
          'Firestore explorer',
          'Document history and diff views',
          'Storage and Remote Config tooling',
        ],
      },
      {
        title: 'Firebase services',
        text:
          'The source includes dedicated service and screen layers around authentication, data, storage, analytics and configuration.',
        bullets: [
          'Firebase Auth',
          'Cloud Firestore',
          'Firebase Storage',
          'Analytics dashboards',
          'Remote Config',
        ],
      },
    ],
    currentState:
      'The app remains under active development, with the operational foundation and core Firebase surfaces already represented in the codebase.',
    next:
      'Keep expanding administrative coverage while maintaining a clear separation between project metadata, data inspection and operational actions.',
  },
  'tcp-exam-trainer': {
    eyebrow: 'Development · Education',
    title: 'TCP Exam Trainer',
    intro:
      'An open-source training platform for TCP cabin-crew exam preparation, built around practice, exam simulation and review workflows.',
    sections: [
      {
        title: 'Learning flow',
        text:
          'The interface provides several modes so a learner can move between practice, simulation and review without leaving the application.',
        bullets: [
          'Practice and exam modes',
          'Review and favourites',
          'Smart-mode flow',
          'Statistics and profile surfaces',
        ],
      },
      {
        title: 'Content model',
        text:
          'Questions are loaded from structured JSON and the application includes Firebase-backed user synchronization.',
        bullets: [
          'JSON question bank',
          'Question navigation',
          'Firebase authentication and user sync',
          'GitHub Pages deployment',
        ],
      },
    ],
    currentState:
      'The main training flow is in place; the verified question bank and statistical features are still being expanded.',
    next:
      'Grow the verified content set and continue improving the training and review experience.',
  },
  'infrastructure-intelligence': {
    eyebrow: 'Infrastructure · Discovery',
    title: 'Infrastructure Intelligence',
    intro:
      'A phase-0 infrastructure discovery MVP designed around explicit ownership verification, bounded discovery and public-destination safety controls.',
    sections: [
      {
        title: 'Discovery model',
        text:
          'The MVP starts from proof that a destination belongs to the operator, then keeps discovery deliberately scoped.',
        bullets: [
          'DNS TXT ownership verification',
          '/.well-known verification option',
          'Bounded discovery worker',
          'Scoped public destinations',
        ],
      },
      {
        title: 'Safety boundary',
        text:
          'The project explicitly avoids techniques that would turn discovery into unrestricted network reconnaissance.',
        bullets: [
          'No port scanning',
          'No crawling',
          'No exploitation',
          'Public destination restrictions',
        ],
      },
    ],
    currentState:
      'The project is in phase 0, with the verification and discovery boundaries defined before broader intelligence features.',
    next:
      'Validate the discovery workflow and reliability before widening the supported inventory model.',
  },  'mcp-local-server': {
    eyebrow: 'Tools / Lab · MCP',
    title: 'Windows Local MCP',
    intro:
      'A self-hosted MCP server that exposes controlled Windows tooling to ChatGPT through an authenticated remote connection.',
    sections: [
      {
        title: 'Tooling layer',
        text:
          'The server exposes a practical local-control surface for working with projects and the Windows machine without giving the model unrestricted access.',
        bullets: [
          'File read, write and surgical edit tools',
          'Project discovery and inspection',
          'Git and process inspection',
          'Controlled command execution',
        ],
      },
      {
        title: 'Security boundary',
        text:
          'Authentication and local safety controls are treated as part of the product rather than an afterthought.',
        bullets: [
          'OAuth 2.1 and bearer modes',
          'Cloudflare Tunnel support',
          'Sandboxed filesystem roots',
          'Secret-environment filtering',
          'Command allow/deny controls and rate limiting',
        ],
      },
    ],
    currentState:
      'The project is a working self-hosted prototype used to bridge ChatGPT and a controlled Windows development environment.',
    next:
      'Harden the local integration and keep the tool surface explicit, auditable and constrained.',
  },
}
