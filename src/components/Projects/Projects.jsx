import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'UrjaVision — AI Electricity Load Forecasting',
    desc: 'Built end-to-end AI pipeline for short-term and day-ahead electricity demand forecasting. Full-stack application with ML models, backend API, and interactive frontend. Achieved 2.5% MAPE for 1-hour ahead prediction.',
    tech: ['Python', 'LSTM', 'JavaScript', 'Node.js', 'ML'],
    github: 'https://github.com/lakshaymittal45/URJAVISION',
    live: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Sleep Detector for Drivers',
    desc: 'Real-time driver drowsiness detection using MediaPipe Face Mesh and Eye Aspect Ratio. Triggers audio alarm when eyes stay closed for ~2 seconds. Ignores normal blinks using grace period detection.',
    tech: ['Python', 'OpenCV', 'MediaPipe', 'Pygame', 'Computer Vision'],
    github: 'https://github.com/lakshaymittal45/Sleep-Detector-',
    live: '#',
    featured: false,
  },
  {
    id: 3,
    title: 'Medical Voice AI EMR System',
    desc: 'End-to-end Medical Voice AI system with ASR, speaker diarization, and NLP-based clinical note extraction. HIPAA-compliant automated EMR outputs for IIT Ropar & HBCH research. Private repository.',
    tech: ['Python', 'FastAPI', 'ASR', 'NLP', 'Healthcare'],
    github: '#',
    live: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Longitudinal Survey Application',
    desc: 'Comprehensive Flask-based survey management system for longitudinal research. Features multi-section questionnaires, hierarchical questions, location management, offline support, and Aadhaar encryption.',
    tech: ['Flask', 'MySQL', 'HTML', 'JavaScript', 'Docker'],
    github: 'https://github.com/lakshaymittal45/survey_app',
    live: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'Dental Tooth Matching System',
    desc: 'Dental tooth matching system using ORB and SSIM algorithms. Automatically matches newly extracted teeth from radiographs with existing labeled teeth. Features bulk processing and similarity scoring.',
    tech: ['Python', 'OpenCV', 'scikit-image', 'NumPy', 'Computer Vision'],
    github: 'https://github.com/lakshaymittal45/Tooth-Matching',
    live: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'Location Tracker with Offline Support',
    desc: 'Household location tracking app with cascading location hierarchy, offline support with auto-sync, Google Maps integration, and PWA for Android installation.',
    tech: ['JavaScript', 'Python', 'React', 'MySQL', 'Google Maps API'],
    github: 'https://github.com/lakshaymittal45/Location-Tracker',
    live: '#',
    featured: false,
  },
  {
    id: 7,
    title: 'Global CO₂ & GHG Emission Dashboard',
    desc: 'Interactive Power BI dashboard visualizing global carbon emissions from 1850-2023. Features CO₂ by source (coal/oil/gas), per capita metrics, GHG trends, and energy consumption across 190+ countries.',
    tech: ['Power BI', 'Power Query', 'DAX', 'Data Visualization'],
    github: 'https://github.com/lakshaymittal45/Global-CO2-and-Greenhouse-Gas-Emission-',
    live: '#',
    featured: true,
  },
  {
    id: 8,
    title: 'Train Delay & Passenger Flow Analytics',
    desc: 'End-to-end data analyst project analyzing real-world railway delays. Identifies most delayed trains, stations, punctuality performance, and cancellation risks using MySQL and Python visualizations.',
    tech: ['MySQL', 'Python', 'Pandas', 'Matplotlib', 'SQLAlchemy'],
    github: 'https://github.com/lakshaymittal45/Train-Delay-Passenger-Flow-Analytics',
    live: '#',
    featured: true,
  },
  {
    id: 9,
    title: 'Dramatics Society Recruitment Platform',
    desc: 'Recruitment management system for college dramatics society. Features application tracking, candidate evaluation, and automated scheduling. Private repository for institutional use.',
    tech: ['JavaScript', 'Node.js', 'React', 'Google Sheets API'],
    github: '#',
    live: '#',
    featured: false,
  },
  {
    id: 10,
    title: 'AnnSetu — Food Redistribution Platform',
    desc: 'Food redistribution platform connecting restaurants and individuals with surplus food to NGOs and shelters. Features donor/recipient dashboards, Google Maps integration, and impact tracking leaderboard.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Google Maps API'],
    github: 'https://github.com/lakshaymittal45/AnnSetu_',
    live: '#',
    featured: false,
  },
]

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      className={`project-card anime-card ${project.featured ? 'featured' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (index % 3) * 0.15 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="project-header">
        <div className="project-links">
          <a href={project.github} className="proj-link" target="_blank" rel="noreferrer">
            GH
          </a>
          {project.live !== '#' && (
            <a href={project.live} className="proj-link proj-live" target="_blank" rel="noreferrer">
              ↗
            </a>
          )}
        </div>
      </div>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.desc}</p>

      <div className="project-tech">
        {project.tech.map(t => (
          <span key={t} className="tech-chip">{t}</span>
        ))}
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            className="project-hover-glow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <p className="section-subtitle">— Chapter 03 —</p>
      <h2 className="section-title">Battle <span>Record</span></h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>

      <motion.div
        className="project-more"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <a href="https://github.com/lakshaymittal45" target="_blank" rel="noreferrer" className="btn-anime btn-anime-gold">
          View All on GitHub ↗
        </a>
      </motion.div>
    </section>
  )
}
