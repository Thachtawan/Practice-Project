import CartItem from "./CartItem"
import { MyCartContext } from "../management/context"

const Cart =  () => {
    const {cart, total, formatNumber} = MyCartContext()
    if (cart.length === 0) {
        return (
            <div className="shopping-cart">
                    <h2>There's nothing in your Shopping Cart...</h2>
            </div>
        )
    } else {
        return (
            <div className="shopping-cart">
                <div className="cart-detail">
                    <h2>Your Shopping Cart</h2>
                </div>
                {
                    cart.map((item) => {
                        return <CartItem key={item.id} {...item}/>
                    })
                }
                <div className="show-amount">
                    <div className="amount-to-show">
                        <h2 className="total-amount">Total Amount: </h2>
                        <p className="amount">{formatNumber(total)}</p>
                        <p className="currency">THB</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart