import { FC, useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import { Link, useLocation } from "react-router-dom"

// components
import { Search } from "components"

// store
import { cartSelector } from "store"

// svg
import { CartIcon, PizzaLogoIcon } from "assets/icons"

const Header: FC = () => {
    const { items, totalPrice } = useSelector(cartSelector)
    const totalCount = items.reduce((sum, obj) => obj.count + sum, 0)
    const { pathname } = useLocation()
    const isMounted = useRef(false)

    const CART_PATH = "/cart"

    useEffect(() => {
        if (isMounted.current) {
            const cartJson = JSON.stringify(items)
            localStorage.setItem("cart", cartJson)
        }
        isMounted.current = true
    }, [items])

    return (
        <div className="header">
            <div className="container">
                <Link to="/">
                    <div className="header__logo">
                        <PizzaLogoIcon width="38" />
                        <div>
                            <h1>React Pizza</h1>
                            <p>самая вкусная пицца во вселенной</p>
                        </div>
                    </div>
                </Link>
                {pathname !== CART_PATH && <Search />}
                <div className="header__cart">
                    <Link to={CART_PATH} className="button button--cart">
                        <span>{totalPrice} ₽</span>
                        <div className="button__delimiter" />
                        <CartIcon width="18" />
                        <span>{totalCount}</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
