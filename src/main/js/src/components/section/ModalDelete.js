import React, { useContext } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { DataContext } from '../DataProvider'

export function ModalDelete() {
  const { handleCloseDelete, showDelete } = useContext(DataContext)

    return (
      <>
        <Modal show={showDelete} onHide={handleCloseDelete}>
          <Modal.Header closeButton>
            <Modal.Title>Shopping cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>Product has been added to your cart</Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={handleCloseDelete}>
              Close
          </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default ModalDelete;
