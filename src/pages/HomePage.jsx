import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SearchBox } from '../cmps/SearchBox'
import { Button } from '@/components/ui/button'
import { loadGigs, setGigFilter } from '../store/actions/gig.actions.js'
import { useNavigate, useParams } from "react-router"
import { searchSug } from '../routes'
import { TrustedBy } from '@/cmps/TrustedBy'
import { PopularServices } from '@/cmps/PopularServices'

// import { CHANGE_COUNT } from '../store/user.reducer'


export function HomePage() {

    const navigate = useNavigate()
    function handleClick(term){
        setGigFilter({title: term.sug})
        navigate('/explore')
    }


    return (
        <section className='homepage-section'>
            <section className='hero-container main-container full flex'>
                {/* <img src="../../public/img/hero/hero-img1.webp" alt="hero image" /> */}
                <div className="search-container flex">
                    <h1>Find the right <i>freelance</i><br/> service, right away</h1>
                <SearchBox neverHide={true} inHeader={false}/>
                    <div className="popular">
                        <ul className='clean-list flex'>
                            <li>Popular:</li>
                            {searchSug.map(sug => <li className='capitalize cursor-pointer' key={sug} onClick={(e) => {e.preventDefault();handleClick({sug})}}>{sug}</li>)}
                        </ul>
                    </div>
                </div>
            </section>
            <TrustedBy/>
            <PopularServices/>

            {/* <Button className='join-btn btn txt'>Join Now</Button> */}
            
            {/* <h2>HomePage page</h2>
            <h1>hay</h1> */}

        </section >
    )
}