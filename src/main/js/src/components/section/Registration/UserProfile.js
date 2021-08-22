import React from 'react'
import './userStyle.css'
import { Logout } from './Logout'

function UserProfile({ history }) {

    let user = JSON.stringify(history.location.state.data.email)

    user = user.replace(/['"]+/g, '');
    console.log(user);

    return (
        <div className="userStyle">
            <div>
                <h3>Account</h3>
            </div>
            <div>
                <p>Hi <b>{user}</b>,</p>
                <p>we are glad to see you in our store! <br />
                Let's do some shopping!</p>
            </div>
            <Logout />
        </div>
    )
}

export default UserProfile
