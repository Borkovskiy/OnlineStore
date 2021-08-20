import React, { useState, useEffect, createContext } from 'react';
import './css/Order.css';
import axios from 'axios';

export const DataContext = createContext()

export const DataProvider = (props) => {
  const [products, setProducts] = useState([]);
  // const [isLoading, setLoading] = useState(true);

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  // useEffect(() => {
  //   const localData = localStorage.getItem('cart');
  //   setCart(localData && localData.length > 0 ? JSON.parse(localData) : []);
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem('cart', JSON.stringify(cart))
  // }, [cart])

  const addToCart = (id) => {
    console.log(cart)
    const check = cart.every(item => {
      return item.id !== id
    })
    if (check) {
      const data = products.filter(product => {
        return product.id === id
      })
      console.log(typeof id)
      setCart([...cart, ...data])
    } 
  };

  useEffect(() => {
    decrease();
  }, [cart])

  const decrease = id => {
    cart.forEach(item => {
      if (item.id === id) {
        item.count === 1 ? item.count = 1 : item.count -= 1;
      }
    })
    setCart(cart);
    getTotal();
  }


  useEffect(() => {
    increase();
  }, [cart])

  const increase = id => {
    cart.forEach(item => {
      if (item.id === id) {
        item.count += 1;
      }
    })
    setCart(cart);
    getTotal();
  }

  useEffect(() => {
    getTotal();
  }, [cart])

  const getTotal = () => {
    const res = cart.reduce((prev, item) => {
      return prev + (item.price * item.count);
    }, 0)
    setTotal(res)
  }

  const removeProduct = id => {
    if (window.confirm("Do you want to delete this product?")) {
      cart.forEach((item, index) => {
        if (item.id === id) {
          cart.splice(index, 1)
        }
      })
      setCart(cart);
      getTotal();
    }
  }

  useEffect(() => {
    const getProducts = async () => {
      const result = await axios.get(
        "https://online-store-120.herokuapp.com/store/products"
      );
      setProducts(result.data);
      // setLoading(false)
    };
    getProducts();
  }, []);



  return (
    <DataContext.Provider value={{ data: products, addToCart, cart, decrease, increase, total, getTotal, removeProduct }}>
      {props.children}
    </DataContext.Provider>
  );
}

