import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from "react-router-dom"

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { userService } from '../services/user.service.js'
import { gigService } from '../services/gig.service.js'
import { loadGigs, setGigFilter } from '../store/actions/gig.actions.js'
import { GigFilter } from '../cmps/GigFilter.jsx'
import { GigList } from '../cmps/GigList.jsx'
import { LoadingIndex } from '@/cmps/LodingIndex.jsx'
import { BreadcrumbWithCustomSeparator } from '@/cmps/BreadcrumbWithCustomSeparator.jsx'
import { ActiveFilters } from '@/cmps/ActiveFilters.jsx'

export function GigIndex() {

    const gigs = useSelector(storeState => storeState.gigModule.gigs)
    const filterBy = useSelector(storeState => storeState.gigModule.filterBy)
    
    

    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        const q = searchParams.get('q')
        const cat = searchParams.get('cat')
        const price = searchParams.get('price')
        const daysToMake = searchParams.get('daysToMake')
        filterBy.title = q
        filterBy.category = cat
        filterBy.price = +price
        filterBy.daysToMake = +daysToMake
        try {
            loadGigs(filterBy)
        } catch (err) {
            console.error('err:', err)
            showErrorMsg('Cannot load toys')
        }
    }, [filterBy, searchParams])

    function onSetFilter(filterBy) {
        setGigFilter(filterBy)
    }

    // if (!gigs.length) return <LoadingIndex/>
    // <div className="center-spinner"> <div className="lds-facebook"><div></div><div></div><div></div></div></div>
    return (<>
        <div className='gig-index'>
        <BreadcrumbWithCustomSeparator/>
            <h3 className='gigs-title'>{filterBy.category ? filterBy.category.replace(/-/g, '&') : 'Explore All'}</h3>
            <p>Stand out from the crowd with a logo that fits your brand personality.</p>
            <div className='line'></div>
            <GigFilter filterBy={filterBy} onSetFilter={onSetFilter} />
            <ActiveFilters filterBy={filterBy} />

            <section className='sort'>
                <span className='count-results'>
                    {gigs.length}+ Results
                </span>
            </section>

            <main className='gig-list-main-container'>
                {(gigs.length === 0) ? <LoadingIndex/>: <GigList gigs={gigs} /> }
                
            </main>
        </div>
    </>

    )
}