import {configureStore} from "@reduxjs/toolkit"
import FilterReducer from './slices/filterSlice'
import cart from './slices/cartSlice'

export const store = configureStore({
    reducer: {
        filter: FilterReducer,
        cart
    }
})