

export function ManageReceivedOrders({user}){
console.log('user.orders:', user.orders)

    return (<>
    <h1>hay</h1>

        {
            !user.orders.receivedOrders.length && 
            <section>
                    <h1>hay from insaid</h1>
            </section>
        }
    </>
        
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