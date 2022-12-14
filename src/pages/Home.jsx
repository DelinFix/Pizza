import React, { useContext, useEffect, useRef, useState } from "react"

import Categories from "../components/Categories"
import Sort, { list } from "../components/Sort"
import Skeleton from "../components/Skeleton"
import PizzaBlock from "../components/PizzaBlock"
import { SearchContext } from "../App"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import qs from "qs"
import { useNavigate } from "react-router-dom"
import { setFilters } from "../store/slices/filterSlice"

const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isNeedSearch = useRef(false)
  const isMounted = useRef(false)

  const categoryId = useSelector((state) => state.filter.categoryId)
  const sortType = useSelector((state) => state.filter.sort.sort)

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const { searchValue } = useContext(SearchContext)

  const fetchPizzas = React.useCallback(() => {
    const order = sortType.includes("-") ? "desc" : "asc"
    const sortBy = sortType.replace("-", "")
    const category = categoryId ? categoryId : ""

    setIsLoading(true)
    axios
      .get(
        `https://62911a9d665ea71fe1410ad2.mockapi.io/items?category=${category}&sortBy=${sortBy}&order=${order}`
      )
      .then((response) => {
        setItems(response.data)
        setIsLoading(false)
      })
    window.scroll(0, 0)
  }, [categoryId, sortType])

  //Если изменили параметры и был первый рендер
  useEffect(() => {
    if (isMounted.current) {
      const queryStr = qs.stringify({
        sortType: sortType,
        categoryId,
      })

      navigate(`?${queryStr}`)
    }
    isMounted.current = true
  }, [categoryId, navigate, sortType])

  //Если был первый рендер, то проверяем URL-парам и сохраняем в редукс
  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1))

      const sort = list.find((obj) => obj.sort === params.sortType)

      dispatch(
        setFilters({
          ...params,
          sort,
        })
      )

      fetchPizzas()
      isNeedSearch.current = true
    }
  }, [])

  useEffect(() => {
    if (!isNeedSearch.current) {
      fetchPizzas()
    }

    isNeedSearch.current = false
  }, [categoryId, fetchPizzas, sortType])

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading
            ? [...new Array(items.length)].map((_, index) => (
                <Skeleton key={index} />
              ))
            : // Т.к. у нас статическое кол-во пицц, то используем фильтр по уже имеющемуся массиву
              items
                .filter((item) =>
                  item.title.toLowerCase().includes(searchValue.toLowerCase())
                )
                .map((pizza) => <PizzaBlock {...pizza} key={pizza.id} />)}
        </div>
      </div>
    </div>
  )
}

export default Home
