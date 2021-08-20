import React from 'react'
import './userStyle.css'
import { Button } from 'react-bootstrap'

function UserProfile({ history }) {

    let user = JSON.stringify(history.location.state.data.email)

    user = user.replace(/['"]+/g, '');
    console.log(user);

    return (
        <div class="userStyle">
            <div>
                <h3>Account</h3>
            </div>
            <div>
                <p>Hi <b>{user}</b>,</p>
                <p>we are glad to see you in our store! <br />
                Let's do some shopping!</p>
            </div>
            <Button variant="dark">Logout</Button>
        </div>
    )
}

export default UserProfile
