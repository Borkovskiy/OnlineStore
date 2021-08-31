import React, { useState, useEffect, createContext } from 'react';
import './css/Order.css';
import axios from 'axios';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

export const DataContext = createContext()

export const DataProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const [show, setShow] = useState(false);

  const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));

  const classes = useStyles()

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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  setTimeout(() => {
    handleClose()
}, 2000);

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
        `https://online-store-120.herokuapp.com/store/products?page=${pageNumber}`
      );
      console.log(res);
      setProducts(res.data);
      setLoading(false)
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoading) {
    return <Backdrop className={classes.backdrop} open>
      <CircularProgress color="inherit" />
    </Backdrop>
  }

  const handlePageChange = (e) => {
    setCurrentPage(e.target.innerText);
    console.log("page number:", e.target);
  };

  return (
    <DataContext.Provider value={{ data: products, handleShow, show, handleClose, handlePageChange, currentPage, addToCart, cart, decrease, increase, total, getTotal, removeProduct }}>
      {props.children}
    </DataContext.Provider>
  );
}

