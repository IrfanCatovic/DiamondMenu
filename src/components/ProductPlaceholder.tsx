/**
 * Square image frame for menu items. Source assets should be **300×300 px**
 * (1:1); they are scaled with object-cover to fit each slot.
 */
type ProductPlaceholderProps = {
  name: string
  /** Path under public/, e.g. `/images/red-bull.webp` */
  image?: string
  variant?: 'default' | 'shisha' | 'sweet' | 'drink'
  /** Outer frame: always square — set width (e.g. `w-14`, `w-full max-w-[220px]`). */
  className?: string
}

export function ProductPlaceholder({
  name,
  image,
  variant = 'default',
  className = '',
}: ProductPlaceholderProps) {
  const initial = name.charAt(0).toUpperCase()
  const borderTint = {
    default: 'border-white/10',
    shisha: 'border-gold/25',
    sweet: 'border-diamond-amber/30',
    drink: 'border-green-accent/25',
  }[variant]

  const fallbackBg = {
    default:
      'from-lounge via-deep to-lounge bg-gradient-to-br text-gold/50',
    shisha:
      'from-[#2a1810] via-[#1a0f0a] to-deep bg-gradient-to-br text-gold/50',
    sweet:
      'from-[#2a1a12] via-[#1f140e] to-lounge bg-gradient-to-br text-gold/50',
    drink:
      'from-[#121a14] via-deep to-lounge bg-gradient-to-br text-gold/50',
  }[variant]

  return (
    <div
      className={`relative aspect-square shrink-0 overflow-hidden rounded-xl border bg-deep/40 ${borderTint} ${className}`}
    >
      {image ? (
        <img
          src={image}
          alt={name}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div
          className={`flex h-full w-full items-center justify-center font-display text-lg ${fallbackBg}`}
          aria-hidden
        >
          {initial}
        </div>
      )}
    </div>
  )
}
