import { pizzaDoughTypes } from "src/types/pizza"
import { SortItem } from "src/types/filter"

export const list: SortItem[] = [
    { name: "популярности", sort: "rating" },
    { name: "цене", sort: "price" },
    { name: "алфавиту", sort: "title" },
]

export const typesDough: pizzaDoughTypes[] = ["тонкое", "традиционное"]
