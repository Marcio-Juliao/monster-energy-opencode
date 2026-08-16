import { useState } from 'react'
import type { Page } from '@/types'
import Nav from '@/components/Nav'
import HomePage from '@/pages/HomePage'
import ShopPage from '@/pages/ShopPage'
import StoryPage from '@/pages/StoryPage'

export default function App() {
  const [page, setPage] = useState<Page>('home')

  return (
    <div style={{ background: 'var(--background)', minHeight: '100vh' }}>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
        .scale-108 { transform: scale(1.08); }
      `}</style>
      <Nav page={page} setPage={setPage} />
      {page === 'home' && <HomePage setPage={setPage} />}
      {page === 'shop' && <ShopPage />}
      {page === 'story' && <StoryPage />}
    </div>
  )
}
