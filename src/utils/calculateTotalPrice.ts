// types
import { ICartItem } from "types"

export const calculateTotalPrice = (items: ICartItem[]) => {
    return items.length === 0
        ? 0
        : items.reduce((sum, obj) => obj.price * obj.count + sum, 0)
}
