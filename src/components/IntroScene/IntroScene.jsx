import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './IntroScene.css'

/* ── Anime Warrior SVG Character ─────────────────────────────────── */
function WarriorCharacter({ phase }) {
  return (
    <motion.div
      className="warrior-wrap"
      initial={{ opacity: 0, y: 80, scale: 0.7 }}
      animate={phase === 'warrior' || phase === 'title' || phase === 'enter'
        ? { opacity: 1, y: 0, scale: 1 }
        : { opacity: 0, y: 80, scale: 0.7 }
      }
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <svg viewBox="0 0 280 520" className="warrior-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="hairG" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0a0005"/>
            <stop offset="100%" stopColor="#1a0015"/>
          </linearGradient>
          <linearGradient id="cloakG" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a0010"/>
            <stop offset="50%" stopColor="#2d0020"/>
            <stop offset="100%" stopColor="#0a0008"/>
          </linearGradient>
          <linearGradient id="swordG" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff"/>
            <stop offset="40%" stopColor="#d0e8ff"/>
            <stop offset="100%" stopColor="#7ab0ff"/>
          </linearGradient>
          <linearGradient id="markG" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e63946"/>
            <stop offset="100%" stopColor="#ffd700"/>
          </linearGradient>
          <filter id="glow-red">
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="glow-sword">
            <feGaussianBlur stdDeviation="4" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="glow-mark">
            <feGaussianBlur stdDeviation="5" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* === LEGS === */}
        <rect x="108" y="380" width="28" height="110" rx="6" fill="#1a0015"/>
        <rect x="144" y="380" width="28" height="110" rx="6" fill="#120010"/>
        {/* leg detail lines */}
        <line x1="122" y1="385" x2="122" y2="480" stroke="#e6394620" strokeWidth="1.5"/>
        <line x1="158" y1="385" x2="158" y2="480" stroke="#e6394618" strokeWidth="1.5"/>
        {/* boots */}
        <path d="M106,475 Q100,488 98,500 L140,500 L136,475 Z" fill="#0a0008"/>
        <path d="M142,475 Q148,488 182,500 L178,500 L142,480 Z" fill="#080006"/>
        <path d="M98,498 Q100,505 140,505 L140,498 Z" fill="#e6394630"/>
        <path d="M142,498 Q148,505 182,505 L182,498 Z" fill="#e6394625"/>

        {/* === BODY / TORSO === */}
        {/* Main cloak body */}
        <path d="M80,185 L60,380 Q90,395 140,392 Q190,395 220,380 L200,185 Q185,210 140,215 Q95,210 80,185 Z"
          fill="url(#cloakG)" />
        {/* cloak inner panels */}
        <path d="M80,185 L68,340 Q90,355 120,350 L130,215 Q106,212 80,185 Z"
          fill="#2a0018" opacity="0.7"/>
        <path d="M200,185 L212,340 Q190,355 160,350 L150,215 Q174,212 200,185 Z"
          fill="#1e0012" opacity="0.7"/>
        {/* belt / sash */}
        <rect x="105" y="280" width="70" height="22" rx="4" fill="#8b0000"/>
        <rect x="130" y="278" width="20" height="26" rx="3" fill="#b00010"/>
        <rect x="137" y="282" width="6" height="18" rx="1" fill="#ffd700" opacity="0.8"/>
        {/* haori pattern lines on cloak */}
        <path d="M62,220 L72,370" stroke="#e6394615" strokeWidth="2"/>
        <path d="M218,220 L208,370" stroke="#e6394615" strokeWidth="2"/>
        {/* cloak border */}
        <path d="M80,185 L60,380" stroke="#e6394640" strokeWidth="1.5" fill="none"/>
        <path d="M200,185 L220,380" stroke="#e6394435" strokeWidth="1.5" fill="none"/>

        {/* === NECK === */}
        <rect x="127" y="160" width="26" height="32" rx="6" fill="#f0c090"/>

        {/* === HEAD === */}
        {/* head shape */}
        <ellipse cx="140" cy="128" rx="42" ry="46" fill="#f0c090"/>
        {/* jaw lower */}
        <path d="M110,145 Q118,172 140,178 Q162,172 170,145" fill="#eca870"/>

        {/* === HAIR (long dark dramatic) === */}
        {/* main top hair mass */}
        <path d="M98,110 Q92,60 100,40 Q120,15 140,12 Q160,15 180,40 Q188,60 182,110
          Q175,95 165,88 Q152,82 140,83 Q128,82 115,88 Q105,95 98,110 Z"
          fill="url(#hairG)"/>
        {/* long hair strands left */}
        <path d="M100,120 Q85,160 75,220 Q70,270 72,310" stroke="#0a0005" strokeWidth="18" fill="none" strokeLinecap="round"/>
        <path d="M105,128 Q88,170 82,230 Q78,280 80,320" stroke="#140010" strokeWidth="10" fill="none" strokeLinecap="round"/>
        {/* long hair strands right */}
        <path d="M180,120 Q195,160 205,220 Q210,270 208,310" stroke="#0a0005" strokeWidth="18" fill="none" strokeLinecap="round"/>
        <path d="M175,128 Q192,170 198,230 Q202,280 200,320" stroke="#140010" strokeWidth="10" fill="none" strokeLinecap="round"/>
        {/* forehead band */}
        <path d="M98,108 Q105,100 140,97 Q175,100 182,108" stroke="#c40028" strokeWidth="6" fill="none" strokeLinecap="round"/>
        {/* hair wisps */}
        <path d="M104,85 Q100,72 106,65" stroke="#0a0005" strokeWidth="12" fill="none" strokeLinecap="round"/>
        <path d="M115,80 Q110,65 116,55" stroke="#0f000a" strokeWidth="8" fill="none" strokeLinecap="round"/>

        {/* === EYES === */}
        {/* eye whites */}
        <ellipse cx="124" cy="125" rx="13" ry="10" fill="white"/>
        <ellipse cx="156" cy="125" rx="13" ry="10" fill="white"/>
        {/* irises - red demon slayer */}
        <ellipse cx="124" cy="125" rx="9" ry="9" fill="#1a0020"/>
        <ellipse cx="156" cy="125" rx="9" ry="9" fill="#1a0020"/>
        <ellipse cx="124" cy="125" rx="6" ry="7" fill="#cc0025"/>
        <ellipse cx="156" cy="125" rx="6" ry="7" fill="#cc0025"/>
        <ellipse cx="124" cy="125" rx="3" ry="4" fill="#0a0010"/>
        <ellipse cx="156" cy="125" rx="3" ry="4" fill="#0a0010"/>
        {/* eye shine */}
        <circle cx="127" cy="122" r="2.5" fill="white" opacity="0.9"/>
        <circle cx="159" cy="122" r="2.5" fill="white" opacity="0.9"/>
        {/* upper eyelid */}
        <path d="M111,118 Q124,112 137,118" stroke="#0a0005" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <path d="M143,118 Q156,112 169,118" stroke="#0a0005" strokeWidth="3" fill="none" strokeLinecap="round"/>
        {/* lower eyelid */}
        <path d="M112,133 Q124,138 136,133" stroke="#eca870" strokeWidth="1.5" fill="none" opacity="0.6"/>
        <path d="M144,133 Q156,138 168,133" stroke="#eca870" strokeWidth="1.5" fill="none" opacity="0.6"/>

        {/* === DEMON SLAYER MARK (forehead) === */}
        <ellipse cx="140" cy="105" rx="10" ry="7" fill="url(#markG)" opacity="0.85" filter="url(#glow-mark)"/>
        {/* mark detail pattern */}
        <path d="M133,105 Q140,100 147,105 Q140,110 133,105" fill="#ffd700" opacity="0.4"/>

        {/* === SCAR on left cheek === */}
        <path d="M112,134 L118,144" stroke="#cc2030" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>

        {/* === NOSE & MOUTH === */}
        <path d="M136,138 Q140,145 144,138" fill="none" stroke="#d4956a" strokeWidth="2"/>
        <path d="M130,154 Q140,165 150,154" fill="none" stroke="#cc6050" strokeWidth="2.5" strokeLinecap="round"/>

        {/* === EARS === */}
        <ellipse cx="98" cy="128" rx="8" ry="12" fill="#eca870"/>
        <ellipse cx="182" cy="128" rx="8" ry="12" fill="#eca870"/>
        <ellipse cx="98" cy="128" rx="5" ry="8" fill="#d4906a" opacity="0.5"/>

        {/* === LEFT ARM (raised, battle stance) === */}
        <path d="M80,185 Q55,195 38,165 Q30,145 40,130 Q50,115 65,125 Q75,135 78,155 L80,185 Z"
          fill="#1a0015"/>
        {/* arm detail */}
        <path d="M42,130 Q60,128 78,155" stroke="#e6394625" strokeWidth="2" fill="none"/>
        {/* left glove / bracer */}
        <rect x="35" y="125" width="30" height="18" rx="6" fill="#8b0000"/>
        <line x1="38" y1="130" x2="62" y2="130" stroke="#e63946" strokeWidth="1.5" opacity="0.6"/>
        <line x1="38" y1="135" x2="62" y2="135" stroke="#e63946" strokeWidth="1" opacity="0.4"/>
        {/* left hand */}
        <ellipse cx="36" cy="118" rx="11" ry="13" fill="#f0c090"/>
        {/* fingers loosely gripping sword */}
        <path d="M25,112 Q22,108 26,106 Q30,104 32,108" fill="#f0c090"/>
        <path d="M27,122 Q23,118 26,115 Q30,112 33,116" fill="#f0c090"/>
        <path d="M28,130 Q24,128 26,124 Q30,121 33,124" fill="#f0c090"/>

        {/* === RIGHT ARM (extended forward) === */}
        <path d="M200,185 Q225,195 245,175 Q258,155 248,138 Q238,120 222,128 Q210,136 205,160 L200,185 Z"
          fill="#180012"/>
        {/* bracer */}
        <rect x="238" y="130" width="28" height="17" rx="6" fill="#8b0000"/>
        <line x1="241" y1="136" x2="263" y2="136" stroke="#e63946" strokeWidth="1.5" opacity="0.6"/>
        {/* right hand */}
        <ellipse cx="252" cy="125" rx="12" ry="13" fill="#f0c090"/>

        {/* === SWORD (katana, raised diagonal) === */}
        {/* long blade */}
        <path d="M28,94 L200,22" stroke="url(#swordG)" strokeWidth="5" strokeLinecap="round" filter="url(#glow-sword)"/>
        {/* blade edge highlight */}
        <path d="M29,92 L201,20" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
        {/* blade tip */}
        <path d="M200,22 L210,14 L202,20 Z" fill="#d0e8ff"/>
        {/* blood groove on blade */}
        <path d="M50,87 L185,28" stroke="#8ab0dd" strokeWidth="1" opacity="0.4"/>
        {/* guard (tsuba) */}
        <ellipse cx="67" cy="106" rx="14" ry="9" fill="#b8860b" transform="rotate(-28 67 106)"/>
        <ellipse cx="67" cy="106" rx="11" ry="6" fill="#ffd700" transform="rotate(-28 67 106)" opacity="0.6"/>
        {/* handle (tsuka) */}
        <path d="M30,115 L67,100" stroke="#4a0010" strokeWidth="10" strokeLinecap="round"/>
        {/* handle wrap */}
        <path d="M33,113 L65,101" stroke="#8b0000" strokeWidth="3" strokeDasharray="4,3" opacity="0.8"/>
        {/* sword glow effect */}
        <path d="M28,94 L200,22" stroke="rgba(180,220,255,0.25)" strokeWidth="18" strokeLinecap="round"/>

        {/* === CLOAK FLOW / TAILS (wind effect) === */}
        <path d="M62,350 Q40,390 35,440 Q32,470 38,490 L55,488 Q55,465 58,440 Q64,400 80,370 Z"
          fill="#1a0015" opacity="0.9"/>
        <path d="M218,350 Q240,390 245,440 Q248,470 242,490 L225,488 Q225,465 222,440 Q216,400 200,370 Z"
          fill="#130010" opacity="0.9"/>
        {/* cloak edge glow */}
        <path d="M62,350 Q40,390 35,440 Q32,470 38,490"
          stroke="#e6394620" strokeWidth="2" fill="none"/>
        <path d="M218,350 Q240,390 245,440 Q248,470 242,490"
          stroke="#e6394418" strokeWidth="2" fill="none"/>

        {/* === GROUND SHADOW === */}
        <ellipse cx="140" cy="510" rx="80" ry="12" fill="#e63946" opacity="0.08"/>
      </svg>

      {/* Aura glow rings */}
      <div className="warrior-aura" />
      <div className="warrior-aura warrior-aura-2" />
      <div className="warrior-ground-glow" />
    </motion.div>
  )
}

