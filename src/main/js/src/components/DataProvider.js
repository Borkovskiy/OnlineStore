import React, { useState, useEffect, createContext } from 'react';
import './css/Order.css';
import axios from 'axios';

export const DataContext = createContext()

export const DataProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);


  const addToCart = (id) => {
    const check = cart.every(item => {
      return item.id !== id
    })
    if (check) {
      const data = products.filter(product => {
        return product.id === id
      })
      setCart({ cart: [...cart, ...data] })
    } else {
      alert("The product has been added to cart.")
    }
  };

  useEffect(() => {
    let url = 'https://online-store-120.herokuapp.com/store/products';
    axios
      .get(url)
      .then(function (response) {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(products)

  return (
    <DataContext.Provider value={{ data: products, addToCart, cart }}>
      {props.children}
    </DataContext.Provider>
  );


}

