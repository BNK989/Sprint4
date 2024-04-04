
// import { useState } from 'react'
// import { useSelector } from 'react-redux'
// import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'

// import { removeFromCART, checkout } from '../store/gig.actions'
// import { UserMsg } from './UserMsg.jsx'

export function AppFooter() {
    // const [isCARTShown, setIsCARTShown] = useState(false)
    // const cart = useSelector(storeState => storeState.gigModule.cart)
    // const count = useSelector(storeState => storeState.userModule.count)
    // const cartTotal = cart.reduce((acc, gig) => acc + gig.price, 0)

    // async function onCheckout() {
    //     try {
    //         const score = await checkout(cartTotal)
    //         showSuccessMsg(`Charged, your new score: ${score.toLocaleString()}`)
    //     } catch(err) {
    //         showErrorMsg('Cannot checkout')
    //     }
    // }

    return (
        <footer className="app-footer">
        <h2>AppFooter cmp</h2>
            {/* <UserMsg /> */}
        </footer>
    )
}