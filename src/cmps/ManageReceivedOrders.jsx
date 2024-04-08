import { loadOrders, updateOrder } from "@/store/actions/order.actions"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"


export function ManageReceivedOrders({ user }) {
    const [isActionModalOpen, setActionModal] = useState(false)

    const orders = useSelector(storeState => storeState.orderModule.orders)

    useEffect(() => {
        loadOrders()

    }, [])

    function onActionBtn(value,idx){
        let orderToUpdate = orders[idx]
        orderToUpdate.status = value
        updateOrder(orderToUpdate)
        setActionModal(!isActionModalOpen)
    }


    return (<>
        <h1>hay</h1>

        {
            orders.length  &&
            <table >
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Task</th>
                        <th>Submission Date</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={index}>
                            <td><img src={order.buyer.imgUrl} alt="Avatar"  /></td>
                            <td>{order.buyer.fullname}</td>
                            <td>{order.gig.title}</td>
                            <td>{order.createdAt}</td>
                            <td>${order.gig.price}</td>
                            <td key={order._id}  onClick={() => setActionModal(!isActionModalOpen)}><button>{order.status}</button></td>
                            {
                                isActionModalOpen && <td>
                                    <button onClick={()=>onActionBtn("Accepted",index)}>Accept</button>
                                    <button onClick={()=>onActionBtn("Rejected",index)}>Reject</button>
                                </td>
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
        }
    </>

    )
}


// {
//     buyer: buyer._id,
//     seller: seller._id,
//     gig: {
//         _id: gigToOrder._id,
//         title: gigToOrder.title,
//         imgUrl: gigToOrder.imgUrls,
//         price: gigToOrder.price
//     },
//     status: "pending"
// }