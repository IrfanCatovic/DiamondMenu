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
  kokteli: 'wine_bar',
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
      className={`h-[30px] w-[30px] shrink-0 ${color}`}
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
      className={`material-symbols-outlined text-[28px] leading-none transition-colors ${
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
      className="sticky top-0 z-40 border-b border-[rgba(214,179,90,0.12)] bg-[#080705]/90 backdrop-blur-xl supports-[backdrop-filter]:bg-[#080705]/78"
      aria-label="Kategorije menija"
    >
      <div className="hide-scrollbar mx-auto w-full max-w-lg overflow-x-auto">
        <ul className="flex min-w-full justify-between gap-0.5 px-2 py-3.5 sm:gap-1 sm:px-3">
          {NAV_TABS.map((tab) => {
            const isActive = tab.id === activeId
            return (
              <li key={tab.id} className="flex min-w-0 flex-1 justify-center">
                <button
                  type="button"
                  onClick={() => onSelect(tab.id)}
                  className={`group flex w-full max-w-[5.25rem] flex-col items-center justify-center gap-1 rounded-xl px-0.5 py-1.5 text-center transition-all sm:max-w-none sm:px-1 ${
                    isActive
                      ? 'text-gold [text-shadow:0_0_20px_rgba(214,179,90,0.22)]'
                      : 'text-champagne/50 hover:text-champagne/88'
                  }`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  <TabIcon id={tab.id} active={isActive} />
                  <span
                    className={`line-clamp-2 min-h-[2.4em] w-full px-0.5 text-center text-[10px] font-semibold leading-tight tracking-wide sm:text-[11px] ${
                      isActive ? 'text-gold' : ''
                    }`}
                  >
                    {tab.label}
                  </span>
                  <span
                    className={`h-[3px] w-9 shrink-0 rounded-full transition-all ${
                      isActive
                        ? 'bg-gold shadow-[0_0_12px_rgba(214,179,90,0.32)]'
                        : 'bg-transparent group-hover:bg-white/12'
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
