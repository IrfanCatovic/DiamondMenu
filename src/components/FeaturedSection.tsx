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
    <section className="px-4 py-10 sm:py-11" aria-labelledby="featured-heading">
      <SectionDivider title="Popularno" />
      <h2 id="featured-heading" className="sr-only">
        Popularno
      </h2>
      <div className="hide-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 pt-1">
        {items.map((item, index) => {
          const price = formatPrice(item.price)
          const card = (
            <article className="glass-card-premium relative flex h-full min-h-[228px] w-[min(86vw,280px)] shrink-0 snap-center flex-col overflow-hidden rounded-3xl border border-[rgba(214,179,90,0.2)] p-5 shadow-[0_12px_40px_rgba(0,0,0,0.45)] sm:min-h-[248px] sm:w-[300px] sm:p-6">
              <Badge type={item.badge} className="absolute left-4 top-4 z-10" />
              <ProductPlaceholder
                name={item.name}
                image={item.image}
                variant={
                  item.id.includes('africka') ||
                  item.id.includes('dupla') ||
                  item.id.includes('nargila')
                    ? 'shisha'
                    : 'drink'
                }
                className="mb-4 mt-0.5 w-full rounded-2xl"
              />
              <div className="flex min-h-0 flex-1 flex-col px-0.5">
                <h3 className="font-display text-base font-semibold leading-snug text-champagne sm:text-lg">
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
