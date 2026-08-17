import { useInView } from '@/hooks/useInView'

const steps = [
  {
    icon: '⚡',
    title: 'CHOOSE YOUR FLAVOR',
    desc: 'Selecione entre dezenas de sabores — do clássico Original ao refrescante Ultra White. Tem Monster para cada momento do dia.',
  },
  {
    icon: '🎯',
    title: 'FUEL YOUR DAY',
    desc: 'Cada lata entrega o mix perfeito de cafeína, taurina e vitaminas do complexo B. Energia que você sente em minutos.',
  },
  {
    icon: '🔥',
    title: 'UNLEASH THE BEAST',
    desc: 'Sinta o impacto e domine seu dia. Treino, estudo, trabalho — Monster te leva ao próximo nível.',
  },
]

export default function HowItWorks() {
  const { ref, inView } = useInView(0.15)

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex items-center gap-4 mb-14">
        <div style={{ height: 1, background: 'var(--border)', flex: 1 }} />
        <p style={{ fontFamily: 'var(--font-condensed)' }} className="text-xs tracking-[0.3em] text-[var(--muted-foreground)] uppercase">HOW IT WORKS</p>
        <div style={{ height: 1, background: 'var(--border)', flex: 1 }} />
      </div>

      <div className="grid md:grid-cols-3 gap-px bg-[var(--border)]">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className={`bg-[#0a0a0a] p-10 flex flex-col items-center text-center transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            <div className="text-5xl mb-6">{step.icon}</div>
            <div
              className="w-8 h-px mb-6"
              style={{ background: 'var(--primary)' }}
            />
            <p style={{ fontFamily: 'var(--font-condensed)', color: 'var(--primary)' }} className="text-xs tracking-[0.3em] mb-3">STEP {i + 1}</p>
            <h3 style={{ fontFamily: 'var(--font-display)' }} className="text-2xl uppercase text-white mb-4">{step.title}</h3>
            <p style={{ fontFamily: 'var(--font-body)' }} className="text-sm text-[var(--muted-foreground)] leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
