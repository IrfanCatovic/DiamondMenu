import { motion } from 'framer-motion'
import { SHISHA_HERO_ID } from '../data/menuConfig'
import type { MenuItem } from '../data/types'
import { formatPrice } from '../utils/formatPrice'
import { Badge } from './Badge'
import { FlavorLegend, FlavorTags } from './FlavorTags'
import { ProductPlaceholder } from './ProductPlaceholder'
import { SectionDivider } from './SectionDivider'
import { useReducedMotion } from '../hooks/useReducedMotion'

type ShishaSectionProps = {
  items: MenuItem[]
}

function ShishaHeroCard({ item }: { item: MenuItem }) {
  const price = formatPrice(item.price)
  return (
    <article className="glass-card-premium relative overflow-hidden p-5">
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.15),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-deep/80 to-transparent"
        aria-hidden
      />
      <Badge type="premium" className="mb-3" />
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <ProductPlaceholder
          name={item.name}
          image={item.image}
          variant="shisha"
          className="mx-auto w-full max-w-[220px] sm:mx-0 sm:w-44 sm:max-w-none sm:shrink-0"
        />
        <div className="flex-1">
          <p className="text-[10px] tracking-[0.25em] text-gold/70 uppercase">
            Diamond Special
          </p>
          <h3 className="mt-1 font-display text-2xl font-semibold text-champagne">
            {item.name}
          </h3>
          <FlavorTags itemId={item.id} size="md" />
          {price ? (
            <p className="mt-4 text-xl font-bold text-gold">{price}</p>
          ) : null}
        </div>
      </div>
      <div
        className="absolute right-4 top-4 text-2xl opacity-20"
        aria-hidden
      >
        💨
      </div>
    </article>
  )
}

function ShishaListCard({ item }: { item: MenuItem }) {
  const price = formatPrice(item.price)
  return (
    <article className="glass-card flex items-center gap-4 p-4 transition-colors hover:border-gold/25">
      <ProductPlaceholder
        name={item.name}
        image={item.image}
        variant="shisha"
        className="w-16 shrink-0"
      />
      <div className="min-w-0 flex-1">
        <h3 className="font-display text-lg font-medium text-champagne">
          {item.name}
        </h3>
        <FlavorTags itemId={item.id} />
      </div>
      {price ? (
        <p className="shrink-0 font-semibold text-gold">{price}</p>
      ) : null}
    </article>
  )
}

export function ShishaSection({ items }: ShishaSectionProps) {
  const reducedMotion = useReducedMotion()
  const hero = items.find((i) => i.id === SHISHA_HERO_ID)
  const rest = items.filter((i) => i.id !== SHISHA_HERO_ID)

  const Wrapper = reducedMotion ? 'section' : motion.section
  const wrapperProps = reducedMotion
    ? { className: 'section-scroll-margin px-4 py-10', id: 'shisha' }
    : {
        className: 'section-scroll-margin px-4 py-10',
        id: 'shisha',
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-40px' },
        transition: { duration: 0.5 },
      }

  return (
    <Wrapper {...(wrapperProps as object)}>
      <SectionDivider title="Shisha" badge="Premium ukusi" />
      <div className="mx-auto flex max-w-lg flex-col gap-4">
        {hero ? <ShishaHeroCard item={hero} /> : null}
        {rest.map((item) => (
          <ShishaListCard key={item.id} item={item} />
        ))}
        <FlavorLegend />
      </div>
    </Wrapper>
  )
}
