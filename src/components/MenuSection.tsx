import { motion } from 'framer-motion'
import type { MenuSectionData } from '../data/types'
import { DrinkList } from './DrinkList'
import { MenuCard } from './MenuCard'
import { SectionDivider } from './SectionDivider'
import { useReducedMotion } from '../hooks/useReducedMotion'

type MenuSectionProps = {
  section: MenuSectionData
}

export function MenuSection({ section }: MenuSectionProps) {
  const reducedMotion = useReducedMotion()

  const Wrapper = reducedMotion ? 'section' : motion.section
  const wrapperProps = reducedMotion
    ? {
        id: section.id,
        className: 'section-scroll-margin px-4 py-12 sm:py-14',
      }
    : {
        id: section.id,
        className: 'section-scroll-margin px-4 py-12 sm:py-14',
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-48px' },
        transition: { duration: 0.5 },
      }

  return (
    <Wrapper {...(wrapperProps as object)}>
      <SectionDivider title={section.title} />
      <div className="mx-auto max-w-lg">
        {section.subgroups ? (
          <div className="flex flex-col gap-10 sm:gap-12">
            {section.subgroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-4 border-b border-[rgba(214,179,90,0.14)] pb-2.5 font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-gold sm:mb-5 sm:text-xs">
                  {group.title}
                </h3>
                <DrinkList items={group.items} />
              </div>
            ))}
          </div>
        ) : (
          <ul className="flex flex-col gap-3">
            {section.items.map((item) => (
              <li key={item.id}>
                <MenuCard item={item} variant="compact" />
              </li>
            ))}
          </ul>
        )}
      </div>
    </Wrapper>
  )
}
