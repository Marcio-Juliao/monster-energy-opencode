import { useState } from 'react'
import type { Page, CheckoutStep } from '@/types'
import { useCart } from '@/context/CartContext'

const STEPS: CheckoutStep[] = ['shipping', 'payment', 'confirmation']

export default function CheckoutPage({ setPage }: { setPage: (p: Page) => void }) {
  const [step, setStep] = useState<CheckoutStep>('shipping')
  const { items, totalPrice, clearCart } = useCart()
  const [orderId] = useState(() => `#MN-2026-${Math.floor(1000 + Math.random() * 9000)}`)

  const currentStepIndex = STEPS.indexOf(step)

  const [shipping, setShipping] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
  })

  const [payment, setPayment] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
  })

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep('payment')
  }

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep('confirmation')
  }

  const inputClass =
    'w-full bg-[var(--background)] text-white px-4 py-3 text-sm tracking-wide focus:outline-none focus:border-[var(--primary)] transition-colors'
  const inputStyle = { fontFamily: 'var(--font-condensed)', border: '1px solid var(--border)' }

  return (
    <div className="pt-14 min-h-screen">
      {/* Header */}
      <div
        className="relative overflow-hidden py-16 px-6"
        style={{ background: 'var(--secondary)', borderBottom: '1px solid var(--border)' }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <h1
            style={{ fontFamily: 'var(--font-display)', animation: 'reveal-up 0.6s ease-out 0.1s both' }}
            className="text-5xl md:text-7xl uppercase text-white leading-none"
          >
            CHECKOUT
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10">
        {/* Progress bar */}
        <div
          className="flex items-center justify-between mb-12 px-4"
          style={{ animation: 'reveal-up 0.6s ease-out 0.2s both' }}
        >
          {STEPS.map((s, i) => (
            <div key={s} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center">
                <div
                  className="w-10 h-10 flex items-center justify-center text-sm font-700"
                  style={{
                    fontFamily: 'var(--font-condensed)',
                    background: i <= currentStepIndex ? 'var(--primary)' : 'transparent',
                    color: i <= currentStepIndex ? '#080808' : 'var(--muted-foreground)',
                    border: `1px solid ${i <= currentStepIndex ? 'var(--primary)' : 'var(--border)'}`,
                  }}
                >
                  {i < currentStepIndex ? '✓' : i + 1}
                </div>
                <span
                  style={{ fontFamily: 'var(--font-condensed)' }}
                  className={`text-[10px] tracking-widest mt-2 uppercase ${
                    i <= currentStepIndex ? 'text-[var(--primary)]' : 'text-[var(--muted-foreground)]'
                  }`}
                >
                  {s}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div
                  className="flex-1 h-px mx-4 mt-[-18px]"
                  style={{
                    background: i < currentStepIndex ? 'var(--primary)' : 'var(--border)',
                  }}
                />
              )}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Form area */}
          <div className="lg:col-span-2">
            {/* Shipping step */}
            {step === 'shipping' && (
              <form
                onSubmit={handleShippingSubmit}
                className="space-y-6"
                style={{ animation: 'reveal-up 0.5s ease-out 0.1s both' }}
              >
                <h2
                  style={{ fontFamily: 'var(--font-condensed)', borderBottom: '1px solid var(--border)' }}
                  className="text-sm font-700 tracking-[0.15em] text-white uppercase mb-6 pb-4"
                >
                  SHIPPING INFORMATION
                </h2>

                <div>
                  <label style={{ fontFamily: 'var(--font-condensed)' }} className="block text-xs tracking-widest text-[var(--muted-foreground)] mb-2">
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={shipping.name}
                    onChange={(e) => setShipping({ ...shipping, name: e.target.value })}
                    placeholder="John Doe"
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={{ fontFamily: 'var(--font-condensed)' }} className="block text-xs tracking-widest text-[var(--muted-foreground)] mb-2">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={shipping.email}
                    onChange={(e) => setShipping({ ...shipping, email: e.target.value })}
                    placeholder="john@example.com"
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={{ fontFamily: 'var(--font-condensed)' }} className="block text-xs tracking-widest text-[var(--muted-foreground)] mb-2">
                    ADDRESS
                  </label>
                  <input
                    type="text"
                    required
                    value={shipping.address}
                    onChange={(e) => setShipping({ ...shipping, address: e.target.value })}
                    placeholder="123 Monster St"
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label style={{ fontFamily: 'var(--font-condensed)' }} className="block text-xs tracking-widest text-[var(--muted-foreground)] mb-2">
                      CITY
                    </label>
                    <input
                      type="text"
                      required
                      value={shipping.city}
                      onChange={(e) => setShipping({ ...shipping, city: e.target.value })}
                      placeholder="New York"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: 'var(--font-condensed)' }} className="block text-xs tracking-widest text-[var(--muted-foreground)] mb-2">
                      ZIP CODE
                    </label>
                    <input
                      type="text"
                      required
                      value={shipping.zip}
                      onChange={(e) => setShipping({ ...shipping, zip: e.target.value })}
                      placeholder="10001"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  style={{ fontFamily: 'var(--font-condensed)' }}
                  className="w-full py-4 bg-[var(--primary)] text-[#080808] text-sm font-700 tracking-[0.2em] uppercase hover:bg-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(57,255,20,0.4)] mt-8"
                >
                  CONTINUE TO PAYMENT
                </button>
              </form>
            )}

            {/* Payment step */}
            {step === 'payment' && (
              <form
                onSubmit={handlePaymentSubmit}
                className="space-y-6"
                style={{ animation: 'reveal-up 0.5s ease-out 0.1s both' }}
              >
                <h2
                  style={{ fontFamily: 'var(--font-condensed)', borderBottom: '1px solid var(--border)' }}
                  className="text-sm font-700 tracking-[0.15em] text-white uppercase mb-6 pb-4"
                >
                  PAYMENT DETAILS
                </h2>

                <div>
                  <label style={{ fontFamily: 'var(--font-condensed)' }} className="block text-xs tracking-widest text-[var(--muted-foreground)] mb-2">
                    CARD NUMBER
                  </label>
                  <input
                    type="text"
                    required
                    value={payment.cardNumber}
                    onChange={(e) => setPayment({ ...payment, cardNumber: e.target.value })}
                    placeholder="4242 4242 4242 4242"
                    className={inputClass}
                    style={inputStyle}
                    maxLength={19}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label style={{ fontFamily: 'var(--font-condensed)' }} className="block text-xs tracking-widest text-[var(--muted-foreground)] mb-2">
                      EXPIRY DATE
                    </label>
                    <input
                      type="text"
                      required
                      value={payment.expiry}
                      onChange={(e) => setPayment({ ...payment, expiry: e.target.value })}
                      placeholder="MM/YY"
                      className={inputClass}
                      style={inputStyle}
                      maxLength={5}
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: 'var(--font-condensed)' }} className="block text-xs tracking-widest text-[var(--muted-foreground)] mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      required
                      value={payment.cvv}
                      onChange={(e) => setPayment({ ...payment, cvv: e.target.value })}
                      placeholder="123"
                      className={inputClass}
                      style={inputStyle}
                      maxLength={4}
                    />
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <button
                    type="button"
                    onClick={() => setStep('shipping')}
                    style={{ fontFamily: 'var(--font-condensed)' }}
                    className="px-6 py-4 border text-sm font-700 tracking-widest text-[var(--muted-foreground)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all duration-300"
                  >
                    ← BACK
                  </button>
                  <button
                    type="submit"
                    style={{ fontFamily: 'var(--font-condensed)' }}
                    className="flex-1 py-4 bg-[var(--primary)] text-[#080808] text-sm font-700 tracking-[0.2em] uppercase hover:bg-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(57,255,20,0.4)]"
                  >
                    PLACE ORDER
                  </button>
                </div>
              </form>
            )}

            {/* Confirmation step */}
            {step === 'confirmation' && (
              <div
                className="text-center py-12"
                style={{ animation: 'reveal-up 0.6s ease-out 0.2s both' }}
              >
                <div
                  className="w-20 h-20 mx-auto mb-6 flex items-center justify-center"
                  style={{ background: 'var(--primary)', color: '#080808', fontFamily: 'var(--font-display)', fontSize: '2rem' }}
                >
                  ✓
                </div>
                <h2
                  style={{ fontFamily: 'var(--font-display)' }}
                  className="text-4xl uppercase text-white mb-3"
                >
                  ORDER CONFIRMED!
                </h2>
                <p
                  style={{ fontFamily: 'var(--font-condensed)', color: 'var(--primary)' }}
                  className="text-xs tracking-[0.3em] mb-2"
                >
                  THANK YOU FOR YOUR ORDER
                </p>
                <p
                  style={{ fontFamily: 'var(--font-condensed)' }}
                  className="text-[var(--muted-foreground)] text-sm mb-1"
                >
                  Order number:
                </p>
                <p
                  style={{ fontFamily: 'var(--font-display)' }}
                  className="text-2xl text-white mb-8"
                >
                  {orderId}
                </p>

                <div
                  className="max-w-sm mx-auto text-left p-6 mb-8"
                  style={{ background: 'var(--secondary)', border: '1px solid var(--border)' }}
                >
                  <p
                    style={{ fontFamily: 'var(--font-condensed)' }}
                    className="text-xs tracking-widest text-[var(--muted-foreground)] mb-4 uppercase"
                  >
                    ORDER SUMMARY
                  </p>
                  {items.map((item) => (
                    <div key={item.product.id} className="flex justify-between mb-2">
                      <span
                        style={{ fontFamily: 'var(--font-condensed)' }}
                        className="text-sm text-white"
                      >
                        {item.product.name} × {item.quantity}
                      </span>
                      <span
                        style={{ fontFamily: 'var(--font-condensed)', color: 'var(--primary)' }}
                        className="text-sm font-700"
                      >
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                  <div
                    className="flex justify-between pt-3 mt-3"
                    style={{ borderTop: '1px solid var(--border)' }}
                  >
                    <span
                      style={{ fontFamily: 'var(--font-condensed)' }}
                      className="text-sm text-white font-700"
                    >
                      TOTAL
                    </span>
                    <span
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--primary)' }}
                      className="text-lg"
                    >
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    clearCart()
                    setPage('home')
                  }}
                  style={{ fontFamily: 'var(--font-condensed)' }}
                  className="px-8 py-4 bg-[var(--primary)] text-[#080808] text-sm font-700 tracking-[0.2em] uppercase hover:bg-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(57,255,20,0.4)]"
                >
                  CONTINUE SHOPPING
                </button>
              </div>
            )}
          </div>

          {/* Order summary sidebar */}
          {step !== 'confirmation' && (
            <div
              className="lg:col-span-1"
              style={{ animation: 'reveal-up 0.6s ease-out 0.3s both' }}
            >
              <div
                className="sticky top-20 p-6"
                style={{ background: 'var(--secondary)', border: '1px solid var(--border)' }}
              >
                <h3
                  style={{ fontFamily: 'var(--font-condensed)', borderBottom: '1px solid var(--border)' }}
                  className="text-sm font-700 tracking-[0.15em] text-white uppercase mb-6 pb-4"
                >
                  YOUR ORDER
                </h3>

                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex gap-3">
                      <div
                        className="w-12 h-16 flex items-center justify-center shrink-0"
                        style={{
                          background: `linear-gradient(180deg, ${item.product.color}12 0%, ${item.product.color}05 100%)`,
                          border: `1px solid ${item.product.color}20`,
                        }}
                      >
                        <img
                          src={item.product.img}
                          alt={item.product.name}
                          className="h-[80%] w-auto object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p
                          style={{ fontFamily: 'var(--font-condensed)' }}
                          className="text-xs text-white font-700 tracking-wide uppercase truncate"
                        >
                          {item.product.name}
                        </p>
                        <p
                          style={{ fontFamily: 'var(--font-condensed)' }}
                          className="text-[10px] text-[var(--muted-foreground)]"
                        >
                          QTY: {item.quantity}
                        </p>
                      </div>
                      <p
                        style={{ fontFamily: 'var(--font-condensed)', color: 'var(--primary)' }}
                        className="text-xs font-700 shrink-0"
                      >
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>

                <div
                  className="space-y-2 pt-4"
                  style={{ borderTop: '1px solid var(--border)' }}
                >
                  <div className="flex justify-between">
                    <span style={{ fontFamily: 'var(--font-condensed)' }} className="text-xs text-[var(--muted-foreground)]">
                      Subtotal
                    </span>
                    <span style={{ fontFamily: 'var(--font-condensed)' }} className="text-xs text-white font-700">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ fontFamily: 'var(--font-condensed)' }} className="text-xs text-[var(--muted-foreground)]">
                      Shipping
                    </span>
                    <span style={{ fontFamily: 'var(--font-condensed)', color: 'var(--primary)' }} className="text-xs font-700">
                      FREE
                    </span>
                  </div>
                  <div className="flex justify-between pt-3" style={{ borderTop: '1px solid var(--border)' }}>
                    <span style={{ fontFamily: 'var(--font-condensed)' }} className="text-sm text-white font-700">
                      TOTAL
                    </span>
                    <span style={{ fontFamily: 'var(--font-display)', color: 'var(--primary)' }} className="text-xl">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
