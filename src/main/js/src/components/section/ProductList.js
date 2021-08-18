import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../DataProvider'
import '../css/Products.css'
import Carousel from 'react-bootstrap/Carousel'
import '../css/Carousel.css'

const ProductList = () => {
    const { data, addToCart } = useContext(DataContext)

    return (
        <>
            <Carousel style={{ zIndex: "3" }}>
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
                    data.map(product => (
                        <div className="card" key={product.id}>
                            <Link to={`/products/${product.id}`}>
                                <img src={`data:image/jpeg;base64,${product.productImage[1]}`} />
                            </Link>
                            <div className="content">
                                <h3>
                                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                                </h3>
                                <p>{product.shortDescription}</p>
                                <span>${product.price}</span><br />
                                <button onClick={() => addToCart(product.id)}>Add to cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default ProductList;

