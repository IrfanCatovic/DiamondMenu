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
    <article className="glass-card-premium relative overflow-hidden rounded-3xl border border-[rgba(214,179,90,0.2)] p-6 shadow-[0_12px_48px_rgba(0,0,0,0.5)] sm:p-7">
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(214,179,90,0.14),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-deep/85 to-transparent"
        aria-hidden
      />
      <Badge type="premium" className="mb-4" />
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
        <ProductPlaceholder
          name={item.name}
          image={item.image}
          variant="shisha"
          className="mx-auto w-full max-w-[240px] sm:mx-0 sm:max-w-[200px] sm:shrink-0"
        />
        <div className="min-w-0 flex-1 px-0.5">
          <p className="text-[10px] font-medium tracking-[0.28em] text-gold/75 uppercase">
            Diamond Special
          </p>
          <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-champagne sm:text-2xl">
            {item.name}
          </h3>
          <div className="mt-3">
            <FlavorTags itemId={item.id} size="md" />
          </div>
          {price ? (
            <p className="mt-5 border-t border-[rgba(214,179,90,0.12)] pt-4 text-lg font-semibold tabular-nums text-gold sm:text-xl">
              {price}
            </p>
          ) : null}
        </div>
      </div>
    </article>
  )
}

function ShishaListCard({ item }: { item: MenuItem }) {
  const price = formatPrice(item.price)
  return (
    <article className="menu-item-card flex min-h-[4.5rem] items-center gap-3 px-4 py-3.5 sm:gap-4 sm:px-5 sm:py-4">
      <ProductPlaceholder
        name={item.name}
        image={item.image}
        variant="shisha"
        className="h-[60px] w-[60px] shrink-0 sm:h-16 sm:w-16"
      />
      <div className="min-w-0 flex-1 px-1">
        <h3 className="font-display text-[15px] font-semibold leading-snug text-champagne sm:text-base">
          {item.name}
        </h3>
        <div className="mt-1.5">
          <FlavorTags itemId={item.id} />
        </div>
      </div>
      {price ? (
        <p className="menu-item-price shrink-0 self-center text-[0.9375rem] font-semibold tabular-nums text-gold sm:text-base">
          {price}
        </p>
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
    ? { className: 'section-scroll-margin px-4 py-12 sm:py-14', id: 'shisha' }
    : {
        className: 'section-scroll-margin px-4 py-12 sm:py-14',
        id: 'shisha',
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-48px' },
        transition: { duration: 0.5 },
      }

  return (
    <Wrapper {...(wrapperProps as object)}>
      <SectionDivider title="Shisha" badge="Premium ukusi" />
      <div className="mx-auto flex max-w-lg flex-col gap-4 sm:gap-5">
        {hero ? <ShishaHeroCard item={hero} /> : null}
        {rest.map((item) => (
          <ShishaListCard key={item.id} item={item} />
        ))}
        <FlavorLegend />
      </div>
    </Wrapper>
  )
}
