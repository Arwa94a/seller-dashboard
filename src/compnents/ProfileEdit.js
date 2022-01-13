import { useContext } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import StoreContext from "../uiltes/StoreContext";

function ProfileEdit(props) {
    const {profile,editProfile}=useContext(StoreContext)
    const{show,setShow}=props
   
    return ( <>
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={e => editProfile(e)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
             first name
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="firstName" defaultValue={profile.firstName} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
             last name
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="lastName" defaultValue={profile.lastName} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
       user Name
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="username" defaultValue={profile.username} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
            Nome Of Store
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="nameStore" defaultValue={profile.nameStore} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
        email
            </Form.Label>
            <Col md="8">
              <Form.Control type="email" name="email" defaultValue={profile.email} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
            Phone
            </Form.Label>
            <Col md="8">
              <Form.Control type="number" name="phone" defaultValue={profile.phone} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
            about Your Business
            </Form.Label>
            <Col md="8">
              <Form.Control as="textarea" name="aboutYourBusiness" defaultValue={profile.aboutYourBusiness} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              photo
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="photo" defaultValue={profile.photo} required />
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
    
    </> );
}

export default ProfileEdit;