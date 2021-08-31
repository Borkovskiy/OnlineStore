import React, { useContext, useState } from 'react'
import { Grid, Typography, Avatar, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { NavLink, Link, useHistory } from 'react-router-dom'
import './Login.css'
import { Modal, Button, Form } from 'react-bootstrap'
import { UserContext } from './UserProvider'
import { ModalForgot } from './ModalForgot'
import GoogleButton from 'react-google-button'

const useStyles = makeStyles((theme) => ({
    root: {
      width: 'calc(80% - 12px)',
      maxWidth: '650px',
      height: '33rem',
      border: '1px solid #eee',
      overflow: 'hidden',
      padding: '10px',
      boxShadow: '2px 8px 20px #ddd',
      margin: '10px auto',
      transition: '0.5 linear',
      alignItems: 'center',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

const ResetPassword = () => {
    const paperStyle = { margin: '0 auto' }
    const btnstyle = { marginTop: '8px', marginBottom: '20px' }

    const [password, setPassword] = useState("")

    const history = useHistory()

    const classes = useStyles();

    // const handleResetPassword = (e) => {
    //     e.preventDefault();
    //     const data = { password };
    //     const authResult = new URLSearchParams(window.location.search);
    //     const token = authResult.get('token')

    //     fetch('new_password', {
    //         method: 'POST',
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(data)
    //     }).then(() => {
    //         console.log('password: ', data)
    //         history.push("/login")
    //     })
    // }

    const handleResetPassword = (e) => {
        e.preventDefault();
        const authResult = new URLSearchParams(window.location.search);
        const token = authResult.get('token')
        const data = { password, token };

        fetch('new_password', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(() => {

            console.log(data)
            history.push("/login")
        })
    }


    return (
        <>
            <div className={classes.root}>
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