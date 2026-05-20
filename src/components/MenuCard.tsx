import { motion } from 'framer-motion'
import type { MenuItem } from '../data/types'
import type { BadgeType } from '../data/types'
import { formatPrice } from '../utils/formatPrice'
import { Badge } from './Badge'
import { ProductPlaceholder } from './ProductPlaceholder'
import { useReducedMotion } from '../hooks/useReducedMotion'

type MenuCardProps = {
  item: MenuItem
  badge?: BadgeType
  variant?: 'default' | 'compact'
}

export function MenuCard({
  item,
  badge,
  variant = 'default',
}: MenuCardProps) {
  const reducedMotion = useReducedMotion()
  const price = formatPrice(item.price)

  const thumbClass =
    variant === 'compact'
      ? 'h-[60px] w-[60px] text-sm sm:h-16 sm:w-16'
      : 'h-[60px] w-[60px] sm:h-16 sm:w-16'

  const cardClass =
    variant === 'compact'
      ? 'menu-item-card flex min-h-[4.5rem] items-center gap-3 px-4 py-3.5 sm:gap-4 sm:px-5 sm:py-4'
      : 'menu-item-card flex min-h-[4.75rem] items-center gap-4 px-5 py-4 sm:py-5'

  const content = (
    <>
      <ProductPlaceholder
        name={item.name}
        image={item.image}
        variant="default"
        className={thumbClass}
      />
      <div className="min-w-0 flex-1 px-1">
        {badge ? <Badge type={badge} className="mb-2" /> : null}
        <h3 className="text-[15px] font-semibold leading-snug tracking-tight text-champagne sm:text-base">
          {item.name}
        </h3>
        {item.description ? (
          <p className="mt-1 text-[13px] leading-snug text-muted sm:text-sm">
            {item.description}
          </p>
        ) : null}
      </div>
      {price ? (
        <p className="menu-item-price shrink-0 self-center text-[0.9375rem] font-semibold tabular-nums text-gold sm:text-base">
          {price}
        </p>
      ) : (
        <span className="menu-item-price shrink-0 self-center" aria-hidden />
      )}
    </>
  )

  if (reducedMotion) {
    return <article className={cardClass}>{content}</article>
  }

  return (
    <motion.article className={cardClass} whileTap={{ scale: 0.992 }}>
      {content}
    </motion.article>
  )
}
