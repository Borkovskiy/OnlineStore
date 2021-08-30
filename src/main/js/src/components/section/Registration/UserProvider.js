import React, { useState, useEffect } from 'react'
import { createContext } from 'react'
import { useHistory } from 'react-router-dom'

export const UserContext = createContext()

export const UserProvider = (props) => {

    let history = useHistory()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const [currentEmail, setCurrentEmail] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { email, password };

        await fetch('https://online-store-120.herokuapp.com/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(() => {
            console.log('user-info: ', data)
            localStorage.setItem('user-info: ', JSON.stringify(data))
        });

        await getCurrentUser();

        history.push("/user")
    }

    const handleLogout = () => {
        setCurrentEmail("")
    }

    const getCurrentUser = () =>
        fetch('https://online-store-120.herokuapp.com/user')
            .then((res) =>
                res.json()
            )
    .then((res) => {
        setCurrentEmail(res.email);
    })

    useEffect(() => {
        getCurrentUser()
    }, [])

    return (
        <UserContext.Provider value={{ email, currentEmail, handleLogout, handleSubmit, setEmail, setPassword }}>
            {props.children}
        </UserContext.Provider>
    );
}