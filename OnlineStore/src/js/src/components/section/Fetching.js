import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Fetching() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('https://online-store-120.herokuapp.com/store/products').then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    })
    return (
        <div>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Fetching