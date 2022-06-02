import React, {useContext, useEffect, useState} from 'react'

import Categories from "../components/Categories"
import Sort from "../components/Sort"
import Skeleton from "../components/Skeleton"
import PizzaBlock from "../components/PizzaBlock"
import {SearchContext} from "../App"
import {useSelector} from "react-redux"
import axios from "axios";

const Home = () => {
    const categoriesId = useSelector(state => state.filter.categoryId)
    const sortType = useSelector(state => state.filter.sort.sort)

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const {searchValue} = useContext(SearchContext)


    useEffect(() => {
        const order = sortType.includes('-') ? 'desc' : 'asc'
        const sortBy = sortType.replace('-', '')
        const category = categoriesId ? categoriesId : ''

        setIsLoading(true)
        axios.get(`https://62911a9d665ea71fe1410ad2.mockapi.io/items?category=${category}&sortBy=${sortBy}&order=${order}`)
            .then(response => {
                setItems(response.data)
                setIsLoading(false)
            })
        window.scroll(0, 0)
    }, [categoriesId, sortType])

    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories/>
                    <Sort/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {isLoading
                        ? [...new Array(items.length)].map((_, index) => <Skeleton key={index}/>)
                        // Т.к. у нас статическое кол-во пицц, то используем фильтр по уже имеющемуся массиву
                        : items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                            .map((pizza) =>  <PizzaBlock {...pizza} key={pizza.id}/>)

                    }
                </div>
            </div>
        </div>
    )
}

export default Home
