import { motion } from 'framer-motion'
import type { MenuItem } from '../data/types'
import { formatPrice } from '../utils/formatPrice'
import { ProductPlaceholder } from './ProductPlaceholder'
import { SectionDivider } from './SectionDivider'
import { useReducedMotion } from '../hooks/useReducedMotion'

type SweetSectionProps = {
  items: MenuItem[]
}

function SweetCard({ item }: { item: MenuItem }) {
  const price = formatPrice(item.price)
  return (
    <article className="menu-item-card flex min-h-[4.5rem] items-center gap-4 px-4 py-4 sm:px-5 sm:py-4">
      <ProductPlaceholder
        name={item.name}
        image={item.image}
        variant="sweet"
        className="h-[60px] w-[60px] shrink-0 text-lg sm:h-16 sm:w-16"
      />
      <div className="flex min-w-0 flex-1 flex-col justify-center px-1">
        <h3 className="font-display text-[15px] font-semibold leading-snug text-champagne sm:text-base">
          {item.name}
        </h3>
        {item.description ? (
          <p className="mt-1.5 text-[13px] leading-snug text-muted sm:text-sm">
            {item.description}
          </p>
        ) : null}
        {price ? (
          <p className="mt-2.5 text-[0.9375rem] font-semibold tabular-nums text-gold sm:text-base">
            {price}
          </p>
        ) : null}
      </div>
    </article>
  )
}

export function SweetSection({ items }: SweetSectionProps) {
  const reducedMotion = useReducedMotion()

  const Wrapper = reducedMotion ? 'section' : motion.section
  const wrapperProps = reducedMotion
    ? { id: 'slatki-kutak', className: 'section-scroll-margin px-4 py-12 sm:py-14' }
    : {
        id: 'slatki-kutak',
        className: 'section-scroll-margin px-4 py-12 sm:py-14',
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-48px' },
        transition: { duration: 0.5 },
      }

  return (
    <Wrapper {...(wrapperProps as object)}>
      <SectionDivider title="Slatki kutak" />
      <ul className="mx-auto flex max-w-lg flex-col gap-3 sm:gap-4">
        {items.map((item) => (
          <li key={item.id}>
            <SweetCard item={item} />
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}
