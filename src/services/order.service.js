import { storageService } from "./async-storage.service"
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
    const gigToOrder = await storageService.get(STORAGE_KEY, gigId)
    let orderToAdd = {
        buyer: await userService.getLoggedinUser()._id,
        seller: await userService.getById(gigToOrder.owner._id),
        gig: {
            _id: gigToOrder._id,
            title: gigToOrder.title,
            imgUrl: gigToOrder.imgUrls,
            price: gigToOrder.price
        },
        status: "pending"
    }
    var order = await storageService.post(STORAGE_KEY, orderToAdd)
    return order
}

function getById(orderId) {
    return storageService.get(STORAGE_KEY, orderId)
}

async function editOrder(order) {
    var savedOrder
    savedOrder = await storageService.put(STORAGE_KEY, order)
    return savedGig
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