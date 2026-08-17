import { useEffect, useRef } from 'react'

export default function GlitchText({ text, className = '' }: { text: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let timeout: ReturnType<typeof setTimeout>

    const glitch = () => {
      el.classList.add('glitching')
      setTimeout(() => el.classList.remove('glitching'), 300)
      timeout = setTimeout(glitch, 3000 + Math.random() * 4000)
    }

    timeout = setTimeout(glitch, 1000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <span ref={ref} className={`glitch-text relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      <span className="glitch-layer glitch-layer-1" aria-hidden="true">{text}</span>
      <span className="glitch-layer glitch-layer-2" aria-hidden="true">{text}</span>
    </span>
  )
}
