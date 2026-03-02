import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import resumePDF from '../../assets/Resume_Lakshay_Mittal.pdf'
import './Hero.css'

export default function Hero() {
  const bgRef = useRef(null)

  useEffect(() => {
    const el = bgRef.current
    const onMove = (e) => {
      const { innerWidth: W, innerHeight: H } = window
      const x = (e.clientX / W - 0.5) * 20
      const y = (e.clientY / H - 0.5) * 20
      el.style.transform = `translate(${x}px, ${y}px)`
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section id="hero" className="hero-section">
      {/* Animated energy circles */}
      <motion.div
        className="energy-circle circle-1"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="energy-circle circle-2"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Glowing orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="glow-orb"
          style={{
            left: `${15 + i * 18}%`,
            top: `${20 + (i % 2) * 40}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Parallax bg text */}
      <div ref={bgRef} className="hero-bg-kanji" aria-hidden>
        侍道
      </div>

      {/* Left anime character silhouette */}
      <div className="hero-char-silhouette" aria-hidden>
        <svg viewBox="0 0 200 500" className="silhouette-svg">
          <defs>
            <linearGradient id="charGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c1121f" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ffd700" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          {/* Simple warrior silhouette shape */}
          <path d="M100,20 C115,20 130,35 130,55 C130,75 118,90 100,90 C82,90 70,75 70,55 C70,35 85,20 100,20 Z" fill="url(#charGrad)"/>
          <path d="M60,100 L80,95 L100,90 L120,95 L140,100 L155,200 L145,350 L140,480 L120,485 L115,350 L100,300 L85,350 L80,485 L60,480 L55,350 L45,200 Z" fill="url(#charGrad)"/>
          <path d="M60,100 L10,160 L20,170 L65,130 Z" fill="url(#charGrad)" opacity="0.5"/>
          <path d="M140,100 L190,160 L180,170 L135,130 Z" fill="url(#charGrad)" opacity="0.5"/>
        </svg>
      </div>

      {/* Main content */}
      <div className="hero-content">
        <motion.p
          className="hero-greeting"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          ⚔ &nbsp; Hello, World — I am
        </motion.p>

        <motion.h1
          className="hero-name glitch"
          data-text="LAKSHAY MITTAL"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          LAKSHAY MITTAL
        </motion.h1>

        <motion.div
          className="hero-type"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span className="hero-type-prefix">&gt;&nbsp;</span>
          <TypeAnimation
            sequence={[
              'Software Developer', 1800,
              'AI Research Intern', 1800,
              'Full Stack Developer', 1800,
              'AIML Engineer', 1800,
              'Code Warrior', 1800,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="hero-type-text"
          />
          <span className="hero-cursor-blink">_</span>
        </motion.div>

        <motion.p
          className="hero-bio"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7 }}
        >
          Electrical Engineering student with a deep passion for AI & Software Development. <br />
          Building intelligent systems that make a real-world impact in healthcare & beyond.
        </motion.p>

        <motion.div
          className="hero-btns"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <a href="#projects" className="btn-anime btn-anime-gold">
            View My Work
          </a>
          <a href="#contact" className="btn-anime">
            Contact Me
          </a>
        </motion.div>

        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <a href="https://github.com/lakshaymittal45" target="_blank" rel="noreferrer" className="social-link">
            GitHub
          </a>
          <span className="social-sep">·</span>
          <a href="https://linkedin.com/in/lakshaymittal45" target="_blank" rel="noreferrer" className="social-link">
            LinkedIn
          </a>
          <span className="social-sep">·</span>
          <a href={resumePDF} download="Lakshay_Mittal_Resume.pdf" className="social-link">Resume ↓</a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <div className="scroll-line" />
        <span>SCROLL</span>
      </motion.div>
    </section>
  )
}
