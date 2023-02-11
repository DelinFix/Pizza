import { Link } from "react-router-dom"
import { FC } from "react"

// svg
import { EmptyCartIcon } from "assets/icons"

const CartEmpty: FC = () => {
    return (
        <div className="content">
            <div className="cart cart--empty">
                <h2>
                    Корзина пустая <span>😕</span>
                </h2>
                <p>
                    Вероятней всего, вы не заказывали ещё пиццу.
                    <br />
                    Для того, чтобы заказать пиццу, перейди на главную страницу.
                </p>
                <EmptyCartIcon width="20" />
                <Link className="button button--black" to="/">
                    <span>Вернуться назад</span>
                </Link>
            </div>
        </div>
    )
}

export default CartEmpty
