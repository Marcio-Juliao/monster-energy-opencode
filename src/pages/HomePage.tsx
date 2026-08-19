import type { Page } from '@/types'
import { PRODUCTS } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import Footer from '@/components/Footer'
import CaffeineComparison from '@/components/CaffeineComparison'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import ParticleField from '@/components/ParticleField'
import GlitchText from '@/components/GlitchText'
import { useParallax } from '@/hooks/useParallax'
import { useInView } from '@/hooks/useInView'

function AnimatedCounter({ value, label }: { value: string; label: string }) {
  const { ref, inView } = useInView(0.3)
  return (
    <div ref={ref} className={`px-6 first:pl-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div style={{ fontFamily: 'var(--font-display)', color: 'var(--primary)' }} className="text-3xl counter-shimmer">{value}</div>
      <div style={{ fontFamily: 'var(--font-condensed)' }} className="text-xs tracking-widest text-[var(--muted-foreground)] mt-1">{label}</div>
    </div>
  )
}

export default function HomePage({ setPage, onViewProduct }: { setPage: (p: Page) => void; onViewProduct: (id: number) => void }) {
  const featured = PRODUCTS.filter(p => p.tag !== null).slice(0, 4)
  const parallaxOffset = useParallax(0.3)
  const { ref: featuredRef, inView: featuredInView } = useInView(0.1)
  const { ref: bannerRef, inView: bannerInView } = useInView(0.2)
  const { ref: communityRef, inView: communityInView } = useInView(0.1)

  return (
    <div className="pt-14">
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden">
        {/* Parallax background */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=1800&h=1200&fit=crop&auto=format)`,
            backgroundColor: '#0a0a0a',
            transform: `translateY(${parallaxOffset * 0.5}px)`,
            willChange: 'transform',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-[#080808]/20" />

        {/* Floating particles */}
        <ParticleField count={30} />

        {/* Neon line */}
        <div
          className="absolute left-0 right-0 h-px opacity-60"
          style={{
            top: '40%',
            background: 'linear-gradient(90deg, transparent, var(--primary), transparent)',
            animation: 'glow-pulse 3s ease-in-out infinite',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <div className="max-w-3xl">
            <p
              style={{ fontFamily: 'var(--font-condensed)', color: 'var(--primary)', animation: 'reveal-up 0.8s ease-out 0.2s both' }}
              className="text-sm font-700 tracking-[0.3em] mb-4 uppercase"
            >
              NEW SEASON DROP
            </p>
            <h1
              style={{ fontFamily: 'var(--font-display)', lineHeight: 0.9, animation: 'reveal-up 0.8s ease-out 0.4s both' }}
              className="text-[clamp(4rem,14vw,11rem)] uppercase text-white mb-6 leading-none"
            >
              <GlitchText text="UNLEASH" className="block" /><br />
              <span className="text-stroke" style={{ color: 'var(--primary)' }}>
                THE
              </span>{' '}
              <span className="text-stroke-white">
                BEAST
              </span>
            </h1>
            <p
              style={{ fontFamily: 'var(--font-condensed)', animation: 'reveal-up 0.8s ease-out 0.6s both' }}
              className="text-lg text-[var(--muted-foreground)] font-400 max-w-md mb-8 tracking-wide leading-relaxed"
            >
              Official Monster Energy drinks. Built for those who push the limit.
              No apologies. No limits.
            </p>
            <div className="flex flex-wrap gap-4 items-center" style={{ animation: 'reveal-up 0.8s ease-out 0.8s both' }}>
              <button
                onClick={() => setPage('shop')}
                style={{ fontFamily: 'var(--font-condensed)' }}
                className="px-8 py-3.5 bg-[var(--primary)] text-[var(--primary-foreground)] text-base font-700 tracking-[0.2em] uppercase hover:bg-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(57,255,20,0.4)]"
              >
                SHOP DRINKS
              </button>
              <button
                onClick={() => setPage('story')}
                style={{ fontFamily: 'var(--font-condensed)', borderColor: 'rgba(255,255,255,0.3)' }}
                className="px-8 py-3.5 border text-white text-base font-700 tracking-[0.2em] uppercase hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(57,255,20,0.2)]"
              >
                OUR STORY →
              </button>
            </div>
          </div>

          <div
            style={{ borderTop: '1px solid var(--border)', borderLeft: '3px solid var(--primary)' }}
            className="mt-16 pt-6 grid grid-cols-3 gap-0 max-w-xl"
          >
            {[
              { val: '20B+', label: 'CANS SOLD' },
              { val: '47', label: 'COUNTRIES' },
              { val: "'02", label: 'EST.' },
            ].map((s) => (
              <AnimatedCounter key={s.label} value={s.val} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div
        style={{ background: 'var(--primary)', fontFamily: 'var(--font-condensed)', overflow: 'hidden' }}
        className="py-3"
      >
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {Array(6).fill(['UNLEASH THE BEAST', 'NEW SEASON DROP', 'MONSTER ENERGY OFFICIAL', 'ZERO SUGAR AVAILABLE', '30+ FLAVORS WORLDWIDE']).flat().map((t, i) => (
            <span key={i} className="text-[var(--primary-foreground)] text-sm font-700 tracking-[0.2em] uppercase shrink-0">{t}</span>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <section ref={featuredRef} className="max-w-7xl mx-auto px-6 py-20">
        <div className={`flex items-end justify-between mb-12 transition-all duration-700 ${featuredInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <p style={{ fontFamily: 'var(--font-condensed)', color: 'var(--primary)' }} className="text-xs tracking-[0.3em] mb-2 uppercase">JUST DROPPED</p>
            <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-5xl md:text-7xl uppercase text-white leading-none">
              HOT PICKS
            </h2>
          </div>
          <button
            onClick={() => setPage('shop')}
            style={{ fontFamily: 'var(--font-condensed)', borderBottom: '1px solid var(--primary)' }}
            className="text-[var(--primary)] text-sm tracking-widest font-700 pb-1 hover:text-white hover:border-white transition-colors hidden md:block"
          >
            VIEW ALL →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)]">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} onViewProduct={onViewProduct} index={i} />
          ))}
        </div>
      </section>

      {/* How it works */}
      <HowItWorks />

      {/* Split banner */}
      <section ref={bannerRef} className="grid md:grid-cols-2 h-[480px]">
        <div
          className={`relative overflow-hidden flex items-end p-10 min-h-[280px] transition-all duration-700 ${bannerInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          style={{ background: '#0a0a0a' }}
        >
          <img
            src="https://www.stack3d.com/cdn-cgi/imagedelivery/VxICvjMM58xBcfP2QqBfuw/e6258780-094d-4851-2ca3-43d69cba4a00/medium"
            alt="Monster Ultra White"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            style={{ transform: `translateY(${parallaxOffset * 0.2}px)` }}
          />
          <div className="relative z-10">
            <p style={{ fontFamily: 'var(--font-condensed)', color: '#888' }} className="text-xs tracking-[0.3em] mb-2">ZERO SUGAR LINE</p>
            <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-5xl uppercase text-white leading-none mb-4">ULTRA<br />WHITE</h3>
            <button
              onClick={() => setPage('shop')}
              style={{ fontFamily: 'var(--font-condensed)' }}
              className="text-xs tracking-widest text-[var(--primary)] font-700 hover:text-white transition-colors"
            >
              EXPLORE →
            </button>
          </div>
        </div>
        <div
          className={`relative overflow-hidden flex items-end p-10 min-h-[280px] transition-all duration-700 delay-200 ${bannerInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          style={{ background: 'var(--primary)' }}
        >
          <div className="relative z-10">
            <p style={{ fontFamily: 'var(--font-condensed)', color: '#080808', opacity: 0.7 }} className="text-xs tracking-[0.3em] mb-2">NEW DROPS</p>
            <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-5xl uppercase text-[#080808] leading-none mb-4">RESERVE<br />COLLECTION</h3>
            <button
              onClick={() => setPage('shop')}
              style={{ fontFamily: 'var(--font-condensed)', borderBottom: '2px solid #080808' }}
              className="text-xs tracking-widest text-[#080808] font-700 hover:opacity-60 transition-opacity pb-0.5"
            >
              SHOP NOW →
            </button>
          </div>
          <div
            className="absolute right-0 bottom-0 opacity-10 animate-float-slow"
            style={{ fontFamily: 'var(--font-display)', fontSize: '18rem', lineHeight: 1, color: '#080808', pointerEvents: 'none', userSelect: 'none' }}
          >
            M
          </div>
        </div>
      </section>

      {/* Caffeine Comparison */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center gap-4 mb-10">
          <div style={{ height: 1, background: 'var(--border)', flex: 1 }} />
          <p style={{ fontFamily: 'var(--font-condensed)' }} className="text-xs tracking-[0.3em] text-[var(--muted-foreground)] uppercase">CAFFEINE COMPARISON</p>
          <div style={{ height: 1, background: 'var(--border)', flex: 1 }} />
        </div>
        <CaffeineComparison />
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Instagram strip */}
      <section ref={communityRef} className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center gap-4 mb-10">
          <div style={{ height: 1, background: 'var(--border)', flex: 1 }} />
          <p style={{ fontFamily: 'var(--font-condensed)' }} className="text-xs tracking-[0.3em] text-[var(--muted-foreground)] uppercase">THE COMMUNITY</p>
          <div style={{ height: 1, background: 'var(--border)', flex: 1 }} />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {[
            'photo-1628996796796-bcd82e0899d4',
            'photo-1765521398035-cfbdcb4f31c0',
            'photo-1765519991462-2146c0e180c3',
            'photo-1738087798878-5856145bdf4f',
          ].map((id, i) => (
            <div
              key={i}
              className={`relative overflow-hidden aspect-square bg-[var(--muted)] group cursor-pointer transition-all duration-700 ${
                communityInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <img
                src={`https://images.unsplash.com/${id}?w=400&h=400&fit=crop&auto=format`}
                alt="Community post"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[var(--primary)]/0 group-hover:bg-[var(--primary)]/20 transition-colors duration-300" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, transparent 40%, rgba(57, 255, 20, 0.1) 50%, transparent 60%)', animation: 'shine-sweep 2s ease-in-out infinite' }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      <Footer setPage={setPage} />
    </div>
  )
}
