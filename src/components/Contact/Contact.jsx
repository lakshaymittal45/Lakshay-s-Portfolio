import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'
import './Contact.css'

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError('')

    try {
      // EmailJS configuration from environment variables
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      await emailjs.sendForm(
        serviceID,
        templateID,
        formRef.current,
        publicKey
      )

      setSent(true)
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error('Email sending failed:', err)
      setError('Failed to send message. Please try emailing directly at mittalakshay89@gmail.com')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="section contact-section" ref={ref}>
      {/* Animated background orbs */}
      <motion.div
        className="contact-bg-orb"
        style={{ left: '10%', top: '25%' }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="contact-bg-orb"
        style={{ right: '12%', top: '50%' }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <p className="section-subtitle">— Final Chapter —</p>
      <h2 className="section-title">Send a <span>Message</span></h2>

      <div className="contact-grid">
        {/* Left info */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="contact-kanji-art" aria-hidden>
            <span className="contact-kanji">縁</span>
            <p>Bond / Connection</p>
          </div>

          <div className="contact-text">
            <h3>Let&rsquo;s forge a <span>connection</span></h3>
            <p>
              Whether it&rsquo;s a collaboration, job opportunity, freelance project,
              or just a chat about tech &amp; anime — my inbox is always open.
              I&rsquo;ll respond faster than a demon slayer marks activation.
            </p>
          </div>

          <div className="contact-channels">
            <a href="mailto:mittalakshay89@gmail.com" className="channel-item">
              <span className="channel-icon">✉</span>
              <div>
                <span className="channel-label">EMAIL</span>
                <span className="channel-value">mittalakshay89@gmail.com</span>
              </div>
            </a>
            <a href="https://linkedin.com/in/lakshaymittal45" target="_blank" rel="noreferrer" className="channel-item">
              <span className="channel-icon">in</span>
              <div>
                <span className="channel-label">LINKEDIN</span>
                <span className="channel-value">linkedin.com/in/lakshaymittal45</span>
              </div>
            </a>
            <a href="https://github.com/lakshaymittal45" target="_blank" rel="noreferrer" className="channel-item">
              <span className="channel-icon">⌥</span>
              <div>
                <span className="channel-label">GITHUB</span>
                <span className="channel-value">github.com/lakshaymittal45</span>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Right form */}
        <motion.div
          className="contact-form-wrap"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {sent ? (
            <div className="form-sent">
              <span className="sent-icon">⚔</span>
              <h3>Message Delivered!</h3>
              <p>Your scroll has been sent. I&rsquo;ll get back to you soon, warrior.</p>
              <button className="btn-anime" onClick={() => setSent(false)}>
                Send Another
              </button>
            </div>
          ) : (
            <form ref={formRef} className="contact-form anime-card corner-ornament" onSubmit={handleSubmit}>
              {error && (
                <div className="form-error">
                  <span>⚠</span> {error}
                </div>
              )}
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name..."
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email..."
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Write your message..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn-anime btn-anime-gold form-submit"
                disabled={sending}
              >
                {sending ? (
                  <span className="sending-dot">Sending<span className="dots" /></span>
                ) : (
                  '⚔ &nbsp; Send Message'
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-line" />
        <p className="footer-text">
          © 2026 <span>Lakshay Mittal</span> · Built with React + Passion + Warrior Energy
        </p>
        <p className="footer-sub">
          &ldquo;If you don&rsquo;t like your destiny, don&rsquo;t accept it.&rdquo; — Naruto
        </p>
      </footer>
    </section>
  )
}
