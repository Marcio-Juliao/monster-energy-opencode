import { useState } from 'react'
import type { Product } from '@/types'
import { useCart } from '@/context/CartContext'
import NutritionBadge from './NutritionBadge'
import { useTilt } from '@/hooks/useTilt'

export default function ProductCard({ product, onViewProduct, index = 0 }: { product: Product; onViewProduct: (id: number) => void; index?: number }) {
  const [hovered, setHovered] = useState(false)
  const [addedFeedback, setAddedFeedback] = useState(false)
  const { ref, handleMouseMove, handleMouseLeave, tiltStyle } = useTilt(12)
  const { addItem } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation()
    addItem(product)
    setAddedFeedback(true)
    setTimeout(() => setAddedFeedback(false), 1500)
  }

  return (
    <div
      ref={ref}
      className="bg-[var(--card)] cursor-pointer overflow-hidden group relative card-glow-border"
      style={{
        ...tiltStyle,
        animation: `stagger-in 0.6s ease-out ${index * 0.1}s both`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); handleMouseLeave() }}
      onMouseMove={handleMouseMove}
      onClick={() => onViewProduct(product.id)}
    >
      {/* Shine sweep overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.06), transparent)',
            animation: hovered ? 'shine-sweep 1.5s ease-in-out' : 'none',
          }}
        />
      </div>

      <div
        className="relative aspect-[3/4] overflow-hidden flex items-center justify-center p-6"
        style={{
          background: `linear-gradient(180deg, ${product.color}15 0%, ${product.color}08 100%)`,
        }}
      >
        {/* Radial glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `radial-gradient(circle at center, ${product.color}35 0%, transparent 70%)`,
          }}
        />

        {/* Floating can image */}
        <img
          src={product.img}
          alt={product.name}
          className={`relative z-10 h-[85%] w-auto object-contain transition-all duration-700 ${
            hovered ? 'scale-110 -translate-y-3' : 'scale-100'
          } ${hovered ? 'animate-float-slow' : ''}`}
          style={{
            filter: hovered
              ? `drop-shadow(0 0 25px ${product.color}90) drop-shadow(0 0 50px ${product.color}40)`
              : 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))',
            transition: 'filter 0.5s ease, transform 0.7s ease',
          }}
        />

        {/* Tag badge */}
        {product.tag && (
          <div
            style={{
              fontFamily: 'var(--font-condensed)',
              background: product.tag === 'ZERO SUGAR' ? '#888' : product.tag === 'NEW' ? '#fff' : product.color,
              color: product.tag === 'ZERO SUGAR' ? '#fff' : '#000',
              animation: 'reveal-scale 0.4s ease-out 0.2s both',
            }}
            className="absolute top-3 left-3 px-2 py-0.5 text-[10px] font-700 tracking-[0.15em] uppercase"
          >
            {product.tag}
          </div>
        )}

        {/* Add to cart overlay */}
        <div
          className={`absolute inset-x-0 bottom-0 py-3 text-center transition-transform duration-400 z-30 ${
            hovered ? 'translate-y-0' : 'translate-y-full'
          }`}
          style={{
            background: addedFeedback ? '#39FF14' : 'var(--primary)',
          }}
          onClick={handleAddToCart}
        >
          <span
            style={{ fontFamily: 'var(--font-condensed)' }}
            className="text-xs font-700 tracking-widest text-[#080808]"
          >
            {addedFeedback ? 'ADDED!' : 'ADD TO CART'}
          </span>
        </div>
      </div>

      <div className="p-4 relative">
        <h3
          style={{ fontFamily: 'var(--font-condensed)' }}
          className="text-sm font-700 tracking-[0.1em] text-white uppercase leading-tight"
        >
          {product.name}
        </h3>
        <NutritionBadge caffeine={product.caffeine} calories={product.calories} volume={product.volume} />
        <div className="flex items-center justify-between mt-2">
          <p
            style={{ fontFamily: 'var(--font-condensed)', color: 'var(--primary)' }}
            className="text-base font-700 animate-glow-text"
          >
            ${product.price.toFixed(2)}
          </p>
          <span
            style={{ fontFamily: 'var(--font-condensed)', color: product.color }}
            className="text-[10px] tracking-widest font-700 uppercase"
          >
            {product.category}
          </span>
        </div>
      </div>
    </div>
  )
}
