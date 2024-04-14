import React, { useEffect, useRef, useState } from 'react'
import { SearchBox } from '../cmps/SearchBox'
import { searchSug, bgImgs } from '../routes'
import { useNavigate, useParams } from "react-router"

export function Hero(){
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

    const navigate = useNavigate()
    function handleClick(term){
        //setGigFilter({title: term.sug})
        // navigate('/explore/?q=' + term.sug)
        navigate('/explore/?cat=' + term.sug)
    }

    let intervalID = useRef()
    const [imgIdx, setImgIdx] = useState(0)

    useEffect(() => {
        intervalID.current = setInterval(changeBG, 5000)
        return () => clearInterval(intervalID.current)
    }, [])

    function changeBG(){
        setImgIdx((prev) => prev >= bgImgs.length - 1 ? 0 : prev + 1)
    }

    const styles = {
        backgroundImage: `url(${bgImgs[imgIdx]})`,
        transition: 'background-image 1.5s ease-in-out'
    }

    if (isMobile) {
        delete styles.backgroundImage
        delete styles.transition
        styles.backgroundColor = '#0a4226'
    }


    return (
        <section className='homepage-section hero' style={styles}>
            <section className='hero-container main-container full flex'>
                <div className="search-container flex pt-36 md:pt-0">
                    <h1 className='max-w-[35rem]'>Find the right <i  className='text-white'>freelance</i> service, right away</h1>
                    <SearchBox neverHide={true} inHeader={false} />
                    <div className="popular">
                        <ul className='clean-list flex '>
                            <li >Popular:</li>
                            {searchSug.map(sug => <li className='capitalize cursor-pointer' key={sug} onClick={(e) => {e.preventDefault();handleClick({sug})}}>{sug}</li>)}
                        </ul>
                    </div>
                </div>
            </section>
        </section>
    )
}