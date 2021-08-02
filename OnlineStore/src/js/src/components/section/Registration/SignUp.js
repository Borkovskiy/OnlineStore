import React from 'react'
import { Grid, Typography, Avatar, TextField, Button, Checkbox } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {Link} from 'react-router-dom'

const SignUp = () => {
    const paperStyle = { padding: '30px 20px', width: '500px', margin: '20px auto' }
    const headerStyle = { margin: '0' }
    const avatarStyle = { backgroundColor: 'lightseagreen' }
    const marginTop = { marginTop: '5px' }
    return (
        <Grid>
            <Typography elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='Name' placeholder='Enter your name' />
                    <TextField fullWidth label='Email' />
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <TextField fullWidth label='Phone Number' />
                    <TextField fullWidth type='password' label='Passord' />
                    <TextField fullWidth type='password' label='Confirm Passord' />
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button component={Link} to="/" type='submit' variant='contained' color='primary' fullWidth>Sign Up</Button>
                    <Typography style={{marginTop: '10px'}}>Already have an account?&nbsp;
                    <Button component={Link} to="/login">Log in</Button>
                    </Typography>
                </form>
            </Typography>
        </Grid>
    )
}

export default SignUp
