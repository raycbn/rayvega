import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import { About } from './components/sections/About'
import { Experience } from './components/sections/Experience'
import { Technologies } from './components/sections/Technologies'
import { Lab } from './components/sections/Lab'
import { Contact } from './components/sections/Contact'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Technologies />
        <Lab />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
