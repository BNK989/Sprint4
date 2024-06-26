import { gigService } from "@/services/gig.service"
import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { useNavigate, useParams } from "react-router"
import { loadGigs, setGigFilter } from '../store/actions/gig.actions.js'

export function SearchBox({neverHide = false, inHeader = true}) {

    const [isHidden, setIsHidden] = useState(true)
    const [query, setQuery] = useState('')
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const [isSearching, setIsSearching] = useState(false)
    
    useEffect(() => {
        
        if(neverHide) {
            setIsHidden(false)
            return
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    
    const handleScroll = () => {
      window.scrollY >= 0.1 ? setIsHidden(false) : setIsHidden(true)
    }

    function handleChange(e) {
        setQuery(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        setIsSearching(false)

        const currentParams = Object.fromEntries(searchParams)
        setSearchParams({...currentParams, q: query})
        navigate(`/explore?q=${query}`)
        
    }

    return (
        <>
        <div className={`${isSearching ? 'dimmer' : ''}`} onClick={() => setIsSearching(false)}/>
        <form className='search-form flex' hidden={isHidden} onSubmit={handleSubmit}>
            <input onClick={() => setIsSearching(true)} onChange={handleChange} type='search' className={`search-input ${inHeader ? 'w-[88.8%]' : 'w-96'} border rounded-tl-sm rounded-bl-sm p-1 font-thin`} autoComplete='on' placeholder={ !inHeader ? 'Search for any service...' : 'What service are you looking for today?' } />
            <button className='bg-black rounded-tr-sm rounded-br-md w-[50px] text-white p-1 flex-center -ml-1'>
                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="white">
                    <path d="m15.89 14.653-3.793-3.794a.37.37 0 0 0-.266-.109h-.412A6.499 6.499 0 0 0 6.5 0C2.91 0 0 2.91 0 6.5a6.499 6.499 0 0 0 10.75 4.919v.412c0 .1.04.194.11.266l3.793 3.794a.375.375 0 0 0 .531 0l.707-.707a.375.375 0 0 0 0-.53ZM6.5 11.5c-2.763 0-5-2.238-5-5 0-2.763 2.237-5 5-5 2.762 0 5 2.237 5 5 0 2.762-2.238 5-5 5Z"></path>
                </svg>
            </button>
        </form>
        </>
    )
}