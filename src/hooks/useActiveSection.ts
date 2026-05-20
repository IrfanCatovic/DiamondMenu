import { useCallback, useEffect, useState } from 'react'
import type { NavId } from '../data/types'
import { NAV_TABS } from '../data/menuConfig'

const NAV_SELECTOR = 'nav[aria-label="Kategorije menija"]'

/**
 * Scroll spy: aktivna je poslednja sekcija (redosled u meniju) čiji je vrh
 * iznad ili na liniji odmaka ispod sticky navigacije. Pouzdanije od
 * IntersectionObserver + intersectionRatio na vrlo visokim sekcijama (npr. Pića).
 */
export function useActiveSection(_sectionIds: string[]) {
  const [activeId, setActiveId] = useState<NavId>(NAV_TABS[0].id)

  const computeActive = useCallback(() => {
    const nav = document.querySelector(NAV_SELECTOR)
    const navHeight = nav?.getBoundingClientRect().height ?? 72
    const focusY = window.scrollY + navHeight + 20

    let next: NavId = NAV_TABS[0].id
    for (const tab of NAV_TABS) {
      const el = document.getElementById(tab.sectionId)
      if (!el) continue
      const top = el.getBoundingClientRect().top + window.scrollY
      if (top <= focusY) {
        next = tab.id
      }
    }
    setActiveId((prev) => (prev === next ? prev : next))
  }, [])

  useEffect(() => {
    let ticking = false
    const onScrollOrResize = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        ticking = false
        computeActive()
      })
    }

    computeActive()
    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize)
    return () => {
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
    }
  }, [computeActive])

  return [activeId, setActiveId] as const
}
