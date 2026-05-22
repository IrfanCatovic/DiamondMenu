import { motion } from 'framer-motion'
import type { MenuItem } from '../data/types'
import { formatPrice } from '../utils/formatPrice'
import { ProductPlaceholder } from './ProductPlaceholder'
import { SectionDivider } from './SectionDivider'
import { useReducedMotion } from '../hooks/useReducedMotion'

type BreakfastSectionProps = {
  items: MenuItem[]
}

function BreakfastCard({ item }: { item: MenuItem }) {
  const price = formatPrice(item.price)
  return (
    <article className="glass-card-warm flex min-h-[5.5rem] items-stretch gap-4 overflow-hidden rounded-2xl p-4 sm:min-h-[6rem] sm:p-5">
      <ProductPlaceholder
        name={item.name}
        image={item.image}
        variant="sweet"
        className="h-[72px] w-[72px] shrink-0 text-lg sm:h-20 sm:w-20"
      />
      <div className="flex min-w-0 flex-1 flex-col justify-center px-0.5">
        <p className="text-[10px] font-medium tracking-[0.2em] text-amber/80 uppercase">
          Doručak
        </p>
        <h3 className="mt-1 font-display text-base font-semibold leading-snug text-champagne sm:text-lg">
          {item.name}
        </h3>
        {price ? (
          <p className="mt-2.5 text-[0.9375rem] font-semibold tabular-nums text-gold sm:text-base">
            {price}
          </p>
        ) : null}
      </div>
    </article>
  )
}

export function BreakfastSection({ items }: BreakfastSectionProps) {
  const reducedMotion = useReducedMotion()

  const Wrapper = reducedMotion ? 'section' : motion.section
  const wrapperProps = reducedMotion
    ? { id: 'dorucak', className: 'section-scroll-margin px-4 py-12 sm:py-14' }
    : {
        id: 'dorucak',
        className: 'section-scroll-margin px-4 py-12 sm:py-14',
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-48px' },
        transition: { duration: 0.5 },
      }

  return (
    <Wrapper {...(wrapperProps as object)}>
      <SectionDivider title="Doručak" badge="Toplo i domaće" />
      <ul className="mx-auto flex max-w-lg flex-col gap-4 sm:gap-5">
        {items.map((item) => (
          <li key={item.id}>
            <BreakfastCard item={item} />
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}
