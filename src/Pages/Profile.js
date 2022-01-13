import { useContext, useState } from "react"
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap"
import ProfileEdit from "../compnents/ProfileEdit"
import StoreContext from "../uiltes/StoreContext"
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import ProfileRemove from "../compnents/ProfileRemove";

function Profile() {
  const { profile } = useContext(StoreContext)
  const [editShow, setEditShow] = useState(false)
  const [deleteShow, setDelete] = useState(false)
  if(!profile) return <h1>Loding...</h1>
  return (
    <>
     <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }}variant="outline-primary" className="me-2" onClick={() => setEditShow(true)}>
          <EditTwoToneIcon />
        </Button>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} variant="outlined" color="error" className="me-2" onClick={() => setDelete(true)}>
          <EditTwoToneIcon />
        </Button>
      </div>
     <Container>
      <Card border="secondary" style={{ width: "18rem" }}>
        <Card.Header><h1>أسم المتجر</h1>{profile.nameStore}</Card.Header>
        <Card.Body>
          <Card.Text><h4>نبذة تعريفية بالمتجر</h4>{profile.aboutYourBusiness}</Card.Text>
        </Card.Body>
      </Card>
  <Row>
    <Col xs={6} md={4}>
      <Image src={profile.photo} roundedCircle height={200}/>
    </Col>
  </Row>
  <h5>{profile.firstName} {profile.lastName}</h5>
  <h5>{profile.email}</h5>
  <h5>{profile.phone}</h5>
  <h5>{profile.commercialRegister}</h5>
</Container>
<ProfileEdit show={editShow} setShow={setEditShow}/>
<ProfileRemove show={deleteShow} setShow={setDelete} profileId={profile._id} />
    </>
  )
}

export default Profile
