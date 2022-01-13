import { useContext, useState } from "react"
import { Button, Col, Form, Row, Table } from "react-bootstrap"
import OrdersTable from "../compnents/OrdersTable"
import StoreContext from "../uiltes/StoreContext"

function Orders() {

  const { orders,orderSearch } = useContext(StoreContext)
  if(!orders) return <h1>Looding...</h1>

  return (
    <>
      <h1 style={{ marginTop: 10 }}>Orders</h1>
      <Form className="m-5" onSubmit={orderSearch}>
          <Row>
            <Col md="8">
              <Form.Group>
                <Form.Control
                  name="orderSearch"
                  list="orderSearch"
                  type="search"
                  placeholder="Search for a Order.."
                />
              </Form.Group>
              <datalist id="orderSearch">
                {orders.map(order => (
                  <option value={order.userId.username} />
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
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "9%" }}>Status</th>
            <th style={{ width: "18%" }}>Quantity</th>
            <th style={{ width: "18%" }}>image Product</th>
            <th style={{ width: "10%" }}>Name User</th>
            <th style={{ width: "30%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <OrdersTable key={order._id} order={order} />
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default Orders