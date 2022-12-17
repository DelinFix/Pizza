import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IPizzaInCart } from "src/types/pizza"
import { RootState } from "../store"

export interface ICartItem extends IPizzaInCart {
  count: number
}

export interface ICartSliceState {
  totalPrice: number
  items: ICartItem[]
}

const initialState: ICartSliceState = {
  totalPrice: 0,
  items: [],
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ICartItem>) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id)
      if (findItem) findItem.count++
      else state.items.push({ ...action.payload, count: 1 })
      state.totalPrice = state.items.reduce(
        (sum, obj) => obj.price * obj.count + sum,
        0
      )
    },
    decrementItem(state, action: PayloadAction<number>) {
      const findItem = state.items.find((obj) => obj.id === action.payload)
      if (findItem && findItem.count > 1) findItem.count--
      else state.items = state.items.filter((obj) => obj.id !== action.payload)
      state.totalPrice = state.items.reduce(
        (sum, obj) => obj.price * obj.count + sum,
        0
      )
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload)
      state.totalPrice = state.items.reduce(
        (sum, obj) => obj.price * obj.count + sum,
        0
      )
    },
    clearItems: (state) => {
      state.items = []
      state.totalPrice = 0
    },
  },
})

export const cartSelector = (state: RootState) => state.cart
export const cartItemSelectorById = (id: number) => (state: RootState) =>
  state.cart.items.find((obj) => obj.id === id)

export const { addItem, removeItem, clearItems, decrementItem } =
  cartSlice.actions

export default cartSlice.reducer
