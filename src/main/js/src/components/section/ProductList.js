import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../DataProvider'
import '../css/Products.css'
import { CarouselList } from './CarouselList'
import { PaginationButtons } from './Pagination'
import { ModalCart } from './ModalCart'

const ProductList = () => {
    const { data, addToCart, handlePageChange, currentPage, handleShow } = useContext(DataContext)
    const [scroll, setScroll] = useState(0);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    const handleUpButton = () => {
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <ModalCart />
            <div className="onTop">
                <button
                    className={scroll < 300 ? "" : "show"}
                    onClick={handleUpButton}>
                    Go Up
            </button>
            </div>

            <CarouselList />
            <div id="product">
                {
                    data.map(product => (
                        <div className="card" key={product.id}>
                            <Link to={`/products/${product.id}`}>
                                <img src={`data:image/jpeg;base64,${product.productImage[0]}`} alt="description" />
                            </Link>
                            <div className="content">
                                <h3>
                                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                                </h3>
                                <p>{product.shortDescription}</p>
                                <span>${product.price}</span><br />
                                <button onClick={() => {
                                    addToCart(product.id);
                                    handleShow()
                                    }}>Add to cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <PaginationButtons
                handlePageChange={handlePageChange}
                page={currentPage}
            />
        </>
    );
};

export default ProductList;

