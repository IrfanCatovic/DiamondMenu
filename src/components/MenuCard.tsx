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

  const cardClass =
    variant === 'compact'
      ? 'glass-card flex items-center gap-3 p-3'
      : 'glass-card flex gap-4 p-4'

  const content = (
    <>
      <ProductPlaceholder
        name={item.name}
        variant="default"
        className={variant === 'compact' ? 'h-12 w-12 text-sm' : 'h-16 w-16'}
      />
      <div className="min-w-0 flex-1">
        {badge ? <Badge type={badge} className="mb-2" /> : null}
        <h3 className="font-medium text-champagne">{item.name}</h3>
        {item.description ? (
          <p className="mt-1 text-sm text-champagne/55">{item.description}</p>
        ) : null}
      </div>
      {price ? (
        <p className="shrink-0 self-center font-semibold text-gold">{price}</p>
      ) : (
        <span className="shrink-0 self-center w-12" aria-hidden />
      )}
    </>
  )

  if (reducedMotion) {
    return <article className={cardClass}>{content}</article>
  }

  return (
    <motion.article
      className={`${cardClass} transition-colors hover:border-gold/30`}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.article>
  )
}
