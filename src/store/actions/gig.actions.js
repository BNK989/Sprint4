import { gigService } from '../../services/gig.service.js'
import { userService } from '../../services/user.service.js'
import { store } from '../store.js'
import { showSuccessMsg, showErrorMsg } from '../../services/event-bus.service.js'
import { ADD_GIG,  REMOVE_GIG, SET_GIGS, UPDATE_GIG,SET_FILTER_BY ,SET_OWN_GIGS} from '../reducers/gig.reducer.js'
// import { SET_SCORE } from '../reducers/user.reducer.js'

// Action Creators:
export function getActionRemoveGig(gigId) {
    return {
        type: REMOVE_GIG,
        gigId
    }
}
export function getActionAddGig(gig) {
    return {
        type: ADD_GIG,
        gig
    }
}
export function getActionUpdateGig(gig) {
    return {
        type: UPDATE_GIG,
        gig
    }
}

export async function loadGigs(filterBy) {
    
    try {
        const gigs = await gigService.query(filterBy)
        store.dispatch({
            type: SET_GIGS,
            gigs
        })

    } catch (err) {
        console.error('Cannot load gigs', err)
        throw err
    }

}

export async function loadOwnGigs(userId) {
    try {
        const ownedGigs = await gigService.query({userId})
        store.dispatch({
            type: SET_OWN_GIGS,
            ownedGigs
        })

    } catch (err) {
        console.error('Cannot load gigs', err)
        throw err
    }

}

export async function removeGig(gigId) {
    try {
        await gigService.remove(gigId)
        store.dispatch(getActionRemoveGig(gigId))
    } catch (err) {
        console.error('Cannot remove gig', err)
        throw err
    }
}

export async function addGig(gig) {
    try {
        const savedGig = await gigService.save(gig)
        store.dispatch(getActionAddGig(savedGig))
        return savedGig
    } catch (err) {
        console.error('Cannot add gig', err)
        throw err
    }
}

export function updateGig(gig) {
    return gigService.save(gig)
        .then(savedGig => {
            
            store.dispatch(getActionUpdateGig(savedGig))
            return savedGig
        })
        .catch(err => {
            console.error('Cannot save gig', err)
            throw err
        })
}

// export function addToCART(gig) {
//     store.dispatch({
//         type: ADD_TO_CART,
//         gig
//     })
// }

// export function removeFromCART(gigId) {
//     store.dispatch({
//         type: REMOVE_FROM_CART,
//         gigId
//     })
// }

// export async function checkout(total) {
//     try {
//         const score = await userService.changeScore(-total)
//         store.dispatch({ type: SET_SCORE, score })
//         store.dispatch({ type: CLEAR_CART })
//         return score
//     } catch (err) {
//         console.error('GigActions: err in checkout', err)
//         throw err
//     }
// }


// Demo for Optimistic Mutation 
// (IOW - Assuming the server call will work, so updating the UI first)
export function onRemoveGigOptimistic(gigId) {
    store.dispatch({
        type: REMOVE_GIG,
        gigId
    })
    showSuccessMsg('Gig removed')

    gigService.remove(gigId)
        .then(() => {
            
        })
        .catch(err => {
            showErrorMsg('Cannot remove gig')
            console.error('Cannot load gigs', err)
            // store.dispatch({
            //     type: UNDO_REMOVE_GIG,
            // })
        })
}

export function setGigFilter(filterBy) {
    // dispatch
    store.dispatch({ type: SET_FILTER_BY, filterBy })
    return Promise.resolve(filterBy)
    // return loadToys()
}