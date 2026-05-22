export type MenuItem = {
  id: string
  name: string
  price: number | ''
  description?: string
  image?: string
}

export type NavId =
  | 'shisha'
  | 'pica'
  | 'kafe'
  | 'dorucak'
  | 'slatki-kutak'
  | 'kokteli'
  | 'ostalo'

export type BadgeType =
  | 'popularno'
  | 'preporuka-kuce'
  | 'fresh'
  | 'premium'
  | 'sweet'
  | 'strong'

export type FlavorTag = 'fresh' | 'sweet' | 'fruity' | 'strong' | 'creamy'

export type NavTab = {
  id: NavId
  label: string
  sectionId: string
}

export type DrinkSubgroup = {
  title: string
  sourceCategoryId: string
}

export type FeaturedMeta = {
  id: string
  badge: BadgeType
}

export type MenuSectionData = {
  id: NavId
  title: string
  items: MenuItem[]
  subgroups?: { title: string; items: MenuItem[] }[]
}
