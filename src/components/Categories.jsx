import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {setCategoryId} from "../store/slices/filterSlice";

const Categories = () => {
    const categories = [
        'Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'
    ]
    const dispatch = useDispatch()
    const categoriesIndex = useSelector(state => state.filter.categoryId)

    return (
        <div className="categories">
            <ul>
                {categories.map((cat, index) =>
                    <li
                        className={categoriesIndex === index ? 'active' : ''}
                        onClick={() => dispatch(setCategoryId(index))}
                        key={index}
                    >
                        {cat}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Categories
