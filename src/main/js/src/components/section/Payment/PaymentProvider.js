import React, { useState, useEffect } from 'react'
import { createContext } from 'react'

export const PaymentContext = createContext()

export const PaymentProvider = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [region, setRegion] = useState("")
    const [zip, setZip] = useState("")
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")


    return (
        <PaymentContext.Provider>

        </PaymentContext.Provider>
    )
}
