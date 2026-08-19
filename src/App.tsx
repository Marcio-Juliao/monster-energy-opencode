import { useState } from 'react'
import type { Page } from '@/types'
import { CartProvider } from '@/context/CartContext'
import Nav from '@/components/Nav'
import HomePage from '@/pages/HomePage'
import ShopPage from '@/pages/ShopPage'
import StoryPage from '@/pages/StoryPage'
import ProductPage from '@/pages/ProductPage'
import CartPage from '@/pages/CartPage'
import CheckoutPage from '@/pages/CheckoutPage'

export default function App() {
  const [page, setPage] = useState<Page>('home')
  const [pageKey, setPageKey] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null)

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

  const handleViewProduct = (productId: number) => {
    setSelectedProductId(productId)
    handlePageChange('product')
  }

  return (
    <CartProvider>
      <div className="scanline-overlay noise-bg" style={{ background: 'var(--background)', minHeight: '100vh' }}>
        <Nav page={page} setPage={handlePageChange} />

        <div
          className={`transition-opacity duration-200 ${transitioning ? 'opacity-0' : 'opacity-100'}`}
        >
          {page === 'home' && <HomePage key={pageKey} setPage={handlePageChange} onViewProduct={handleViewProduct} />}
          {page === 'shop' && <ShopPage key={pageKey} onViewProduct={handleViewProduct} />}
          {page === 'story' && <StoryPage key={pageKey} />}
          {page === 'product' && selectedProductId !== null && (
            <ProductPage key={pageKey} productId={selectedProductId} setPage={handlePageChange} onViewProduct={handleViewProduct} />
          )}
          {page === 'cart' && <CartPage key={pageKey} setPage={handlePageChange} />}
          {page === 'checkout' && <CheckoutPage key={pageKey} setPage={handlePageChange} />}
        </div>
      </div>
    </CartProvider>
  )
}
