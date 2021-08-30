import React, { useContext, useState } from 'react'
import { Grid, Typography, Avatar, TextField } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { NavLink, Link, useHistory } from 'react-router-dom'
import './Login.css'
import { Modal, Button, Form } from 'react-bootstrap'
import { UserContext } from './UserProvider'
import { ModalForgot } from './ModalForgot'
import GoogleButton from 'react-google-button'


const ResetPassword = () => {
    const paperStyle = { margin: '0 auto' }
    const btnstyle = { marginTop: '8px', marginBottom: '8px' }

    const [password, setPassword] = useState("")

    const history = useHistory()

    const handleResetPassword = (e) => {
        e.preventDefault();
        const data = { password };

        fetch('reset_password', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(() => {
            console.log('password: ', data)
            history.push("/login")
        })
    }


    return (
        <>
            <div className="userStyle">
                <form onSubmit={handleResetPassword} className='paperStyle' style={paperStyle}>
                    <Grid align='center'>
                        <h2>Reset Password</h2>
                    </Grid>
                    <TextField type='Password' label='Password' placeholder='Enter your new Password' onChange={(e) => setPassword(e.target.value)} fullWidth required />
                    {/* <TextField type='password' label='Confirm Password' placeholder='Confirm your new password' fullWidth required /> */}
                    <Button type='submit' variant='dark' style={btnstyle} className="btn-block">Change Password</Button>
                </form>
            </div>
        </>
    )
}

export default ResetPassword