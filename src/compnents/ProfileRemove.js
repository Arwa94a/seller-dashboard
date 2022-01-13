import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import StoreContext from "../uiltes/StoreContext"

function ProfileRemove(props) {
  const { deleteProfile } = useContext(StoreContext)
  const { show, setShow ,profileId} = props
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete your profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete your profile ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => deleteProfile(profileId)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ProfileRemove
