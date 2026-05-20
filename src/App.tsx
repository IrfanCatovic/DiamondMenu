import { useCallback } from 'react'
import { AmbientBackground } from './components/AmbientBackground'
import { CategoryTabs } from './components/CategoryTabs'
import { FeaturedSection } from './components/FeaturedSection'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { MenuSection } from './components/MenuSection'
import { ShishaSection } from './components/ShishaSection'
import { SweetSection } from './components/SweetSection'
import { NAV_TABS, getMenuSections } from './data/menuConfig'
import type { NavId } from './data/types'
import { useActiveSection } from './hooks/useActiveSection'

const SECTION_IDS = NAV_TABS.map((t) => t.sectionId)

function App() {
  const [activeId, setActiveSection] = useActiveSection(SECTION_IDS)
  const sections = getMenuSections()

  const shishaSection = sections.find((s) => s.id === 'shisha')
  const picaSection = sections.find((s) => s.id === 'pica')
  const kafeSection = sections.find((s) => s.id === 'kafe')
  const slatkiSection = sections.find((s) => s.id === 'slatki-kutak')
  const ostaloSection = sections.find((s) => s.id === 'ostalo')

  const handleTabSelect = useCallback((id: NavId) => {
    setActiveSection(id)
    const el = document.getElementById(id)
    if (!el) return
    const nav = document.querySelector('nav[aria-label="Kategorije menija"]')
    const navHeight = nav?.getBoundingClientRect().height ?? 72
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight - 12
    window.scrollTo({ top, behavior: 'smooth' })
  }, [setActiveSection])

  return (
    <div className="relative min-h-dvh">
      <AmbientBackground />
      <div className="relative z-10 mx-auto max-w-2xl">
        <Hero />
        <CategoryTabs activeId={activeId} onSelect={handleTabSelect} />
        <main>
          <FeaturedSection />
          {shishaSection ? <ShishaSection items={shishaSection.items} /> : null}
          {picaSection ? <MenuSection section={picaSection} /> : null}
          {kafeSection ? <MenuSection section={kafeSection} /> : null}
          {slatkiSection ? <SweetSection items={slatkiSection.items} /> : null}
          {ostaloSection ? <MenuSection section={ostaloSection} /> : null}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
