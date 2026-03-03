import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import resumePDF from '../../assets/Resume_Lakshay_Mittal.pdf'
import './About.css'

const stats = [
  { value: '8.05', label: 'CGPA' },
  { value: '5+', label: 'Projects' },
  { value: '1', label: 'Internship' },
  { value: '∞', label: 'Determination' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section about-section" ref={ref}>
      {/* Animated background elements */}
      <motion.div
        className="about-bg-symbol"
        style={{ left: "5%", top: "20%" }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 20, repeat: Infinity }}
      >
        ⚡
      </motion.div>
      <motion.div
        className="about-bg-symbol"
        style={{ right: "8%", top: "60%" }}
        animate={{
          rotate: [360, 0],
          scale: [1.1, 1, 1.1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 18, repeat: Infinity }}
      >
        🔥
      </motion.div>

      <p className="section-subtitle">— Chapter 01 —</p>
      <h2 className="section-title">
        About <span>Me</span>
      </h2>

      <div className="about-grid">
        {/* Left: Card with art */}
        <motion.div
          className="about-art-col"
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="about-art-card corner-ornament anime-card">
            <div className="about-art-inner">
              <div className="about-kanji-art">
                <span className="kanji-big">修</span>
                <span className="kanji-small">道</span>
              </div>
              <p className="kanji-meaning">The Way of Mastery</p>
            </div>
            <div className="about-card-stats">
              {stats.map((s, index) => (
                <motion.div
                  key={s.label}
                  className="stat-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(230, 57, 70, 0.3)",
                  }}
                >
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Text */}
        <motion.div
          className="about-text-col"
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="about-tag">⚔ Origin Story</div>
          <h3 className="about-heading">
            A developer forged in <span>code</span> and driven by{" "}
            <span>impact</span>
          </h3>

          <div className="about-paragraphs">
            <p>
              I’m <strong>Lakshay Mittal</strong> — an Electrical Engineering
              student at Punjab Engineering College, driven by a relentless
              curiosity for AI, systems thinking, and intelligent software.
              Currently working as an AI Research Intern at IIT Ropar & Homi
              Bhabha Cancer Hospital, where I design and deploy real-world
              healthcare intelligence solutions.
            </p>

            <p>
              My foundation in hardware gives me a deep understanding of how
              systems truly operate — from signals and circuits to scalable
              cloud architectures. I’ve engineered Medical Voice AI pipelines,
              built energy forecasting models, and developed emergency call
              analysis platforms that prioritize precision, reliability, and
              impact.
            </p>

            <p>
              I don’t just write code — I architect solutions. Whether it’s
              training ML models, optimizing backend performance, or crafting
              full-stack applications, I approach every project with discipline,
              ownership, and the mindset of a modern-day code warrior —
              constantly learning, iterating, and pushing beyond the expected.
            </p>
          </div>

          <div className="about-pillars">
            {[ 
              "Full Stack",
              "Machine Learning",
              "Data Science",
              "Data Analytics",
            ].map((p) => (
              <span key={p} className="pillar-tag">
                {p}
              </span>
            ))}
          </div>

          <a
            href={resumePDF}
            download="Lakshay_Mittal_Resume.pdf"
            className="btn-anime btn-anime-gold"
            style={{ marginTop: "28px", display: "inline-block" }}
          >
            Download Resume ↓
          </a>
        </motion.div>
      </div>
    </section>
  );
}
