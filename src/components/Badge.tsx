import { BADGE_LABELS } from '../data/menuConfig'
import type { BadgeType } from '../data/types'

type BadgeProps = {
  type: BadgeType
  className?: string
}

export function Badge({ type, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-md border border-gold/40 bg-gold/15 px-2 py-0.5 text-[9px] font-semibold tracking-widest text-gold uppercase ${className}`}
    >
      {BADGE_LABELS[type]}
    </span>
  )
}
