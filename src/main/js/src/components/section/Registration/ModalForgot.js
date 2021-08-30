import React, { useContext } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { UserContext } from './UserProvider'

export function ModalForgot() {
    const { show, handleClose, forgotSubmit, setForgotEmail, handleShow } = useContext(UserContext)

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <form onSubmit={forgotSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Forgot Password</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setForgotEmail(e.target.value)} required />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="submit" variant="dark" onClick={handleClose}>
                            Submit
                    </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    );
}

export default ModalForgot;