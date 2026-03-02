import { motion } from 'framer-motion'
import './FloatingElements.css'

export default function FloatingElements() {
  const symbols = ['⚔', '🔥', '⚡', '💀', '👺', '🗡', '🐉', '⛩']
  const kanji = ['侍', '道', '心', '力', '剣', '炎', '龍', '魂']
  
  const elements = [
    ...symbols.slice(0, 4).map((s, i) => ({ type: 'symbol', char: s, id: `s${i}` })),
    ...kanji.slice(0, 6).map((k, i) => ({ type: 'kanji', char: k, id: `k${i}` }))
  ]

  const getRandomDuration = () => 15 + Math.random() * 15
  const getRandomDelay = () => Math.random() * 5
  const getRandomX = (index) => {
    const positions = [5, 15, 25, 75, 85, 95]
    return positions[index % positions.length] + (Math.random() - 0.5) * 10
  }

  return (
    <div className="floating-elements-container">
      {elements.map((elem, index) => (
        <motion.div
          key={elem.id}
          className={`floating-element ${elem.type}`}
          style={{
            left: `${getRandomX(index)}%`,
          }}
          initial={{ y: '120vh', opacity: 0, rotate: 0 }}
          animate={{
            y: '-20vh',
            opacity: [0, 0.4, 0.6, 0.4, 0],
            rotate: elem.type === 'symbol' ? [0, 360, 720] : [0, -15, 15, 0],
            scale: [0.8, 1.2, 1, 1.2, 0.8],
          }}
          transition={{
            duration: getRandomDuration(),
            delay: getRandomDelay(),
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {elem.char}
        </motion.div>
      ))}
      
      {/* Rising flame lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`flame-${i}`}
          className="flame-line"
          style={{
            left: `${10 + i * 20}%`,
          }}
          initial={{ y: '100vh', opacity: 0 }}
          animate={{
            y: '-100vh',
            opacity: [0, 0.6, 0.8, 0.6, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            delay: i * 1.5,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  )
}
