export type Page = 'home' | 'shop' | 'story'

export type Product = {
  id: number
  name: string
  category: string
  volume: string
  price: number
  caffeine: number
  calories: number
  tag: string | null
  img: string
  desc: string
  color: string
}

export type SortOption = 'default' | 'price-asc' | 'price-desc' | 'caffeine'
