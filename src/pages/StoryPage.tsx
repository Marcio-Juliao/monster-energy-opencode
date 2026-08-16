import Footer from '@/components/Footer'

const timeline = [
  { year: '2002', event: 'Monster Energy founded. One vision: dominate the energy drink market.' },
  { year: '2005', event: 'Monster Ultra series debuts. Zero sugar, zero compromise.' },
  { year: '2010', event: 'Rehab Line launches. Tea + lemonade formula changes the game.' },
  { year: '2015', event: 'Juice Monster introduced. Real fruit juice meets Monster energy.' },
  { year: '2020', event: 'Zero Sugar push. Ultra White becomes the #1 selling energy drink.' },
  { year: '2024', event: 'Reserve Collection. Premium flavors for the true Monster faithful.' },
]

export default function StoryPage() {
  return (
    <div className="pt-14 min-h-screen">
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=1800&h=1000&fit=crop&auto=format)`,
            backgroundColor: '#050505',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <p style={{ fontFamily: 'var(--font-condensed)', color: 'var(--primary)' }} className="text-xs tracking-[0.4em] mb-4 uppercase">
            EST. 2002
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', lineHeight: 0.9 }} className="text-[clamp(3.5rem,12vw,9rem)] uppercase text-white leading-none">
            THIS IS<br /><span style={{ color: 'var(--primary)' }}>MONSTER</span>
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-5xl md:text-6xl uppercase text-white leading-none mb-8">
              BORN FROM<br />
              <span style={{ color: 'var(--primary)' }}>THE EDGE</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-body)' }} className="text-[var(--muted-foreground)] leading-relaxed mb-6">
              We didn't build a brand. We built a movement. From garage skaters to
              world-championship podiums, Monster Energy has always lived where the
              action is — raw, loud, and unapologetic.
            </p>
            <p style={{ fontFamily: 'var(--font-body)' }} className="text-[var(--muted-foreground)] leading-relaxed">
              Our drinks aren't just fuel. They're a declaration. You drink Monster
              because you've earned it — on the track, in the park, on the mountain.
              Every can is packed to deliver the beast within.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-px bg-[var(--border)]">
            {[
              { num: '20B+', label: 'Cans Sold' },
              { num: '47', label: 'Countries' },
              { num: '30+', label: 'Flavors' },
              { num: '22', label: 'Years Running' },
            ].map((s) => (
              <div key={s.label} className="bg-[var(--card)] p-8">
                <div style={{ fontFamily: 'var(--font-display)', color: 'var(--primary)' }} className="text-5xl mb-2">{s.num}</div>
                <div style={{ fontFamily: 'var(--font-condensed)' }} className="text-xs tracking-widest text-[var(--muted-foreground)] uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--secondary)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }} className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p style={{ fontFamily: 'var(--font-condensed)', color: 'var(--primary)' }} className="text-xs tracking-[0.3em] mb-4 uppercase">THE HISTORY</p>
          <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-5xl md:text-7xl uppercase text-white leading-none mb-16">TIMELINE</h2>

          <div className="relative">
            <div className="absolute left-[calc(4rem+1px)] top-0 bottom-0 w-px bg-[var(--border)] hidden md:block" />

            <div className="flex flex-col gap-0">
              {timeline.map((item, i) => (
                <div key={i} className="group flex gap-0 md:gap-16 items-start py-8" style={{ borderBottom: '1px solid var(--border)' }}>
                  <div
                    style={{ fontFamily: 'var(--font-display)', color: i % 2 === 0 ? 'var(--primary)' : 'var(--muted-foreground)', minWidth: '4rem' }}
                    className="text-2xl leading-none pt-1 shrink-0 group-hover:text-[var(--primary)] transition-colors"
                  >
                    {item.year}
                  </div>
                  <div className="hidden md:flex shrink-0 w-3 h-3 rounded-full border-2 border-[var(--border)] group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] transition-all mt-1.5 -ml-1.5" />
                  <p style={{ fontFamily: 'var(--font-condensed)' }} className="text-lg text-white font-400 leading-snug md:pl-12 group-hover:text-[var(--primary)] transition-colors">
                    {item.event}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <p style={{ fontFamily: 'var(--font-condensed)', color: 'var(--primary)' }} className="text-xs tracking-[0.3em] mb-4 uppercase">THE SQUAD</p>
        <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-5xl md:text-7xl uppercase text-white leading-none mb-12">TEAM<br />MONSTER</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--border)]">
          {[
            { name: 'LEWIS HAMILTON', sport: 'FORMULA 1', img: 'photo-1765521398035-cfbdcb4f31c0' },
            { name: 'VALENTINO ROSSI', sport: 'MOTOGP', img: 'photo-1753156395199-3169e6c593c2' },
            { name: 'LANDO NORRIS', sport: 'FORMULA 1', img: 'photo-1765519991462-2146c0e180c3' },
          ].map((athlete) => (
            <div key={athlete.name} className="bg-[var(--card)] group overflow-hidden cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden bg-[var(--muted)]">
                <img
                  src={`https://images.unsplash.com/${athlete.img}?w=600&h=750&fit=crop&auto=format`}
                  alt={athlete.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p style={{ fontFamily: 'var(--font-condensed)', color: 'var(--primary)' }} className="text-xs tracking-widest mb-1">{athlete.sport}</p>
                  <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl text-white uppercase leading-tight">{athlete.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer setPage={() => {}} />
    </div>
  )
}
