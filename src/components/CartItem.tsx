import { FC } from "react"

//types
import { ICartItem, IPizzaInCart } from "src/types/pizza"

//store
import { useAppDispatch } from "src/store/store"
import { addItem, decrementItem, removeItem } from "../store/slices/cartSlice"

//svg
import DecrementIcon from "src/assets/svg/DecrementIcon"
import IncrementIcon from "src/assets/svg/IncrementIcon"

const CartItem: FC<IPizzaInCart> = (props) => {
    const { id, title, type, price, size, count, imageUrl } = props

    const dispatch = useAppDispatch()

    const onIncrementPizza = () => {
        dispatch(addItem({ id } as ICartItem))
    }

    const onDecrementPizza = () => {
        dispatch(decrementItem(id))
    }

    const onRemovePizza = () => {
        dispatch(removeItem(id))
    }

    return (
        <div className="cart__item">
            <div className="cart__item-img">
                <img
                    className="pizza-block__image"
                    src={imageUrl}
                    alt="Pizza"
                />
            </div>
            <div className="cart__item-info">
                <h3>{title}</h3>
                <p>
                    {type}, {size} см.
                </p>
            </div>
            <div className="cart__item-count">
                <div
                    className="button button--outline button--circle cart__item-count-minus"
                    onClick={onDecrementPizza}
                >
                    <DecrementIcon width="10" />
                </div>
                <b>{count}</b>
                <div
                    className="button button--outline button--circle cart__item-count-plus"
                    onClick={onIncrementPizza}
                >
                    <IncrementIcon width="10" />
                </div>
            </div>
            <div className="cart__item-price">
                <b>{price * count} ₽</b>
            </div>
            <div className="cart__item-remove">
                <div
                    className="button button--outline button--circle"
                    onClick={onRemovePizza}
                >
                    <IncrementIcon width="10" />
                </div>
            </div>
        </div>
    )
}

export default CartItem
