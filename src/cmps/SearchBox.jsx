import { gigService } from "@/services/gig.service.local"
import { useState, useEffect } from "react"
import { loadGigs, setGigFilter } from '../store/actions/gig.actions.js'
import { useNavigate, useParams } from "react-router"

export function SearchBox({neverHide = false}) {


    const [isHidden, setIsHidden] = useState(true)
    const [query, setQuery] = useState('')
    const navigate = useNavigate()
    
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
        // gigService.query({title: query})
        setGigFilter({title: query})
        navigate('/explore')
        
    }

    return (
        <form className='search-form flex' hidden={isHidden} onSubmit={handleSubmit}>
            <input onChange={handleChange} type='search' className='border w-[88.8%] h-10 rounded-tl-sm rounded-bl-md p-1' autoComplete='off' placeholder='Search for any service...' />
            <button className='bg-black rounded-tr-sm rounded-br-md w-[50px] text-white p-1 flex-center'>
                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="white">
                    <path d="m15.89 14.653-3.793-3.794a.37.37 0 0 0-.266-.109h-.412A6.499 6.499 0 0 0 6.5 0C2.91 0 0 2.91 0 6.5a6.499 6.499 0 0 0 10.75 4.919v.412c0 .1.04.194.11.266l3.793 3.794a.375.375 0 0 0 .531 0l.707-.707a.375.375 0 0 0 0-.53ZM6.5 11.5c-2.763 0-5-2.238-5-5 0-2.763 2.237-5 5-5 2.762 0 5 2.237 5 5 0 2.762-2.238 5-5 5Z"></path>
                </svg>
            </button>
        </form>
    )
}