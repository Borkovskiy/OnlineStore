import React from 'react'
import { Link } from 'react-router-dom'
import './Payment.css'

const PaymentForm = () => {
    return (
        <div className={'payment-form'}>
            <h3>Thank you for your order!</h3>
            <Link to="/">
                <button type="button" className={'btn'}>
                    Back to Store
                </button>
            </Link>
        </div>
    )
}

export default PaymentForm
