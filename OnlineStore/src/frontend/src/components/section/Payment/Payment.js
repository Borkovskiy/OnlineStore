import React, { useState } from 'react'
import AddressForm from './AddressForm'
import PaymentForm from './PaymentForm'

const steps = ['Shipping address', 'Payment details'];

const Payment = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [shippingData, setShippingData] = useState({});

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const next = (data) => {
        setShippingData(data)

        nextStep();
    }

    const Confirmation = () => (
        <div>
            Confirmation 
        </div>
    )

    const Form = () => activeStep === 0
        ? <AddressForm next={next} />
        : <PaymentForm shippingData={shippingData}/>

    return (
        <>
            {/* <h3 style={{ textAlign: "center" }}>Payment</h3> */}
            {activeStep === steps.length ? <Confirmation /> : <Form />}
        </>
    )
}

export default Payment
