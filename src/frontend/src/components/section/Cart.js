import React, { Component } from 'react'
import { DataContext } from '../Context'
import { Link } from 'react-router-dom'
import '../css/Details.css'
import '../css/Cart.css'
import Close from '../svg/times-solid.svg'

export class Cart extends Component {
    static contextType = DataContext;

    componentDidMount() {
        this.context.getTotal();
    }

    render() {
        const { cart, increase, decrease, removeProduct, total } = this.context;
        if (cart.length === 0) {
            return <h4 style={{ textAlign: "center" }}>No products</h4>
        } else {
            return (
                <>
                    {
                        cart.map(item => (
                            <div className="details cart" key={item._id}>
                                <div className="cart_img">
                                    <img src={item.src[0]} alt="" />
                                </div>
                                <div className="box">
                                    <div className="row">
                                        <h2>{item.title}</h2>
                                        <span>${item.price * item.count}</span>
                                    </div>
                                    <p>{item.description}</p>
                                    <p>Color: <span>{item.color}</span></p>
                                    <p>{item.content}</p>
                                    
                                    <div className="amount">
                                        <button className="count" onClick={() => decrease(item._id)}> - </button>
                                        <span>{item.count}</span>
                                        <button className="count" onClick={() => increase(item._id)}> + </button>
                                    </div>
                                </div>
                                <div className="delete" onClick={() => removeProduct(item._id)}>
                                    <img src={Close} alt="" width="15" />
                                </div>
                            </div>
                        ))
                    }
                    <div className="total">
                        <Link to="/payment">Payment</Link>
                        <h3>Total: ${total}</h3>
                    </div>
                </>
            )
        }
    }
}

export default Cart
