import React, { useContext } from 'react'
import './userStyle.css'
import { Logout } from './Logout'
import { UserContext } from './UserProvider'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function UserProfile() {
    const { currentEmail } = useContext(UserContext);
    const data = useContext(UserContext);

    console.log(data);

    const btnstyle = { marginTop: '8px', marginBottom: '8px' }

    if (!currentEmail) {
        return (
            <div className="userStyle">
                <div>
                    <h3>Account</h3>
                </div>
                <div>
                    <p>You are not loged in.</p>
                </div>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                    <Button type='submit' variant='dark' style={btnstyle}>Go to Login</Button>
                </Link>
            </div>
        )
    }

    return (
        <div className="userStyle">
            <div>
                <h3>Account</h3>
                <p>Hi, {currentEmail}</p>
                <Logout />
            </div>
        </div>
    )
}

export default UserProfile
