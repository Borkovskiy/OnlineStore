import React, { useState, useEffect } from 'react'
import { createContext } from 'react'
import {useHistory} from 'react-router-dom'

export const UserContext = createContext()

export const UserProvider = (props) => {

    let history = useHistory()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const [currentEmail, setCurrentEmail] = useState("")

    const getCurrentUser = () => {
        fetch('https://online-store-120.herokuapp.com/user', {
            method: 'GET',
            credentials: 'same-origin'
        }).then(res => res.json())
        .then(res => setCurrentEmail(res.data))
    }

    useEffect(() => {
        getCurrentUser()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { email, password };

        fetch('https://online-store-120.herokuapp.com/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(() => {
            console.log('user-info: ', data)
            localStorage.setItem('user-info: ', JSON.stringify(data))
            getCurrentUser()
            history.push("/user")
        })
    }

    return (
        <UserContext.Provider value={{ email, data: currentEmail, handleSubmit, setEmail, setPassword }}>
            {props.children}
        </UserContext.Provider>
    );
}