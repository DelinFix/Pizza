export type pizzaSizes = 26 | 30 | 40

export type pizzaDoughTypes = "тонкое" | "традиционное"
export type pizzaTypes = 0 | 1

export type pizzaCategories =
  | "Все"
  | "Мясные"
  | "Вегетарианская"
  | "Гриль"
  | "Острые"
  | "Закрытые"

export interface IPizza {
  id: number
  title: string
  price: number
  imageUrl: string
  sizes: Array<pizzaSizes>
  types: Array<pizzaTypes>
  rating: number
  category: number
}

export interface IPizzaInCart {
  id: number
  title: string
  price: number
  imageUrl: string
  size: pizzaSizes
  type: pizzaDoughTypes
  count: number
}
