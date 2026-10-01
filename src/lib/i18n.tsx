/* oxlint-disable react/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

export type Language = 'en' | 'es'

type TextDictionary = {
  nav: Record<string, string>
  hero: Record<string, string>
  about: Record<string, string>
  experience: Record<string, string>
  technologies: Record<string, string>
  lab: Record<string, string>
  contact: Record<string, string>
  projects: Record<string, string>
  detail: Record<string, string>
  nexus: Record<string, string | string[]>
  common: Record<string, string>
}

const EN: TextDictionary = {
  nav: {
    home: 'Home',
    projects: 'Projects',
    about: 'About',
    experience: 'Experience',
    technologies: 'Technologies',
    lab: 'Lab',
    contact: 'Contact',
    main: 'Main navigation',
    primary: 'Primary navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
    english: 'English',
    spanish: 'Spanish',
  },
  hero: {
    focusAreas: 'Focus areas',
    viewProjects: 'View projects',
    exploreProfile: 'Explore the profile',
    areasLabel: 'Areas of focus',
    headline: 'IT & Systems',
    subline: 'Cloud · Cybersecurity · Automation · AI',
    description: 'Systems, infrastructure, cloud, cybersecurity, automation and AI engineering focused on building reliable platforms and practical tooling.',
    focusSystems: 'Systems',
    focusCloud: 'Cloud',
    focusSecurity: 'Cybersecurity',
    focusAutomation: 'Automation',
    focusAI: 'AI',
  },
  about: {
    eyebrow: 'Profile',
    title: 'Systems first. Build beyond operations.',
    intro: 'I’m a systems and infrastructure engineer focused on reliable enterprise environments, combining day-to-day operations with cloud, security, automation and software projects.',
    background: 'My background spans Windows and Linux administration, virtualization, storage, cloud platforms and technical project coordination. I also build my own tools and products, using code to reduce repetitive work, make infrastructure more observable and turn operational ideas into usable systems.',
    education: 'My education combines a Higher Technician qualification in Systems Administration with another in Web Application Development, giving me a practical bridge between infrastructure and software.',
    systems: 'Systems & infrastructure',
    systemsText: 'Windows, Linux, RHEL, Active Directory, VMware, SAN/NAS, NetApp and enterprise middleware.',
    cloud: 'Cloud & automation',
    cloudText: 'Azure, AWS, infrastructure automation with PowerShell, Ansible, Bash and Terraform.',
    security: 'Security & operations',
    securityText: 'Hardening, MFA, security audits, critical incidents, continuity and controlled operational change.',
  },
  experience: {
    eyebrow: 'Career',
    title: 'Experience',
    description: 'Systems, infrastructure and technical project experience across enterprise operations, local environments and cloud platforms.',
    scope: 'Scope',
    scopeValue: 'Systems · Infrastructure · Projects',
    environment: 'Environment',
    environmentValue: 'On-premise · Hybrid · Cloud',
    focus: 'Focus',
    focusValue: 'Availability · Security · Operations',
  },
  technologies: {
    title: 'Technologies',
    description: 'Tools and platforms I work with — organized by domain.',
    pending: 'Pending',
  },
  lab: {
    title: 'Lab',
    description: 'Experiments, write-ups, and tooling explored in the lab — coming soon.',
    empty: 'No lab entries yet.',
  },
  contact: {
    title: 'Contact',
    description: 'Let’s connect.',
    pending: 'pending',
    email: 'Email',
  },
  projects: {
    title: 'Selected work',
    description: 'Products, infrastructure platforms and technical tools built across systems, cloud, software and AI.',
    tracked: 'projects · currently tracked from active repositories and local builds',
    featured: 'Featured',
    code: 'Code',
    live: 'Live',
    caseStudy: 'Case study',
  },
  detail: {
    back: 'Back to projects',
    viewSource: 'View source',
    openLive: 'Open live',
    currentState: 'Current state',
    currentTitle: 'Where the project stands',
    next: 'Next',
    direction: 'Direction',
    stack: 'Stack',
    projectNotFound: 'Project not found',
  },
  nexus: {
    title: 'NEXUS',
    intro: 'Autonomous AI Operations for investigating incidents, proving root cause, executing governed remediation and verifying the result.',
    summary: 'A multi-tenant operations platform designed around an evidence-driven control loop: detect what changed, investigate the system, prove why it changed, remediate within policy, verify the outcome and close the incident.',
    architecture: 'Architecture',
    architectureTitle: 'A governed operations loop',
    architectureText: 'NEXUS separates observation, reasoning, policy and execution. The agent can reason about resources and incidents, but remediation is constrained by explicit policy and execution controls.',
    safety: 'Safety model',
    capabilities: 'Capabilities',
    currentState: 'Current state',
    releaseTitle: 'V1 release readiness',
    releaseStatus: 'October 2026 project status',
    releaseText: 'The core investigation, incident, resource-graph, connector, remediation, discovery and self-hosted foundations are implemented. Remaining work is concentrated on release hardening, clean-machine validation and operational documentation.',
    sourceRepository: 'Source repository',
    allProjects: 'All projects',
    loop: ['Detect', 'Investigate', 'Prove root cause', 'Remediate safely', 'Verify', 'Resolve'],
    safetyItems: ['Evidence before action', 'Policy checks and preflight controls', 'Approval paths for governed operations', 'Controlled execution against connectors', 'Post-change verification and audit trail'],
    capabilitiesItems: ['Investigation and incident engines', 'Resource graph with infrastructure connectors', 'Policy-governed remediation and autonomous resolution', 'Scheduled discovery and discovery history', 'Approval workflows and bulk operations', 'Self-hosted Docker deployment'],
    releaseGates: ['Reproducible, pinned self-hosted release', 'Explicit AI / Ollama deployment support', 'Clean-machine end-to-end validation', 'Single end-to-end smoke test and CI', 'TLS, reverse-proxy and backup/restore documentation'],
  },
  common: {
    toggleColorScheme: 'Toggle color scheme',
    allRightsReserved: 'All rights reserved.',
  },
}

const ES: TextDictionary = {
  nav: {
    home: 'Inicio',
    projects: 'Proyectos',
    about: 'Sobre mí',
    experience: 'Experiencia',
    technologies: 'Tecnologías',
    lab: 'Laboratorio',
    contact: 'Contacto',
    main: 'Navegación principal',
    primary: 'Navegación primaria',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    language: 'Idioma',
    english: 'Inglés',
    spanish: 'Español',
  },
  hero: {
    focusAreas: 'Áreas principales',
    viewProjects: 'Ver proyectos',
    exploreProfile: 'Conocer el perfil',
    areasLabel: 'Áreas de especialización',
    headline: 'IT y Sistemas',
    subline: 'Cloud · Ciberseguridad · Automatización · IA',
    description: 'Ingeniería de sistemas, infraestructura, cloud, ciberseguridad, automatización e IA orientada a construir plataformas fiables y herramientas prácticas.',
    focusSystems: 'Sistemas',
    focusCloud: 'Cloud',
    focusSecurity: 'Ciberseguridad',
    focusAutomation: 'Automatización',
    focusAI: 'IA',
  },
  about: {
    eyebrow: 'Perfil',
    title: 'Sistemas primero. Construir más allá de la operación.',
    intro: 'Soy ingeniero de sistemas e infraestructura centrado en entornos empresariales fiables, combinando la operación diaria con cloud, seguridad, automatización y proyectos de software.',
    background: 'Mi experiencia abarca administración de Windows y Linux, virtualización, almacenamiento, plataformas cloud y coordinación de proyectos técnicos. También desarrollo mis propias herramientas y productos, utilizando código para reducir tareas repetitivas, mejorar la observabilidad de la infraestructura y convertir ideas operativas en sistemas utilizables.',
    education: 'Mi formación combina un Grado Superior en Administración de Sistemas con otro en Desarrollo de Aplicaciones Web, creando un puente práctico entre infraestructura y software.',
    systems: 'Sistemas e infraestructura',
    systemsText: 'Windows, Linux, RHEL, Active Directory, VMware, SAN/NAS, NetApp y middleware empresarial.',
    cloud: 'Cloud y automatización',
    cloudText: 'Azure, AWS y automatización de infraestructura con PowerShell, Ansible, Bash y Terraform.',
    security: 'Seguridad y operaciones',
    securityText: 'Refuerzo de seguridad, MFA, auditorías de seguridad, incidencias críticas, continuidad y cambios operativos controlados.',
  },
  experience: {
    eyebrow: 'Trayectoria',
    title: 'Experiencia',
    description: 'Experiencia en sistemas, infraestructura y proyectos técnicos dentro de operaciones empresariales, entornos locales y plataformas cloud.',
    scope: 'Ámbito',
    scopeValue: 'Sistemas · Infraestructura · Proyectos',
    environment: 'Entorno',
    environmentValue: 'Local · Híbrido · Cloud',
    focus: 'Enfoque',
    focusValue: 'Disponibilidad · Seguridad · Operaciones',
  },
  technologies: {
    title: 'Tecnologías',
    description: 'Herramientas y plataformas con las que trabajo, organizadas por área.',
    pending: 'Pendiente',
  },
  lab: {
    title: 'Laboratorio',
    description: 'Experimentos, documentación y herramientas exploradas en el laboratorio — próximamente.',
    empty: 'Todavía no hay entradas en el laboratorio.',
  },
  contact: {
    title: 'Contacto',
    description: 'Hablemos.',
    pending: 'pendiente',
    email: 'Correo electrónico',
  },
  projects: {
    title: 'Proyectos seleccionados',
    description: 'Productos, plataformas de infraestructura y herramientas técnicas construidas alrededor de sistemas, cloud, software e IA.',
    tracked: 'proyectos · seguimiento actual desde repositorios activos y desarrollos locales',
    featured: 'Destacado',
    code: 'Código',
    live: 'En vivo',
    caseStudy: 'Caso de estudio',
  },
  detail: {
    back: 'Volver a proyectos',
    viewSource: 'Ver código',
    openLive: 'Abrir proyecto',
    currentState: 'Estado actual',
    currentTitle: 'Situación del proyecto',
    next: 'Siguiente',
    direction: 'Dirección',
    stack: 'Tecnologías',
    projectNotFound: 'Proyecto no encontrado',
  },
  nexus: {
    title: 'NEXUS',
    intro: 'Operaciones autónomas con IA para investigar incidencias, demostrar la causa raíz, ejecutar remediaciones gobernadas y verificar el resultado.',
    summary: 'Plataforma multi-tenant de operaciones diseñada alrededor de un ciclo basado en evidencias: detectar qué ha cambiado, investigar el sistema, demostrar por qué ha cambiado, remediar dentro de las políticas, verificar el resultado y cerrar la incidencia.',
    architecture: 'Arquitectura',
    architectureTitle: 'Un ciclo operativo gobernado',
    architectureText: 'NEXUS separa observación, razonamiento, políticas y ejecución. El agente puede razonar sobre recursos e incidencias, pero la remediación está limitada por políticas explícitas y controles de ejecución.',
    safety: 'Modelo de seguridad',
    capabilities: 'Capacidades',
    currentState: 'Estado actual',
    releaseTitle: 'Preparación para V1',
    releaseStatus: 'Estado del proyecto: octubre de 2026',
    releaseText: 'Las bases de investigación, incidencias, grafo de recursos, conectores, remediación, descubrimiento y despliegue autoalojado están implementadas. El trabajo restante se concentra en endurecer la versión, validar en máquinas limpias y completar la documentación operativa.',
    sourceRepository: 'Repositorio',
    allProjects: 'Todos los proyectos',
    loop: ['Detectar', 'Investigar', 'Demostrar la causa raíz', 'Remediar de forma segura', 'Verificar', 'Resolver'],
    safetyItems: ['Evidencias antes de actuar', 'Comprobaciones de políticas y validaciones previas a la ejecución', 'Rutas de aprobación para operaciones gobernadas', 'Ejecución controlada mediante conectores', 'Verificación posterior y trazabilidad de auditoría'],
    capabilitiesItems: ['Motores de investigación e incidencias', 'Grafo de recursos con conectores de infraestructura', 'Remediación gobernada por políticas y resolución autónoma', 'Descubrimiento programado e historial de descubrimientos', 'Flujos de aprobación y operaciones masivas', 'Despliegue autoalojado con Docker'],
    releaseGates: ['Versión autoalojada reproducible y versionada', 'Soporte explícito de despliegue con IA / Ollama', 'Validación de extremo a extremo en máquina limpia', 'Prueba de humo de extremo a extremo y CI', 'Documentación de TLS, proxy inverso y copias de seguridad/restauración'],
  },
  common: {
    toggleColorScheme: 'Cambiar esquema de color',
    allRightsReserved: 'Todos los derechos reservados.',
  },
}

const dictionaries: Record<Language, TextDictionary> = { en: EN, es: ES }

const PROJECT_COPY = {
  en: {
    nexus: { category: 'AI / Automation', phase: 'v1 release readiness', shortDescription: 'Multi-tenant AI Operations Platform built around a governed loop: detect, investigate, prove root cause, remediate safely, verify and resolve.', highlights: ['Investigation and incident engines', 'Resource graph and infrastructure connectors', 'Policy-governed remediation and autonomous resolution', 'Scheduled discovery and self-hosted deployment'] },
    myridian: { category: 'Infrastructure', phase: 'core platform implemented', shortDescription: 'On-premise multi-server database observability platform for SQL Server, combining performance, queries, blocking, deadlocks, storage, backups, alerts and SQL Agent operations.', highlights: ['Operations Center and multi-server estate', '14-tab server diagnostics surface', 'Live and simulated data modes', 'Local collector, API and encrypted credential handling'] },
    pedalmap: { category: 'Development', phase: 'phases 1–6 complete', shortDescription: 'Web application for creating, planning, saving and sharing bicycle routes with interactive mapping, routing and account features.', highlights: ['Guest-first route planning', 'MapLibre mapping and routing provider abstraction', 'Firebase Auth / Firestore / Hosting', 'Freemium feature base and community foundation'] },
    'pedalmap-fuel': { category: 'Development', phase: 'phase 2 complete · phase 3 next', shortDescription: 'Independent nutrition and hydration planner for sports activities, with deterministic calculations, timelines, shopping lists and saved plans.', highlights: ['Cycling, running, trail, hiking, triathlon and football flows', 'Deterministic nutrition and hydration engine', 'Sweat-rate calculator and shareable plans', 'Zero-cost MVP architecture with optional Firebase and Stripe'] },
    'firebase-pocket-admin': { category: 'Development', phase: 'active development', shortDescription: 'Flutter administration app for working with Firebase projects and their operational data from a mobile-oriented interface.', highlights: ['Firebase project and workspace management', 'Firestore explorer and document history/diff', 'Remote Config and Storage tooling', 'Analytics and dashboard surfaces'] },
    'tcp-exam-trainer': { category: 'Development', phase: 'core flow complete · expansion in progress', shortDescription: 'Open-source TCP cabin-crew exam training platform focused on AESA certification preparation.', highlights: ['GitHub Pages deployment', 'JSON question bank and navigation', 'Practice, exam, review, favourites and smart-mode surfaces', 'Statistics and verified-question bank still being expanded'] },
    'infrastructure-intelligence': { category: 'Infrastructure', phase: 'phase 0', shortDescription: 'Local infrastructure discovery MVP designed around explicit ownership verification, bounded discovery and public-destination safety controls.', highlights: ['DNS TXT or /.well-known ownership verification', 'Scoped discovery worker', 'Public-destination restrictions', 'No port scanning, crawling or exploitation'] },
    'mcp-local-server': { category: 'Tools / Lab', phase: 'working prototype', shortDescription: 'Self-hosted MCP server that exposes controlled local PC tooling to ChatGPT through an authenticated tunnel.', highlights: ['File read/write/edit and project discovery tools', 'Git and process inspection', 'OAuth and bearer authentication modes', 'Sandboxed paths and command safety controls'] },
  },
  es: {
    nexus: { category: 'IA / Automatización', phase: 'preparación para V1', shortDescription: 'Plataforma multi-tenant de operaciones con IA basada en un ciclo gobernado: detectar, investigar, demostrar la causa raíz, remediar de forma segura, verificar y resolver.', highlights: ['Motores de investigación e incidencias', 'Grafo de recursos y conectores de infraestructura', 'Remediación gobernada por políticas y resolución autónoma', 'Descubrimiento programado y despliegue autoalojado'] },
    myridian: { category: 'Infraestructura', phase: 'plataforma principal implementada', shortDescription: 'Plataforma local de observabilidad de múltiples servidores SQL Server, combinando rendimiento, consultas, bloqueos, interbloqueos, almacenamiento, copias, alertas y operaciones de SQL Agent.', highlights: ['Centro de Operaciones y entorno multi-servidor', 'Superficie de diagnóstico de 14 pestañas', 'Modos de datos reales y simulados', 'Colector local, API y gestión cifrada de credenciales'] },
    pedalmap: { category: 'Desarrollo', phase: 'fases 1–6 completadas', shortDescription: 'Aplicación web para crear, planificar, guardar y compartir rutas en bicicleta con mapas interactivos, cálculo de rutas y funcionalidades de cuenta.', highlights: ['Planificación de rutas sin registro inicial', 'MapLibre y abstracción del proveedor de cálculo de rutas', 'Firebase Auth / Firestore / Hosting', 'Base para funciones freemium y comunidad'] },
    'pedalmap-fuel': { category: 'Desarrollo', phase: 'fase 2 completada · fase 3 siguiente', shortDescription: 'Planificador independiente de nutrición e hidratación para actividades deportivas, con cálculos deterministas, cronogramas, listas de compra y planes guardados.', highlights: ['Flujos para ciclismo, carrera, trail, senderismo, triatlón y fútbol', 'Motor determinista de nutrición e hidratación', 'Calculadora de tasa de sudor y planes compartibles', 'Arquitectura MVP de coste cero con Firebase y Stripe opcionales'] },
    'firebase-pocket-admin': { category: 'Desarrollo', phase: 'desarrollo activo', shortDescription: 'Aplicación de administración en Flutter para trabajar con proyectos Firebase y sus datos operativos desde una interfaz orientada a móvil.', highlights: ['Gestión de proyectos y espacios de trabajo Firebase', 'Explorador de Firestore e historial/diff de documentos', 'Herramientas para Remote Config y Storage', 'Superficies de Analytics y paneles'] },
    'tcp-exam-trainer': { category: 'Desarrollo', phase: 'flujo principal completado · expansión en curso', shortDescription: 'Plataforma de código abierto para la preparación de exámenes de TCP orientada a la certificación AESA.', highlights: ['Despliegue en GitHub Pages', 'Banco de preguntas JSON y navegación', 'Modos práctica, examen, repaso, favoritos e inteligente', 'Estadísticas y banco de preguntas verificadas en expansión'] },
    'infrastructure-intelligence': { category: 'Infraestructura', phase: 'fase 0', shortDescription: 'MVP local de descubrimiento de infraestructura basado en verificación explícita de propiedad, descubrimiento acotado y controles de seguridad para destinos públicos.', highlights: ['Verificación mediante DNS TXT o /.well-known', 'Worker de descubrimiento acotado', 'Restricciones sobre destinos públicos', 'Sin escaneo de puertos, crawling ni explotación'] },
    'mcp-local-server': { category: 'Herramientas / Laboratorio', phase: 'prototipo funcional', shortDescription: 'Servidor MCP autoalojado que expone herramientas locales controladas del PC a ChatGPT mediante una conexión autenticada.', highlights: ['Lectura, escritura, edición y descubrimiento de proyectos', 'Inspección de Git y procesos', 'Modos de autenticación OAuth y bearer', 'Rutas aisladas y controles de seguridad de comandos'] },
  },
} as const

export function getProjectCopy(language: Language, id: string) {
  return PROJECT_COPY[language][id as keyof typeof PROJECT_COPY.en]
}

const EXPERIENCE_COPY = {
  en: [
    { role: 'IT & System Director', company: 'Mnemo', summary: 'Led and coordinated IT systems and infrastructure across on-premise and cloud environments, with a focus on availability, continuity and security.', highlights: ['Managed critical incidents and systems security.', 'Administered VMware environments and cloud services.', 'Coordinated technical teams, suppliers and infrastructure projects.', 'Contributed to automation and platform evolution.'] },
    { role: 'Systems & Projects Manager', company: 'Libnova / GSS', summary: 'Managed and coordinated projects and services related to systems and technology infrastructure.', highlights: ['Administered, supported and monitored environments and services.', 'Coordinated clients, suppliers and technical teams.', 'Resolved incidents and operational needs.'] },
    { role: 'Technical Support & Customer Service Specialist', company: 'DACHSER', summary: 'Provided on-site user support in a multinational environment, handling incidents, requests and technical needs.', highlights: ['Resolved and followed up on incidents.', 'Maintained direct communication with users and involved teams.', 'Supported users in international and multicultural environments.'] },
  ],
  es: [
    { role: 'Director de Sistemas IT', company: 'Mnemo', summary: 'Dirección y coordinación de sistemas e infraestructura IT en entornos locales y cloud, con foco en disponibilidad, continuidad y seguridad.', highlights: ['Gestión de incidencias críticas y seguridad de sistemas.', 'Administración de entornos VMware y servicios cloud.', 'Coordinación de equipos técnicos, proveedores y proyectos de infraestructura.', 'Participación en automatización y evolución de la plataforma.'] },
    { role: 'Responsable de Proyectos y Sistemas', company: 'Libnova / GSS', summary: 'Gestión y coordinación de proyectos y servicios relacionados con sistemas e infraestructura tecnológica.', highlights: ['Administración, soporte y seguimiento de entornos y servicios.', 'Coordinación con clientes, proveedores y equipos técnicos.', 'Resolución de incidencias y necesidades operativas.'] },
    { role: 'Técnico de Soporte y Atención al Cliente', company: 'DACHSER', summary: 'Soporte presencial a usuarios en un entorno multinacional, gestionando incidencias, solicitudes y necesidades técnicas.', highlights: ['Resolución y seguimiento de incidencias.', 'Comunicación directa con usuarios y equipos implicados.', 'Atención en entornos internacionales y multiculturales.'] },
  ],
} as const

export function getExperienceCopy(language: Language) {
  return EXPERIENCE_COPY[language]
}

type DetailCopy = {
  eyebrow: string
  title: string
  intro: string
  sections: Array<{ title: string; text: string; bullets: string[] }>
  currentState: string
  next: string
}

const DETAIL_COPY: Record<Language, Record<string, DetailCopy>> = {
  en: {
    myridian: {
      eyebrow: 'Infrastructure · SQL Server',
      title: 'Myridian',
      intro: 'On-premise observability for SQL Server estates, focused on giving operators a single operational surface for database health, performance and incidents.',
      sections: [
        { title: 'Operations center', text: 'The platform brings multiple SQL Server instances into one local operations view, with server-level diagnostics and operational signals.', bullets: ['Performance, queries and waits', 'Blocking and deadlocks', 'Storage, backups and SQL Agent operations', 'Alerts, search and live or simulated modes'] },
        { title: 'Architecture', text: 'The frontend is React and Vite, while the local backend uses Node.js and Express with SQLite for local state. The project is designed to keep the operational backend local.', bullets: ['React + Vite + Chart.js frontend', 'Node.js + Express API', 'SQLite local persistence', 'SQL Server as the monitored estate'] },
      ],
      currentState: 'Core platform capabilities are implemented; the project roadmap continues with native Windows delivery, more database providers and AI-assisted diagnosis.',
      next: 'Expand the collector and provider model while preserving the local-first operational design.',
    },
    pedalmap: {
      eyebrow: 'Development · Cycling',
      title: 'PedalMap',
      intro: 'A guest-first web application for creating, planning, saving and sharing bicycle routes through interactive maps and routing.',
      sections: [
        { title: 'Product flow', text: 'The application is organized around getting a cyclist from route idea to a usable plan with minimal friction.', bullets: ['Guest-first route planning', 'Interactive MapLibre mapping', 'Route saving and sharing', 'Authentication and community foundations'] },
        { title: 'Technical foundation', text: 'PedalMap combines a modern React frontend with Firebase services and a routing provider abstraction.', bullets: ['React + TypeScript + Vite', 'MapLibre for map rendering', 'OpenRouteService routing', 'Firebase Auth, Firestore and Hosting', 'Playwright coverage for the web flow'] },
      ],
      currentState: 'The documented F1–F6 product phases are complete and the deployed application is available through Firebase Hosting.',
      next: 'Continue product and monetization work while keeping routing and infrastructure boundaries explicit.',
    },
    'pedalmap-fuel': {
      eyebrow: 'Development · Sports nutrition',
      title: 'PedalMap Fuel',
      intro: 'An independent nutrition and hydration planner that turns activity inputs into deterministic fueling and hydration plans.',
      sections: [
        { title: 'Planning engine', text: 'The core model is deterministic rather than AI-driven, so the same inputs produce reproducible recommendations and timelines.', bullets: ['Cycling, running, trail, hiking, triathlon and football flows', 'Nutrition and hydration timelines', 'Sweat-rate calculation', 'Shopping lists and shareable plans'] },
        { title: 'Delivery model', text: 'The MVP is designed to work with local calculations and optional managed services, keeping the baseline architecture low-cost.', bullets: ['React + TypeScript + Vite', 'Tailwind UI and Vitest', 'Optional Firebase persistence', 'Stripe integration reserved for premium flows'] },
      ],
      currentState: 'Phase 2 is complete; the roadmap moves next into affiliate/catalog features before the later premium and wearable integrations.',
      next: 'Turn the deterministic engine into a broader product layer without coupling the calculation core to external services.',
    },
    'firebase-pocket-admin': {
      eyebrow: 'Mobile development · Firebase',
      title: 'Firebase Pocket Admin',
      intro: 'A Flutter administration interface for inspecting and operating Firebase projects from a mobile-oriented workflow.',
      sections: [
        { title: 'Administration surface', text: 'The project brings common Firebase administration tasks into a focused app experience.', bullets: ['Firebase project and workspace management', 'Firestore explorer', 'Document history and diff views', 'Storage and Remote Config tooling'] },
        { title: 'Firebase services', text: 'The source includes dedicated service and screen layers around authentication, data, storage, analytics and configuration.', bullets: ['Firebase Auth', 'Cloud Firestore', 'Firebase Storage', 'Analytics dashboards', 'Remote Config'] },
      ],
      currentState: 'The app remains under active development, with the operational foundation and core Firebase surfaces already represented in the codebase.',
      next: 'Keep expanding administrative coverage while maintaining a clear separation between project metadata, data inspection and operational actions.',
    },    'tcp-exam-trainer': {
      eyebrow: 'Development · Education',
      title: 'TCP Exam Trainer',
      intro: 'An open-source training platform for TCP cabin-crew exam preparation, built around practice, exam simulation and review workflows.',
      sections: [
        { title: 'Learning flow', text: 'The interface provides several modes so a learner can move between practice, simulation and review without leaving the application.', bullets: ['Practice and exam modes', 'Review and favourites', 'Smart-mode flow', 'Statistics and profile surfaces'] },
        { title: 'Content model', text: 'Questions are loaded from structured JSON and the application includes Firebase-backed user synchronization.', bullets: ['JSON question bank', 'Question navigation', 'Firebase authentication and user sync', 'GitHub Pages deployment'] },
      ],
      currentState: 'The main training flow is in place; the verified question bank and statistical features are still being expanded.',
      next: 'Grow the verified content set and continue improving the training and review experience.',
    },
    'infrastructure-intelligence': {
      eyebrow: 'Infrastructure · Discovery',
      title: 'Infrastructure Intelligence',
      intro: 'A phase-0 infrastructure discovery MVP designed around explicit ownership verification, bounded discovery and public-destination safety controls.',
      sections: [
        { title: 'Discovery model', text: 'The MVP starts from proof that a destination belongs to the operator, then keeps discovery deliberately scoped.', bullets: ['DNS TXT ownership verification', '/.well-known verification option', 'Bounded discovery worker', 'Scoped public destinations'] },
        { title: 'Safety boundary', text: 'The project explicitly avoids techniques that would turn discovery into unrestricted network reconnaissance.', bullets: ['No port scanning', 'No crawling', 'No exploitation', 'Public destination restrictions'] },
      ],
      currentState: 'The project is in phase 0, with the verification and discovery boundaries defined before broader intelligence features.',
      next: 'Validate the discovery workflow and reliability before widening the supported inventory model.',
    },
    'mcp-local-server': {
      eyebrow: 'Tools / Lab · MCP',
      title: 'Windows Local MCP',
      intro: 'A self-hosted MCP server that exposes controlled Windows tooling to ChatGPT through an authenticated remote connection.',
      sections: [
        { title: 'Tooling layer', text: 'The server exposes a practical local-control surface for working with projects and the Windows machine without giving the model unrestricted access.', bullets: ['File read, write and surgical edit tools', 'Project discovery and inspection', 'Git and process inspection', 'Controlled command execution'] },
        { title: 'Security boundary', text: 'Authentication and local safety controls are treated as part of the product rather than an afterthought.', bullets: ['OAuth 2.1 and bearer modes', 'Cloudflare Tunnel support', 'Sandboxed filesystem roots', 'Secret-environment filtering', 'Command allow/deny controls and rate limiting'] },
      ],
      currentState: 'The project is a working self-hosted prototype used to bridge ChatGPT and a controlled Windows development environment.',
      next: 'Harden the local integration and keep the tool surface explicit, auditable and constrained.',
    },
  },
  es: {    myridian: {
      eyebrow: 'Infraestructura · SQL Server',
      title: 'Myridian',
      intro: 'Observabilidad local para entornos SQL Server, centrada en ofrecer a los operadores una superficie única para la salud, el rendimiento y las incidencias de las bases de datos.',
      sections: [
        { title: 'Centro de operaciones', text: 'La plataforma reúne varias instancias SQL Server en una vista operativa local, con diagnósticos a nivel de servidor y señales operativas.', bullets: ['Rendimiento, consultas y waits', 'Bloqueos y deadlocks', 'Almacenamiento, copias y operaciones de SQL Agent', 'Alertas, búsqueda y modos reales o simulados'] },
        { title: 'Arquitectura', text: 'La interfaz utiliza React y Vite, mientras que el servidor local utiliza Node.js y Express con SQLite para el estado local. El backend operativo está pensado para mantenerse en el entorno local.', bullets: ['Interfaz React + Vite + Chart.js', 'API Node.js + Express', 'Persistencia local con SQLite', 'SQL Server como entorno monitorizado'] },
      ],
      currentState: 'Las capacidades principales de la plataforma están implementadas; el roadmap continúa con cliente nativo Windows, más proveedores de bases de datos y diagnóstico asistido por IA.',
      next: 'Ampliar el modelo de colector y proveedores manteniendo el diseño con enfoque local.',
    },
    pedalmap: {
      eyebrow: 'Desarrollo · Ciclismo',
      title: 'PedalMap',
      intro: 'Aplicación web sin registro inicial para crear, planificar, guardar y compartir rutas en bicicleta mediante mapas interactivos y cálculo de rutas.',
      sections: [
        { title: 'Flujo de producto', text: 'La aplicación está organizada para llevar al ciclista desde una idea de ruta hasta un plan utilizable con la menor fricción posible.', bullets: ['Planificación sin registro inicial', 'Mapas interactivos con MapLibre', 'Guardado y compartición de rutas', 'Base de autenticación y comunidad'] },
        { title: 'Base técnica', text: 'PedalMap combina una interfaz React moderna con servicios Firebase y una abstracción del proveedor de rutas.', bullets: ['React + TypeScript + Vite', 'MapLibre para renderizado cartográfico', 'Cálculo de rutas con OpenRouteService', 'Firebase Auth, Firestore y Hosting', 'Cobertura Playwright del flujo web'] },
      ],
      currentState: 'Las fases de producto documentadas F1–F6 están completadas y la aplicación desplegada está disponible mediante Firebase Hosting.',
      next: 'Continuar el trabajo de producto y monetización manteniendo explícitos los límites del cálculo de rutas y la infraestructura.',
    },
    'pedalmap-fuel': {
      eyebrow: 'Desarrollo · Nutrición deportiva',
      title: 'PedalMap Fuel',
      intro: 'Planificador independiente de nutrición e hidratación que convierte los datos de una actividad en planes deterministas de alimentación e hidratación.',
      sections: [
        { title: 'Motor de planificación', text: 'El modelo central es determinista y no depende de IA, por lo que las mismas entradas producen recomendaciones y cronogramas reproducibles.', bullets: ['Flujos para ciclismo, carrera, trail, senderismo, triatlón y fútbol', 'Cronogramas de nutrición e hidratación', 'Cálculo de tasa de sudor', 'Listas de compra y planes compartibles'] },
        { title: 'Modelo de entrega', text: 'El MVP funciona con cálculos locales y servicios gestionados opcionales, manteniendo una arquitectura base de bajo coste.', bullets: ['React + TypeScript + Vite', 'UI con Tailwind y Vitest', 'Persistencia Firebase opcional', 'Integración Stripe reservada para funciones premium'] },
      ],
      currentState: 'La fase 2 está completada; el roadmap pasa ahora a funciones de afiliación y catálogo antes de las integraciones premium y con dispositivos portátiles.',
      next: 'Convertir el motor determinista en una capa de producto más amplia sin acoplar el núcleo de cálculo a servicios externos.',
    },
    'firebase-pocket-admin': {
      eyebrow: 'Desarrollo móvil · Firebase',
      title: 'Firebase Pocket Admin',
      intro: 'Interfaz de administración en Flutter para inspeccionar y operar proyectos Firebase desde un flujo orientado a móvil.',
      sections: [
        { title: 'Superficie de administración', text: 'El proyecto reúne tareas habituales de administración de Firebase en una experiencia de aplicación enfocada.', bullets: ['Gestión de proyectos y espacios de trabajo Firebase', 'Explorador de Firestore', 'Historial y diff de documentos', 'Herramientas de Storage y Remote Config'] },
        { title: 'Servicios Firebase', text: 'El código incluye capas de servicios y pantallas específicas para autenticación, datos, almacenamiento, analítica y configuración.', bullets: ['Firebase Auth', 'Cloud Firestore', 'Firebase Storage', 'Paneles de Analytics', 'Remote Config'] },
      ],
      currentState: 'La aplicación continúa en desarrollo activo, con la base operativa y las principales superficies Firebase representadas en el código.',
      next: 'Ampliar la cobertura administrativa manteniendo una separación clara entre metadatos del proyecto, inspección de datos y acciones operativas.',
    },    'tcp-exam-trainer': {
      eyebrow: 'Desarrollo · Educación',
      title: 'TCP Exam Trainer',
      intro: 'Plataforma de código abierto para la preparación de exámenes de TCP basada en flujos de práctica, simulación de examen y repaso.',
      sections: [
        { title: 'Flujo de aprendizaje', text: 'La interfaz ofrece distintos modos para pasar de práctica a simulación y repaso sin abandonar la aplicación.', bullets: ['Modos práctica y examen', 'Repaso y favoritos', 'Flujo de modo inteligente', 'Superficies de estadísticas y perfil'] },
        { title: 'Modelo de contenidos', text: 'Las preguntas se cargan desde JSON estructurado y la aplicación incluye sincronización de usuarios respaldada por Firebase.', bullets: ['Banco de preguntas JSON', 'Navegación de preguntas', 'Autenticación y sincronización con Firebase', 'Despliegue en GitHub Pages'] },
      ],
      currentState: 'El flujo principal de entrenamiento está implementado; el banco de preguntas verificadas y las funciones estadísticas siguen ampliándose.',
      next: 'Ampliar el conjunto de contenidos verificados y seguir mejorando la experiencia de entrenamiento y repaso.',
    },
    'infrastructure-intelligence': {
      eyebrow: 'Infraestructura · Descubrimiento',
      title: 'Infrastructure Intelligence',
      intro: 'MVP de descubrimiento de infraestructura en fase 0, basado en verificación explícita de propiedad, descubrimiento acotado y controles de seguridad sobre destinos públicos.',
      sections: [
        { title: 'Modelo de descubrimiento', text: 'El MVP comienza demostrando que un destino pertenece al operador y mantiene el descubrimiento deliberadamente acotado.', bullets: ['Verificación de propiedad mediante DNS TXT', 'Opción de verificación /.well-known', 'Worker de descubrimiento acotado', 'Destinos públicos dentro de alcance'] },
        { title: 'Límite de seguridad', text: 'El proyecto evita explícitamente técnicas que convertirían el descubrimiento en reconocimiento de red sin restricciones.', bullets: ['Sin escaneo de puertos', 'Sin crawling', 'Sin explotación', 'Restricciones sobre destinos públicos'] },
      ],
      currentState: 'El proyecto está en fase 0, con los límites de verificación y descubrimiento definidos antes de ampliar las funciones de inteligencia.',
      next: 'Validar el flujo y la fiabilidad del descubrimiento antes de ampliar el modelo de inventario soportado.',
    },
    'mcp-local-server': {
      eyebrow: 'Herramientas / Laboratorio · MCP',
      title: 'Windows Local MCP',
      intro: 'Servidor MCP autoalojado que expone herramientas controladas de Windows a ChatGPT mediante una conexión remota autenticada.',
      sections: [
        { title: 'Capa de herramientas', text: 'El servidor ofrece una superficie práctica de control local para trabajar con proyectos y con Windows sin dar acceso irrestricto al modelo.', bullets: ['Herramientas de lectura, escritura y edición quirúrgica', 'Descubrimiento e inspección de proyectos', 'Inspección de Git y procesos', 'Ejecución controlada de comandos'] },
        { title: 'Límite de seguridad', text: 'La autenticación y los controles de seguridad locales forman parte del producto desde el principio.', bullets: ['Modos OAuth 2.1 y bearer', 'Soporte de Cloudflare Tunnel', 'Rutas del sistema de archivos en entorno aislado', 'Filtrado de variables de entorno sensibles', 'Controles de permisos y limitación de velocidad'] },
      ],
      currentState: 'El proyecto es un prototipo autoalojado funcional utilizado para conectar ChatGPT con un entorno de desarrollo Windows controlado.',
      next: 'Reforzar la integración local y mantener la superficie de herramientas explícita, auditable y restringida.',
    },
  },
}

export function getDetailCopy(language: Language, id: string) {
  return DETAIL_COPY[language][id]
}

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  t: TextDictionary
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'en'
  const stored = window.localStorage.getItem('rayvega-language')
  if (stored === 'en' || stored === 'es') return stored
  return window.navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    window.localStorage.setItem('rayvega-language', language)
    document.documentElement.lang = language
    document.title = language === 'es'
      ? 'Ray Vega — Ingeniero de Sistemas IT | Cloud, Ciberseguridad, Automatización, IA'
      : 'Ray Vega — IT & Systems Engineer | Cloud, Cybersecurity, Automation, AI'

    const description = language === 'es'
      ? 'Ingeniería de sistemas, infraestructura, cloud, ciberseguridad, automatización e IA orientada a construir plataformas fiables y herramientas prácticas.'
      : 'Systems, infrastructure, cloud, cybersecurity, automation and AI engineering focused on building reliable platforms and practical tooling.'

    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', language === 'es' ? 'es_ES' : 'en_US')
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', document.title)
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description)
  }, [language])

  const value = useMemo(() => ({
    language,
    setLanguage,
    t: dictionaries[language],
  }), [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider')
  return context
}
