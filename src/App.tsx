import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import { About } from './components/sections/About'
import { Experience } from './components/sections/Experience'
import { Technologies } from './components/sections/Technologies'
import { Lab } from './components/sections/Lab'
import { Contact } from './components/sections/Contact'
import { NexusPage } from './pages/NexusPage'
import { ProjectDetailPage } from './pages/ProjectDetailPage'

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  const projectPrefix = '/projects/'
  const projectId = path.startsWith(projectPrefix) ? path.slice(projectPrefix.length) : ''
  const isNexusPage = projectId === 'nexus'
  const isProjectDetailPage = Boolean(projectId)

  return (
    <>
      <Header />
      {isNexusPage ? <NexusPage /> : isProjectDetailPage ? <ProjectDetailPage projectId={projectId} /> : <main>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Technologies />
        <Lab />
        <Contact />
      </main>}
      <Footer />
    </>
  )
}
