import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import { setSortType } from "../store/slices/filterSlice";

export const list = [
    {name: 'популярности', sort: 'rating'},
    {name: 'цене', sort: 'price'},
    {name: 'алфавиту', sort: 'title'}
]

const Sort = () => {
    const [modalActive, setModalActive] = useState(false)
    const dispatch = useDispatch()
    const sortType = useSelector(state => state.filter.sort)
    const sortRef = React.useRef()


    React.useEffect(() => {
        const handleClickOutside = (e) => {
            console.log('click')
            if(!e.path.includes(sortRef.current)){
                setModalActive(false)
            }
        }
        document.body.addEventListener('click', handleClickOutside)
        return (() => {
            document.body.removeEventListener('click', handleClickOutside)
        })
    }, [])

    return (
        <div ref={sortRef} className="sort">
            <div onClick={() => setModalActive(!modalActive)} className="sort__label">
                <b>Сортировка по:</b>
                <span>{sortType.name}</span>
            </div>
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
