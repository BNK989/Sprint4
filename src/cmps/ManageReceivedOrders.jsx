import { loadOrders, updateOrder } from "@/store/actions/order.actions"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { ReceivedOrdersPreview } from "./ReceivedOrdersPreview"


export function ManageReceivedOrders({ user }) {
    // const [isActionModalOpen, setActionModal] = useState(false)

    const orders = useSelector(storeState => storeState.orderModule.orders)

    useEffect(() => {
        loadOrders()

    }, [])

    function onChangeAction(orderToUpdate){
        updateOrder(orderToUpdate)
    }


    return (<>
        {
            !!orders.length  &&
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
                            <ReceivedOrdersPreview 
                            order={order} index={index} onChangeAction={onChangeAction}
                            orders={orders}
                             />
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