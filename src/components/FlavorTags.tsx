import { SHISHA_FLAVORS } from '../data/menuConfig'
import type { FlavorTag } from '../data/types'

const FLAVOR_META: Record<
  FlavorTag,
  { label: string; icon: string }
> = {
  fresh: { label: 'Fresh', icon: '🍃' },
  sweet: { label: 'Sweet', icon: '🍬' },
  fruity: { label: 'Fruity', icon: '🍓' },
  strong: { label: 'Strong', icon: '🔥' },
  creamy: { label: 'Creamy', icon: '🍰' },
}

type FlavorTagsProps = {
  itemId: string
  size?: 'sm' | 'md'
}

export function FlavorTags({ itemId, size = 'sm' }: FlavorTagsProps) {
  const flavors = SHISHA_FLAVORS[itemId]
  if (!flavors?.length) return null

  const textSize = size === 'md' ? 'text-[11px]' : 'text-[10px]'

  return (
    <div className="flex flex-wrap gap-1.5">
      {flavors.map((f) => (
        <span
          key={f}
          className={`inline-flex items-center gap-1 rounded-full border border-[rgba(214,179,90,0.12)] bg-white/[0.04] px-2 py-0.5 ${textSize} text-champagne/85`}
        >
          <span aria-hidden>{FLAVOR_META[f].icon}</span>
          {FLAVOR_META[f].label}
        </span>
      ))}
    </div>
  )
}

export function FlavorLegend() {
  const all: FlavorTag[] = ['fresh', 'sweet', 'fruity', 'strong', 'creamy']
  return (
    <div className="mt-5 flex flex-wrap justify-center gap-3 border-t border-[rgba(214,179,90,0.1)] pt-5">
      {all.map((f) => (
        <span
          key={f}
          className="flex items-center gap-1.5 text-[10px] text-muted"
        >
          <span>{FLAVOR_META[f].icon}</span>
          {FLAVOR_META[f].label}
        </span>
      ))}
    </div>
  )
}
