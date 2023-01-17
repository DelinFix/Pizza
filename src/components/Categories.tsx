import { FC, memo } from "react"
import { useSelector } from "react-redux"
import { filterSelector } from "src/store/selectors/filter"
import { useAppDispatch } from "src/store/store"
import { pizzaCategories } from "src/types/pizza"
import { setCategoryId } from "../store/slices/filterSlice"

export const categories: pizzaCategories[] = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
]

const Categories: FC = () => {
    const dispatch = useAppDispatch()
    const { categoryId: categoryIndex } = useSelector(filterSelector)

    const onChangeCategory = (id: number) => () => {
        dispatch(setCategoryId(id))
    }

    return (
        <div className="categories">
            <ul>
                {categories.map((category, index) => (
                    <li
                        className={categoryIndex === index ? "active" : ""}
                        onClick={onChangeCategory(index)}
                        key={index}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default memo(Categories)
