import { useState, useEffect, useRef } from 'react'
import type { Page } from '@/types'
import Nav from '@/components/Nav'
import HomePage from '@/pages/HomePage'
import ShopPage from '@/pages/ShopPage'
import StoryPage from '@/pages/StoryPage'

export default function App() {
  const [page, setPage] = useState<Page>('home')
  const [pageKey, setPageKey] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)

  const handlePageChange = (p: Page) => {
    if (p === page) return
    setTransitioning(true)
    setTimeout(() => {
      setPage(p)
      setPageKey((k) => k + 1)
      setTransitioning(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 200)
  }

  useEffect(() => {
    const cursor = cursorRef.current
    const dot = cursorDotRef.current
    if (!cursor || !dot) return

    let hovering = false

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
      dot.style.left = `${e.clientX}px`
      dot.style.top = `${e.clientY}px`
    }

    const addHover = () => {
      hovering = true
      cursor.classList.add('hovering')
    }

    const removeHover = () => {
      hovering = false
      cursor.classList.remove('hovering')
    }

    document.addEventListener('mousemove', moveCursor)

    const interactiveElements = document.querySelectorAll('a, button, [role="button"], .cursor-pointer')
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', removeHover)
    })

    const observer = new MutationObserver(() => {
      const newElements = document.querySelectorAll('a, button, [role="button"], .cursor-pointer')
      newElements.forEach((el) => {
        el.removeEventListener('mouseenter', addHover)
        el.removeEventListener('mouseleave', removeHover)
        el.addEventListener('mouseenter', addHover)
        el.addEventListener('mouseleave', removeHover)
      })
    })

    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', addHover)
        el.removeEventListener('mouseleave', removeHover)
      })
      observer.disconnect()
    }
  }, [page])

  return (
    <div className="scanline-overlay noise-bg" style={{ background: 'var(--background)', minHeight: '100vh' }}>
      <div ref={cursorRef} className="cursor-glow" />
      <div
        ref={cursorDotRef}
        className="fixed w-1 h-1 rounded-full bg-[var(--primary)] pointer-events-none z-[9999]"
        style={{ transform: 'translate(-50%, -50%)', boxShadow: '0 0 6px rgba(57, 255, 20, 0.8)' }}
      />

      <Nav page={page} setPage={handlePageChange} />

      <div
        className={`transition-opacity duration-200 ${transitioning ? 'opacity-0' : 'opacity-100'}`}
      >
        {page === 'home' && <HomePage key={pageKey} setPage={handlePageChange} />}
        {page === 'shop' && <ShopPage key={pageKey} />}
        {page === 'story' && <StoryPage key={pageKey} />}
      </div>
    </div>
  )
}
