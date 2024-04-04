import { useState, useEffect } from "react"

export function SearchBox() {


    const [isHidden, setisHidden] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    
    const handleScroll = () => {
      window.scrollY > 0 ? setisHidden(true) : setisHidden(false)
    }
    
    return (
        <nav className={`Searchbox ${isHidden ? "hidden" : ""}`}>
            <input type="search" placeholder="Search for any service..." />
        </nav>
    )
}