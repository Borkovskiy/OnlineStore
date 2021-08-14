import React from 'react'
import { Grid, Typography, Avatar, TextField, Checkbox, FormControlLabel, Button } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Link} from 'react-router-dom'
import { Google } from './Google'
import './Login.css'
import {useForm} from 'react-hook-form'


const Login = () => {
    const paperStyle = {margin: '0 auto' }
    const avatarStyle = { backgroundColor: 'lightseagreen' }
    const btnstyle = {marginTop: '8px', marginBottom: '8px'}
    const linkButton = {marginTop: '8px'}

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
        return fetch("http://localhost:8080/js_spring_security_check", {
            mode: 'no-cors',
            method: "POST",
            body: data
          }).then(function (res) {
            if (res.ok) {
              alert("You have successfully registered! ");
            } else if (res.status == 401) {
              alert("User with this email already exists.");
            }
          }, function (e) {
            alert("Error submitting form!");
          });
    }
    return (
        <Grid>
            <form onSubmit={handleSubmit(onSubmit)} className='paperStyle' style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Login</h2>
                </Grid>
                <TextField type='email' label='Email' placeholder='Enter your email' {...register("email", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/})} fullWidth required />
                <TextField type='password' label='Password' placeholder='Enter your password' {...register("password", { required: true })} fullWidth required />
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
                <Google />
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
