import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Experience.css'

const timeline = [
  {
    year: '2023 – Present',
    type: 'edu',
    title: 'B.Tech – Electrical Engineering (Minor in Computer Science)',
    place: 'Punjab Engineering College (PEC), Chandigarh',
    detail: 'CGPA: 8.65/10. Specialization in AI & software engineering. Strong foundation in electrical systems combined with computer science expertise.',
    tags: ['AIML', 'Full Stack', 'Data Structures', 'Software Engineering'],
  },
  {
    year: 'Jan 2026 – Present',
    type: 'work',
    title: 'Software Developer & AI Research Intern',
    place: 'IIT Ropar & Homi Bhabha Cancer Hospital (Dr. Tata Memorial)',
    detail: 'Architected specialized cohort data platform for large-scale biomedical studies. Built end-to-end Medical Voice AI pipeline (ASR, NLP-based clinical note extraction). Delivered production-grade clinical software with secure data handling & HIPAA compliance.',
    tags: ['Python', 'FastAPI', 'ML', 'NLP', 'Healthcare AI'],
  },
  {
    year: 'Sep 2025 – Nov 2025',
    type: 'leadership',
    title: 'Joint Head MegaShows — PECFEST',
    place: 'Punjab Engineering College (PEC)',
    detail: 'Co-led the organization of mega shows, managing planning, team coordination, and on-ground execution for flagship events attracting thousands of attendees.',
    tags: ['Leadership', 'Event Management', 'Team Coordination'],
  },
  {
    year: '2025',
    type: 'leadership',
    title: 'Branch Incharge Joint Head — Orientation 2025',
    place: 'Punjab Engineering College (PEC)',
    detail: 'Led week-long orientation for 120+ Electrical Engineering freshers. Managed planning, coordination, and execution with faculty and core teams.',
    tags: ['Leadership', 'Mentorship', 'Planning'],
  },
  {
    year: 'Jun 2025',
    type: 'achievement',
    title: 'Certificate Of Recognition — Cyberthon.ai Finalist',
    place: 'Chandigarh Police',
    detail: 'Received official recognition certificate for finalist position at Cyberthon.Ai 2025. Competed among top teams in cybersecurity-focused AI hackathon.',
    tags: ['AI', 'Cybersecurity', 'Recognition'],
  },
  {
    year: 'Apr 2025',
    type: 'achievement',
    title: 'Certificate Of Achievement — Cultural Contributions',
    place: 'Punjab Engineering College (PEC)',
    detail: 'Awarded certificate for cultural contributions and achievements during academic session 2024-25. Recognition for active participation in cultural activities.',
    tags: ['Cultural', 'Achievement', 'Recognition'],
  },
  {
    year: 'Sep 2024 – Dec 2024',
    type: 'leadership',
    title: 'Alumni and Industrial Relations (Subhead) — PECFEST',
    place: 'Punjab Engineering College (PEC)',
    detail: 'Managed alumni engagement and industrial partnerships for PECFEST. Coordinated sponsorships, corporate relations, and networking events.',
    tags: ['Relations', 'Networking', 'Management'],
  },
  {
    year: 'Jun 2024',
    type: 'achievement',
    title: 'Certificate Of Achievement — Cultural Excellence',
    place: 'Punjab Engineering College (PEC)',
    detail: 'Recognition for cultural contribution and achievement during academic year 2023-24. Honored for outstanding participation in cultural initiatives.',
    tags: ['Cultural', 'Recognition', 'Excellence'],
  },
  {
    year: 'Aug 2023 – Dec 2024',
    type: 'leadership',
    title: 'Assistant Class Representative',
    place: 'Punjab Engineering College (PEC)',
    detail: 'Served as liaison between students and faculty for Electrical Engineering batch. Coordinated academic activities, class communications, and student concerns.',
    tags: ['Representation', 'Communication', 'Coordination'],
  },
  {
    year: '2023 – Present',
    type: 'leadership',
    title: 'Executive Body Member — Dramatics Club',
    place: 'Punjab Engineering College (PEC)',
    detail: 'Mentored 150+ students in Western dance and coordinated 5+ flagship events. Led marketing and media campaigns, increasing engagement and visibility.',
    tags: ['Mentorship', 'Marketing', 'Event Coordination'],
  },
  {
    year: 'Oct 2023 – Nov 2023',
    type: 'leadership',
    title: 'Creative Volunteer — PECFEST',
    place: 'Punjab Engineering College (PEC)',
    detail: 'Part of the Creative Team as a volunteer for PECFEST 2023. Worked on campus decoration, creative design, and visual ambiance for the fest.',
    tags: ['Creativity', 'Volunteering', 'Design'],
  },
  {
    year: '2022 – 2023',
    type: 'edu',
    title: 'Class XII — GMSSS-16D',
    place: 'Chandigarh',
    detail: 'Secured 91.30% in senior secondary education. Built strong foundation in Mathematics and Sciences.',
    tags: ['Mathematics', 'Science', 'Foundation'],
  },
  {
    year: '2020 – 2021',
    type: 'edu',
    title: 'Class X — The Scholars\' Home',
    place: 'Poanta Sahib, India',
    detail: 'Achieved 93.29% in matriculation. First steps into technology and problem-solving.',
    tags: ['Foundation', 'Science', 'Excellence'],
  },
  {
    year: 'Feb 2020',
    type: 'achievement',
    title: 'Special Achievement Award — Academics',
    place: 'The Scholars\' Home',
    detail: 'Special Achievement Award for outstanding academic performance in 9th Standard. Recognition for consistent excellence in studies.',
    tags: ['Academic', 'Excellence', 'Award'],
  },
  {
    year: 'Dec 2019',
    type: 'achievement',
    title: 'Student Representative — ABVP',
    place: 'Akhil Bharatiya Vidyarthi Parishad',
    detail: 'Represented The Scholars\' Home at the District Level Speech competition on Swami Vivekanand by ABVP at Dr Y.S Parmar Medical College, Nahan.',
    tags: ['Public Speaking', 'Representation', 'Competition'],
  },
  {
    year: 'Nov 2019',
    type: 'leadership',
    title: 'Quiz Setter',
    place: 'The Scholars\' Home',
    detail: 'Elected as Quiz setter to conduct inter-house quiz competition. Prepared questions and managed scoring for house representatives.',
    tags: ['Quiz', 'Event Management', 'Leadership'],
  },
  {
    year: 'Apr 2018 – Mar 2019',
    type: 'leadership',
    title: 'Assistant Class Prefect',
    place: 'The Scholars\' Home',
    detail: 'Managed class decorum and bridged communication between students and school authorities. Worked alongside Prefect to ensure smooth classroom operations.',
    tags: ['Leadership', 'Communication', 'Management'],
  },
  {
    year: 'Mar 2017',
    type: 'achievement',
    title: 'Achievement Award — Academic Excellence',
    place: 'The Scholars\' Home',
    detail: 'Achievement Award for exemplary academic performance in 6th standard. Early recognition for dedication to studies and consistent results.',
    tags: ['Academic', 'Excellence', 'Award'],
  },
]

