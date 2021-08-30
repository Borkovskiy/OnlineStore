import React, { useContext } from 'react'
import { Grid, Typography, Avatar, TextField } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { NavLink, Link } from 'react-router-dom'
import './Login.css'
import { Modal, Button, Form } from 'react-bootstrap'
import { UserContext } from './UserProvider'
import { ModalForgot } from './ModalForgot'


const Login = () => {
    const { handleSubmit, setEmail, setPassword, handleShow } = useContext(UserContext)

    const paperStyle = { margin: '0 auto' }
    const avatarStyle = { backgroundColor: 'lightseagreen' }
    const btnstyle = { marginTop: '8px', marginBottom: '8px' }
    const linkButton = { marginTop: '8px' }

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
                    {/* <Link to="/user" style={{textDecoration: 'none'}}> */}
                        <Button type='submit' variant='dark' style={btnstyle} className="btn-block">Log in</Button>
                    {/* </Link> */}
                    <a href="/oauth2/authorization/google">Sign in with Google</a>
                    <Typography>
                        <a href="#" style={linkButton} onClick={handleShow}>
                            Forget password?
                    </a>
                    </Typography>
                    <Typography> Do you have an account?&nbsp;
                    <NavLink to="/signup">Sign up?</NavLink>
                    </Typography>
                </form>
            </Grid>
        </>
    )
}

export default Login
