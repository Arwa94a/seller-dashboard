import { useContext, useState } from "react"
import { Card, Col, Row, Button, Form } from "react-bootstrap"
import AllMyProduct from "../compnents/AllMyProduct"
import ProductEdit from "../compnents/ProductEdit"
import StoreContext from "../uiltes/StoreContext"
import AddIcon from "@mui/icons-material/Add"
import ProductAdd from "../compnents/ProductAdd"
function Products() {
  const { products,productSearch } = useContext(StoreContext)
  const [show, setShow] = useState(false)
  if (products.length === 0) return <h1>Looding...</h1>
  return (
    <>
      <h1 style={{ marginTop: 10 }}>Products</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon />
        </Button>
      </div>
      <Form className="m-5" onSubmit={productSearch}>
          <Row>
            <Col md="8">
              <Form.Group>
                <Form.Control
                  name="productSearch"
                  list="productSearch"
                  type="search"
                  placeholder="Search for a Product.."
                />
              </Form.Group>
              <datalist id="productSearch">
                {products.map(product => (
                  <option value={product.title} />
                ))}
              </datalist>
            </Col>
            <Col>
              <Button variant="primary" type="submit">
                Search
              </Button>
            </Col>
          </Row>
        </Form>
      <Row xs={1} md={2} className="g-4">
        {products.map(product => (
          <AllMyProduct product={product} />
        ))}
      </Row>
      <ProductAdd show={show} setShow={setShow}/>
    </>
  )
}

export default Products
