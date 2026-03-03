import { useEffect, useRef, useState } from "react"
import "./EntryPage.css"
import introVideo from "../../assets/Intro.mp4"

export default function EntryPage({ onEnter }) {
  const [uiVisible, setUiVisible] = useState(false)
  const [showPlay, setShowPlay] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const playPromise = video.play()
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        setShowPlay(true)
      })
    }

    const timer = setTimeout(() => setUiVisible(true), 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="entry-page">
      <video
        ref={videoRef}
        className="ep-video-bg"
        src={introVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      {showPlay && (
        <button
          className="ep-play-cta"
          onClick={() => {
            const vid = videoRef.current
            if (!vid) return
            vid.play().then(() => setShowPlay(false)).catch(() => {})
          }}
        >
          Tap to Play
        </button>
      )}

      <div className={`ep-ui ${uiVisible ? "ep-ui-visible" : ""}`}>
        <div className="ep-label">Portfolio · 2026</div>

        <h1 className="ep-name">LAKSHAY MITTAL</h1>

        <p className="ep-role">Aspiring Software Developer</p>

        <div className="ep-divider" />

        <button
          className="ep-enter-btn"
          onClick={() => {
            window.scrollTo(0, 0)
            onEnter()
          }}
        >
          Enter the Realm →
        </button>
      </div>

      <div className="ep-video-overlay" />
    </div>
  )
}
