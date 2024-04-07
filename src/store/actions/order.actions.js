
import { orderService } from "../../services/order.service"
import { ADD_ORDER, REMOVE_ORDER, SET_ORDERS, UPDATE_ORDER } from "../reducers/order.reducer"




export async function loadOrders(filterBy) {
    try {
        const orders = await orderService.query(filterBy)
        store.dispatch({
            type: SET_ORDERS,
            orders
        })
        return orders
    } catch (err) {
        console.log('Cannot load orders', err)
        throw err
    }
}

export async function addOrder(gigID) {
    try {
        const savedOrder = await orderService.addOrder(gigID)
        store.dispatch({
            type: UPDATE_ORDER,
            savedOrder
        })
        return savedOrder
    } catch (err) {
        console.log('Cannot add order', err)
        throw err
    }
}

export async function updateOrder(order) {
    try {
        const editOrder = await orderService.editOrder(order)
        store.dispatch({
            type: ADD_ORDER,
            editOrder
        })
        return editOrder
    } catch (err) {
        console.log('Cannot edit order', err)
        throw err
    }
}

export async function removeOrder(orderId) {
    try {
        await orderService.remove(orderId)
        store.dispatch({
            type: REMOVE_ORDER,
            orderId
        })
    } catch (err) {
        console.log('Cannot remove gig', err)
        throw err
    }
}