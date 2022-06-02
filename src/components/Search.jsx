import React, {useCallback, useContext, useState} from 'react'
import debounce from 'lodash.debounce'

import styles from '../styles/Search.module.scss'
import {SearchContext} from "../App";

const Search = () => {
    const [value, setValue] = useState('')
    const {setSearchValue} = useContext(SearchContext)

    const onChangeInput = event => {
        setValue(event.target.value)
        updateSearchValue(event.target.value)
    }

    const updateSearchValue = useCallback(
        debounce((str) => {
            setSearchValue(str)
            console.log(123)
        },300), []
    )

    return (
        <div className={styles.root}>
            <svg className={styles.icon} enableBackground="new 0 0 32 32" id="EditableLine" version="1.1"
                 viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <circle cx="14" cy="14" fill="none" id="XMLID_42_" r="9" stroke="#000000" strokeLinecap="round"
                        strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2">

                </circle>
                <line fill="none" id="XMLID_44_" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"
                      strokeMiterlimit="10" strokeWidth="2" x1="27" x2="20.366" y1="27" y2="20.366">

                </line>
            </svg>
            <input
                className={styles.input}
                placeholder="Поиск..."
                value={value}
                onChange={onChangeInput}
            />
        </div>
    )
}

export default Search
