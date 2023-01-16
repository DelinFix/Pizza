import debounce from "lodash.debounce"
import { useCallback, useState, FC } from "react"

import { useDispatch } from "react-redux"
import { setSearchValue } from "../store/slices/filterSlice"
import "../styles/Search.scss"

//TODO svg
const Search: FC = () => {
  const [value, setValue] = useState("")
  const dispatch = useDispatch()

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    updateSearchValue(event.target.value)
  }

  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str))
    }, 300),
    [dispatch, setSearchValue]
  )

  return (
    <div className="root">
      <svg
        className="icon"
        enableBackground="new 0 0 32 32"
        id="EditableLine"
        version="1.1"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="14"
          cy="14"
          fill="none"
          id="XMLID_42_"
          r="9"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        ></circle>
        <line
          fill="none"
          id="XMLID_44_"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          x1="27"
          x2="20.366"
          y1="27"
          y2="20.366"
        ></line>
      </svg>
      <input
        className="input"
        placeholder="Поиск..."
        value={value}
        onChange={onChangeInput}
      />
    </div>
  )
}

export default Search
