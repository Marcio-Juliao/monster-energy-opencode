import { useState } from 'react'
import type { SortOption } from '@/types'
import { PRODUCTS, CATEGORIES } from '@/data/products'
import ProductCard from '@/components/ProductCard'

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [sortBy, setSortBy] = useState<SortOption>('default')

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

  return (
    <div className="pt-14 min-h-screen">
      <div
        className="relative overflow-hidden py-20 px-6"
        style={{ background: 'var(--secondary)', borderBottom: '1px solid var(--border)' }}
      >
        <div
          className="absolute right-0 top-0 bottom-0 opacity-5 pointer-events-none select-none"
          style={{ fontFamily: 'var(--font-display)', fontSize: '28rem', lineHeight: 1, color: 'var(--primary)' }}
        >
          M
        </div>
        <div className="max-w-7xl mx-auto">
          <p style={{ fontFamily: 'var(--font-condensed)', color: 'var(--primary)' }} className="text-xs tracking-[0.3em] mb-3 uppercase">ENERGY DRINKS</p>
          <h1 style={{ fontFamily: 'var(--font-display)' }} className="text-6xl md:text-8xl uppercase text-white leading-none">
            THE VAULT
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6" style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  fontFamily: 'var(--font-condensed)',
                  background: activeCategory === cat ? categoryColors[cat] : 'transparent',
                  borderColor: activeCategory === cat ? categoryColors[cat] : 'var(--border)',
                  color: activeCategory === cat
                    ? (cat === 'ultra' || cat === 'zero' || cat === 'rehab' ? '#000' : '#fff')
                    : 'var(--muted-foreground)',
                }}
                className="px-4 py-1.5 text-xs font-700 tracking-widest uppercase transition-colors border hover:text-white hover:border-white"
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
              className="text-xs font-700 tracking-wider text-white border px-3 py-1.5 focus:outline-none focus:border-[var(--primary)]"
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-[var(--border)]">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} onClick={() => {}} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            style={{ fontFamily: 'var(--font-condensed)', borderColor: 'var(--border)' }}
            className="px-12 py-4 border text-sm font-700 tracking-widest text-[var(--muted-foreground)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors uppercase"
          >
            LOAD MORE
          </button>
        </div>
      </div>
    </div>
  )
}
