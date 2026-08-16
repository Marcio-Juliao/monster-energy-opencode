import type { Page } from '@/types'
import MonsterLogo from './MonsterLogo'

export default function Footer({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: '#050505' }} className="pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4"><MonsterLogo size={100} /></div>
            <p style={{ fontFamily: 'var(--font-body)' }} className="text-xs text-[var(--muted-foreground)] leading-relaxed">
              Unleash the Beast. Energy drinks for those who push the limit.
            </p>
          </div>
          {[
            { heading: 'FLAVORS', links: ['Original', 'Ultra', 'Zero Sugar', 'Juice', 'Reserve'] },
            { heading: 'BRAND', links: ['Our Story', 'Athletes', 'Events', 'Careers', 'Press'] },
            { heading: 'HELP', links: ['Store Locator', 'Nutrition Facts', 'FAQ', 'Contact', 'Terms'] },
          ].map((col) => (
            <div key={col.heading}>
              <p style={{ fontFamily: 'var(--font-condensed)' }} className="text-xs font-700 tracking-[0.2em] text-white mb-4 uppercase">{col.heading}</p>
              <ul className="flex flex-col gap-2">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" style={{ fontFamily: 'var(--font-condensed)' }} className="text-xs text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors tracking-wide">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid var(--border)' }} className="pt-8 mb-6">
          <p style={{ fontFamily: 'var(--font-condensed)' }} className="text-[10px] text-[var(--muted-foreground)] tracking-wide leading-relaxed max-w-3xl">
            Not recommended for children, pregnant or nursing women, or persons sensitive to caffeine.
            Consume responsibly. Monster Energy products are not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>

        <div style={{ borderTop: '1px solid var(--border)' }} className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p style={{ fontFamily: 'var(--font-condensed)' }} className="text-xs text-[var(--muted-foreground)] tracking-wider">
            &copy; 2026 MONSTER ENERGY COMPANY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            {['INSTAGRAM', 'YOUTUBE', 'X', 'TIKTOK'].map((s) => (
              <a key={s} href="#" style={{ fontFamily: 'var(--font-condensed)' }} className="text-xs text-[var(--muted-foreground)] hover:text-[var(--primary)] tracking-widest transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
