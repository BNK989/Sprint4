import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { userService } from '../services/user.service.js'
import { gigService } from '../services/gig.service.js'
import { loadGigs, setGigFilter } from '../store/actions/gig.actions.js'
import { GigFilter } from '../cmps/GigFilter.jsx'
import { GigList } from '../cmps/GigList.jsx'

export function GigIndex() {

    const gigs = useSelector(storeState => storeState.gigModule.gigs)
    const filterBy = useSelector(storeState => storeState.gigModule.filterBy)
    console.log('filterBy:', filterBy)
    useEffect(() => {
        try {
            loadGigs(filterBy)
        } catch (err) {
            console.log('err:', err)
            showErrorMsg('Cannot load toys')
        }
    }, [filterBy])

    function onSetFilter(filterBy) {
        setGigFilter(filterBy)
    }

    if (!gigs.length) return <h1>loading</h1>
    // <div className="center-spinner"> <div className="lds-facebook"><div></div><div></div><div></div></div></div>
    return (<>
        <div className='gig-index'>
            <h3 className='gigs-title'>Gigs category</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eos, nostrum ratione dicta doloribus ipsa!</p>
            <div className='line'></div>
            <GigFilter filterBy={filterBy} onSetFilter={onSetFilter} />

            <section className='sort'>
                <span className='count-results'>
                    {gigs.length}+ Results
                </span>
            </section>

            <main className='gig-list-main-container'>
                <GigList gigs={gigs} />
            </main>
        </div>
    </>

    )
}