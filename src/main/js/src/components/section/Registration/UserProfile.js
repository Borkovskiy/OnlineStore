import React, { useContext } from 'react'
import './userStyle.css'
import { Logout } from './Logout'
import { UserContext } from './UserProvider'
import { ModalForgot } from './ModalForgot'
import { Link } from 'react-router-dom'

function UserProfile() {
    const { currentEmail, handleShow } = useContext(UserContext);
    const data = useContext(UserContext);

    console.log(data);

    if (!currentEmail) {
        return (
            <div>
                <div>
                    <div className="backgroundImg"></div>
                </div>
                <div className="textUser">
                    <h3>You are not loged in</h3>
                    <Link to="/login" style={{ textDecoration: 'none' }}>
                        <button className="userButton" type='submit' variant='dark'>Go to Login</button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="backgroundImg">
                <div />
                <p>Welcome to your account</p>
            </div>
            <ModalForgot />
            <div>
                <div className="loggedUser">
                    {/* <h3>Account</h3> */}
                    <h3>Personal Details</h3>
                    <p>Your email: <b>{currentEmail}</b></p>
                    <h3>Privacy Settings</h3>
                    <button className="userButton" onClick={handleShow}>Change your password</button> <br />
                    <Logout />
                </div>
            </div>
        </div>
    )
}

export default UserProfile
