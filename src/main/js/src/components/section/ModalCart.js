import React, { useContext } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { DataContext } from '../DataProvider'

export function ModalCart() {
  const { handleClose, show } = useContext(DataContext)

    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Shopping cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>Product has been added to your cart</Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={handleClose}>
              Close
          </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default ModalCart;
