import React, { useContext, useState, useEffect } from 'react'
import { DataContext } from '../DataProvider'
import { Link, useParams } from 'react-router-dom'
import '../css/Details.css'
import axios from 'axios';

const Details = (props) => {
    const { addToCart } = useContext(DataContext)
    const [product, setProduct] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [index, setIndex] = useState(0)

    const { id } = useParams();

    const myRef = React.createRef();

    useEffect(() => {
        async function getProduct() {
            const result = await axios(
                `https://online-store-120.herokuapp.com/store/products/${id}`
            );
            console.log(result);
            setProduct(result.data);
            setLoading(false)
        }
        if (id) getProduct();
    }, [id]);

    if (isLoading) {
        return <div>Loading...</div>
    }

    const handleTab = index => {
        setIndex(index);
        const images = myRef.current.children;
        for(let i =0; i < images.length; i++) {
            images[i].className = images[i].className.replace("active", "")
        }
        images[index].className = "active";
    };

    const {
        name, color, shortDescription, price, description, productImage
    } = product;
    console.log(product)


    return (
        <>
            <div className="details" key={id}>
                <div className="product_img">
                    <img src={`data:image/jpeg;base64,${productImage[1]}`} />
                </div>
                <div className="box">
                    <div className="row">
                        <h2>{name}</h2>
                        <span>${price}</span>
                    </div>
                    <p>{shortDescription}</p>
                    <p>Color: <span>{color}</span></p>
                    <p>{description}</p>
                    {/* <div className="images">
                        {
                            productImage.map((img, index) => (
                                <img src={`data:image/jpeg;base64,${productImage}`} alt="" key={index}
                                    onClick={() => handleTab(index)}
                                />
                            ))
                        }
                    </div> */}
                    <Link to="/cart" className="cart" onClick={() => addToCart(+id)}>
                        Add to cart
                    </Link>
                </div>
            </div>

        </>
    )
}

export default Details
