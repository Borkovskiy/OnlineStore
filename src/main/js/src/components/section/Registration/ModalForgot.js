import React, { useContext } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { UserContext } from './UserProvider'
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export function ModalForgot() {
    const { show, handleClose, forgotSubmit, setForgotEmail, status } = useContext(UserContext)

    const classes = useStyles();

    console.log(status)

    return (
        <>
            <Modal show={show} onHide={handleClose} className={classes.root}>
                <form onSubmit={forgotSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Forgot Password</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" className="mb-3" placeholder="Enter email" onChange={(e) => setForgotEmail(e.target.value)} required />
                        {status?.type === 'success' && <Alert severity="success">A link for resetting your password has been sent to the email address.</Alert>}
                        {status?.type === 'error' && (
                            <Alert severity="error">This email does not exist</Alert>
                        )}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="submit" variant="dark">
                            Submit
                    </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    );
}

export default ModalForgot;