import { useEffect, useState } from 'react'

export default function GlitchText({ text, className = '' }: { text: string; className?: string }) {
  const [glitch, setGlitch] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true)
      setTimeout(() => setGlitch(false), 200)
    }, 4000 + Math.random() * 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      {glitch && (
        <>
          <span
            className="absolute inset-0 z-20"
            style={{
              color: '#39FF14',
              clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
              transform: 'translate(-3px, -2px)',
              opacity: 0.8,
            }}
          >
            {text}
          </span>
          <span
            className="absolute inset-0 z-20"
            style={{
              color: '#ff0040',
              clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)',
              transform: 'translate(3px, 2px)',
              opacity: 0.8,
            }}
          >
            {text}
          </span>
          <span
            className="absolute inset-0 z-20"
            style={{
              color: '#fff',
              clipPath: 'polygon(0 40%, 100% 40%, 100% 60%, 0 60%)',
              transform: 'translate(1px, 0)',
              opacity: 0.6,
            }}
          >
            {text}
          </span>
        </>
      )}
    </span>
  )
}
