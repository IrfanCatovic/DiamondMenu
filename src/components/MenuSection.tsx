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
        className: 'section-scroll-margin px-4 py-10',
      }
    : {
        id: section.id,
        className: 'section-scroll-margin px-4 py-10',
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-40px' },
        transition: { duration: 0.5 },
      }

  return (
    <Wrapper {...(wrapperProps as object)}>
      <SectionDivider title={section.title} />
      <div className="mx-auto max-w-lg">
        {section.subgroups ? (
          <div className="flex flex-col gap-8">
            {section.subgroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-3 border-b border-gold/20 pb-2 text-sm font-medium tracking-wider text-gold/80 uppercase">
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
