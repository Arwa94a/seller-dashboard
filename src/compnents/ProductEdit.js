import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import StoreContext from "../uiltes/StoreContext"

function ProductEdit(props) {
  const { product, show, setShow } = props
  const { editProduct } = useContext(StoreContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={e => editProduct(e, product._id)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Title
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="title" defaultValue={product.title} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Description
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="description" defaultValue={product.description} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Price
            </Form.Label>
            <Col md="8">
              <Form.Control type="number" name="price" defaultValue={product.price} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              image
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="image" defaultValue={product.image} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Quantity
            </Form.Label>
            <Col md="8">
              <Form.Control type="number" name="quantity" defaultValue={product.quantity} required />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="success" type="submit" onClick={() => setShow(false)}>
            Confirm Edit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default ProductEdit
