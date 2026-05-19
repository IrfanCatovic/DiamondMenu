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
    <article className="glass-card-warm flex gap-4 p-4 transition-colors hover:border-diamond-amber/40">
      <ProductPlaceholder
        name={item.name}
        variant="sweet"
        className="h-20 w-20 shrink-0 text-xl"
      />
      <div className="flex min-w-0 flex-1 flex-col justify-center">
        <h3 className="font-display text-lg font-medium text-champagne">
          {item.name}
        </h3>
        {item.description ? (
          <p className="mt-1 text-sm text-champagne/55">{item.description}</p>
        ) : null}
        {price ? (
          <p className="mt-2 font-semibold text-diamond-amber">{price}</p>
        ) : null}
      </div>
    </article>
  )
}

export function SweetSection({ items }: SweetSectionProps) {
  const reducedMotion = useReducedMotion()

  const Wrapper = reducedMotion ? 'section' : motion.section
  const wrapperProps = reducedMotion
    ? { id: 'slatki-kutak', className: 'section-scroll-margin px-4 py-10' }
    : {
        id: 'slatki-kutak',
        className: 'section-scroll-margin px-4 py-10',
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-40px' },
        transition: { duration: 0.5 },
      }

  return (
    <Wrapper {...(wrapperProps as object)}>
      <SectionDivider title="Slatki kutak" />
      <ul className="mx-auto flex max-w-lg flex-col gap-4">
        {items.map((item) => (
          <li key={item.id}>
            <SweetCard item={item} />
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}
