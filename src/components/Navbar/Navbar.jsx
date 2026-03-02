import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Navbar.css'

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="nav-logo">
        <span className="logo-bracket">[</span>
        <span className="logo-text">LAKSHAY MITTAL</span>
        <span className="logo-bracket">]</span>
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map(link => (
          <li key={link.label}>
            <a
              href={link.href}
              className={active === link.label ? 'active' : ''}
              onClick={() => { setActive(link.label); setMenuOpen(false) }}
            >
              {link.label}
              <span className="nav-underline" />
            </a>
          </li>
        ))}
      </ul>

      <a href="#contact" className="nav-cta">
        HIRE ME
        <span className="nav-cta-slice" />
      </a>

      <button
        className={`hamburger ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(p => !p)}
        aria-label="menu"
      >
        <span /><span /><span />
      </button>
    </motion.nav>
  )
}
