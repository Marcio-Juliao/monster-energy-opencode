import type { Page } from '@/types'
import { useCart } from '@/context/CartContext'

export default function CartPage({ setPage }: { setPage: (p: Page) => void }) {
  const { items, removeItem, updateQuantity, totalItems, totalPrice } = useCart()

  if (items.length === 0) {
    return (
      <div className="pt-14 min-h-screen flex flex-col items-center justify-center px-6">
        <div
          className="text-center"
          style={{ animation: 'reveal-up 0.6s ease-out 0.2s both' }}
        >
          <p
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-4xl md:text-5xl uppercase text-white mb-4"
          >
            YOUR CART IS EMPTY
          </p>
          <p
            style={{ fontFamily: 'var(--font-condensed)' }}
            className="text-[var(--muted-foreground)] mb-8"
          >
            Looks like you haven't added any drinks yet.
          </p>
          <button
            onClick={() => setPage('shop')}
            style={{ fontFamily: 'var(--font-condensed)' }}
            className="px-8 py-3 bg-[var(--primary)] text-[#080808] text-sm font-700 tracking-[0.2em] uppercase hover:bg-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(57,255,20,0.4)]"
          >
            SHOP DRINKS
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-14 min-h-screen">
      {/* Header */}
      <div
        className="relative overflow-hidden py-16 px-6"
        style={{ background: 'var(--secondary)', borderBottom: '1px solid var(--border)' }}
      >
        <div
          className="absolute right-0 top-0 bottom-0 opacity-5 pointer-events-none select-none animate-float-slow"
          style={{ fontFamily: 'var(--font-display)', fontSize: '28rem', lineHeight: 1, color: 'var(--primary)' }}
        >
          M
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h1
            style={{ fontFamily: 'var(--font-display)', animation: 'reveal-up 0.6s ease-out 0.1s both' }}
            className="text-5xl md:text-7xl uppercase text-white leading-none"
          >
            YOUR CART
          </h1>
          <p
            style={{ fontFamily: 'var(--font-condensed)', color: 'var(--primary)', animation: 'reveal-up 0.6s ease-out 0.2s both' }}
            className="text-xs tracking-[0.3em] mt-3 uppercase"
          >
            {totalItems} {totalItems === 1 ? 'ITEM' : 'ITEMS'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Cart items */}
          <div className="lg:col-span-2">
            <div className="flex flex-col">
              {items.map((item, i) => (
                <div
                  key={item.product.id}
                  className="flex gap-6 py-6"
                  style={{
                    borderBottom: '1px solid var(--border)',
                    animation: `reveal-up 0.5s ease-out ${i * 0.1}s both`,
                  }}
                >
                  {/* Product image */}
                  <button
                    onClick={() => {}}
                    className="shrink-0 w-24 h-32 flex items-center justify-center overflow-hidden"
                    style={{
                      background: `linear-gradient(180deg, ${item.product.color}12 0%, ${item.product.color}05 100%)`,
                      border: `1px solid ${item.product.color}20`,
                    }}
                  >
                    <img
                      src={item.product.img}
                      alt={item.product.name}
                      className="h-[85%] w-auto object-contain"
                      style={{
                        filter: `drop-shadow(0 0 10px ${item.product.color}40)`,
                      }}
                    />
                  </button>

                  {/* Product info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3
                          style={{ fontFamily: 'var(--font-condensed)' }}
                          className="text-sm font-700 tracking-[0.1em] text-white uppercase"
                        >
                          {item.product.name}
                        </h3>
                        <p
                          style={{ fontFamily: 'var(--font-condensed)', color: item.product.color }}
                          className="text-[10px] tracking-widest mt-1 uppercase"
                        >
                          {item.product.category} · {item.product.volume}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        style={{ fontFamily: 'var(--font-condensed)' }}
                        className="text-[var(--muted-foreground)] hover:text-red-500 transition-colors text-xs tracking-widest shrink-0"
                      >
                        REMOVE
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      {/* Quantity controls */}
                      <div className="flex items-center" style={{ border: '1px solid var(--border)' }}>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="px-3 py-1 text-white hover:bg-[var(--primary)] hover:text-[#080808] transition-colors text-sm"
                          style={{ fontFamily: 'var(--font-condensed)' }}
                        >
                          -
                        </button>
                        <span
                          style={{ fontFamily: 'var(--font-condensed)', borderLeft: '1px solid var(--border)', borderRight: '1px solid var(--border)' }}
                          className="px-4 py-1 text-white text-sm font-700"
                        >
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-3 py-1 text-white hover:bg-[var(--primary)] hover:text-[#080808] transition-colors text-sm"
                          style={{ fontFamily: 'var(--font-condensed)' }}
                        >
                          +
                        </button>
                      </div>

                      {/* Item total */}
                      <p
                        style={{ fontFamily: 'var(--font-condensed)', color: 'var(--primary)' }}
                        className="text-base font-700"
                      >
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order summary */}
          <div
            className="lg:col-span-1"
            style={{ animation: 'reveal-up 0.6s ease-out 0.3s both' }}
          >
            <div
              className="sticky top-20 p-6"
              style={{ background: 'var(--secondary)', border: '1px solid var(--border)' }}
            >
              <h2
                style={{ fontFamily: 'var(--font-condensed)', borderBottom: '1px solid var(--border)' }}
                className="text-sm font-700 tracking-[0.15em] text-white uppercase mb-6 pb-4"
              >
                ORDER SUMMARY
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span style={{ fontFamily: 'var(--font-condensed)' }} className="text-sm text-[var(--muted-foreground)]">
                    Subtotal ({totalItems} items)
                  </span>
                  <span style={{ fontFamily: 'var(--font-condensed)' }} className="text-sm text-white font-700">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span style={{ fontFamily: 'var(--font-condensed)' }} className="text-sm text-[var(--muted-foreground)]">
                    Shipping
                  </span>
                  <span style={{ fontFamily: 'var(--font-condensed)', color: 'var(--primary)' }} className="text-sm font-700">
                    FREE
                  </span>
                </div>
              </div>

              <div
                className="flex justify-between pt-4 mb-6"
                style={{ borderTop: '1px solid var(--border)' }}
              >
                <span style={{ fontFamily: 'var(--font-condensed)' }} className="text-sm text-white font-700 tracking-wider">
                  TOTAL
                </span>
                <span style={{ fontFamily: 'var(--font-display)', color: 'var(--primary)' }} className="text-2xl">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              <button
                onClick={() => setPage('checkout')}
                style={{ fontFamily: 'var(--font-condensed)' }}
                className="w-full py-4 bg-[var(--primary)] text-[#080808] text-sm font-700 tracking-[0.2em] uppercase hover:bg-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(57,255,20,0.4)]"
              >
                PROCEED TO CHECKOUT
              </button>

              <button
                onClick={() => setPage('shop')}
                style={{ fontFamily: 'var(--font-condensed)' }}
                className="w-full mt-3 py-3 text-xs font-700 tracking-widest text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
              >
                ← CONTINUE SHOPPING
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
