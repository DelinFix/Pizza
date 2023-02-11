import { FC, useCallback, useEffect, useRef } from "react"
import qs from "qs"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

// store
import {
    useAppDispatch,
    setFilters,
    filterSelector,
    pizzaSelector,
} from "store"

// components
import { Categories, PizzaBlock, Skeleton, Sort } from "components"

// utils
import { categories, list, fetchPizzas } from "utils"

// types
import { IParams } from "types"

const Home: FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const isNeedSearch = useRef(false)
    const isMounted = useRef(false)

    const {
        categoryId,
        sort: sortType,
        searchValue,
    } = useSelector(filterSelector)
    const { items, status } = useSelector(pizzaSelector)

    const getPizzas = useCallback(async () => {
        const order = sortType.sort.includes("-") ? "desc" : "asc"
        const sortBy = sortType.sort.replace("-", "")
        const category = categoryId ? `category=${categoryId}` : ""
        dispatch(fetchPizzas({ sortBy, order, category }))

        window.scroll(0, 0)
    }, [categoryId, dispatch, sortType.sort])

    // Если изменили параметры и был первый рендер
    useEffect(() => {
        if (isMounted.current) {
            const queryStr = qs.stringify({
                sortType: sortType.sort,
                categoryId,
            })

            navigate(`?${queryStr}`)
        }
        isMounted.current = true
    }, [categoryId, navigate, sortType])

    // Если был первый рендер, то проверяем URL-парам и сохраняем в Redux
    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(
                window.location.search.substring(1)
            ) as unknown as IParams

            const sort = list.find((obj) => obj.sort === params.sortType)

            dispatch(
                setFilters({
                    categoryId: params.categoryId,
                    searchValue: params.searchValue,
                    sort: sort || list[0],
                })
            )

            getPizzas()
            isNeedSearch.current = true
        }
    }, [])

    // При изменении параметров получаем новые пиццы
    useEffect(() => {
        getPizzas()
    }, [categoryId, sortType.sort, searchValue, getPizzas])

    return (
        <div className="container">
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">{categories[categoryId]}</h2>
            {status === "error" ? (
                <div className="content__error-info">
                    <h2>Произошла ошибка</h2>
                    <p>
                        К сожалению, не удалось получить пиццы. Попробуйте
                        повторить попытку позже
                    </p>
                </div>
            ) : (
                <div className="content__items">
                    {status === "loading"
                        ? // Создаем прелоадеры для пицц
                          [...new Array(4)].map((_, index) => (
                              <Skeleton key={index} />
                          ))
                        : // Т.к. у нас статическое кол-во пицц, то используем фильтр по уже имеющемуся массиву
                          items
                              .filter((item) =>
                                  item.title
                                      .toLowerCase()
                                      .includes(searchValue.toLowerCase())
                              )
                              .map((pizza) => (
                                  <PizzaBlock {...pizza} key={pizza.id} />
                              ))}
                </div>
            )}
        </div>
    )
}

export default Home