const typeColors = {
  edu: '#7c3aed',
  work: '#e63946',
  achievement: '#ffd700',
  leadership: '#06d6a0',
}
const typeLabels = {
  edu: 'EDUCATION',
  work: 'EXPERIENCE',
  achievement: '⭐ ACHIEVEMENT',
  leadership: '👑 LEADERSHIP',
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="section experience-section" ref={ref}>
      {/* Animated background elements */}
      <motion.div
        className="exp-bg-circle"
        style={{ left: '8%', top: '20%' }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="exp-bg-circle"
        style={{ right: '10%', bottom: '30%' }}
        animate={{
          rotate: [360, 0],
          scale: [1.1, 1, 1.1],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{ duration: 18, repeat: Infinity }}
      />

      <p className="section-subtitle">— Chapter 04 —</p>
      <h2 className="section-title">My <span>Journey</span></h2>

      <div className="timeline-container">
        <div className="timeline-line" />

        {timeline.map((item, i) => (
          <motion.div
            key={i}
            className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
            initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.15 }}
          >
            {/* Connector dot */}
            <div
              className="timeline-dot"
              style={{ boxShadow: `0 0 0 3px ${typeColors[item.type]}55, 0 0 15px ${typeColors[item.type]}88` }}
            >
              <div
                className="timeline-dot-inner"
                style={{ background: typeColors[item.type] }}
              />
            </div>

            <div className="timeline-card anime-card">
              <div className="tl-top">
                <span
                  className="tl-type"
                  style={{ color: typeColors[item.type], borderColor: `${typeColors[item.type]}55` }}
                >
                  {typeLabels[item.type]}
                </span>
                <span className="tl-year">{item.year}</span>
              </div>

              <h3 className="tl-title">{item.title}</h3>
              <p className="tl-place">{item.place}</p>
              <p className="tl-detail">{item.detail}</p>

              <div className="tl-tags">
                {item.tags.map(t => (
                  <span key={t} className="tl-tag">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
