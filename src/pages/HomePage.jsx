import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SearchBox } from '../cmps/SearchBox'
import { Button } from '@/components/ui/button'
import { loadGigs, setGigFilter } from '../store/actions/gig.actions.js'
import { useNavigate, useParams } from "react-router"
import { searchSug, bgImgs } from '../routes'
import { TrustedBy } from '@/cmps/TrustedBy'
import { PopularServices } from '@/cmps/PopularServices'

// import { CHANGE_COUNT } from '../store/user.reducer'


export function HomePage() {

    const navigate = useNavigate()
    function handleClick(term){
        setGigFilter({title: term.sug})
        navigate('/explore')
    }

    let intervalID = useRef()
    const [imgIdx, setImgIdx] = useState(0)

    useEffect(() => {
        intervalID.current = setInterval(changeBG, 5000)
        return () => clearInterval(intervalID.current)
    }, [])

    function changeBG(){
        console.log('imgIdx', imgIdx)
        setImgIdx((prev) => prev >= bgImgs.length - 1 ? 0 : prev + 1)
    }


    return (
        <section className='homepage-section' style={{backgroundImage: `url(${bgImgs[imgIdx]})`, transition: 'background-image 1.5s ease-in-out' }}>
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

        </section >
    )
}