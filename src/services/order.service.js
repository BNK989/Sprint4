import { storageService } from "./async-storage.service"
import { gigService } from "./gig.service.local"

import { userService } from './user.service.js'


const STORAGE_KEY = 'gigOrder'


export const orderService = {
    query,
    getById,
    addOrder,
    editOrder,
    remove
}

async function query(filterBy = { buyerOrder: '', sellerOrder: '' }) {
    var orders = await storageService.query(STORAGE_KEY)

    if (filterBy.buyerOrder) {
        orders = orders.filter(order => order.buyerOrder === filterBy.buyerOrder)
    }
    if (filterBy.sellerOrder) {
        orders = orders.filter(order => order.sellerOrder === filterBy.sellerOrder)
    }
    return orders
}

async function addOrder(gigId) {
    const gigToOrder = await gigService.getById(gigId)
    const buyer = await userService.getLoggedinUser()
    const seller = await userService.getById(gigToOrder.owner._id)

    let orderToAdd = {
        buyer:{fullname:buyer.fullname,imgUrl:buyer.imgUrl,_id:buyer._id},
        seller: {fullname:seller.fullname,imgUrl:seller.imgUrl,_id:seller._id},
        gig: {
            _id: gigToOrder._id,
            title: gigToOrder.title,
            imgUrl: gigToOrder.imgUrls,
            price: gigToOrder.price
        },
        status: "pending",
        createdAt: new Date(),
    }
    buyer.orders.sentOrders.unshift(orderToAdd)
    seller.orders.receivedOrders.unshift(orderToAdd)
    await userService.update(buyer)
    await userService.update(seller)

    var order = await storageService.post(STORAGE_KEY, orderToAdd)
    return order
}

async function acceptRejectOrder(orderToUpdate){
    const buyer = await userService.getLoggedinUser()
    const seller = await userService.getById(orderToUpdate.seller._id)
    buyer.orders.sentOrders.forEach(order => {
        if(orderToUpdate._id === order._id) order.status =orderToUpdate.status
    })
    seller.orders.receivedOrders.unshift(orderToAdd)
    await userService.update(buyer)
    await userService.update(seller)
}

function getById(orderId) {
    return storageService.get(STORAGE_KEY, orderId)
}

async function editOrder(order) {
    var savedOrder
    savedOrder = await storageService.put(STORAGE_KEY, order)
    return savedOrder
}

async function remove(orderId) {
    await storageService.remove(STORAGE_KEY, orderId)
}

function getEmptyOrder() {
    return {

        buyer: "",
        seller: "",
        gig: {
            _id: "i101",
            name: "Design Logo",
            imgUrl: "",
            price: 20
        },
        status: "pending/approved/rejected"
    }
}