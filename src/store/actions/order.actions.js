
import { orderService } from "../../services/order.service"
import { ADD_ORDER, REMOVE_ORDER, SET_ORDERS, UPDATE_ORDER } from "../reducers/order.reducer"
import { store } from "../store"




export async function loadOrders(filterBy = {buyer: false}) {
console.log('filterBy:', filterBy)
    try {
        const orders = await orderService.query(filterBy)
        console.log('ordershghgh11111:', orders)
        store.dispatch({
            type: SET_ORDERS,
            orders
        })
        console.log('ordershghgh:', orders)
        return orders
    } catch (err) {
        console.error('Cannot load orders', err)
        throw err
    }
}

export async function addOrder(gigID) {
    try {
        const savedOrder = await orderService.addOrder(gigID)
        store.dispatch({
            type: ADD_ORDER,
            savedOrder
        })
        return savedOrder
    } catch (err) {
        console.error('Cannot add order', err)
        throw err
    }
}

export async function updateOrder(order, value) {
    try {
        const editOrder = await orderService.editOrder( order._id, value)
        store.dispatch({
            type: UPDATE_ORDER,
            editOrder
        })
        return editOrder
    } catch (err) {
        console.error('Cannot edit order', err)
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
        console.error('Cannot remove gig', err)
        throw err
    }
}