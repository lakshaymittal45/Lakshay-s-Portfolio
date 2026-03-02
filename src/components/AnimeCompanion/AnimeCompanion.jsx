import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './AnimeCompanion.css'

const dialogues = {
  hero: [
    "Welcome, traveler! I am your guide through this portfolio realm. ⚔",
    "This is the domain of Mittapalli — a code warrior of immense potential!",
    "Scroll down to witness the legend unfold... 👁",
  ],
  about: [
    "Ah, you've reached the origin chapter! Every legend has a beginning... 📜",
    "Like Tanjiro's unwavering spirit, this developer never gives up! 🔥",
    "A true warrior of code — trained, passionate, and ready! ⚡",
  ],
  skills: [
    "Behold the arsenal! These are the techniques mastered through countless battles! ⚔",
    "React? Python? AI? This warrior wields many blades! 🗡",
    "Every skill bar represents hours of relentless training... impressive! 💪",
  ],
  projects: [
    "The battle record — each project a conquered foe! 🏆",
    "These aren't just projects... they are war trophies! 🌟",
    "Look at these creations! Each one forged with code and willpower! ⚡",
  ],
  experience: [
    "The journey chapter! Every great warrior has a path that shaped them... 🛤",
    "Education, internships, hackathons — the trials that built this legend! 🔥",
    "From humble beginnings to a code warrior — what a transformation! ✨",
  ],
  contact: [
    "You've reached the end! Want to forge an alliance? Send a message! 📩",
    "The warrior awaits your call! Don't be shy, reach out! ⚔",
    "This is your chance to collaborate with a true code demon! 🔥",
  ],
}

const SECTIONS = ['hero', 'about', 'skills', 'projects', 'experience', 'contact']

export default function AnimeCompanion() {
  const [visible, setVisible] = useState(false)
  const [currentSection, setCurrentSection] = useState('hero')
  const [dialogueIdx, setDialogueIdx] = useState(0)
  const [showDialogue, setShowDialogue] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  // Show after 2 seconds
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(t)
  }, [])

  // Track scroll section
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2
      for (const id of SECTIONS) {
        const el = document.getElementById(id)
        if (el) {
          const { top, bottom } = el.getBoundingClientRect()
          const absTop = top + window.scrollY
          const absBottom = bottom + window.scrollY
          if (scrollY >= absTop && scrollY <= absBottom) {
            if (id !== currentSection) {
              setCurrentSection(id)
              setDialogueIdx(0)
              if (isOpen) setShowDialogue(true)
            }
            break
          }
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [currentSection, isOpen])

  const handleCharClick = () => {
    setIsOpen(true)
    setShowDialogue(true)
    setDialogueIdx(0)
  }

  const handleNext = () => {
    const list = dialogues[currentSection] || dialogues.hero
    if (dialogueIdx < list.length - 1) {
      setDialogueIdx(p => p + 1)
    } else {
      setShowDialogue(false)
      setIsOpen(false)
    }
  }

  const currentDialogue = (dialogues[currentSection] || dialogues.hero)[dialogueIdx]

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="companion-wrapper"
          initial={{ scale: 0, opacity: 0, x: 100 }}
          animate={{ scale: 1, opacity: 1, x: 0 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          {/* Dialogue bubble */}
          <AnimatePresence>
            {showDialogue && (
              <motion.div
                className="companion-bubble"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                <p className="bubble-text">{currentDialogue}</p>
                <div className="bubble-footer">
                  <span className="bubble-speaker">「 Akira 」</span>
                  <button className="bubble-next" onClick={handleNext}>
                    {dialogueIdx < (dialogues[currentSection] || []).length - 1
                      ? 'Next ▶'
                      : 'Close ✕'}
                  </button>
                </div>
                <div className="bubble-arrow" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Character */}
          <div
            className="companion-char"
            onClick={handleCharClick}
            title="Talk to Akira!"
          >
            <div className="char-art">
              <svg viewBox="0 0 100 140" className="char-svg">
                <defs>
                  <radialGradient id="bodyGrad" cx="50%" cy="40%" r="60%">
                    <stop offset="0%" stopColor="#e63946" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#8b0000" stopOpacity="0.6"/>
                  </radialGradient>
                </defs>
                {/* Head */}
                <ellipse cx="50" cy="28" rx="20" ry="22" fill="#f4c89a" />
                {/* Hair */}
                <path d="M30,18 Q35,0 50,5 Q65,0 70,18 Q65,8 50,10 Q35,8 30,18 Z" fill="#1a0005"/>
                <path d="M28,22 Q22,30 24,40 L30,35 Z" fill="#1a0005"/>
                <path d="M72,22 Q78,30 76,40 L70,35 Z" fill="#1a0005"/>
                {/* Eyes */}
                <ellipse cx="42" cy="28" rx="5" ry="6" fill="#1a0a2e"/>
                <ellipse cx="58" cy="28" rx="5" ry="6" fill="#1a0a2e"/>
                <ellipse cx="43" cy="27" rx="2" ry="3" fill="#e63946" opacity="0.9"/>
                <ellipse cx="59" cy="27" rx="2" ry="3" fill="#e63946" opacity="0.9"/>
                <circle cx="44" cy="26" r="1" fill="white" opacity="0.8"/>
                <circle cx="60" cy="26" r="1" fill="white" opacity="0.8"/>
                {/* Mouth */}
                <path d="M44,38 Q50,44 56,38" fill="none" stroke="#c45" strokeWidth="1.5" strokeLinecap="round"/>
                {/* Scar - demon slayer style */}
                <path d="M40,22 Q42,26 40,30" fill="none" stroke="#e63946" strokeWidth="1" opacity="0.7"/>
                {/* Body / cloak */}
                <path d="M28,50 L15,120 L85,120 L72,50 Q60,58 50,55 Q40,58 28,50 Z" fill="url(#bodyGrad)"/>
                {/* Haori pattern */}
                <path d="M28,50 L22,90 Q30,95 35,88 L38,60 Q33,58 28,50 Z" fill="#8b0000" opacity="0.5"/>
                <path d="M72,50 L78,90 Q70,95 65,88 L62,60 Q67,58 72,50 Z" fill="#8b0000" opacity="0.5"/>
                {/* Arms */}
                <path d="M28,52 L8,80 L14,84 L32,60 Z" fill="url(#bodyGrad)"/>
                <path d="M72,52 L92,80 L86,84 L68,60 Z" fill="url(#bodyGrad)"/>
                {/* Sword hint */}
                <line x1="90" y1="60" x2="76" y2="100" stroke="#ffd700" strokeWidth="2" opacity="0.8"/>
                <rect x="87" y="57" width="7" height="5" rx="1" fill="#b8860b"/>
              </svg>
            </div>
            <div className="char-glow" />
            <div className="char-label">AKIRA</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
