import React, { useContext } from 'react'
import { Grid, Typography, Avatar, TextField } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { NavLink } from 'react-router-dom'
import './Login.css'
import { Button } from 'react-bootstrap'
import { UserContext } from './UserProvider'
import { ModalForgot } from './ModalForgot'
import GoogleButton from 'react-google-button'


const Login = () => {
    const { handleSubmit, setEmail, setPassword, handleShow } = useContext(UserContext)

    const paperStyle = { margin: '30px auto' }
    const avatarStyle = { backgroundColor: 'lightseagreen' }
    const btnstyle = { marginTop: '8px', marginBottom: '8px' }
    const linkButton = { marginTop: '8px', color: '#343a40', textDecoration: 'underline' }

    return (
        <>
            <ModalForgot />
            <Grid>
                <form onSubmit={handleSubmit} className='paperStyle' style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                        <h2>Login</h2>
                    </Grid>
                    <TextField type='email' label='Email' onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' fullWidth required />
                    <TextField type='password' label='Password' onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' fullWidth required />
                    <Button type='submit' variant='dark' style={btnstyle} className="btn-block">Log in</Button>
                    <Typography>
                        <a href="#" style={linkButton} onClick={handleShow}>
                            Forget password?
                        </a>
                    </Typography>
                    <div className="line">
                        <p>or</p>
                    </div>
                    <a href="/oauth2/authorization/google" target="_blank" style={{textDecoration: 'none'}}>
                        <GoogleButton type="light" style={{margin: '0 auto', color: '#343a40'}} />
                    </a>
                    <div style={{textAlign: 'center', margin: '10px 0'}}>Don't have an account?&nbsp;
                    <NavLink to="/signup" style={linkButton}>Sign up?</NavLink>
                    </div>
                </form>
            </Grid>
        </>
    )
}

export default Login
