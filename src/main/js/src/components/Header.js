import React, { Component } from 'react'
import Menu from './svg/bars-solid.svg'
import Close from './svg/times-solid.svg'
import CartIcon from './svg/shopping-cart-solid.svg'
import { Link } from 'react-router-dom'
import './css/Header.css'
import {DataContext} from './DataProvider'

export class Header extends Component {

    static contextType = DataContext;

    state = {
        toggle: false
    }

    menuToggle = () => {
        this.setState({toggle: !this.state.toggle})
    }

    render() {
        const {toggle} = this.state;
        const {cart} = this.context;
        return (
            <div className="header sticky">
                <div className="menu" onClick={this.menuToggle} style={{filter: "brightness(0) invert(1)"}}>
                    <img src={Menu} alt="" width="20" />
                </div>
                <div className="logo">
                    <h2><Link to="/">store</Link></h2>
                </div>
                <nav>
                    <ul className={toggle ? "toggle" : ""} onClick={this.menuToggle}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/login">Login / Register</Link></li>
                        <li><Link to="/user">Profile</Link></li>
                        <li className="close" onClick={this.menuToggle}>
                            <img src={Close} alt="" style={{filter: "brightness(0) invert(1)"}} width="20" />
                        </li>
                    </ul>
                    <div className="nav-cart">
                        <span>{cart.length}</span>
                        <Link to="/cart">
                        <img src={CartIcon} style={{filter: "brightness(0) invert(1)"}} alt="" width="20" />
                        </Link>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header
