import { useState } from "react"



export function ReceivedOrdersPreview({order,index,onChangeAction,orders}) {
    const [isActionModalOpen, setActionModal] = useState(false)

    function onActionBtn(value,idx){
        let orderToUpdate = orders[idx]
        orderToUpdate.status = value
        onChangeAction(orderToUpdate)
        setActionModal(!isActionModalOpen)
    }

    return (<>
        <td><img src={order.seller.imgUrl} alt="Avatar" /></td>
        <td>{order.seller.fullname}</td>
        <td>{order.gig.title}</td>
        <td>{order.createdAt}</td>
        <td>${order.gig.price}</td>
        <td className={`received-order-action-container ${(order.status === "Accepted") && "accepted"} ${(order.status === "Rejected") && "rejected"}`} key={order._id} onClick={() => setActionModal(!isActionModalOpen)}><button>{order.status}</button></td>
        {
            isActionModalOpen && <td className="received-order-action-modal">
                <button className="received-order-accept" onClick={() => onActionBtn("Accepted", index)}>Accept</button>
                <button className="received-order-reject" onClick={() => onActionBtn("Rejected", index)}>Reject</button>
            </td>
        }
    </>

    )
}