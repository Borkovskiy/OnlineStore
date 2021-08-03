import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../Context'
import '../css/Products.css'
import Carousel from 'react-bootstrap/Carousel'
import '../css/Carousel.css'

export class Products extends Component {

    static contextType = DataContext;

    render() {
        const { products } = this.context;
        
        return (
            <>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 cover"
                            src="https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_1280/FSH-1625648916735-034i01.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 cover"
                            src="https://media.gucci.com/content/PromoComponent_Standard_1264x790/1620034209/PromoComponent_OUVERTURE-21-017_001_Default.jpg"
                            alt="Second slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 cover"
                            src="https://media.gucci.com/content/PromoComponent_Standard_1264x790/1620041404/PromoComponent_OUVERTURE-21-071_001_Default.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <div id="product">
                    {
                        products.map(product => (
                            <div className="card" key={product._id}>
                                <Link to={`/product/${product._id}`}>
                                    <img src={product.src[0]} alt="" />
                                </Link>
                                <div className="content">
                                    <h3>
                                        <Link to={`/product/${product._id}`}>{product.title}</Link>
                                    </h3>
                                    <p>{product.description}</p>
                                    <span>${product.price}</span><br />
                                    <button onClick={() => this.context.addCart(product._id)}>Add to cart</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </>
        )
    }
}

export default Products
