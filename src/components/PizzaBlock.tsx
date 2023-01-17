import { FC, useState } from "react"
import { useSelector } from "react-redux"

//store
import { cartItemSelectorById } from "src/store/selectors/cart"
import { useAppDispatch } from "src/store/store"
import { addItem } from "../store/slices/cartSlice"

//types
import { ICartItem, IPizza, pizzaTypes } from "src/types/pizza"

//svg
import IncrementIcon from "src/assets/svg/IncrementIcon"

//utils
import { typesDough } from "src/utils/data"

const PizzaBlock: FC<IPizza> = (props) => {
    const {
        id,
        title = "Чизбургер пицца",
        price = 415,
        imageUrl = "https://dodopizza-a.akamaihd.net/static/Img/Products/" +
            "Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
        sizes = [26, 30, 40],
        types = [0, 1],
    } = props

    const dispatch = useAppDispatch()
    const [activeSize, setActiveSize] = useState(0)
    const [activeType, setActiveType] = useState(0)
    const cartItem = useSelector(cartItemSelectorById(id))

    const addedCount = cartItem ? cartItem.count : 0

    const onClickAdd = () => {
        const item: ICartItem = {
            id,
            title,
            price,
            imageUrl,
            type: typesDough[activeType],
            size: sizes[activeSize],
            count: 0,
        }
        dispatch(addItem(item))
    }

    const handleClickType = (type: pizzaTypes) => () => setActiveType(type)

    const handleClickSize = (sizeIndex: number) => () =>
        setActiveSize(sizeIndex)

    return (
        <div className="pizza-block-wrapper">
            <div className="pizza-block">
                <img
                    className="pizza-block__image"
                    src={imageUrl}
                    alt="Pizza"
                />
                <h4 className="pizza-block__title">{title}</h4>
                <div className="pizza-block__selector">
                    <ul>
                        {types.map((type) => (
                            <li
                                key={type}
                                className={`${activeType === type && "active"}`}
                                onClick={handleClickType(type)}
                            >
                                {typesDough[type]}
                            </li>
                        ))}
                    </ul>
                    <ul>
                        {sizes.map((size, index) => (
                            <li
                                key={size}
                                className={`${
                                    activeSize === index && "active"
                                }`}
                                onClick={handleClickSize(index)}
                            >
                                {size} см.
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">от {price} ₽</div>
                    <div
                        className="button button--outline button--add"
                        onClick={onClickAdd}
                    >
                        <IncrementIcon width="12" />
                        <span>Добавить</span>
                        {addedCount > 0 && <i>{addedCount}</i>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PizzaBlock
