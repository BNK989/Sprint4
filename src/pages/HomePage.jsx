import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SearchBox } from '../cmps/SearchBox'
import { Button } from '@/components/ui/button'
import { loadGigs, setGigFilter } from '../store/actions/gig.actions.js'
import { useNavigate, useParams } from "react-router"
import { searchSug, bgImgs } from '../routes'
import { TrustedBy } from '@/cmps/TrustedBy'
import { PopularServices } from '@/cmps/PopularServices'
import { BestPart } from '@/cmps/BestPart'
import { Hero } from '@/cmps/Hero'
import { JoinPoster } from '@/cmps/JoinPoster'
import { CategoriesNav } from '@/cmps/CategoriesNav'

// import { CHANGE_COUNT } from '../store/user.reducer'


export function HomePage() {

    const navigate = useNavigate()
    function handleClick(term){
        //setGigFilter({title: term.sug})
        navigate('/explore/?q=' + term.sug)
    }

    // let intervalID = useRef()
    // const [imgIdx, setImgIdx] = useState(0)

    // useEffect(() => {
    //     intervalID.current = setInterval(changeBG, 5000)
    //     return () => clearInterval(intervalID.current)
    // }, [])

    // function changeBG(){
    //     console.log('imgIdx', imgIdx)
    //     setImgIdx((prev) => prev >= bgImgs.length - 1 ? 0 : prev + 1)
    // }


    return (
        // <section className='homepage-section hero' style={{backgroundImage: `url(${bgImgs[imgIdx]})`, transition: 'background-image 1.5s ease-in-out' }}>
        <section>

            <Hero/>
            <TrustedBy/>
            <PopularServices/>
            <BestPart/>
            <CategoriesNav/>
            <JoinPoster/>

        </section >
    )
}