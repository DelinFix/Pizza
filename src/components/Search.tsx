import debounce from "lodash.debounce"
import { FC, useCallback, useState } from "react"

// store
import { useAppDispatch, setSearchValue } from "store"

// svg
import { SearchIcon } from "assets/icons"

import "scss/Search.scss"

const Search: FC = () => {
    const [value, setValue] = useState("")
    const dispatch = useAppDispatch()

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
            <SearchIcon width="26" />
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
