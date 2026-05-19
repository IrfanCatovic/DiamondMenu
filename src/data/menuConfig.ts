import type { BadgeType, FeaturedMeta, FlavorTag, NavTab } from './types'
import { getCategoryItems, getItemsByIds } from './menu'
import type { MenuItem, MenuSectionData, NavId } from './types'

export const FOOTER_CONFIG = {
  wifiName: 'Diamond',
  wifiPassword: 'diamond2026',
  instagramUrl:
    'https://www.instagram.com/caffe_bar_special?igsh=NHllZHAzZzN5c2R5',
  instagramHandle: '@caffe_bar_special',
}

export const NAV_TABS: NavTab[] = [
  { id: 'shisha', label: 'Shisha', sectionId: 'shisha' },
  { id: 'pica', label: 'Pića', sectionId: 'pica' },
  { id: 'kafe', label: 'Kafe', sectionId: 'kafe' },
  { id: 'slatki-kutak', label: 'Slatki kutak', sectionId: 'slatki-kutak' },
  { id: 'ostalo', label: 'Ostalo', sectionId: 'ostalo' },
]

const KAFE_ITEM_IDS = [
  'espresso',
  'espresso-sa-mlekom',
  'espresso-americano',
  'dupli-espresso',
  'latte-machiato',
  'kapucino',
  'kapucino-sa-slagom',
  'ness-classic-strong',
  'ness-classic-strong-sa-slagom',
  'nes-3-u-1',
  'iced-coffee',
  'hladne-kafe',
]

const OSTALO_ITEM_IDS = [
  'caj-tea-dolceza',
  'caj-milford',
  'topla-cokolada',
  'topla-cokolada-sa-slagom',
]

export const FEATURED_ITEMS: FeaturedMeta[] = [
  { id: 'africka-kraljica', badge: 'preporuka-kuce' },
  { id: 'dupla-jabuka', badge: 'popularno' },
  { id: 'red-bull', badge: 'popularno' },
  { id: 'atrium-fresh', badge: 'fresh' },
  { id: 'banana-split', badge: 'sweet' },
]

export const SHISHA_HERO_ID = 'africka-kraljica'

export const SHISHA_FLAVORS: Record<string, FlavorTag[]> = {
  'africka-kraljica': ['fruity', 'sweet'],
  'dupla-jabuka': ['fruity', 'sweet'],
  'ice-bombon': ['fresh', 'sweet'],
}

export const BADGE_LABELS: Record<BadgeType, string> = {
  popularno: 'Popularno',
  'preporuka-kuce': 'Preporuka kuće',
  fresh: 'Fresh',
  premium: 'Premium',
  sweet: 'Sweet',
  strong: 'Strong',
}

const DRINK_SUBGROUPS = [
  { title: 'Voda', sourceCategoryId: 'voda' },
  { title: 'Sokovi', sourceCategoryId: 'sokovi' },
  { title: 'Gazirani napitci', sourceCategoryId: 'gazirani' },
  { title: 'Energetski napitci', sourceCategoryId: 'energetski' },
  { title: 'Ceđeni sokovi i smuti', sourceCategoryId: 'cedjeni' },
]

export function getFeaturedProducts(): (MenuItem & { badge: BadgeType })[] {
  return FEATURED_ITEMS.map((meta) => {
    const item = getItemsByIds([meta.id])[0]
    if (!item) throw new Error(`Featured item not found: ${meta.id}`)
    return { ...item, badge: meta.badge }
  })
}

export function getMenuSections(): MenuSectionData[] {
  const kafeItems = getItemsByIds(KAFE_ITEM_IDS)
  const ostaloItems = getItemsByIds(OSTALO_ITEM_IDS)
  const shishaItems = getCategoryItems('nargile')
  const slatkiItems = getCategoryItems('slatki-kutak')

  const picaSubgroups = DRINK_SUBGROUPS.map((sg) => ({
    title: sg.title,
    items: getCategoryItems(sg.sourceCategoryId),
  })).filter((sg) => sg.items.length > 0)

  return [
    {
      id: 'shisha',
      title: 'Shisha',
      items: shishaItems,
    },
    {
      id: 'pica',
      title: 'Pića',
      items: [],
      subgroups: picaSubgroups,
    },
    {
      id: 'kafe',
      title: 'Kafe',
      items: kafeItems,
    },
    {
      id: 'slatki-kutak',
      title: 'Slatki kutak',
      items: slatkiItems,
    },
    {
      id: 'ostalo',
      title: 'Ostalo',
      items: ostaloItems,
    },
  ]
}

export function getSectionById(id: NavId): MenuSectionData | undefined {
  return getMenuSections().find((s) => s.id === id)
}
