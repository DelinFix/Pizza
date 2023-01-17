import { FC } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

//components
import CartEmpty from "../components/CartEmpty"
import CartItem from "../components/CartItem"

//store
import { cartSelector } from "src/store/selectors/cart"
import { useAppDispatch } from "src/store/store"
import { clearItems } from "../store/slices/cartSlice"

//svg
import CartIcon from "src/assets/svg/CartIcon"
import TrashIcon from "src/assets/svg/TrashIcon"
import BackIcon from "src/assets/svg/BackIcon"

const Cart: FC = () => {
    const dispatch = useAppDispatch()
    const { totalPrice, items } = useSelector(cartSelector)
    const totalCount = items.reduce((sum, obj) => obj.count + sum, 0)

    const onClearPizzas = () => {
        dispatch(clearItems())
    }

    if (!totalCount) return <CartEmpty />

    return (
        <div className="container container--cart">
            <div className="cart">
                <div className="cart__top">
                    <h2 className="content__title">
                        <CartIcon width="18" />
                        Корзина
                    </h2>
                    <div className="cart__clear" onClick={onClearPizzas}>
                        <TrashIcon width="18" />
                        <span>Очистить корзину</span>
                    </div>
                </div>
                <div className="content__items">
                    {items.map((item) => (
                        <CartItem key={item.id} {...item} />
                    ))}
                </div>
                <div className="cart__bottom">
                    <div className="cart__bottom-details">
                        <span>
                            Всего пицц: <b>{totalCount} шт.</b>
                        </span>
                        <span>
                            Сумма заказа: <b>{totalPrice} ₽</b>
                        </span>
                    </div>
                    <div className="cart__bottom-buttons">
                        <Link
                            to="/"
                            className="button button--outline button--add go-back-btn"
                        >
                            <BackIcon width="8" />
                            <span>Вернуться назад</span>
                        </Link>
                        <div className="button pay-btn">
                            <span>Оплатить сейчас</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
