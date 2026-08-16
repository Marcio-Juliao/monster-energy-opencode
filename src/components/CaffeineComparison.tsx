export default function CaffeineComparison() {
  const items = [
    { name: 'ESPRESSO SHOT', mg: 63, color: '#8B4513' },
    { name: 'COLA (12oz)', mg: 34, color: '#8B0000' },
    { name: 'GREEN TEA', mg: 28, color: '#2E8B57' },
    { name: 'MONSTER ULTRA', mg: 150, color: '#E8E8E8' },
    { name: 'MONSTER ORIGINAL', mg: 160, color: '#39FF14' },
    { name: 'MONSTER REHAB', mg: 200, color: '#FFEB3B' },
  ]

  const maxMg = 200

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item.name} className="flex items-center gap-4">
          <span
            style={{ fontFamily: 'var(--font-condensed)', minWidth: '160px' }}
            className="text-xs tracking-widest text-[var(--muted-foreground)] uppercase text-right"
          >
            {item.name}
          </span>
          <div className="flex-1 h-4 bg-[var(--muted)] overflow-hidden">
            <div
              className="h-full transition-all duration-700"
              style={{
                width: `${(item.mg / maxMg) * 100}%`,
                background: item.color,
              }}
            />
          </div>
          <span
            style={{ fontFamily: 'var(--font-condensed)', minWidth: '60px', color: item.color }}
            className="text-xs font-700 tracking-wider"
          >
            {item.mg}mg
          </span>
        </div>
      ))}
    </div>
  )
}
