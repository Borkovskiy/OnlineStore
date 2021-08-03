import React from 'react'
import { Grid, Typography, Avatar, TextField, Checkbox, FormControlLabel, Button } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Link} from 'react-router-dom'

const Login = () => {
    const paperStyle = { padding: '20px', height: '60vh', width: '500px', margin: '20px auto' }
    const avatarStyle = { backgroundColor: 'lightseagreen' }
    const btnstyle = {marginTop: '8px'}
    return (
        <Grid>
            <Typography elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Login</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required />
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="Remember me"
                        />
                    }
                    label="Primary"
                />
                <Button type='submit' color='primary' variant='contained' style={btnstyle} fullWidth>Log in</Button>
                <Typography>
                    <Button href="#" style={btnstyle}>
                        Forget password?
                    </Button>
                </Typography>
                <Typography> Do you have an account?&nbsp;
                    <Button component={Link} to="/signup">Sign up?</Button>
                </Typography>
            </Typography>
        </Grid>
    )
}

export default Login
