const CURRENCY = 'RSD'

export function formatPrice(price: number | ''): string {
  if (price === '') return ''
  return `${price} ${CURRENCY}`
}
