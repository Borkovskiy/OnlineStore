import React, { useState, useEffect, createContext } from 'react';
import './css/Order.css';
import axios from 'axios';

export const DataContext = createContext()

export const DataProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const spinner = {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    margin: 'auto',
    width: '100%',
    maxWidth: '300px',
    zIndex: '100'
  }


  // useEffect(() => {
  //   const dataCart = localStorage.getItem('cart');
  //   setCart(dataCart && dataCart.length > 0 ? JSON.parse(dataCart) : []);
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem('cart', JSON.stringify(cart))
  // }, [cart])

  // useEffect(() => {
  //   const dataTotal = localStorage.getItem('total');
  //   setCart(dataTotal && dataTotal.length > 0 ? JSON.parse(dataTotal) : []);
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem('total', JSON.stringify(total))
  // }, [total])

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
    } else {
      alert("The product has been added to cart.")
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
    getProducts(currentPage);
  }, [currentPage]);

  const getProducts = async (pageNumber) => {
    try {
      const res = await axios.get(
        `/store/products?page=${pageNumber}`
      );
      console.log(res);
      setProducts(res.data);
      setLoading(false)
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoading) {
    return <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" style={spinner} />
  }

const handlePageChange = (e) => {
  setCurrentPage(e.target.innerText);
  console.log("page number:", e.target);
};


  // useEffect(() => {
  //   const getProducts = async () => {
  //     const result = await axios.get(
  //       "https://online-store-120.herokuapp.com/store/products"
  //     );
  //     setProducts(result.data);
  //     setLoading(false)
  //   };
  //   getProducts();
  // }, []);

  // if (isLoading) {
  //   return <div>Loading...</div>
  // }



  return (
    <DataContext.Provider value={{ data: products, spinner, handlePageChange, currentPage, addToCart, cart, decrease, increase, total, getTotal, removeProduct }}>
      {props.children}
    </DataContext.Provider>
  );
}

