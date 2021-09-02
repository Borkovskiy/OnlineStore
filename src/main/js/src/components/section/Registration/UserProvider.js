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

    const [status, setStatus] = useState(undefined)

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
        fetch('user_info')
            .then((res) =>
                res.json()
            )
            .then((res) => {
                setCurrentEmail(res.email);
            })

    useEffect(() => {
        getCurrentUser()
    }, [])

    const forgotSubmit = async (e) => {
        e.preventDefault();
        const data = { forgotEmail };
        try {
          const result = await fetch("https://online-store-120.herokuapp.com/forgot_password", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
          }).then((response) => {
            if (response.status == 200) {
              return response.json();
            } else {
              throw Error(response.statusText);
            }
          });
          console.log("success scope");
          setStatus({ type: "success" });
        } catch (error) {
          console.log("error scope");
          setStatus({ type: "error", error });
        } finally {
          setTimeout(handleClose, 3000);
        }
      };

    return (
        <UserContext.Provider value={{ email, currentEmail, handleLogout, handleSubmit, setEmail, setPassword, show, handleClose, forgotSubmit, setForgotEmail, handleShow, status }}>
            {props.children}
        </UserContext.Provider>
    );
}