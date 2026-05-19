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
        variant="drink"
        className="h-11 w-11 text-xs"
      />
      <div className="min-w-0 flex-1">
        <p className="font-medium text-champagne leading-tight">{item.name}</p>
        {item.description ? (
          <p className="mt-0.5 text-xs text-champagne/50">{item.description}</p>
        ) : null}
      </div>
      {price ? (
        <p className="shrink-0 font-semibold text-gold text-sm">{price}</p>
      ) : (
        <span className="shrink-0 w-10" aria-hidden />
      )}
    </>
  )

  if (reducedMotion) {
    return (
      <article className="glass-card flex items-center gap-3 px-3 py-2.5">
        {inner}
      </article>
    )
  }

  return (
    <motion.article
      className="glass-card flex items-center gap-3 px-3 py-2.5 transition-colors hover:border-gold/25"
      whileTap={{ scale: 0.99 }}
    >
      {inner}
    </motion.article>
  )
}

export function DrinkList({ items }: DrinkListProps) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <li key={item.id}>
          <DrinkRow item={item} />
        </li>
      ))}
    </ul>
  )
}
