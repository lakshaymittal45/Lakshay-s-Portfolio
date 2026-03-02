import { useEffect, useRef } from 'react'

export default function ParticleField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let W, H, raf
    const particles = []
    const PARTICLE_COUNT = 80

    const resize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    class Particle {
      constructor() { this.reset(true) }
      reset(initial = false) {
        this.x = Math.random() * W
        this.y = initial ? Math.random() * H : H + 10
        this.size = 0.8 + Math.random() * 2.5
        this.speedY = 0.2 + Math.random() * 0.8
        this.speedX = (Math.random() - 0.5) * 0.4
        this.opacity = 0.1 + Math.random() * 0.5
        this.color = Math.random() > 0.6
          ? `rgba(230,57,70,${this.opacity})`
          : Math.random() > 0.5
          ? `rgba(255,215,0,${this.opacity})`
          : `rgba(200,180,255,${this.opacity})`
        this.life = Math.random()
      }
      update() {
        this.y -= this.speedY
        this.x += this.speedX
        this.life += 0.003
        if (this.y < -10) this.reset()
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle())
    }

    const animate = () => {
      ctx.clearRect(0, 0, W, H)
      particles.forEach(p => { p.update(); p.draw() })
      raf = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.7,
      }}
    />
  )
}
