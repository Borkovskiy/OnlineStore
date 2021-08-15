import React from 'react'
import { Grid, Typography, Avatar, TextField, Checkbox, FormControlLabel, Button } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Link} from 'react-router-dom'
import { Google } from './Google'
import './Login.css'
import {useState} from 'react'


const Login = () => {
    const paperStyle = {margin: '0 auto' }
    const avatarStyle = { backgroundColor: 'lightseagreen' }
    const btnstyle = {marginTop: '8px', marginBottom: '8px'}
    const linkButton = {marginTop: '8px'}

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { email, password };

        fetch('js_spring_security_check', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(() => {
            console.log('new data added: ', data)
        })
    }

    return (
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
                <Button type='submit' color='primary' variant='contained' style={btnstyle} fullWidth>Log in</Button>
                <a href="/oauth2/authorization/google">Sign in with Google</a>
                <Typography>
                    <a href="#" style={linkButton}>
                        Forget password?
                    </a>
                </Typography>
                <Typography> Do you have an account?&nbsp;
                    <Button component={Link} to="/signup">Sign up?</Button>
                </Typography>
            </form>
        </Grid>
    )
}

export default Login
