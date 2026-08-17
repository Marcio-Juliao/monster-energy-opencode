import { useInView } from '@/hooks/useInView'

const reviews = [
  {
    name: '@jake_runs',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format',
    stars: 5,
    text: 'Monster Ultra White é o melhor pré-treino que já experimentei. Zero açúcar, sabor incrível e sem aquela queda de energia depois.',
  },
  {
    name: '@maya_code',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&auto=format',
    stars: 5,
    text: 'Preciso de foco pra programar. Uma lata de Monster e o código flui sozinho. O sabor Peach Keen é viciante.',
  },
  {
    name: '@lucas_fit',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&auto=format',
    stars: 4,
    text: '300mg de cafeína no Monster Original. Nenhum outro drink chega perto. Uso todo dia antes do treino.',
  },
  {
    name: '@ana_vibes',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&auto=format',
    stars: 5,
    text: 'O Juice Monster é viciante. Mango Loco é meu favorito de todos os tempos. Refrigerante nunca mais.',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <span className="text-[var(--primary)] tracking-wider">
      {'★'.repeat(count)}{'☆'.repeat(5 - count)}
    </span>
  )
}

export default function Testimonials() {
  const { ref, inView } = useInView(0.1)

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex items-center gap-4 mb-4">
        <div style={{ height: 1, background: 'var(--border)', flex: 1 }} />
        <p style={{ fontFamily: 'var(--font-condensed)' }} className="text-xs tracking-[0.3em] text-[var(--muted-foreground)] uppercase">VERIFIED BUYERS</p>
        <div style={{ height: 1, background: 'var(--border)', flex: 1 }} />
      </div>

      <div className="text-center mb-12">
        <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-5xl md:text-6xl uppercase text-white leading-none">
          WHAT THEY SAY
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-[var(--border)]">
        {reviews.map((r, i) => (
          <div
            key={r.name}
            className={`bg-[#0a0a0a] p-8 transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="flex items-center gap-4 mb-4">
              <img src={r.avatar} alt={r.name} className="w-12 h-12 rounded-full object-cover border border-[var(--border)]" />
              <div>
                <p style={{ fontFamily: 'var(--font-condensed)' }} className="text-white font-700 tracking-wide">{r.name}</p>
                <Stars count={r.stars} />
              </div>
            </div>
            <p style={{ fontFamily: 'var(--font-body)' }} className="text-sm text-[var(--muted-foreground)] leading-relaxed italic">"{r.text}"</p>
          </div>
        ))}
      </div>
    </section>
  )
}
