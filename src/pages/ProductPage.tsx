import { useState } from 'react'
import type { Page } from '@/types'
import { PRODUCTS } from '@/data/products'
import { useCart } from '@/context/CartContext'
import NutritionBadge from '@/components/NutritionBadge'

export default function ProductPage({
  productId,
  setPage,
  onViewProduct,
}: {
  productId: number
  setPage: (p: Page) => void
  onViewProduct: (id: number) => void
}) {
  const product = PRODUCTS.find((p) => p.id === productId)
  const [quantity, setQuantity] = useState(1)
  const [addedFeedback, setAddedFeedback] = useState(false)
  const { addItem } = useCart()

  if (!product) {
    return (
      <div className="pt-14 min-h-screen flex items-center justify-center">
        <p style={{ fontFamily: 'var(--font-condensed)' }} className="text-[var(--muted-foreground)]">
          Product not found.
        </p>
      </div>
    )
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product)
    }
    setAddedFeedback(true)
    setTimeout(() => setAddedFeedback(false), 2000)
  }

  const related = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3)

  return (
    <div className="pt-14 min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center gap-2 text-xs tracking-widest" style={{ fontFamily: 'var(--font-condensed)' }}>
          <button onClick={() => setPage('home')} className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">
            HOME
          </button>
          <span className="text-[var(--border)]">/</span>
          <button onClick={() => setPage('shop')} className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">
            SHOP
          </button>
          <span className="text-[var(--border)]">/</span>
          <span className="text-white">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Product image */}
          <div
            className="relative aspect-[3/4] flex items-center justify-center p-10 overflow-hidden"
            style={{
              background: `linear-gradient(180deg, ${product.color}12 0%, ${product.color}05 100%)`,
              border: `1px solid ${product.color}20`,
              animation: 'reveal-up 0.6s ease-out 0.1s both',
            }}
          >
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background: `radial-gradient(circle at center, ${product.color}25 0%, transparent 70%)`,
              }}
            />
            {product.tag && (
              <div
                style={{
                  fontFamily: 'var(--font-condensed)',
                  background: product.tag === 'ZERO SUGAR' ? '#888' : product.tag === 'NEW' ? '#fff' : product.color,
                  color: product.tag === 'ZERO SUGAR' ? '#fff' : '#000',
                }}
                className="absolute top-4 left-4 px-3 py-1 text-xs font-700 tracking-[0.15em] uppercase z-10"
              >
                {product.tag}
              </div>
            )}
            <img
              src={product.img}
              alt={product.name}
              className="relative z-10 h-[80%] w-auto object-contain animate-float-slow"
              style={{
                filter: `drop-shadow(0 0 30px ${product.color}60) drop-shadow(0 0 60px ${product.color}25)`,
              }}
            />
          </div>

          {/* Product details */}
          <div className="py-4" style={{ animation: 'reveal-up 0.6s ease-out 0.3s both' }}>
            <p
              style={{ fontFamily: 'var(--font-condensed)', color: product.color }}
              className="text-xs tracking-[0.3em] mb-3 uppercase"
            >
              {product.category}
            </p>
            <h1
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-4xl md:text-5xl uppercase text-white leading-none mb-4"
            >
              {product.name}
            </h1>
            <p
              style={{ fontFamily: 'var(--font-condensed)' }}
              className="text-[var(--muted-foreground)] text-base leading-relaxed mb-6"
            >
              {product.desc}
            </p>

            {/* Nutrition info */}
            <div
              className="flex items-center gap-6 mb-8 pb-8"
              style={{ borderBottom: '1px solid var(--border)' }}
            >
              <NutritionBadge caffeine={product.caffeine} calories={product.calories} volume={product.volume} />
            </div>

            {/* Price */}
            <div className="flex items-center gap-4 mb-8">
              <p
                style={{ fontFamily: 'var(--font-display)', color: 'var(--primary)' }}
                className="text-4xl"
              >
                ${product.price.toFixed(2)}
              </p>
              <span
                style={{ fontFamily: 'var(--font-condensed)', color: product.color }}
                className="text-xs tracking-widest font-700 uppercase mt-2"
              >
                {product.volume}
              </span>
            </div>

            {/* Quantity selector */}
            <div className="flex items-center gap-4 mb-8">
              <span
                style={{ fontFamily: 'var(--font-condensed)' }}
                className="text-xs tracking-widest text-[var(--muted-foreground)]"
              >
                QUANTITY:
              </span>
              <div className="flex items-center" style={{ border: '1px solid var(--border)' }}>
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-2 text-white hover:bg-[var(--primary)] hover:text-[#080808] transition-colors"
                  style={{ fontFamily: 'var(--font-condensed)' }}
                >
                  -
                </button>
                <span
                  style={{ fontFamily: 'var(--font-condensed)', borderLeft: '1px solid var(--border)', borderRight: '1px solid var(--border)' }}
                  className="px-6 py-2 text-white text-sm font-700"
                >
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-2 text-white hover:bg-[var(--primary)] hover:text-[#080808] transition-colors"
                  style={{ fontFamily: 'var(--font-condensed)' }}
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart button */}
            <button
              onClick={handleAddToCart}
              style={{ fontFamily: 'var(--font-condensed)' }}
              className={`w-full py-4 text-base font-700 tracking-[0.2em] uppercase transition-all duration-300 ${
                addedFeedback
                  ? 'bg-[#39FF14] text-[#080808]'
                  : 'bg-[var(--primary)] text-[#080808] hover:bg-white hover:shadow-[0_0_30px_rgba(57,255,20,0.4)]'
              }`}
            >
              {addedFeedback ? 'ADDED TO CART!' : `ADD TO CART — $${(product.price * quantity).toFixed(2)}`}
            </button>

            {/* Back to shop */}
            <button
              onClick={() => setPage('shop')}
              style={{ fontFamily: 'var(--font-condensed)' }}
              className="w-full mt-4 py-3 text-sm font-700 tracking-widest text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
            >
              ← BACK TO SHOP
            </button>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-20 pt-12" style={{ borderTop: '1px solid var(--border)' }}>
            <p
              style={{ fontFamily: 'var(--font-condensed)', color: 'var(--primary)' }}
              className="text-xs tracking-[0.3em] mb-2 uppercase"
            >
              YOU MAY ALSO LIKE
            </p>
            <h2
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-3xl uppercase text-white mb-8"
            >
              RELATED DRINKS
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {related.map((p) => (
                <button
                  key={p.id}
                  onClick={() => onViewProduct(p.id)}
                  className="text-left group"
                >
                  <div
                    className="relative aspect-square flex items-center justify-center p-6 overflow-hidden mb-3"
                    style={{
                      background: `linear-gradient(180deg, ${p.color}12 0%, ${p.color}05 100%)`,
                      border: `1px solid ${p.color}20`,
                    }}
                  >
                    <img
                      src={p.img}
                      alt={p.name}
                      className="h-[75%] w-auto object-contain transition-all duration-500 group-hover:scale-110"
                      style={{
                        filter: `drop-shadow(0 0 15px ${p.color}40)`,
                      }}
                    />
                  </div>
                  <h3
                    style={{ fontFamily: 'var(--font-condensed)' }}
                    className="text-xs font-700 tracking-[0.1em] text-white uppercase group-hover:text-[var(--primary)] transition-colors"
                  >
                    {p.name}
                  </h3>
                  <p
                    style={{ fontFamily: 'var(--font-condensed)', color: 'var(--primary)' }}
                    className="text-sm font-700 mt-1"
                  >
                    ${p.price.toFixed(2)}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
