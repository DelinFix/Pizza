import { FC, memo, useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { Node } from "typescript"

// types
import { SortItem } from "types"

// store
import { filterSelector, useAppDispatch, setSortType } from "store"

// utils
import { list } from "utils"

type MouseClick = MouseEvent & { path: Node[] }

const Sort: FC = () => {
    const dispatch = useAppDispatch()
    const [modalActive, setModalActive] = useState(false)
    const { sort: sortType } = useSelector(filterSelector)
    const sortRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const _event = event as MouseClick
            if (sortRef.current && !_event.path.includes(sortRef.current)) {
                setModalActive(false)
            }
        }
        document.body.addEventListener("click", handleClickOutside)
        return () => {
            document.body.removeEventListener("click", handleClickOutside)
        }
    }, [])

    const handleClickListItem = (obj: SortItem) => () => {
        if (sortType.sort === obj.sort) {
            dispatch(setSortType({ ...obj, sort: obj.sort + "-" }))
        } else {
            dispatch(setSortType(obj))
        }
        setModalActive(false)
    }

    const setModalInactive = () => {
        setModalActive(!modalActive)
    }

    return (
        <div ref={sortRef} className="sort">
            <div onClick={setModalInactive} className="sort__label">
                <b>Сортировка по:</b>
                <span>{sortType.name}</span>
            </div>
            {modalActive && (
                <div className="sort__popup">
                    <ul>
                        {list.map((obj, index) => {
                            const isActiveClass =
                                sortType.sort.replace("-", "") ===
                                obj.sort.replace("-", "")
                                    ? "active"
                                    : ""
                            return (
                                <li
                                    key={index}
                                    className={isActiveClass}
                                    onClick={handleClickListItem(obj)}
                                >
                                    {obj.name}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default memo(Sort)
