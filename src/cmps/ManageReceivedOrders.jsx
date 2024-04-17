import { loadOrders, updateOrder } from "@/store/actions/order.actions"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { ReceivedOrdersPreview } from "./ReceivedOrdersPreview"
import { SOCKET_EVENT_ADD_ORDER, socketService } from "@/services/socket.service"
import { ADD_ORDER } from "@/store/reducers/order.reducer"
import { store } from "@/store/store"


export function ManageReceivedOrders({ user }) {
    // const [isActionModalOpen, setActionModal] = useState(false)
    
    const orders = useSelector(storeState => storeState.orderModule.orders)
    console.log('orders14:', orders)
    // const [isOrderUpdate, setOrderUpdate] = useState(false)


    useEffect(() => {
        loadOrders()
        // sortOrders()
        socketService.on(SOCKET_EVENT_ADD_ORDER,(savedOrder)=>{
            console.log('order:', savedOrder)
            store.dispatch({type:ADD_ORDER,savedOrder})
        })

        return()=>{
            socketService.off(SOCKET_EVENT_ADD_ORDER)
        }

    }, [])

    // function sortOrders(){
    //     console.log(orders);
    //     orders.sort((order1, order2) => (order1.createdAt - order2.createdAt) )
    //     console.log(orders);
    // }

    function onChangeAction(orderToUpdate, value) {
        console.log('orderToUpdate:',orderToUpdate )
        updateOrder(orderToUpdate, value)
    }
console.log('orders46:', orders)
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
            </>}
    </>
    )
}
