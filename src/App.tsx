import { lazy, Suspense } from 'react'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import { About } from './components/sections/About'
import { WhatIBuilt } from './components/sections/WhatIBuilt'
import { Experience } from './components/sections/Experience'
import { Experience2 } from './components/sections/Experience2'
import { Capabilities } from './components/sections/Capabilities'
import { Technologies } from './components/sections/Technologies'
import { TechnologyMatrix } from './components/sections/TechnologyMatrix'
import { TechnologyMap } from './components/sections/TechnologyMap'
import { Lab } from './components/sections/Lab'
import { Contact } from './components/sections/Contact'
import { Portfolio2 } from './components/sections/Portfolio2'
import { useLanguage } from './lib/i18n'

const CVPage = lazy(() => import('./pages/CVPage').then((module) => ({ default: module.CVPage })))
const NexusPage = lazy(() => import('./pages/NexusPage').then((module) => ({ default: module.NexusPage })))
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage').then((module) => ({ default: module.ProjectDetailPage })))
const ProjectGallerySection = lazy(() => import('./components/sections/ProjectGallerySection').then((module) => ({ default: module.ProjectGallerySection })))
const TechnologyDetailPage = lazy(() => import('./pages/TechnologyDetailPage').then((module) => ({ default: module.TechnologyDetailPage })))
const PrintablePage = lazy(() => import('./pages/PrintablePage').then((module) => ({ default: module.PrintablePage })))

export default function App() {
  const { t } = useLanguage()
  const rawPath = window.location.pathname
  const path = rawPath.length > 1 && rawPath.endsWith('/') ? rawPath.slice(0, -1) : rawPath
  const projectPrefix = '/projects/'
  const technologyPrefix = '/technologies/'
  const projectId = path.startsWith(projectPrefix) ? path.slice(projectPrefix.length) : ''
  const technologySlug = path.startsWith(technologyPrefix) ? path.slice(technologyPrefix.length) : ''
  const printableProjects = path === '/documents/projects'
  const printableTechnical = path === '/documents/technical-profile'
  const isNexusPage = projectId === 'nexus'
  const isProjectDetailPage = Boolean(projectId)
  const isTechnologyPage = Boolean(technologySlug)
  const isCvPage = path === '/cv'

  return (
    <>
      <a href="#main-content" className="sr-only fixed left-4 top-4 z-50 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground focus:not-sr-only">
        {t.nav.skipToContent}
      </a>
      <Header />
      <div id="main-content">
        <Suspense fallback={<div className="min-h-[70vh]" aria-hidden="true" />}>
          {printableProjects ? <PrintablePage kind="projects" /> : printableTechnical ? <PrintablePage kind="technical" /> : isCvPage ? <CVPage /> : isTechnologyPage ? <TechnologyDetailPage technologySlug={technologySlug} /> : isNexusPage ? (
            <NexusPage />
          ) : isProjectDetailPage ? (
            <>
              <ProjectDetailPage projectId={projectId} />
              <ProjectGallerySection projectId={projectId} />
            </>
          ) : (
            <main>
              <Hero />
              <Projects />
              <WhatIBuilt />
              <About />
              <Experience />
              <Experience2 />
              <Capabilities />
              <Technologies />
              <TechnologyMatrix />
              <TechnologyMap />
              <Lab />
              <Contact />
              <Portfolio2 />
            </main>
          )}
        </Suspense>
      </div>
      <Footer />
    </>
  )
}
