import { PayloadAction, createSlice } from "@reduxjs/toolkit"

// types
import { ICartItem } from "types"

// utils
import { calculateTotalPrice, getCartFromLS } from "utils"

export interface ICartSliceState {
    totalPrice: number
    items: ICartItem[]
}

const { items, totalPrice } = getCartFromLS()

const initialState: ICartSliceState = {
    totalPrice: totalPrice,
    items: items,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<ICartItem>) => {
            const findItem = state.items.find(
                (obj) => obj.id === action.payload.id
            )
            if (findItem) findItem.count++
            else state.items.push({ ...action.payload, count: 1 })
            state.totalPrice = calculateTotalPrice(state.items)
        },
        decrementItem(state, action: PayloadAction<number>) {
            const findItem = state.items.find(
                (obj) => obj.id === action.payload
            )
            if (findItem && findItem.count > 1) findItem.count--
            else
                state.items = state.items.filter(
                    (obj) => obj.id !== action.payload
                )
            state.totalPrice = calculateTotalPrice(state.items)
        },
        removeItem: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((obj) => obj.id !== action.payload)
            state.totalPrice = calculateTotalPrice(state.items)
        },
        clearItems: (state) => {
            state.items = []
            state.totalPrice = 0
        },
    },
})

export const { addItem, removeItem, clearItems, decrementItem } =
    cartSlice.actions

export default cartSlice.reducer
