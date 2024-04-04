import { useEffect } from 'react'
import { useSelector } from 'react-redux'
// import { loadGigs, addGig, updateGig, removeGig, addToCART } from '../store/gig.actions.js'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { userService } from '../services/user.service.js'
import { gigService } from '../services/gig.service.js'
import { loadGigs } from '../store/actions/gig.actions.js'
import { GigFilter } from '../cmps/GigFilter.jsx'
import { GigList } from '../cmps/GigList.jsx'

export function GigIndex() {

    const gigs = useSelector(storeState => storeState.gigModule.gigs)
    const filterBy = useSelector(storeState => storeState.gigModule.filterBy)
    
    useEffect(() => {
        try {
            loadGigs()
        } catch (err) {
            console.log('err:', err)
            showErrorMsg('Cannot load toys')
        }
    }, [filterBy])

    // function onSetFilter(filterBy) {
    //     setGigFilter(filterBy)
    // }

    // async function onRemoveGig(gigId) {
    //     try {
    //         await removeGig(gigId)
    //         showSuccessMsg('Gig removed')
    //     } catch (err) {
    //         showErrorMsg('Cannot remove gig')
    //     }
    // }

    // async function onAddGig() {
    //     const gig = gigService.getEmptyGig()
    //     gig.vendor = prompt('Vendor?')
    //     try {
    //         const savedGig = await addGig(gig)
    //         showSuccessMsg(`Gig added (id: ${savedGig._id})`)
    //     } catch (err) {
    //         showErrorMsg('Cannot add gig')
    //     }
    // }

    // async function onUpdateGig(gig) {
    //     const price = +prompt('New price?')
    //     const cartoSave = { ...gig, price }
    //     try {
    //         const savedGig = await updateGig(cartoSave)
    //         showSuccessMsg(`Gig updated, new price: ${savedGig.price}`)
    //     } catch (err) {
    //         showErrorMsg('Cannot update gig')
    //     }
    // }

    // function onAddToCART(gig) {
    //     console.log(`Adding ${gig.vendor} to CART`)
    //     addToCART(gig)
    //     showSuccessMsg('Added to CART')
    // }

    // function onAddGigMsg(gig) {
    //     console.log(`TODO Adding msg to gig`)
    //     try {
    //         showSuccessMsg(`Gig msg added, it now has: ${3}`)
    //     } catch (err) {
    //         showErrorMsg('Cannot update gig')
    //     }

    // }

    // function shouldShowActionBtns(gig) {
    //     const user = userService.getLoggedinUser()
    //     if (!user) return false
    //     if (user.isAdmin) return true
    //     return gig.owner?._id === user._id
    // }
    // if (!gigs.length) return <div className="center-spinner"> <div className="lds-facebook"><div></div><div></div><div></div></div></div>
    return (
        <div className='gig-index'>
            <h3 className='gigs-title'>Gigs</h3>
            <main className='gig-list-main-container'>
            <GigList gigs={gigs}/>
            </main>
        </div>
    )
}