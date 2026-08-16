export default function MonsterLogo({ className = '', size = 120 }: { className?: string; size?: number }) {
  return (
    <img
      src="/monster-logo.png"
      alt="Monster Energy"
      className={className}
      style={{ height: size, width: 'auto' }}
    />
  )
}
