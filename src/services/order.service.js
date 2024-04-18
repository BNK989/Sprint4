import { gigService } from "./gig.service"
import { httpService } from "./http.service"

import { userService } from './user.service.js'

const BASE_URL = 'order'

export const orderService = {
    query,
    getById,
    addOrder,
    editOrder,
    remove
}

async function query(filterBy) {
    const orders = await httpService.get(BASE_URL,filterBy)
    return orders
}

async function addOrder(gigId) {
    try {
        const gigToOrder = await gigService.getById(gigId)
        const buyer = await userService.getLoggedinUser()
        let users = await userService.getUsers()
        let seller = users.find(user => user._id === gigToOrder.owner._id)
        
        let orderToAdd = {
            buyer: { fullname: buyer.fullname, imgUrl: buyer.imgUrl, _id: buyer._id },
            seller: { fullname: seller.fullname, imgUrl: seller.imgUrl, _id: seller._id },
            gig: {
                _id: gigToOrder._id,
                title: gigToOrder.title,
                imgUrl: gigToOrder.imgUrls,
                price: gigToOrder.packages.basic.price
            },
            status: "Pending",
            createdAt: new Date(),
        }
        var order = await httpService.post(BASE_URL, orderToAdd)
        return order
    } catch (err) {
        console.error('canot add order:', err)
    }

}

function getById(orderId) {
    return httpService.get(BASE_URL, orderId)
}

async function editOrder(orderId ,value) {
    var savedOrder
    savedOrder = await httpService.put(`${BASE_URL}/${orderId}` , {value} )
    return savedOrder
}

async function remove(orderId) {
    await httpService.remove(BASE_URL, orderId)
}