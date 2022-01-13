import { useContext } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import StoreContext from "../uiltes/StoreContext";

function ProductAdd(props) {
    const { show, setShow } = props
    const{addProduct}=useContext(StoreContext)
    return ( <>
     <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={addProduct}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Title
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="title" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Description
            </Form.Label>
            <Col md="8">
              <Form.Control as="textarea" name="description" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Image
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="image" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Price
            </Form.Label>
            <Col md="8">
              <Form.Control type="number" name="price" required />
            </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Quantity
            </Form.Label>
            <Col md="8">
              <Form.Control type="number" name="quantity" required />
            </Col>
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            Add Products
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
    
    </> );
}

export default ProductAdd;