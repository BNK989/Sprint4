import { loadOrders, updateOrder } from "@/store/actions/order.actions"
import { space } from "postcss/lib/list"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"


export function ManageSentOrders({ user, orders }) {
    const [isActionModalOpen, setActionModal] = useState(false)
    const [myOrders, setMyOrders] = useState([])


    useEffect(() => {
        onlyOrders()
    }, [])

    function onlyOrders() {
        if (!orders || !orders.length ) return 
        let myOrders1 = []
        orders.forEach(order => {
            if (order.buyer._id === user._id) {
                myOrders1.push(order)
            }
        })
        setMyOrders(prev => ([...prev, ...myOrders1]))
    }

    function truncateStringToWordCount(inputString, maxWordCount) {
        const words = inputString.split(/\s+/);
    
        if (words.length <= maxWordCount) {
            return inputString;
        }
    
        const truncatedWords = words.slice(0, maxWordCount).join(' ');
        return `${truncatedWords}...`;
    }

    function gigStatusClass(status){
        if (status === 'approved') return 'approved'
        if (status === 'rejected') return 'rejected'
        return ''

    }

    if (!myOrders) return <span>no ordersss</span>
    return (<section className="my-orders">

        {!myOrders.length &&
            <span className="no-orders">no orders</span>
        }

        {myOrders.length &&

            <ul className="orders-list">
                {myOrders.map(order => {
                    return <li key={order._id} className={gigStatusClass(order.status)}>
                        <img src={order.gig.imgUrl[0]} alt="" />
                        <span className="gig-title">{truncateStringToWordCount(order.gig.title , 5)}</span>
                        {/* <span className="price">${order.gig.price}</span> */}
                        <span className="order-status">{order.status}</span>
                    </li>

                })}

            </ul>


        }
    </section>

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