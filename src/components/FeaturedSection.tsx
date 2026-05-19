import { motion } from 'framer-motion'
import { getFeaturedProducts } from '../data/menuConfig'
import { formatPrice } from '../utils/formatPrice'
import { Badge } from './Badge'
import { ProductPlaceholder } from './ProductPlaceholder'
import { SectionDivider } from './SectionDivider'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function FeaturedSection() {
  const items = getFeaturedProducts()
  const reducedMotion = useReducedMotion()

  return (
    <section className="px-4 py-8" aria-labelledby="featured-heading">
      <SectionDivider title="Popularno" />
      <h2 id="featured-heading" className="sr-only">
        Popularno
      </h2>
      <div className="hide-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2">
        {items.map((item, index) => {
          const price = formatPrice(item.price)
          const card = (
            <article className="glass-card-premium relative flex h-full min-h-[200px] w-[260px] shrink-0 snap-center flex-col overflow-hidden p-4 sm:w-[280px]">
              <Badge type={item.badge} className="absolute left-3 top-3 z-10" />
              <ProductPlaceholder
                name={item.name}
                variant={
                  item.id.includes('africka') || item.id.includes('dupla')
                    ? 'shisha'
                    : item.id === 'banana-split'
                      ? 'sweet'
                      : 'drink'
                }
                className="mb-3 h-24 w-full rounded-lg text-2xl"
              />
              <h3 className="font-display text-lg font-semibold text-champagne">
                {item.name}
              </h3>
              {item.description ? (
                <p className="mt-1 line-clamp-2 text-sm text-champagne/55">
                  {item.description}
                </p>
              ) : null}
              {price ? (
                <p className="mt-auto pt-3 text-right font-semibold text-gold">
                  {price}
                </p>
              ) : null}
            </article>
          )

          if (reducedMotion) {
            return (
              <div key={item.id}>{card}</div>
            )
          }

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              {card}
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
