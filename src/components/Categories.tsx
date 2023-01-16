import { useDispatch, useSelector } from "react-redux"
import { setCategoryId } from "../store/slices/filterSlice"
import { FC, memo } from "react"
import { pizzaCategories } from "src/types/pizza"
import { filterSelector } from "src/store/selectors/filter"

export const categories: pizzaCategories[] = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
]

const Categories: FC = () => {
  const dispatch = useDispatch()
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
