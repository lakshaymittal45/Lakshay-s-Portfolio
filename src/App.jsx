import { useState } from 'react'
import './App.css'
import EntryPage from './components/EntryPage/EntryPage'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'
import ParticleField from './components/ParticleField/ParticleField'
import CustomCursor from './components/CustomCursor/CustomCursor'
import FireParticles from './components/FireParticles/FireParticles'
import FloatingElements from './components/FloatingElements/FloatingElements'

function App() {
  const [showEntryPage, setShowEntryPage] = useState(true)

  const handleEnterPortfolio = () => {
    setShowEntryPage(false)
  }

  if (showEntryPage) {
    return (
      <>
        <CustomCursor />
        <EntryPage onEnter={handleEnterPortfolio} />
      </>
    )
  }

  return (
    <>
      <CustomCursor />

      <ParticleField />
      <FireParticles />
      <FloatingElements />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  )
}

export default App
