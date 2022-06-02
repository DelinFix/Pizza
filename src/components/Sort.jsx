import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import { setSortType } from "../store/slices/filterSlice";

const Sort = () => {
    const [modalActive, setModalActive] = useState(false)
    const dispatch = useDispatch()
    const sortType = useSelector(state => state.filter.sort)

    const list = [
        {name: 'популярности', sort: 'rating'},
        {name: 'цене', sort: 'price'},
        {name: 'алфавиту', sort: 'title'}
    ]

    return (
        <div className="sort">
            <div onClick={() => setModalActive(!modalActive)} className="sort__label">
                <b>Сортировка по:</b>
                <span>{sortType.name}</span>
            </div >
            {modalActive &&
                <div className="sort__popup">
                    <ul>
                        {list.map((obj, index) => (
                            <li
                                key={index}
                                className={sortType.sort.replace('-', '') === obj.sort.replace('-', '') ? 'active' : ''}
                                onClick={() => {
                                    if(sortType.sort === obj.sort) {
                                        dispatch(setSortType({...obj, sort: obj.sort + '-'}))
                                    } else {
                                        dispatch(setSortType(obj))
                                    }
                                    setModalActive(false)
                                }}
                            >
                                {obj.name}
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </div>
    )
}

export default Sort
