import React, { useState, useEffect } from 'react'
import { createContext } from 'react'
import { useHistory } from 'react-router-dom'

export const UserContext = createContext()

export const UserProvider = (props) => {
    let history = useHistory()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [forgotEmail, setForgotEmail] = useState("")

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

    const forgotSubmit = (e) => {
        e.preventDefault();
        const data = { forgotEmail };

        fetch('forgot_password', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(() => {
            console.log('your email: ', data)
        })
    }

    return (
        <UserContext.Provider value={{ email, currentEmail, handleLogout, handleSubmit, setEmail, setPassword, show, handleClose, forgotSubmit, setForgotEmail, handleShow }}>
            {props.children}
        </UserContext.Provider>
    );
}