import { useState } from 'react'
import type { Product } from '@/types'
import NutritionBadge from './NutritionBadge'

export default function ProductCard({ product, onClick }: { product: Product; onClick: () => void }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="bg-[var(--card)] cursor-pointer overflow-hidden group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <div
        className="relative aspect-[3/4] overflow-hidden flex items-center justify-center p-6"
        style={{
          background: `linear-gradient(180deg, ${product.color}15 0%, ${product.color}08 100%)`,
        }}
      >
        {/* Glow effect on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at center, ${product.color}30 0%, transparent 70%)`,
          }}
        />

        {/* Can image */}
        <img
          src={product.img}
          alt={product.name}
          className={`relative z-10 h-[85%] w-auto object-contain drop-shadow-2xl transition-transform duration-700 ${hovered ? 'scale-110 -translate-y-2' : 'scale-100'}`}
          style={{
            filter: hovered ? `drop-shadow(0 0 20px ${product.color}80)` : 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))',
          }}
        />

        {/* Tag badge */}
        {product.tag && (
          <div
            style={{
              fontFamily: 'var(--font-condensed)',
              background: product.tag === 'ZERO SUGAR' ? '#888' : product.tag === 'NEW' ? '#fff' : product.color,
              color: product.tag === 'ZERO SUGAR' ? '#fff' : '#000',
            }}
            className="absolute top-3 left-3 px-2 py-0.5 text-[10px] font-700 tracking-[0.15em] uppercase"
          >
            {product.tag}
          </div>
        )}

        {/* Add to cart overlay */}
        <div className={`absolute inset-x-0 bottom-0 bg-[var(--primary)] py-3 text-center transition-transform duration-300 ${hovered ? 'translate-y-0' : 'translate-y-full'}`}>
          <span style={{ fontFamily: 'var(--font-condensed)' }} className="text-xs font-700 tracking-widest text-[#080808]">ADD TO CART</span>
        </div>
      </div>

      <div className="p-4">
        <h3 style={{ fontFamily: 'var(--font-condensed)' }} className="text-sm font-700 tracking-[0.1em] text-white uppercase leading-tight">{product.name}</h3>
        <NutritionBadge caffeine={product.caffeine} calories={product.calories} volume={product.volume} />
        <div className="flex items-center justify-between mt-2">
          <p style={{ fontFamily: 'var(--font-condensed)', color: 'var(--primary)' }} className="text-base font-700">${product.price.toFixed(2)}</p>
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
