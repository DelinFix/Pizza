import { FC, memo } from "react"
import { useSelector } from "react-redux"

// store
import { filterSelector, useAppDispatch, setCategoryId } from "store"

// utils
import { categories } from "utils"

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
