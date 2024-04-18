import { loadOrders, updateOrder } from "@/store/actions/order.actions"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { ReceivedOrdersPreview } from "./ReceivedOrdersPreview"
import { SOCKET_EVENT_ADD_ORDER, socketService } from "@/services/socket.service"
import { ADD_ORDER } from "@/store/reducers/order.reducer"
import { store } from "@/store/store"

export function ManageReceivedOrders({ user }) {
    
    const orders = useSelector(storeState => storeState.orderModule.orders)

    useEffect(() => {
        loadOrders()
        
        socketService.on(SOCKET_EVENT_ADD_ORDER,(savedOrder)=>{
            store.dispatch({type:ADD_ORDER,savedOrder})
        })

        return()=>{
            socketService.off(SOCKET_EVENT_ADD_ORDER)
        }

    }, [])

    function onChangeAction(orderToUpdate, value) {
        updateOrder(orderToUpdate, value)
    }

    return (<>
        {
            !!orders.length && <>
                <table >
                    <thead>
                        <tr>
                            <th>Buyer</th>
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