export default function IntroScene({ onComplete }) {
  const canvasRef = useRef(null)
  const [phase, setPhase] = useState('opening') // opening -> slash -> warrior -> title -> enter

  // ── Canvas background: aura + city ───────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let W = (canvas.width = window.innerWidth)
    let H = (canvas.height = window.innerHeight)
    let raf

    const resize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resize)

    // Particles flying from centre
    const sparks = Array.from({ length: 80 }, () => ({
      angle: Math.random() * Math.PI * 2,
      len: 40 + Math.random() * 180,
      speed: 6 + Math.random() * 18,
      color: Math.random() > 0.55 ? '#e63946' : Math.random() > 0.5 ? '#ffd700' : '#ffffff',
      alpha: 0.15 + Math.random() * 0.55,
      dist: Math.random() * 400,
    }))

    const buildings = Array.from({ length: 36 }, (_, i) => ({
      x: (i / 36) * W * 2 - W * 0.3,
      w: 32 + Math.random() * 72,
      h: 70 + Math.random() * 280,
      speed: 0.6 + Math.random() * 1.8,
      lit: Array.from({ length: 18 }, () => ({
        x: Math.random(), y: Math.random(),
        on: Math.random() > 0.45,
        flicker: Math.random() > 0.82,
      })),
    }))

    let tick = 0

    const draw = () => {
      tick++
      ctx.clearRect(0, 0, W, H)
      const cx = W / 2, cy = H / 2

      // Sky
      const sky = ctx.createLinearGradient(0, 0, 0, H)
      sky.addColorStop(0, '#06060f')
      sky.addColorStop(0.55, '#0d0020')
      sky.addColorStop(1, '#1a000e')
      ctx.fillStyle = sky
      ctx.fillRect(0, 0, W, H)

      // Moon glow
      const moonG = ctx.createRadialGradient(W * 0.78, H * 0.14, 10, W * 0.78, H * 0.14, 80)
      moonG.addColorStop(0, 'rgba(255,240,180,0.95)')
      moonG.addColorStop(0.5, 'rgba(255,200,90,0.4)')
      moonG.addColorStop(1, 'rgba(255,130,30,0)')
      ctx.fillStyle = moonG
      ctx.beginPath()
      ctx.arc(W * 0.78, H * 0.14, 80, 0, Math.PI * 2)
      ctx.fill()

      // Energy aura behind warrior center
      const aura = ctx.createRadialGradient(cx, H * 0.55, 20, cx, H * 0.55, H * 0.6)
      aura.addColorStop(0, 'rgba(180,10,30,0.22)')
      aura.addColorStop(0.4, 'rgba(120,0,20,0.08)')
      aura.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = aura
      ctx.fillRect(0, 0, W, H)

      // Speed lines from center
      sparks.forEach(l => {
        l.dist += l.speed
        if (l.dist > Math.max(W, H)) l.dist = 0
        const x1 = cx + Math.cos(l.angle) * l.dist
        const y1 = cy + Math.sin(l.angle) * l.dist
        const x2 = cx + Math.cos(l.angle) * (l.dist + l.len)
        const y2 = cy + Math.sin(l.angle) * (l.dist + l.len)
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.strokeStyle = l.color
        ctx.globalAlpha = l.alpha * Math.min(1, l.dist / 200)
        ctx.lineWidth = 0.7
        ctx.stroke()
        ctx.globalAlpha = 1
      })

      // City buildings
      buildings.forEach(b => {
        b.x -= b.speed
        if (b.x + b.w < -W * 0.1) b.x = W * 1.4 + Math.random() * W * 0.5
        const by = H - b.h
        ctx.fillStyle = 'rgba(4,2,12,0.97)'
        ctx.fillRect(b.x, by, b.w, b.h)
        ctx.strokeStyle = 'rgba(200,50,70,0.12)'
        ctx.lineWidth = 1
        ctx.strokeRect(b.x, by, b.w, b.h)
        b.lit.forEach(win => {
          if (tick % 55 === 0 && win.flicker) win.on = !win.on
          if (!win.on) return
          ctx.fillStyle = Math.random() > 0.95 ? '#e63946' : '#ffd70075'
          ctx.fillRect(b.x + win.x * (b.w - 7) + 3, by + win.y * (b.h - 7) + 3, 4, 5)
        })
      })

      // Ground red glow
      const gg = ctx.createLinearGradient(0, H - 90, 0, H)
      gg.addColorStop(0, 'rgba(200,20,40,0)')
      gg.addColorStop(1, 'rgba(200,20,40,0.18)')
      ctx.fillStyle = gg
      ctx.fillRect(0, H - 90, W, 90)

      // Vignette
      const vig = ctx.createRadialGradient(cx, cy, H * 0.08, cx, cy, H)
      vig.addColorStop(0, 'transparent')
      vig.addColorStop(1, 'rgba(0,0,0,0.8)')
      ctx.fillStyle = vig
      ctx.fillRect(0, 0, W, H)

      raf = requestAnimationFrame(draw)
    }

    draw()

    // Phase cascade: opening -> slash -> warrior -> title -> enter
    const t1 = setTimeout(() => setPhase('slash'),   1000)
    const t2 = setTimeout(() => setPhase('warrior'), 1800)
    const t3 = setTimeout(() => setPhase('title'),   2800)
    const t4 = setTimeout(() => setPhase('enter'),   5000)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4)
    }
  }, [])

  return (
    <div className="intro-scene">
      <canvas ref={canvasRef} className="intro-canvas" />

      {/* Scanline overlay */}
      <div className="intro-scanlines" />

      {/* ── SLASH EFFECT ─────────────────────────── */}
      <AnimatePresence>
        {phase === 'slash' && (
          <motion.div className="slash-container"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <motion.div className="slash-line slash-line-1"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            />
            <motion.div className="slash-line slash-line-2"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.25, ease: 'easeOut', delay: 0.05 }}
            />
            <motion.div className="slash-flash"
              initial={{ opacity: 0.9 }} animate={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── WARRIOR + TITLE ──────────────────────── */}
      <div className="intro-stage">
        {/* Warrior character */}
        <WarriorCharacter phase={phase} />

        {/* Title text reveals after warrior */}
        <AnimatePresence>
          {(phase === 'title' || phase === 'enter') && (
            <motion.div
              className="intro-title-block"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.p
                className="intro-subtitle-top"
                initial={{ opacity: 0, letterSpacing: '0.6em' }}
                animate={{ opacity: 1, letterSpacing: '0.25em' }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                — The Code Warrior —
              </motion.p>

              <motion.h1
                className="intro-name glitch"
                data-text="LAKSHAY MITTAL"
                initial={{ opacity: 0, scaleX: 0.5 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                MITTAPALLI
              </motion.h1>

              <motion.p
                className="intro-role"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Software Developer &nbsp;·&nbsp; AIML &nbsp;·&nbsp; Full Stack
              </motion.p>

              <motion.div
                className="intro-bar"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                style={{ originX: 0 }}
                transition={{ delay: 1.0, duration: 0.9, ease: 'easeOut' }}
              />

              {/* Enter button inside title block */}
              <AnimatePresence>
                {phase === 'enter' && (
                  <motion.div
                    className="intro-enter-wrap"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.1 }}
                  >
                    <button className="intro-enter-btn" onClick={onComplete}>
                      <span className="btn-inner">
                        <span className="btn-icon">⚔</span>
                        ENTER THE REALM
                        <span className="btn-icon">⚔</span>
                      </span>
                      <span className="btn-glow" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Skip button */}
      <motion.button
        className="intro-skip"
        onClick={onComplete}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        whileHover={{ scale: 1.05 }}
      >
        SKIP &nbsp;›
      </motion.button>

      {/* Red flash overlay */}
      <div className={`intro-flash ${phase === 'slash' ? 'active' : ''}`} />
    </div>
  )
}
