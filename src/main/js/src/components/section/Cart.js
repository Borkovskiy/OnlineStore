import React, { useContext } from 'react'
import { DataContext } from '../DataProvider'
import { Link } from 'react-router-dom'
import '../css/Details.css'
import '../css/Cart.css'
import Close from '../svg/times-solid.svg'

const Cart = () => {
    const { cart, increase, decrease, total, removeProduct } = useContext(DataContext)
    // const { cart, increase, decrease, removeProduct, total } = this.context;

    if (cart.length === 0) {
        return <h4 style={{ textAlign: "center" }}>No products</h4>
    } else {
        return (
            <>
                {
                    cart.map(item => (
                        <div className="details cart" key={item.id}>
                            <div className="cart_img">
                                <img src={`data:image/jpeg;base64,${item.productImage['1']}`} />
                            </div>
                            <div className="box">
                                <div className="row">
                                    <h2>{item.name}</h2>
                                    <span>${item.price * item.count}</span>
                                </div>
                                <p>{item.shortDescription}</p>
                                <p>Color: <span>{item.color}</span></p>
                                <p>{item.description}</p>

                                <div className="amount">
                                    <button className="count" onClick={() => decrease(item.id)}> - </button>
                                    <span>{item.count}</span>
                                    <button className="count" onClick={() => increase(item.id)}> + </button>
                                </div>
                            </div>
                            <div className="delete" onClick={() => removeProduct(item.id)}>
                                <img src={Close} alt="" width="15" />
                            </div>
                        </div>
                    ))
                }
                <div className="total">
                    <Link to="/payment">Payment</Link>
                    <h4>Total: ${total}</h4>
                </div>
            </>
        )
    }
}

export default Cart;
