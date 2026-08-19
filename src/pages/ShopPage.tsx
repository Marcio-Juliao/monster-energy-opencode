import { useState } from 'react'
import type { SortOption } from '@/types'
import { PRODUCTS, CATEGORIES } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import { useParallax } from '@/hooks/useParallax'

export default function ShopPage({ onViewProduct }: { onViewProduct: (id: number) => void }) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [sortBy, setSortBy] = useState<SortOption>('default')
  const [filterKey, setFilterKey] = useState(0)
  const parallaxOffset = useParallax(0.2)

  let filtered = activeCategory === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === activeCategory)
  if (sortBy === 'price-asc') filtered = [...filtered].sort((a, b) => a.price - b.price)
  if (sortBy === 'price-desc') filtered = [...filtered].sort((a, b) => b.price - a.price)
  if (sortBy === 'caffeine') filtered = [...filtered].sort((a, b) => b.caffeine - a.caffeine)

  const categoryColors: Record<string, string> = {
    all: 'var(--primary)',
    original: '#39FF14',
    ultra: '#E8E8E8',
    zero: '#888888',
    juice: '#E91E63',
    rehab: '#FFEB3B',
    assault: '#4A5D23',
    reserve: '#FFAB40',
  }

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat)
    setFilterKey((k) => k + 1)
  }

  return (
    <div className="pt-14 min-h-screen">
      <div
        className="relative overflow-hidden py-20 px-6"
        style={{ background: 'var(--secondary)', borderBottom: '1px solid var(--border)' }}
      >
        <div
          className="absolute right-0 top-0 bottom-0 opacity-5 pointer-events-none select-none animate-float-slow"
          style={{ fontFamily: 'var(--font-display)', fontSize: '28rem', lineHeight: 1, color: 'var(--primary)' }}
        >
          M
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <p
            style={{ fontFamily: 'var(--font-condensed)', color: 'var(--primary)', animation: 'reveal-up 0.6s ease-out 0.1s both' }}
            className="text-xs tracking-[0.3em] mb-3 uppercase"
          >
            ENERGY DRINKS
          </p>
          <h1
            style={{ fontFamily: 'var(--font-display)', animation: 'reveal-up 0.6s ease-out 0.2s both' }}
            className="text-6xl md:text-8xl uppercase text-white leading-none"
          >
            THE VAULT
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6" style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat, i) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                style={{
                  fontFamily: 'var(--font-condensed)',
                  background: activeCategory === cat ? categoryColors[cat] : 'transparent',
                  borderColor: activeCategory === cat ? categoryColors[cat] : 'var(--border)',
                  color: activeCategory === cat
                    ? (cat === 'ultra' || cat === 'zero' ? '#000' : '#fff')
                    : 'var(--muted-foreground)',
                  animation: `reveal-up 0.4s ease-out ${i * 0.05}s both`,
                }}
                className={`filter-pill px-4 py-1.5 text-xs font-700 tracking-widest uppercase transition-all duration-300 border hover:text-white hover:border-white ${
                  activeCategory === cat ? 'active' : ''
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span style={{ fontFamily: 'var(--font-condensed)' }} className="text-xs text-[var(--muted-foreground)] tracking-wider">SORT BY:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              style={{ fontFamily: 'var(--font-condensed)', background: 'var(--secondary)', borderColor: 'var(--border)' }}
              className="text-xs font-700 tracking-wider text-white border px-3 py-1.5 focus:outline-none focus:border-[var(--primary)] transition-colors"
            >
              <option value="default">FEATURED</option>
              <option value="price-asc">PRICE: LOW→HIGH</option>
              <option value="price-desc">PRICE: HIGH→LOW</option>
              <option value="caffeine">CAFFEINE: HIGH→LOW</option>
            </select>
          </div>
        </div>

        <p style={{ fontFamily: 'var(--font-condensed)' }} className="text-xs text-[var(--muted-foreground)] tracking-widest mb-6">
          {filtered.length} PRODUCTS
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-[var(--border)]" key={filterKey}>
          {filtered.map((p, i) => (
            <ProductCard key={p.id} product={p} onViewProduct={onViewProduct} index={i} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            style={{ fontFamily: 'var(--font-condensed)', borderColor: 'var(--border)' }}
            className="px-12 py-4 border text-sm font-700 tracking-widest text-[var(--muted-foreground)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all duration-300 uppercase hover:shadow-[0_0_20px_rgba(57,255,20,0.15)]"
          >
            LOAD MORE
          </button>
        </div>
      </div>
    </div>
  )
}
