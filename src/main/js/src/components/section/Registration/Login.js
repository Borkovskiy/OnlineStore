import React, { useState, useEffect } from 'react'
import { Grid, Typography, Avatar, TextField, Checkbox, FormControlLabel } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useHistory, NavLink } from 'react-router-dom'
import { Google } from './Google'
import './Login.css'
import { Modal, Button, Form } from 'react-bootstrap'


const Login = () => {
    const paperStyle = { margin: '0 auto' }
    const avatarStyle = { backgroundColor: 'lightseagreen' }
    const btnstyle = { marginTop: '8px', marginBottom: '8px' }
    const linkButton = { marginTop: '8px' }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const history = useHistory();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [forgotEmail, setForgotEmail] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { email, password };

        fetch('login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(() => {
            console.log('user-info: ', data)
            localStorage.setItem('user-info: ', JSON.stringify(data))
            history.push({ pathname: "/user", state: { data: data } })
        })
    }

    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push("/user")
        }
    }, [])

    const forgotSubmit = (e) => {
        e.preventDefault();
        const data = { forgotEmail };

        fetch('forgot_password', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: data
        }).then(() => {
            console.log('your email: ', data)
            // localStorage.setItem('user-info: ', JSON.stringify(data))
            // history.push({ pathname: "/user", state: { data: data } })
        })
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <form onSubmit={forgotSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Forgot Password</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setForgotEmail(e.target.value)} required/>
                    </Modal.Body>
                    <Modal.Footer>
                        {/* <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button> */}
                        <Button type="submit" variant="dark" onClick={handleClose}>
                            Submit
                    </Button>
                    </Modal.Footer>
                </form>
            </Modal>
            <Grid>
                <form onSubmit={handleSubmit} className='paperStyle' style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                        <h2>Login</h2>
                    </Grid>
                    <TextField type='email' label='Email' onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' fullWidth required />
                    <TextField type='password' label='Password' onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' fullWidth required />
                    {/* <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="Remember me"
                        />
                    }
                    label="Primary"
                /> */}
                    <Button type='submit' variant='dark' style={btnstyle} className="btn-block">Log in</Button>
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
