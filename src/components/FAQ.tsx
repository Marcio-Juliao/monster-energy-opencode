import { useState } from 'react'
import { useInView } from '@/hooks/useInView'

const faqs = [
  {
    q: 'Monster contém quanto cafeína?',
    a: 'De 30mg (Ultra Sunrise) a 300mg (Monster Maxx). A maioria das latas de 473ml contém 160mg de cafeína — equivalente a xícaras de café.',
  },
  {
    q: 'Monster é adequado para atletas?',
    a: 'Sim. Monster é usado por atletas profissionais de F1, MotoGP, MMA e skate. A linha Ultra zero açúcar é especialmente popular entre quem treina.',
  },
  {
    q: 'Bebidas zero açúcar são saudáveis?',
    a: 'Contêm zero açúcar e poucas calorias, mas contêm cafeína e outros estimulantes. Consumir com moderação e não substituir água.',
  },
  {
    q: 'Qual o sabor mais vendido?',
    a: 'Monster Original (verde) continua sendo o #1 mundialmente. Ultra White e Juice Monster Mango Loco lideram nas categorias zero açúcar e frutas.',
  },
  {
    q: 'Onde posso comprar?',
    a: 'Em supermercados, lojas de conveniência, gasolinções e pela nossa loja online. Use o Store Locator para encontrar o ponto de venda mais próximo.',
  },
  {
    q: 'Monster lanças edições limitadas?',
    a: 'Sim. A linha Reserve Collection e edições sazonais são lançadas periodicamente. Fique de olho nas nossas redes sociais para não perder.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const { ref, inView } = useInView(0.1)

  return (
    <section ref={ref} className="max-w-3xl mx-auto px-6 py-20">
      <div className="flex items-center gap-4 mb-4">
        <div style={{ height: 1, background: 'var(--border)', flex: 1 }} />
        <p style={{ fontFamily: 'var(--font-condensed)' }} className="text-xs tracking-[0.3em] text-[var(--muted-foreground)] uppercase">FAQ</p>
        <div style={{ height: 1, background: 'var(--border)', flex: 1 }} />
      </div>

      <div className="text-center mb-12">
        <h2 style={{ fontFamily: 'var(--font-display)' }} className="text-5xl md:text-6xl uppercase text-white leading-none">
          GOT QUESTIONS?
        </h2>
      </div>

      <div className="flex flex-col gap-px bg-[var(--border)]">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={`bg-[#0a0a0a] transition-all duration-500 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: `${i * 0.05}s` }}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <span style={{ fontFamily: 'var(--font-condensed)' }} className="text-white font-700 tracking-wide text-lg pr-4">{faq.q}</span>
              <span
                className="text-2xl font-700 shrink-0 transition-transform duration-300"
                style={{ fontFamily: 'var(--font-condensed)', color: 'var(--primary)', transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
              >
                +
              </span>
            </button>
            <div
              className="overflow-hidden transition-all duration-300"
              style={{ maxHeight: open === i ? '200px' : '0px' }}
            >
              <p style={{ fontFamily: 'var(--font-body)' }} className="px-6 pb-6 text-sm text-[var(--muted-foreground)] leading-relaxed">
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
