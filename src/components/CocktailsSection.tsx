import { motion } from 'framer-motion'
import type { MenuItem } from '../data/types'
import { formatPrice } from '../utils/formatPrice'
import { ProductPlaceholder } from './ProductPlaceholder'
import { SectionDivider } from './SectionDivider'
import { useReducedMotion } from '../hooks/useReducedMotion'

type CocktailsSectionProps = {
  items: MenuItem[]
}

function CocktailCard({ item, index }: { item: MenuItem; index: number }) {
  const price = formatPrice(item.price)
  const reducedMotion = useReducedMotion()

  const card = (
    <article className="glass-card-premium relative flex h-full min-h-[260px] w-[min(86vw,280px)] shrink-0 snap-center flex-col overflow-hidden rounded-3xl border border-[rgba(214,179,90,0.2)] p-5 shadow-[0_12px_40px_rgba(0,0,0,0.45)] sm:min-h-[280px] sm:w-[300px] sm:p-6">
      <div
        className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(100,160,255,0.12),transparent)]"
        aria-hidden
      />
      <ProductPlaceholder
        name={item.name}
        image={item.image}
        variant="drink"
        className="mb-4 w-full rounded-2xl"
      />
      <div className="flex min-h-0 flex-1 flex-col px-0.5">
        <p className="text-[10px] font-medium tracking-[0.22em] text-gold/70 uppercase">
          Diamond koktel
        </p>
        <h3 className="mt-1.5 font-display text-base font-semibold leading-snug text-champagne sm:text-lg">
          {item.name}
        </h3>
        {item.description ? (
          <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-muted sm:text-sm">
            {item.description}
          </p>
        ) : null}
        {price ? (
          <p className="mt-auto border-t border-[rgba(214,179,90,0.1)] pt-4 text-right text-sm font-semibold tabular-nums tracking-tight text-gold sm:text-[0.95rem]">
            {price}
          </p>
        ) : null}
      </div>
    </article>
  )

  if (reducedMotion) {
    return <div>{card}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
    >
      {card}
    </motion.div>
  )
}

export function CocktailsSection({ items }: CocktailsSectionProps) {
  const reducedMotion = useReducedMotion()

  const Wrapper = reducedMotion ? 'section' : motion.section
  const wrapperProps = reducedMotion
    ? { id: 'kokteli', className: 'section-scroll-margin px-4 py-12 sm:py-14' }
    : {
        id: 'kokteli',
        className: 'section-scroll-margin px-4 py-12 sm:py-14',
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-48px' },
        transition: { duration: 0.5 },
      }

  return (
    <Wrapper {...(wrapperProps as object)}>
      <SectionDivider title="Kokteli" badge="Signature mix" />
      <div className="hide-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 pt-1">
        {items.map((item, index) => (
          <CocktailCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </Wrapper>
  )
}
