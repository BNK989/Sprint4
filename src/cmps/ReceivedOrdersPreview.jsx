import { useState } from "react"
import { QuickAvatar } from "./shanCN/QuickAvatar"



export function ReceivedOrdersPreview({ order, index, onChangeAction, orders }) {
    const [isActionModalOpen, setActionModal] = useState(false)

    function onActionBtn(value, idx) {
        let orderToUpdate = orders[idx]
        orderToUpdate.status = value
        onChangeAction(orderToUpdate)
        setActionModal(!isActionModalOpen)
    }

    function GetDate(isoDate) {
        // const formattedDate = format(new Date(isoDate), 'dd/MM/yy')
        const date = new Date(isoDate);
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear() % 100}`;
        return formattedDate
    }
    // buyer
    return (<>
        <td><div className="buyer">
        <QuickAvatar user={order.buyer} className="user-image aspect-square h-20 w-20 flex-center" />
            {/* <img src={order.buyer.imgUrl} alt="Avatar" /> */}
            {order.buyer.fullname}
            </div></td>
        {/* <td></td> */}
        <td className="task">{order.gig.title}</td>

        <td>{GetDate(order.createdAt)}</td>
        {/* <td>{format(new Date(order.createdAt), 'dd/MM/yy')}</td> */}
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