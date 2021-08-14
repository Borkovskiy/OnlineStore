import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Fetching() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('https://online-store-120.herokuapp.com/store/products').then(res => {
            console.log(res)
            setProducts(res.data)
        })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div>
            {
                products.map(product => (
                    <div key={product.id}>
                        <img src={`data:image/jpeg;base64,${product.base64Image}`} width={"400px"} />
                        <div>{product.name}</div>
                    </div>
                ))
            }

        </div>
    )
}

export default Fetching