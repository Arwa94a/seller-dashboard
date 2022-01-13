import { useContext, useState } from "react"
import { Button } from "react-bootstrap"
import { useParams } from "react-router-dom"
import OrderEdit from "../compnents/OrderEdit"
import OrderView from "../compnents/OrderView"
import StoreContext from "../uiltes/StoreContext"

function OneOrder() {
  const { orderId } = useParams()
  const { orders } = useContext(StoreContext)
  const [viewShow, setViewShow] = useState(false)
  const [editShow, setEditShow] = useState(false)
  if (!orders) return <h1>Looding...</h1>
  console.log(orders)
  const order = orders.find(order => order._id === orderId)
  if(!order) return <h1>Looding...</h1>
  console.log(order)
  return (
    <>
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
        <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
          <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{order._id}</td>
          <td>{order.status}</td>
          <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{order.quantity}</td>
          <td>
            <img src={order.productId.image} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
          </td>
          <td>{order.userId.username}</td>
          <td>
            <Button variant="info" className="me-2" onClick={() => setViewShow(true)}>
              View
            </Button>
            <Button
              style={{ marginRight: 40, marginBottom: 10 }}
              onClick={() => setEditShow(true)}
              variant="outline-primary"
            >
              edit
            </Button>
          </td>
          <OrderView show={viewShow} setShow={setViewShow} order={order} />
          <OrderEdit show={editShow} setShow={setEditShow} orderId={order._id} order={order} />
        </tr>
      </tbody>
    </>
  )
}

export default OneOrder
