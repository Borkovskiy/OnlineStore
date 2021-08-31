import React, { Component } from 'react'
import ProductList from './section/ProductList'
import Details from './section/Details'
import { Route } from 'react-router-dom'
import Cart from './section/Cart'
import Payment from './section/Payment/Payment'
import Login from './section/Registration/Login'
import SignUp from './section/Registration/SignUp'
import About from './section/About'
import Google from './section/Registration/Google'
import UserProfile from './section/Registration/UserProfile'
import ResetPassword from './section/Registration/ResetPassword'

export class Section extends Component {
    render() {
        return (
            <section>
                <Route path="/" component={ProductList} exact />
                <Route path="/products" component={ProductList} exact />
                <Route path="/products/:id" component={Details} />
                <Route path="/cart" component={Cart} />
                <Route path="/payment" component={Payment} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route path="/about" component={About} />
                <Route path="/oauth2/authorization/google" component={Google} />
                <Route path="/user" component={UserProfile} />
                <Route path="/reset_password" component={ResetPassword} />
            </section>
        )
    }
}

export default Section
