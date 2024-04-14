import { loadOrders, updateOrder } from "@/store/actions/order.actions"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { ReceivedOrdersPreview } from "./ReceivedOrdersPreview"


export function ManageReceivedOrders({ user }) {
    // const [isActionModalOpen, setActionModal] = useState(false)

    const orders = useSelector(storeState => storeState.orderModule.orders)
    const [myOrders, setMyOrders] = useState([])


    useEffect(() => {
        loadOrders()
        onlyOrders()
    }, [])

    function onlyOrders() {
        if (!orders || !orders.length ) return 
        let myOrders1 = []
        console.log('orders:', orders)
        orders.forEach(order => {
            if (order.seller._id === user._id) {
                myOrders1.push(order)
            }
            console.log('myOrders1:', myOrders1)
        })
        setMyOrders(prev => ([...prev, ...myOrders1]))
    }

    // useEffect(() => {
    //     loadOrders()
    // }, [])

    function onChangeAction(orderToUpdate) {
        updateOrder(orderToUpdate)
    }


    return (<>

        {
            !!orders.length && <>
                {/* <h1>Received Orders:</h1> */}
                <table >
                    <thead>
                        <tr>
                            <th>Buyer</th>
                            {/* <th>Name</th> */}
                            <th>Task</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myOrders.map((order, index) => (
                            <tr key={index}>
                                <ReceivedOrdersPreview
                                    order={order} index={index} onChangeAction={onChangeAction}
                                    orders={orders}
                                />
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>}
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