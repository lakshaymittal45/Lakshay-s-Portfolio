import { useState, useEffect } from 'react'
import './App.css'
import IntroScene from './components/IntroScene/IntroScene'
import EntryPage from './components/EntryPage/EntryPage'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'
import AnimeCompanion from './components/AnimeCompanion/AnimeCompanion'
import ParticleField from './components/ParticleField/ParticleField'
import CustomCursor from './components/CustomCursor/CustomCursor'
import FireParticles from './components/FireParticles/FireParticles'
import FloatingElements from './components/FloatingElements/FloatingElements'

function App() {
  const [introComplete, setIntroComplete] = useState(false)
  const [entryPassed, setEntryPassed] = useState(false)

  // Persist intro skip across refreshes during dev
  useEffect(() => {
    const skipped = sessionStorage.getItem('intro-done')
    const entrySkipped = sessionStorage.getItem('entry-passed')
    if (skipped) setIntroComplete(true)
    if (entrySkipped) setEntryPassed(true)
  }, [])

  const handleIntroFinish = () => {
    sessionStorage.setItem('intro-done', '1')
    setIntroComplete(true)
  }

  const handleEntryComplete = () => {
    sessionStorage.setItem('entry-passed', '1')
    setEntryPassed(true)
  }

  return (
    <>
      <CustomCursor />
      <div className="scanlines" />

      {!introComplete && <IntroScene onComplete={handleIntroFinish} />}

      {introComplete && !entryPassed && <EntryPage onEnter={handleEntryComplete} />}

      {introComplete && entryPassed && (
        <>
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
          <AnimeCompanion />
        </>
      )}
    </>
  )
}

export default App
