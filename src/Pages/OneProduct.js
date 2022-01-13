import { useContext, useState } from "react"
import { Button, Card, Col } from "react-bootstrap"
import { useParams } from "react-router-dom"
import ProductEdit from "../compnents/ProductEdit"
import ProductRemove from "../compnents/ProductRemove"
import StoreContext from "../uiltes/StoreContext"
function OneProduct() {
  const { productId } = useParams()
  const { products } = useContext(StoreContext)
  const [deleteShow, setDelete] = useState(false)
  const [editShow, setEditShow] = useState(false)

  if (products.length === 0) return <h1>Loading...</h1>
  const product = products.find(product => product._id === productId)

  return (
    <>
      <Col>
        <Card>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>
              <h5>Price:{product.price}</h5> <h5>Quantity:{product.quantity}</h5>
            </Card.Text>
            <Card.Text>
              <h5>Rating Avarage:{product.ratingAverage}</h5>
            </Card.Text>
            <Button
              variant="success"
              style={{ marginRight: 40, marginBottom: 10 }}
              className="me-2"
              onClick={() => setEditShow(true)}
            >
              Edit
            </Button>
            <Button
              style={{ marginRight: 40, marginBottom: 10 }}
              variant="danger"
              className="me-2"
              onClick={() => setDelete(true)}
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
        <Card.Footer>
          <h1>Comments</h1>
          {product.comments.map(comment => (
            <Card.Title>{comment.comment}</Card.Title>
          ))}
        </Card.Footer>
      </Col>
      <ProductEdit product={product} setShow={setEditShow} show={editShow} />
      <ProductRemove productId={product._id} setShow={setDelete} show={deleteShow} />
    </>
  )
}

export default OneProduct
