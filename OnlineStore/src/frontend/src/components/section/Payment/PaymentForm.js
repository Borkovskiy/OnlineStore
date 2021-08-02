import React from 'react'
import {Button} from '@material-ui/core'
import {Link} from 'react-router-dom'
import './Payment.css'

const PaymentForm = () => {
    return (
        <div className={'payment-form'}>
            <h4>Thank you for your order!</h4>
            <Button className={'btn'} component={Link} to="/" variant="contained">Back to Store</Button>
        </div>
    )
}

export default PaymentForm
