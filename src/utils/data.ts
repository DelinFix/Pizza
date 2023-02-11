// types
import { pizzaCategories, pizzaDoughTypes, SortItem } from "types"

export const list: SortItem[] = [
    { name: "популярности", sort: "rating" },
    { name: "цене", sort: "price" },
    { name: "алфавиту", sort: "title" },
]

export const categories: pizzaCategories[] = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
]

export const typesDough: pizzaDoughTypes[] = ["тонкое", "традиционное"]
