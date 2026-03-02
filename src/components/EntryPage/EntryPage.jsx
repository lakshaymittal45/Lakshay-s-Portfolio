import { motion } from 'framer-motion'
import './EntryPage.css'

export default function EntryPage({ onEnter }) {
  const handleEnter = () => {
    // Smooth scroll to top before transition
    window.scrollTo(0, 0)
    onEnter()
  }

  return (
    <div className="entry-page">
      {/* Background animated elements */}
      <div className="entry-bg-particles" />

      {/* Main hero section */}
      <main className="entry-hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Project label */}
          <motion.div 
            className="project-label"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <span className="label-line"></span>
            <span className="label-text">Portfolio 2026</span>
          </motion.div>

          {/* Main title */}
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            CODE WARRIOR
            <span className="title-decoration">⚔️</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            Lakshay Mittal · Software Developer & AI Engineer
          </motion.p>

          {/* CTA Button */}
          <motion.button
            className="entry-cta"
            onClick={handleEnter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 215, 0, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Start Journey</span>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M13 7l5 5-5 5M6 12h12"/>
            </svg>
          </motion.button>
        </motion.div>

        {/* Warrior illustration overlay */}
        <motion.div 
          className="hero-warrior"
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          <div className="warrior-glow"></div>
          <motion.div
            className="warrior-character"
            animate={{
              y: [-20, 20, -20],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* SVG Warrior Silhouette */}
            <svg viewBox="0 0 400 600" className="warrior-svg">
              <defs>
                <linearGradient id="warriorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#e63946" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#ffd700" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#06d6a0" stopOpacity="0.4" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              {/* Head */}
              <ellipse cx="200" cy="80" rx="50" ry="60" fill="url(#warriorGrad)" filter="url(#glow)"/>
              {/* Body */}
              <path d="M150 140 L160 130 L200 120 L240 130 L250 140 L260 300 L250 500 L240 550 L220 560 L200 500 L180 560 L160 550 L150 500 L140 300 Z" 
                    fill="url(#warriorGrad)" filter="url(#glow)"/>
              {/* Left arm with sword */}
              <path d="M150 150 L100 180 L80 250 L85 260 L120 220 L145 200 Z" 
                    fill="url(#warriorGrad)" opacity="0.7" filter="url(#glow)"/>
              <path d="M80 250 L60 200 L55 195 L50 200 L70 260 Z" 
                    fill="#ffd700" opacity="0.9" filter="url(#glow)"/>
              {/* Right arm */}
              <path d="M250 150 L300 180 L320 250 L315 260 L280 220 L255 200 Z" 
                    fill="url(#warriorGrad)" opacity="0.7" filter="url(#glow)"/>
              {/* Legs */}
              <path d="M180 500 L170 560 L160 580 L165 585 L185 560 L195 520 Z" 
                    fill="url(#warriorGrad)" opacity="0.8" filter="url(#glow)"/>
              <path d="M220 500 L230 560 L240 580 L235 585 L215 560 L205 520 Z" 
                    fill="url(#warriorGrad)" opacity="0.8" filter="url(#glow)"/>
              {/* Armor details */}
              <circle cx="200" cy="200" r="15" fill="#ffd700" opacity="0.8" filter="url(#glow)"/>
              <circle cx="200" cy="240" r="12" fill="#ffd700" opacity="0.7" filter="url(#glow)"/>
              <circle cx="200" cy="280" r="10" fill="#ffd700" opacity="0.6" filter="url(#glow)"/>
            </svg>
          </motion.div>
        </motion.div>
      </main>

      {/* Ambient particles */}
      <div className="ambient-particles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="ambient-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  )
}
