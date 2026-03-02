import { useEffect, useRef } from 'react'
import './FireParticles.css'

export default function FireParticles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let W, H, raf
    const flames = []
    const FLAME_COUNT = 30
    const sparks = []
    const SPARK_COUNT = 20

    const resize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    class Flame {
      constructor() {
        this.reset(true)
      }
      
      reset(initial = false) {
        this.x = Math.random() * W
        this.y = initial ? Math.random() * H : H + 20
        this.size = 3 + Math.random() * 8
        this.speedY = 1 + Math.random() * 2.5
        this.speedX = (Math.random() - 0.5) * 0.8
        this.life = 0
        this.maxLife = 150 + Math.random() * 100
        this.angle = Math.random() * Math.PI * 2
        this.angleSpeed = (Math.random() - 0.5) * 0.02
      }

      update() {
        this.y -= this.speedY
        this.x += this.speedX + Math.sin(this.life * 0.1) * 0.3
        this.life++
        this.angle += this.angleSpeed
        this.size *= 0.99
        
        if (this.y < -50 || this.life > this.maxLife || this.size < 0.5) {
          this.reset()
        }
      }

      draw() {
        const lifeRatio = this.life / this.maxLife
        const alpha = (1 - lifeRatio) * 0.8
        
        // Flame core
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size)
        
        if (lifeRatio < 0.3) {
          gradient.addColorStop(0, `rgba(255, 255, 200, ${alpha})`)
          gradient.addColorStop(0.3, `rgba(255, 180, 0, ${alpha * 0.8})`)
          gradient.addColorStop(0.6, `rgba(230, 57, 70, ${alpha * 0.6})`)
          gradient.addColorStop(1, `rgba(139, 0, 0, 0)`)
        } else if (lifeRatio < 0.6) {
          gradient.addColorStop(0, `rgba(255, 180, 0, ${alpha * 0.8})`)
          gradient.addColorStop(0.4, `rgba(230, 57, 70, ${alpha * 0.6})`)
          gradient.addColorStop(0.7, `rgba(139, 0, 0, ${alpha * 0.4})`)
          gradient.addColorStop(1, `rgba(50, 0, 0, 0)`)
        } else {
          gradient.addColorStop(0, `rgba(230, 57, 70, ${alpha * 0.5})`)
          gradient.addColorStop(0.5, `rgba(139, 0, 0, ${alpha * 0.3})`)
          gradient.addColorStop(1, `rgba(50, 0, 0, 0)`)
        }
        
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.angle)
        ctx.beginPath()
        ctx.arc(0, 0, this.size, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
        ctx.restore()
      }
    }

    class Spark {
      constructor() {
        this.reset(true)
      }

      reset(initial = false) {
        this.x = Math.random() * W
        this.y = initial ? Math.random() * H : H + 10
        this.size = 1 + Math.random() * 2
        this.speedY = 2 + Math.random() * 4
        this.speedX = (Math.random() - 0.5) * 1.5
        this.opacity = 0.6 + Math.random() * 0.4
        this.life = 0
        this.maxLife = 60 + Math.random() * 40
      }

      update() {
        this.y -= this.speedY
        this.x += this.speedX
        this.speedY *= 0.99
        this.life++
        
        if (this.y < -20 || this.life > this.maxLife) {
          this.reset()
        }
      }

      draw() {
        const lifeRatio = this.life / this.maxLife
        const alpha = (1 - lifeRatio) * this.opacity
        
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 215, 0, ${alpha})`
        ctx.shadowBlur = 5
        ctx.shadowColor = 'rgba(255, 215, 0, 0.8)'
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    // Initialize particles
    for (let i = 0; i < FLAME_COUNT; i++) {
      flames.push(new Flame())
    }
    for (let i = 0; i < SPARK_COUNT; i++) {
      sparks.push(new Spark())
    }

    const animate = () => {
      ctx.clearRect(0, 0, W, H)
      
      flames.forEach(f => {
        f.update()
        f.draw()
      })
      
      sparks.forEach(s => {
        s.update()
        s.draw()
      })
      
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
      className="fire-particles-canvas"
    />
  )
}
