import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../DataProvider'
import '../css/Products.css'
import Carousel from 'react-bootstrap/Carousel'
import '../css/Carousel.css'

const ProductList = () => {
    const { data } = useContext(DataContext)

    return (
        <div id="product">
            {
                data.map(product => (
                    <div className="card" key={product.id}>
                        <Link to={`/product/${product.id}`}>
                            <img src={`data:image/jpeg;base64,${product.base64Image}`} />
                        </Link>
                        <div className="content">
                            <h3>
                                <Link to={`/product/${product.id}`}>{product.name}</Link>
                            </h3>
                            <p>{product.shortDescription}</p>
                            <span>${product.price}</span><br />
                            <button onClick={() => data.addToCart(product.id)}>Add to cart</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ProductList;

