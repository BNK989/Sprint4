import 'animate.css'
import { useRef, useState } from "react"
import { QuickAvatar } from "./shanCN/QuickAvatar"
import { utilService as u } from '../services/util.service'


export function ReceivedOrdersPreview({ order, index, onChangeAction, orders }) {
    const [isActionModalOpen, setActionModal] = useState(false)

    let currStatus = useRef()

    function onActionBtn(value, idx) {
        let orderToUpdate = orders[idx]
        orderToUpdate.status = value
        onChangeAction(orderToUpdate, value)
        setActionModal(!isActionModalOpen)
        u.animateRef(currStatus.current,`animate__shake${value === 'Accepted' ? 'Y' : 'X'}`, 800)
    }

    function GetDate(isoDate) {
        const date = new Date(isoDate);
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear() % 100}`;
        return formattedDate
    }
    return (<>
        <td><div className="buyer">
        <QuickAvatar user={order.buyer} className="user-image aspect-square h-7 w-7 md:h-20 md:w-20 flex-center" />
            <p className="text-sm md:text-md">{order.buyer.fullname}</p>
            </div></td>
        <td className="task"><p>{order.gig.title}</p></td>

        <td>{GetDate(order.createdAt)}</td>
        <td>${order.gig.price}</td>
        <td className={`received-order-action-container ${(order.status === "Accepted") && "accepted"} ${(order.status === "Rejected") && "rejected"}`} onClick={() => setActionModal(!isActionModalOpen)}><button ref={currStatus}>{order.status}</button></td>
        {
            isActionModalOpen && <td className="received-order-action-modal">
                <button className="received-order-accept" onClick={() => onActionBtn("Accepted", index)}>Accept</button>
                <button className="received-order-reject" onClick={() => onActionBtn("Rejected", index)}>Reject</button>
            </td>
        }
    </>

    )
}