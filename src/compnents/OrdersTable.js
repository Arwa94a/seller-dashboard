import { useState } from "react"
import { Button } from "react-bootstrap"
import OrderEdit from "./OrderEdit"
import OrderView from "./OrderView"


function OrdersTable(props) {
  const { order } = props
  const [viewShow, setViewShow] = useState(false)
  const [editShow, setEditShow] = useState(false)
  

  return (
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
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setEditShow(true)} variant="outline-primary">
          edit
        </Button>
      </td>
      <OrderView show={viewShow} setShow={setViewShow} order={order} />
      <OrderEdit show={editShow} setShow={setEditShow} orderId={order._id} order={order} />
    </tr>
  )
}

export default OrdersTable
