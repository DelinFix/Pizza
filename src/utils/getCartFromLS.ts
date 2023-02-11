import { calculateTotalPrice } from "utils"

// types
import { ICartItem } from "types"

export const getCartFromLS = () => {
    const data: ICartItem[] = JSON.parse(localStorage.getItem("cart") || "[]")
    return { items: data, totalPrice: calculateTotalPrice(data) }
}
