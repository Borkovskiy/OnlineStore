import React, { useContext } from 'react'
import './userStyle.css'
import { Logout } from './Logout'
import { UserContext } from './UserProvider'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function UserProfile() {
    const { data } = useContext(UserContext)

    return (
        <div className="userStyle">
            <div>
                <h3>Account</h3>
            </div>
            <div>
                <p>Hi {data},</p>
                <p>we are glad to see you in our store! <br />
                Let's do some shopping!</p>
            </div>
            <Logout />
        </div>
    )
}

export default UserProfile
