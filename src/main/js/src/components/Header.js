import React, { useContext, useState } from 'react'
import Menu from './svg/bars-solid.svg'
import Close from './svg/times-solid.svg'
import CartIcon from './svg/shopping-cart-solid.svg'
import { Link } from 'react-router-dom'
import './css/Header.css'
import { DataContext } from './DataProvider'

export function Header() {

    const { cart } = useContext(DataContext)

    const [toggle, setToggle] = useState(false)

    const menuToggle = () => {
        setToggle(!toggle)
    }

    return (
        <div className="header">
            <div className="menu" onClick={menuToggle} style={{ filter: "brightness(0) invert(1)" }}>
                <img src={Menu} alt="" width="20" />
            </div>
            <div className="logo">
                <h2><Link to="/">store</Link></h2>
            </div>
            <nav>
                <ul className={toggle ? "toggle" : ""} onClick={menuToggle}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/login">Login / Register</Link></li>
                    <li><Link to="/user">Profile</Link></li>
                    <li className="close" onClick={menuToggle}>
                        <img src={Close} alt="" style={{ filter: "brightness(0) invert(1)" }} width="20" />
                    </li>
                </ul>
                <div className="nav-cart">
                    <span>{cart.length}</span>
                    <Link to="/cart">
                        <img src={CartIcon} style={{ filter: "brightness(0) invert(1)" }} alt="" width="20" />
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Header
