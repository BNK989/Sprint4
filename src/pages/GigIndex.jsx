import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { loadGigs, addGig, updateGig, removeGig, addToCART } from '../store/gig.actions.js'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { userService } from '../services/user.service.js'
import { gigService } from '../services/gig.service.js'

export function GigIndex() {

    const gigs = useSelector(storeState => storeState.gigModule.gigs)

    useEffect(() => {
        loadGigs()
    }, [])

    async function onRemoveGig(gigId) {
        try {
            await removeGig(gigId)
            showSuccessMsg('Gig removed')            
        } catch (err) {
            showErrorMsg('Cannot remove gig')
        }
    }

    async function onAddGig() {
        const gig = gigService.getEmptyGig()
        gig.vendor = prompt('Vendor?')
        try {
            const savedGig = await addGig(gig)
            showSuccessMsg(`Gig added (id: ${savedGig._id})`)
        } catch (err) {
            showErrorMsg('Cannot add gig')
        }        
    }

    async function onUpdateGig(gig) {
        const price = +prompt('New price?')
        const cartoSave = { ...gig, price }
        try {
            const savedGig = await updateGig(cartoSave)
            showSuccessMsg(`Gig updated, new price: ${savedGig.price}`)
        } catch (err) {
            showErrorMsg('Cannot update gig')
        }        
    }

    function onAddToCART(gig){
        console.log(`Adding ${gig.vendor} to CART`)
        addToCART(gig)
        showSuccessMsg('Added to CART')
    }

    function onAddGigMsg(gig) {
        console.log(`TODO Adding msg to gig`)
        try {
            showSuccessMsg(`Gig msg added, it now has: ${3}`)
        } catch (err) {
            showErrorMsg('Cannot update gig')
        }        

    }

    function shouldShowActionBtns(gig) {
        const user = userService.getLoggedinUser()
        if (!user) return false
        if (user.isAdmin) return true
        return gig.owner?._id === user._id
    }

    return (
        <div>
            <h3>Gig index page</h3>
            {/* <main>
                <button onClick={onAddGig}>Add Gig</button>
                <ul className="gig-list">
                    {gigs.map(gig =>
                        <li className="gig-preview" key={gig._id}>
                            <h4>{gig.vendor}</h4>
                            <p>Price: <span>${gig.price.toLocaleString()}</span></p>
                            <p>Owner: <span>{gig.owner && gig.owner.fullname}</span></p>
                            {shouldShowActionBtns(gig) && <div>
                                <button onClick={() => { onRemoveGig(gig._id) }}>x</button>
                                <button onClick={() => { onUpdateGig(gig) }}>Edit</button>
                            </div>}

                            <button onClick={() => { onAddGigMsg(gig) }}>Add gig msg</button>
                            <button className="buy" onClick={() => { onAddToCART(gig) }}>Add to cart</button>
                        </li>)
                    }
                </ul>
            </main> */}
        </div>
    )
}