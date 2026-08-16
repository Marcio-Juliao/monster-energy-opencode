import { useState } from 'react'
import type { Page } from '@/types'
import MonsterLogo from './MonsterLogo'

export default function Nav({ page, setPage }: { page: Page; setPage: (p: Page) => void }) {
  const [open, setOpen] = useState(false)

  const navItems: { label: string; page: Page }[] = [
    { label: 'HOME', page: 'home' },
    { label: 'DRINKS', page: 'shop' },
    { label: 'STORY', page: 'story' },
  ]

  return (
    <nav
      style={{ fontFamily: 'var(--font-condensed)', borderBottom: '1px solid var(--border)' }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/95 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <button onClick={() => setPage('home')} className="hover:opacity-80 transition-opacity">
          <MonsterLogo size={48} />
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => setPage(item.page)}
              className={`text-sm font-700 tracking-[0.15em] transition-colors ${
                page === item.page
                  ? 'text-[var(--primary)]'
                  : 'text-[var(--muted-foreground)] hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-xs tracking-widest text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors font-600">
            CART (0)
          </button>
          <button
            onClick={() => setPage('shop')}
            style={{ fontFamily: 'var(--font-condensed)' }}
            className="px-5 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] text-sm font-700 tracking-widest hover:bg-white transition-colors"
          >
            GET YOUR FIX
          </button>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {open && (
        <div style={{ borderTop: '1px solid var(--border)' }} className="md:hidden bg-[#080808] px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => { setPage(item.page); setOpen(false) }}
              className={`text-left text-sm font-700 tracking-widest ${page === item.page ? 'text-[var(--primary)]' : 'text-white'}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
