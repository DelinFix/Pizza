import { FC, memo, useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { SortItem } from "src/types/filter"
import { Node } from "typescript"
import { setSortType } from "../store/slices/filterSlice"
import { filterSelector } from "src/store/selectors/filter"

export const list: SortItem[] = [
  { name: "популярности", sort: "rating" },
  { name: "цене", sort: "price" },
  { name: "алфавиту", sort: "title" },
]

type MouseClick = MouseEvent & { path: Node[] }

const Sort: FC = () => {
  const dispatch = useDispatch()
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

  return (
    <div ref={sortRef} className="sort">
      <div onClick={() => setModalActive(!modalActive)} className="sort__label">
        <b>Сортировка по:</b>
        <span>{sortType.name}</span>
      </div>
      {modalActive && (
        <div className="sort__popup">
          <ul>
            {list.map((obj, index) => {
              const isActiveClass =
                sortType.sort.replace("-", "") === obj.sort.replace("-", "")
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
