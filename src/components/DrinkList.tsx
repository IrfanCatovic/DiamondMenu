import { motion } from 'framer-motion'
import type { MenuItem } from '../data/types'
import { formatPrice } from '../utils/formatPrice'
import { ProductPlaceholder } from './ProductPlaceholder'
import { useReducedMotion } from '../hooks/useReducedMotion'

type DrinkListProps = {
  items: MenuItem[]
}

function DrinkRow({ item }: { item: MenuItem }) {
  const reducedMotion = useReducedMotion()
  const price = formatPrice(item.price)

  const inner = (
    <>
      <ProductPlaceholder
        name={item.name}
        image={item.image}
        variant="drink"
        className="h-[60px] w-[60px] text-xs sm:h-16 sm:w-16"
      />
      <div className="min-w-0 flex-1 px-1">
        <p className="text-[15px] font-semibold leading-snug tracking-tight text-champagne sm:text-base">
          {item.name}
        </p>
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
        <span
          className="menu-item-price shrink-0 self-center"
          aria-hidden
        />
      )}
    </>
  )

  const rowClass =
    'menu-item-card flex min-h-[4.5rem] items-center gap-3 px-4 py-3.5 sm:gap-4 sm:px-5 sm:py-4'

  if (reducedMotion) {
    return <article className={rowClass}>{inner}</article>
  }

  return (
    <motion.article
      className={rowClass}
      whileTap={{ scale: 0.992 }}
    >
      {inner}
    </motion.article>
  )
}

export function DrinkList({ items }: DrinkListProps) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item.id}>
          <DrinkRow item={item} />
        </li>
      ))}
    </ul>
  )
}
