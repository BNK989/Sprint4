export function ManageSentOrders({ orders }) {

    function truncateStringToWordCount(inputString, maxWordCount) {
        const words = inputString.split(/\s+/);
        if (words.length <= maxWordCount) {
            return inputString;
        }
        const truncatedWords = words.slice(0, maxWordCount).join(' ');
        return `${truncatedWords}...`;
    }

    function gigStatusClass(status){
        if (status === 'Accepted') return 'accepted'
        if (status === 'Rejected') return 'rejected'
        return 'Pending'
    }

    if (!orders) return <span>no ordersss</span>
    return (<section className="my-orders">
        {!orders.length &&
            <span className="no-orders">no orders</span>
        }
        {!!orders.length &&
            <ul className="orders-list">
                {orders.map(order => {
                    return <li key={order._id} className={ gigStatusClass(order.status)}>
                        <img src={order.gig.imgUrl[0]} alt="" />
                        <span className="gig-title">{truncateStringToWordCount(order.gig.title , 5)}</span>
                        <span className={`order-status`}>{order.status}</span>
                    </li>
                })}
            </ul>
        }
    </section>
    )
}
