import { RootState } from "store"

export const cartSelector = (state: RootState) => state.cart
export const cartItemSelectorById = (id: number) => (state: RootState) =>
    state.cart.items.find((obj) => obj.id === id)
