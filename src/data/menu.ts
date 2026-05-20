import productsData from './products.json'
import type { MenuItem } from './types'

export const CURRENCY = productsData.currency

type RawCategory = {
  id: string
  name: string
  items: MenuItem[]
}

function withDefaultImage(item: MenuItem): MenuItem {
  if (item.image !== undefined && item.image !== '') return item
  return { ...item, image: `/images/${item.id}.png` }
}

const categories: RawCategory[] = productsData.categories.map((cat) => ({
  ...cat,
  items: cat.items.map((item) => withDefaultImage(item as MenuItem)),
})) as RawCategory[]

export function getCategoryItems(categoryId: string): MenuItem[] {
  const category = categories.find((c) => c.id === categoryId)
  return category?.items ?? []
}

export function getItemById(id: string): MenuItem | undefined {
  for (const category of categories) {
    const item = category.items.find((i) => i.id === id)
    if (item) return item
  }
  return undefined
}

export function getItemsByIds(ids: string[]): MenuItem[] {
  return ids
    .map((id) => getItemById(id))
    .filter((item): item is MenuItem => item !== undefined)
}

export { categories }
