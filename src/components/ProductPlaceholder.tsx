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
    default: 'border-[rgba(214,179,90,0.22)]',
    shisha: 'border-gold/30',
    sweet: 'border-diamond-amber/28',
    drink: 'border-[rgba(214,179,90,0.18)]',
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
      className={`product-thumb-frame relative aspect-square shrink-0 overflow-hidden rounded-2xl border bg-deep/50 shadow-[inset_0_0_0_1px_rgba(214,179,90,0.08),0_2px_12px_rgba(0,0,0,0.35)] ${borderTint} ${className}`}
    >
      {image ? (
        <img
          src={image}
          alt={name}
          width={300}
          height={300}
          className="h-full w-full object-cover object-center brightness-[1.12] contrast-[1.05]"
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
