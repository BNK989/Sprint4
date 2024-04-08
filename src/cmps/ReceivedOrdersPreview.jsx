


export function ReceivedOrdersPreview({order,index,onActionBtn,isActionModalOpen,setActionModal}) {


    return (<>
        <td><img src={order.seller.imgUrl} alt="Avatar" /></td>
        <td>{order.seller.fullname}</td>
        <td>{order.gig.title}</td>
        <td>{order.createdAt}</td>
        <td>${order.gig.price}</td>
        <td key={order._id} onClick={() => setActionModal(!isActionModalOpen)}><button>{order.status}</button></td>
        {
            isActionModalOpen && <td>
                <button onClick={() => onActionBtn("Accepted", index)}>Accept</button>
                <button onClick={() => onActionBtn("Rejected", index)}>Reject</button>
            </td>
        }
    </>

    )
}