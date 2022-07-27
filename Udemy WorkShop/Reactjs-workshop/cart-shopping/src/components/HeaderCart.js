import { MyCartContext } from "../management/context"

const HeaderCart = () => {
    const { amount } = MyCartContext()
    return (
        <button className="header-cart">
            <h2>Cart</h2>
            <span className="cart-amount">{amount}</span>
        </button>
    )
}

export default HeaderCart