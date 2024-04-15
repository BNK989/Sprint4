import { storageService } from "./async-storage.service"
import { gigService } from "./gig.service"
import { httpService } from "./http.service"

import { userService } from './user.service.js'


const STORAGE_KEY = 'gigOrder'
const BASE_URL = 'order'


export const orderService = {
    query,
    getById,
    addOrder,
    editOrder,
    remove
}

async function query(filterBy) {
    // var orders = await storageService.query(STORAGE_KEY)
    const orders = await httpService.get(BASE_URL,filterBy)
    console.log('orders:', orders)

    if (filterBy.buyerOrder) {
        orders = orders.filter(order => order.buyerOrder === filterBy.buyerOrder)
    }
    if (filterBy.sellerOrder) {
        orders = orders.filter(order => order.sellerOrder === filterBy.sellerOrder)
    }
    return orders
}

async function addOrder(gigId) {
    try {
        const gigToOrder = await gigService.getById(gigId)
        const buyer = await userService.getLoggedinUser()
        let users = await userService.getUsers()
        let seller = users.find(user => user._id === gigToOrder.owner._id)
        // if(seller !== gigToOrder.owner._id){
        //     seller={
        //         fullname:'meni ko',
        //         imgUrl:'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
        //         _id:'FHc6T'
        //     }
        // }
        let orderToAdd = {
            buyer: { fullname: buyer.fullname, imgUrl: buyer.imgUrl, _id: buyer._id },
            seller: { fullname: seller.fullname, imgUrl: seller.imgUrl, _id: seller._id },
            gig: {
                _id: gigToOrder._id,
                title: gigToOrder.title,
                imgUrl: gigToOrder.imgUrls,
                price: gigToOrder.packages.basic.price
            },
            status: "pending",
            createdAt: new Date(),
        }
        var order = await httpService.post(BASE_URL, orderToAdd)
        return order
    } catch (err) {
        console.error('canot add order:', err)
    }

}

async function acceptRejectOrder(orderToUpdate) {
    const buyer = await userService.getLoggedinUser()
    const seller = await userService.getById(orderToUpdate.seller._id)
    buyer.orders.sentOrders.forEach(order => {
        if (orderToUpdate._id === order._id) order.status = orderToUpdate.status
    })
    seller.orders.receivedOrders.unshift(orderToAdd)
    await userService.update(buyer)
    await userService.update(seller)
}

function getById(orderId) {
    return httpService.get(BASE_URL, orderId)
}

async function editOrder(orderId ,value) {
    var savedOrder
    console.log('value:', value)
    savedOrder = await httpService.put(`${BASE_URL}/${orderId}` , {value} )
    return savedOrder
}

async function remove(orderId) {
    await httpService.remove(BASE_URL, orderId)
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