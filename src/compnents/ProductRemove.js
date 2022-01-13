import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import StoreContext from "../uiltes/StoreContext"

function ProductRemove(props) {
  const { deleteProduct } = useContext(StoreContext)
  const { show, setShow ,productId} = props
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete this Product ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => deleteProduct(productId)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ProductRemove
