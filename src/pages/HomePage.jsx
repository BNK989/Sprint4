import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SearchBox } from '../cmps/SearchBox'
import { Button } from '@/components/ui/button'
// import { CHANGE_COUNT } from '../store/user.reducer'


export function HomePage() {
    //const dispatch = useDispatch()
    //const count = useSelector(storeState => storeState.userModule.count)


    return (
        <section className='homepage-section'>
            <section className='hero-container main-layout full flex'>
                {/* <img src="../../public/img/hero/hero-img1.webp" alt="hero image" /> */}
                <div class="search-container flex">
                    <h1>Find the right <i>freelance</i><br/> service, right away</h1>
                <SearchBox/>
                <div className="popular">
                    <ul className='clean-list flex'>
                        <li>Popular:</li>
                        <li>Website Design</li>
                        <li>wordPress</li>
                        <li>Logo Design</li>
                        <li>AI Services</li>
                    </ul>
                </div>
                </div>
            </section>

            <Button className='join-btn btn txt'>Join Now</Button>
            
            <h2>HomePage page</h2>
            <h1>hay</h1>
            <ul>
                <li>2</li>
                <li>3</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </section >
    )
}