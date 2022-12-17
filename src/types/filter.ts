export type sortNames = "популярности" | "цене" | "алфавиту"

export type sortTypes = "rating" | "price" | "title"

export interface SortItem {
  name: sortNames
  sort: string
}
