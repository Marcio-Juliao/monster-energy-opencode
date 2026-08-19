import { useState, useEffect } from 'react'
import type { Page } from '@/types'
import { useCart } from '@/context/CartContext'
import MonsterLogo from './MonsterLogo'

export default function Nav({ page, setPage }: { page: Page; setPage: (p: Page) => void }) {
  const { totalItems } = useCart()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems: { label: string; page: Page }[] = [
    { label: 'HOME', page: 'home' },
    { label: 'DRINKS', page: 'shop' },
    { label: 'STORY', page: 'story' },
  ]

  return (
    <nav
      style={{
        fontFamily: 'var(--font-condensed)',
        borderBottom: scrolled ? '1px solid rgba(57, 255, 20, 0.2)' : '1px solid var(--border)',
        background: scrolled ? 'rgba(8, 8, 8, 0.98)' : 'rgba(8, 8, 8, 0.85)',
        backdropFilter: 'blur(12px)',
        boxShadow: scrolled ? '0 4px 30px rgba(57, 255, 20, 0.05)' : 'none',
        transition: 'all 0.4s ease',
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <button onClick={() => setPage('home')} className="hover:opacity-80 transition-opacity">
          <div className="animate-glow-text">
            <MonsterLogo size={48} />
          </div>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => setPage(item.page)}
              className={`nav-glow-link text-sm font-700 tracking-[0.15em] transition-all duration-300 ${
                page === item.page
                  ? 'text-[var(--primary)] active'
                  : 'text-[var(--muted-foreground)] hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setPage('cart')}
            className="text-xs tracking-widest text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors font-600"
          >
            CART ({totalItems})
          </button>
          <button
            onClick={() => setPage('shop')}
            style={{ fontFamily: 'var(--font-condensed)' }}
            className="px-5 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] text-sm font-700 tracking-widest hover:bg-white transition-all duration-300 animate-glow-pulse"
          >
            UNLEASH IT
          </button>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'opacity-0 scale-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {open && (
        <div
          style={{ borderTop: '1px solid rgba(57, 255, 20, 0.2)' }}
          className="md:hidden bg-[#080808]/98 backdrop-blur-lg px-6 py-4 flex flex-col gap-4"
        >
          {navItems.map((item, i) => (
            <button
              key={item.page}
              onClick={() => { setPage(item.page); setOpen(false) }}
              className={`text-left text-sm font-700 tracking-widest transition-all duration-300 ${
                page === item.page ? 'text-[var(--primary)]' : 'text-white'
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
