import { lazy, Suspense } from 'react'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import { About } from './components/sections/About'
import { Experience } from './components/sections/Experience'
import { Technologies } from './components/sections/Technologies'
import { Lab } from './components/sections/Lab'
import { Contact } from './components/sections/Contact'
import { useLanguage } from './lib/i18n'
const CVPage = lazy(() => import('./pages/CVPage').then((module) => ({ default: module.CVPage })))
const NexusPage = lazy(() => import('./pages/NexusPage').then((module) => ({ default: module.NexusPage })))
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage').then((module) => ({ default: module.ProjectDetailPage })))

export default function App() {
  const { t } = useLanguage()
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  const projectPrefix = '/projects/'
  const projectId = path.startsWith(projectPrefix) ? path.slice(projectPrefix.length) : ''
  const isNexusPage = projectId === 'nexus'
  const isProjectDetailPage = Boolean(projectId)
  const isCvPage = path === '/cv'

  return (
    <>
      <a
        href="#main-content"
        className="sr-only fixed left-4 top-4 z-50 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground focus:not-sr-only"
      >
        {t.nav.skipToContent}
      </a>
      <Header />
      <div id="main-content">
        <Suspense fallback={<div className="min-h-[70vh]" aria-hidden="true" />}>
        {isCvPage ? <CVPage /> : isNexusPage ? <NexusPage /> : isProjectDetailPage ? <ProjectDetailPage projectId={projectId} /> : <main>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Technologies />
        <Lab />
        <Contact />
        </main>}
        </Suspense>
      </div>
      <Footer />
    </>
  )
}
