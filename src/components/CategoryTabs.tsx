import type { NavId } from '../data/types'
import { NAV_TABS } from '../data/menuConfig'

type CategoryTabsProps = {
  activeId: NavId
  onSelect: (id: NavId) => void
}

const TAB_ICONS: Record<Exclude<NavId, 'shisha'>, string> = {
  pica: 'local_bar',
  kafe: 'coffee',
  'slatki-kutak': 'cake',
  ostalo: 'grid_view',
}

type TabIconProps = {
  id: NavId
  active: boolean
}

function HookahIcon({ active }: { active: boolean }) {
  const color = active ? 'text-gold' : 'text-champagne/45'
  return (
    <svg
      className={`h-[26px] w-[26px] shrink-0 ${color}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M8 4.5h8l.8 2.2a1.8 1.8 0 0 1-1.7 2.3h-6.2a1.8 1.8 0 0 1-1.7-2.3L8 4.5z" />
      <path d="M12 7v2.5" />
      <path d="M12 9.5v5" />
      <path d="M8.5 14.5h7l-1.2 5.5H9.7L8.5 14.5z" />
      <path d="M10 20.5h4" />
      <path d="M13.5 11.5c2.8 0 4.8 1.2 5.5 3.5.6 2-1 3.8-3.2 4.2" />
      <circle cx="15.8" cy="19.2" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function TabIcon({ id, active }: TabIconProps) {
  if (id === 'shisha') {
    return <HookahIcon active={active} />
  }

  return (
    <span
      className={`material-symbols-outlined text-[26px] leading-none transition-colors ${
        active ? 'filled text-gold' : 'text-champagne/45'
      }`}
      aria-hidden
    >
      {TAB_ICONS[id]}
    </span>
  )
}

export function CategoryTabs({ activeId, onSelect }: CategoryTabsProps) {
  return (
    <nav
      className="sticky top-0 z-40 border-b border-white/5 bg-deep/95 backdrop-blur-lg"
      aria-label="Kategorije menija"
    >
      <div className="mx-auto w-full max-w-lg px-2 py-3">
        <ul className="grid grid-cols-5 items-stretch justify-items-center gap-0.5">
          {NAV_TABS.map((tab) => {
            const isActive = tab.id === activeId
            return (
              <li key={tab.id} className="flex w-full justify-center">
                <button
                  type="button"
                  onClick={() => onSelect(tab.id)}
                  className={`group flex w-full max-w-[4.5rem] flex-col items-center justify-center gap-1 rounded-xl px-1 py-2 text-center transition-all sm:max-w-none sm:px-2 ${
                    isActive
                      ? 'text-gold'
                      : 'text-champagne/50 hover:text-champagne/85'
                  }`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  <TabIcon id={tab.id} active={isActive} />
                  <span
                    className={`w-full text-center text-[9px] font-medium leading-tight tracking-wide sm:text-[11px] ${
                      isActive ? 'text-gold' : ''
                    }`}
                  >
                    {tab.label}
                  </span>
                  <span
                    className={`mt-0.5 h-0.5 w-8 rounded-full transition-all ${
                      isActive
                        ? 'bg-gold shadow-[0_0_10px_rgba(212,175,55,0.65)]'
                        : 'bg-transparent group-hover:bg-white/10'
                    }`}
                  />
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
