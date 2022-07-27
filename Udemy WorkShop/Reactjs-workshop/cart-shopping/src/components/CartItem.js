import plus from '../image/plus.svg'
import minus from '../image/minus.svg'
import deleteicn from '../image/delete-icn.svg'
import { MyCartContext } from '../management/context'

const CartItem = ({id, name, image_url, price, quantity}) => {
    const {removeItem, toggleQuantity, formatNumber} = MyCartContext()
    return (
        <div className="item">
            <div className="product-image">
                <img src={image_url} alt={name}/>
            </div>
            <div className="description">
                <h2>{name}</h2>
                <p>Price: {formatNumber(price)} THB</p>
            </div>
            <div className="quantity">
                <button className="minus-btn" onClick={() => toggleQuantity(id,"decrement")}>
                    <img src={minus} alt="minus"/>
                </button>
                <input type="text" value={quantity} disabled/>
                <button className="plus-btn" onClick={() => toggleQuantity(id,"increment")}>
                    <img src={plus} alt="plus"/>
                </button>
            </div>
            <div className="total-price">
                {formatNumber(quantity * price)}
            </div>
            <div className="remove" onClick={() => removeItem(id)}>
                <img src={deleteicn} alt="delete"/>
            </div>
        </div>
    )
}

export default CartItem