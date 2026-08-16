export default function NutritionBadge({ caffeine, calories, volume }: { caffeine: number; calories: number; volume: string }) {
  return (
    <div className="flex items-center gap-3 text-[10px] tracking-wider" style={{ fontFamily: 'var(--font-condensed)' }}>
      <span className="text-[var(--muted-foreground)]">
        <span className="text-white font-700">{caffeine}</span>mg
      </span>
      <span className="text-[var(--muted-foreground)]">
        <span className="text-white font-700">{calories}</span>cal
      </span>
      <span className="text-[var(--muted-foreground)]">
        {volume}
      </span>
    </div>
  )
}
