import type { Page } from '@/types'
import MonsterLogo from './MonsterLogo'

export default function Footer({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <>
      {/* Wave separator */}
      <div className="wave-separator" style={{ background: '#080808' }}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '60px' }}>
          <path
            d="M0,64 C200,20 400,100 600,64 C800,28 1000,80 1200,64 L1200,120 L0,120 Z"
            fill="#050505"
            style={{ animation: 'wave 8s ease-in-out infinite' }}
          />
          <path
            d="M0,80 C200,100 400,20 600,80 C800,100 1000,40 1200,80 L1200,120 L0,120 Z"
            fill="#050505"
            opacity="0.5"
            style={{ animation: 'wave 6s ease-in-out infinite reverse' }}
          />
        </svg>
      </div>

      <footer style={{ background: '#050505' }} className="pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            <div className="col-span-2 md:col-span-1">
              <div className="mb-4 animate-glow-text"><MonsterLogo size={100} /></div>
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
                      <a href="#" style={{ fontFamily: 'var(--font-condensed)' }} className="text-xs text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-all duration-300 tracking-wide hover:translate-x-1 inline-block">
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

          <div style={{ borderTop: '1px solid var(--border)' }} className="pt-6 mb-6">
            <p style={{ fontFamily: 'var(--font-body)' }} className="text-[10px] text-[#555] tracking-wide leading-relaxed max-w-3xl text-center mx-auto">
              This site is a college exercise for academic purposes only. Developed with OpenCode using Artificial Intelligence.
              No commercial validity. This is not an official Monster Energy website.
            </p>
          </div>

          <div style={{ borderTop: '1px solid var(--border)' }} className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p style={{ fontFamily: 'var(--font-condensed)' }} className="text-xs text-[var(--muted-foreground)] tracking-wider">
              &copy; 2026 MONSTER ENERGY COMPANY. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-6">
              {['INSTAGRAM', 'YOUTUBE', 'X', 'TIKTOK'].map((s) => (
                <a key={s} href="#" style={{ fontFamily: 'var(--font-condensed)' }} className="social-glow text-xs text-[var(--muted-foreground)] tracking-widest transition-all duration-300">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
