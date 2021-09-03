import React, { useEffect, useState } from 'react'
import { Grid, Typography, Avatar, TextField, Checkbox } from '@material-ui/core'
import { Button, Modal } from 'react-bootstrap'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { NavLink, useHistory, Link } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { FormHelperText } from '@material-ui/core'
import * as Yup from 'yup'

const SignUp = () => {
    const paperStyle = { margin: '0 auto' }
    const headerStyle = { margin: '0' }
    const avatarStyle = { backgroundColor: 'lightseagreen' }
    const marginTop = { marginTop: '5px' }
    const linkButton = { marginTop: '8px', color: '#343a40', textDecoration: 'underline' }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const initialValues = {
        name: '',
        email: '',
        gender: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        termsAndConditions: false,
    }

    const history = useHistory();

    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "It's too short").required("Required"),
        email: Yup.string().email("Enter valid email").required("Required"),
        gender: Yup.string().oneOf(["MALE", "FEMALE"], "Required").required("Required"),
        phoneNumber: Yup.number().typeError("Enter valid phone number").required("Required"),
        password: Yup.string().min(8, "Password minimum length should be 8").required("Required"),
        confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Password not matched").required("Required"),
        termsAndConditions: Yup.string().oneOf(["true"], "Accept terms & conditions")
    })

    const onSubmit = (values, props) => {
        console.log(values)
        console.log(props)
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)

        fetch('signup', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values)
        }).then(() => {
            console.log('new data added: ', values)
            localStorage.setItem('new data added: ', JSON.stringify(values))
        })
    }

    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push("/user")
        }
    }, [])

    return (
        <Grid>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign In</Modal.Title>
                </Modal.Header>
                <Modal.Body>You have successfully registered!</Modal.Body>
                <Modal.Footer>
                    <Link to="/login" className="cart">
                        <Button variant="dark">
                            Login
                        </Button>
                    </Link>
                </Modal.Footer>
            </Modal>
            <Typography elevation={20} className='paperStyle' style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account</Typography>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                        <Form>
                            <Field as={TextField} type="text" name="name" label='Name'
                                placeholder='Enter your name' fullWidth helperText={<ErrorMessage name="name" />} />
                            <Field as={TextField} type="email" name="email" fullWidth label='Email'
                                helperText={<ErrorMessage name="email" />} />
                            <FormControl component="fieldset" style={marginTop}>
                                <FormLabel component="legend">Gender</FormLabel>
                                <Field as={RadioGroup} aria-label="gender" name="gender" style={{ display: 'initial' }}>
                                    <FormControlLabel value="FEMALE" control={<Radio />} label="Female" />
                                    <FormControlLabel value="MALE" control={<Radio />} label="Male" />
                                </Field>
                            </FormControl>
                            <FormHelperText><ErrorMessage name="gender" /></FormHelperText>
                            <Field as={TextField} fullWidth name="phoneNumber" label='Phone Number'
                                helperText={<ErrorMessage name="phoneNumber" />} />
                            <Field as={TextField} fullWidth name="password" type='password' label='Password'
                                helperText={<ErrorMessage name="password" />} />
                            <Field as={TextField} fullWidth name="confirmPassword" type='password' label='Confirm Passord'
                                helperText={<ErrorMessage name="confirmPassword" />} />
                            <FormControlLabel
                                control={<Field as={Checkbox} name="termsAndConditions" />}
                                label="I accept the terms and conditions."
                            />
                            <FormHelperText><ErrorMessage name="termsAndConditions" /></FormHelperText>
                            <Button type='submit' variant='dark' disabled={props.isSubmitting} onClick={handleShow} className="btn-block">{props.isSubmitting ? "Loading" : "Sign Up"}</Button>
                            <Typography style={{ marginTop: '10px' }}>Already have an account?&nbsp;
                            <NavLink to="/login" style={linkButton}>Log in</NavLink>
                            </Typography>
                        </Form>
                    )}
                </Formik>
            </Typography>
        </Grid>
    )
}

export default SignUp
