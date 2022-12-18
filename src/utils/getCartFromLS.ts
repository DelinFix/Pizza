import { ICartItem } from "src/types/pizza"
import { calculateTotalPrice } from "./calculateTotalPrice"

export const getCartFromLS = () => {
  const data: ICartItem[] = JSON.parse(localStorage.getItem("cart") || "[]")
  return { items: data, totalPrice: calculateTotalPrice(data) }
}
