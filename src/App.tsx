import { useState } from 'react'
import type { Page } from '@/types'
import Nav from '@/components/Nav'
import HomePage from '@/pages/HomePage'
import ShopPage from '@/pages/ShopPage'
import StoryPage from '@/pages/StoryPage'

export default function App() {
  const [page, setPage] = useState<Page>('home')
  const [pageKey, setPageKey] = useState(0)
  const [transitioning, setTransitioning] = useState(false)

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

  return (
    <div className="scanline-overlay noise-bg" style={{ background: 'var(--background)', minHeight: '100vh' }}>
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
