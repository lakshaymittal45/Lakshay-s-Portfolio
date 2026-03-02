import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import './Skills.css'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: '⚡',
    skills: [
      { name: 'C++', level: 75, label: 'Intermediate' },
      { name: 'Python', level: 75, label: 'Intermediate' },
      { name: 'JavaScript', level: 60, label: 'Basic' },
    ],
  },
  {
    title: 'Computer Fundamentals',
    icon: '🔥',
    skills: [
      { name: 'Data Structures', level: 80 },
      { name: 'Algorithms', level: 80 },
      { name: 'Object Oriented Programming', level: 75 },
      { name: 'Operating Systems', level: 70 },
      { name: 'Database Management System', level: 75 },
      { name: 'Computer Networks', level: 68 },
    ],
  },
  {
    title: 'Web Development',
    icon: '💻',
    skills: [
      { name: 'HTML', level: 88 },
      { name: 'CSS', level: 85 },
      { name: 'React JS', level: 80 },
      { name: 'FastAPI', level: 75 },
    ],
  },
  {
    title: 'Databases',
    icon: '🗄',
    skills: [
      { name: 'SQL', level: 80 },
      { name: 'MongoDB', level: 75 },
    ],
  },
  {
    title: 'Tools & Utilities',
    icon: '🛠',
    skills: [
      { name: 'Git', level: 88 },
      { name: 'GitHub', level: 88 },
      { name: 'Excel', level: 80 },
      { name: 'Power BI', level: 82 },
      { name: 'MySQL Workbench', level: 75 },
      { name: 'VS Code', level: 90 },
      { name: 'Jupyter', level: 88 },
      { name: 'Figma', level: 70 },
    ],
  },
  {
    title: 'Libraries',
    icon: '📚',
    skills: [
      { name: 'NumPy', level: 85 },
      { name: 'Pandas', level: 85 },
      { name: 'Matplotlib', level: 80 },
      { name: 'STL (C++)', level: 75 },
    ],
  },
  {
    title: 'Soft Skills',
    icon: '✨',
    skills: [
      { name: 'Leadership', level: 85 },
      { name: 'Team Management', level: 80 },
      { name: 'Communication', level: 88 },
      { name: 'Problem Solving', level: 90 },
      { name: 'Time Management', level: 82 },
    ],
  },
]

function SkillBar({ name, level, label, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [hovered, setHovered] = useState(false)
  
  return (
    <div 
      className="skill-item" 
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="skill-header">
        <span className="skill-name">
          {name}
          {label && <span className="skill-label"> ({label})</span>}
        </span>
        <motion.span 
          className="skill-percent"
          animate={hovered ? { scale: 1.15, color: '#ffd700' } : { scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay: delay || 0, ease: [0.22, 1, 0.36, 1] }}
        />
        <AnimatePresence>
          {hovered && (
            <motion.div
              className="skill-bar-glow"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeCard, setActiveCard] = useState(null)

  return (
    <section id="skills" className="section skills-section" ref={ref}>
      <p className="section-subtitle">— Chapter 02 —</p>
      <h2 className="section-title">Battle <span>Skills</span></h2>

      <div className="skills-grid">
        {skillCategories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            className={`skill-card anime-card corner-ornament ${activeCard === ci ? 'active' : ''}`}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: ci * 0.15 }}
            whileHover={{ 
              y: -8, 
              scale: 1.02,
              boxShadow: '0 8px 30px rgba(230, 57, 70, 0.25)',
            }}
            onClick={() => setActiveCard(activeCard === ci ? null : ci)}
          >
            <div className="skill-card-header">
              <motion.span 
                className="skill-card-icon"
                animate={{ 
                  rotate: activeCard === ci ? 360 : 0,
                  scale: activeCard === ci ? 1.2 : 1 
                }}
                transition={{ duration: 0.5 }}
              >
                {cat.icon}
              </motion.span>
              <h3 className="skill-card-title">{cat.title}</h3>
            </div>
            <div className="skill-bars">
              {cat.skills.map((s, si) => (
                <SkillBar
                  key={s.name}
                  name={s.name}
                  level={s.level}
                  label={s.label}
                  delay={ci * 0.15 + si * 0.1}
                />
              ))}
            </div>
            <AnimatePresence>
              {activeCard === ci && (
                <motion.div
                  className="skill-card-border-glow"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Tech badges - removed as all skills now in categories */}
    </section>
  )
}
