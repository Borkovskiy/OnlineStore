import React, { useContext, useState, useEffect } from 'react'
import { DataContext } from '../DataProvider'
import { Link } from 'react-router-dom'
import '../css/Details.css'

const Details = ({ match }) => {
    const { data } = useContext(DataContext)
    const { product, setProduct } = useState([])

    const getProduct = () => {
        if(match.params.id) {
            const res = data;
            const date = res.filter(item => {
                return item.id === match.params.id
            })
            console.log(date)
        }
    }
    


    // useEffect(() => {
    //     getProduct().then(res => {
    //         setProduct(match.params.id);
    //             console.log(product);
    //     });
    // }, [product]);


    return (
        <>
            {match.params.id}
        </>
    )
}

export default Details
