import { Suspense, useEffect, useMemo, useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import * as THREE from "three"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import resumePDF from "../../assets/Resume_Lakshay_Mittal.pdf"
import "./Hero.css"

export default function Hero() {
  const bgRef = useRef(null)
  const modelPath = useMemo(
    () => `${import.meta.env.BASE_URL}models/model.glb`,
    []
  )
  const [canRenderCanvas, setCanRenderCanvas] = useState(false)

  useEffect(() => {
    setCanRenderCanvas(true)

    const el = bgRef.current
    if (!el) return

    const onMove = (e) => {
      const { innerWidth: W, innerHeight: H } = window
      const x = (e.clientX / W - 0.5) * 20
      const y = (e.clientY / H - 0.5) * 20
      el.style.transform = `translate(${x}px, ${y}px)`
    }

    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [])

  return (
    <section id="hero" className="hero-section">
      <div ref={bgRef} className="hero-bg-kanji" aria-hidden>
        侍道
      </div>

      {/* 3D MODEL */}
      <div className="hero-model" aria-hidden>
        {canRenderCanvas && (
          <Canvas
            camera={{ position: [0, 2.2, 5.4], fov: 32 }}
            gl={{ alpha: true, antialias: true }}
          >
            {/* Cinematic lighting */}
            <ambientLight intensity={0.6} />
            <directionalLight
              position={[3, 6, 3]}
              intensity={1.5}
              color="#ffe0b2"
            />
            <pointLight position={[-3, 2, 4]} intensity={1} color="#ff4d4d" />

            <Suspense fallback={null}>
              <SamuraiModel modelPath={modelPath} />
            </Suspense>
          </Canvas>
        )}
      </div>

      {/* CONTENT */}
      <div className="hero-content">
        <motion.p
          className="hero-greeting"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          ⚔ &nbsp; Hello, World — I am
        </motion.p>

        <motion.h1
          className="hero-name glitch"
          data-text="LAKSHAY MITTAL"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          LAKSHAY MITTAL
        </motion.h1>

        <div className="hero-type">
          <span className="hero-type-prefix">&gt;&nbsp;</span>
          <TypeAnimation
            sequence={[
              "Software Developer",
              1800,
              "Full Stack Developer",
              1800,
              "Aspiring AIML Engineer",
              1800,
              "Code Warrior",
              1800,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="hero-type-text"
          />
          <span className="hero-cursor-blink">_</span>
        </div>

        <motion.p
          className="hero-bio"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          Forged in Electrical Engineering and sharpened by Computer Science, I
          approach technology with discipline, precision, and purpose. I build
          intelligent systems and scalable software with a warrior’s mindset —
          focused, strategic, and always evolving.
        </motion.p>

        <div className="hero-btns">
          <a href="#projects" className="btn-anime btn-anime-gold">
            View My Work
          </a>
          <a href="#contact" className="btn-anime">
            Contact Me
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/lakshaymittal45"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            GitHub
          </a>
          <span className="social-sep">·</span>
          <a
            href="https://linkedin.com/in/lakshaymittal45"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            LinkedIn
          </a>
          <span className="social-sep">·</span>
          <a
            href={resumePDF}
            download="Lakshay_Mittal_Resume.pdf"
            className="social-link"
          >
            Resume ↓
          </a>
        </div>
      </div>
    </section>
  );
}

function SamuraiModel({ modelPath }) {
  const group = useRef()
  const { scene } = useGLTF(modelPath)

  useEffect(() => {
    if (!scene) return

    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true
        child.frustumCulled = false
      }
    })

    // Center model
    const box = new THREE.Box3().setFromObject(scene)
    const center = new THREE.Vector3()
    box.getCenter(center)
    scene.position.sub(center)

    scene.scale.set(1.4, 1.4, 1.4)
    scene.rotation.y = 0
  }, [scene])

  useFrame((state) => {
    if (!group.current) return

    const { mouse } = state

    // Smooth interpolation
    const targetY = mouse.x * 0.8
    const targetX = -mouse.y * 0.4

    group.current.rotation.y += (targetY - group.current.rotation.y) * 0.1
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.1

    // subtle floating idle
    group.current.position.y =
      Math.sin(state.clock.elapsedTime * 1.2) * 0.05
  })

  return <primitive ref={group} object={scene} />
}
useGLTF.preload(`${import.meta.env.BASE_URL}models/model.glb`)