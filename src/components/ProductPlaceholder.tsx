type ProductPlaceholderProps = {
  name: string
  variant?: 'default' | 'shisha' | 'sweet' | 'drink'
  className?: string
}

export function ProductPlaceholder({
  name,
  variant = 'default',
  className = '',
}: ProductPlaceholderProps) {
  const initial = name.charAt(0).toUpperCase()
  const gradients = {
    default:
      'from-lounge via-deep to-lounge border-white/10',
    shisha:
      'from-[#2a1810] via-[#1a0f0a] to-deep border-gold/20',
    sweet:
      'from-[#2a1a12] via-[#1f140e] to-lounge border-diamond-amber/25',
    drink:
      'from-[#121a14] via-deep to-lounge border-green-accent/20',
  }

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-xl border bg-gradient-to-br font-display text-lg text-gold/50 ${gradients[variant]} ${className}`}
      aria-hidden
    >
      {initial}
    </div>
  )
}
