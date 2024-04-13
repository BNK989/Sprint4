import { Link, NavLink, useParams, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState, useEffect } from "react"
import routes from '../routes'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { LoginSignup } from './LoginSignup.jsx'
import { NavBar } from './Navbar.jsx'
import { SearchBox } from './SearchBox.jsx'
import { login, logout, signup } from '../store/actions/user.actions.js'
import { gigService } from '../services/gig.service.local'
import { UnderHeader } from './UnderHeader'
import { Button } from '@/components/ui/button'
export function AppHeader() {
    const user = useSelector(storeState => storeState.userModule.user)
    const order = useSelector(storeState => storeState.orderModule.user)
    const [isLogInSelect, setLogInSelect] = useState(false)
    const [isModalOpen, setModalOpen] = useState(false)
    const [isScrollNull, setIsScrollNull] = useState(true)
    const [isSearchVisible, setIsSearchVisible] = useState(false)
    const [categories, setCategories] = useState([])
    const [isMobile, setIsMobile] = useState(false)

   
    
    const location = useLocation()
    const isHomepage = location.pathname === '/'
    const handleScroll = () => {
        window.scrollY >= 0.1 ? setIsScrollNull(false) : setIsScrollNull(true)
        window.scrollY > 80 ? setIsSearchVisible(true) : setIsSearchVisible(false)
    }
    useEffect(() => {
        const setIsMobile = () => window.innerWidth < 768 ? setIsMobilem(true) : setIsMobilem(false)
        getCategories()
        window.addEventListener('resize', setIsMobile)
        if (isHomepage) {
            window.addEventListener("scroll", handleScroll)
            return () => window.removeEventListener("scroll", handleScroll)
        }
        return () => window.removeEventListener('resize', setIsMobile)
    }, [location])

    async function getCategories() {
        try {
            const c = await gigService.allCategories()
            if(c.length >= 10) c.splice(10)
            setCategories(c)
        } catch (err) {
            showErrorMsg('Cannot get categories')
        }

    }
    async function onLogin(credentials) {
        try {
            setModalOpen(false)
            const user = await login(credentials)
            showSuccessMsg(`Welcome: ${user.fullname}`)
        } catch (err) {
            showErrorMsg('Cannot login')
        }
    }
    async function onSignup(credentials) {
        try {
            setModalOpen(false)
            const newUser = await signup(credentials)
            console.log('got to 57 in Header' , newUser)//not getting here
            // const user = await login(newUser)
            showSuccessMsg(`Welcome new user: ${newUser.fullname}`)
        } catch (err) {
            showErrorMsg('Cannot signup')
        }
    }
    async function onLogout() {
        try {
            await logout()
            showSuccessMsg(`Bye now`)
        } catch (err) {
            showErrorMsg('Cannot logout')
        }
    }
    function signInModal(val) {
        setLogInSelect(val)
        setModalOpen(!isModalOpen)
    }
    return (
        <header className={
            `app-header full main-container
                ${isHomepage ? "beAbs" : "noAbs"}
                ${(isScrollNull && isHomepage) ? "transparent" : "scrolled"}
                ${isSearchVisible ? "search-visible" : ""}`
        }>
            <div className="header-container">
                <div className='w-full md:w-fit flex align-center md:justify-center center gap-8 justify-between'>
                    <Button className="hamburger contents md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 23 19">
                            <rect y="16" width="23" height="3" rx="1.5" fill="#555"></rect>
                            <rect width="23" height="3" rx="1.5" fill="#555"></rect>
                            <rect y="8" width="23" height="3" rx="1.5" fill="#555"></rect>
                        </svg>
                    </Button>
                    <div className="logo">
                        <a href="/"><img src={(isScrollNull && isHomepage && isMobile) ? `/img/5err-logo-white.svg` : `/img/5err-logo.svg`} alt="5err logo" /></a>
                    </div>
                    <Button onClick={() => signInModal(true)} className="mobile-only-join contents md:hidden">
                        Join
                    </Button>
                    <div className="search-container hidden md:contents">
                        <SearchBox />
                    </div>
                </div>
                <NavBar signInModal={signInModal} className={"hidden md:contents"} />
            </div>
            <UnderHeader categories={categories} />

            {
                isModalOpen && <LoginSignup
                    onLogin={onLogin} onSignup={onSignup}
                    isLogInSelect={isLogInSelect}
                />
            }
        </header>
    )
    {/* <nav>
                {routes.map(route => <NavLink key={route.path} to={route.path}>{route.label}</NavLink>)}
                {user &&
                    <span className="user-info">
                        <Link to={`user/${user._id}`}>
                            {user.imgUrl && <img src={user.imgUrl} />}
                            {user.fullname}
                        </Link>
                        <span className="score">{user.score?.toLocaleString()}</span>
                        <button onClick={onLogout}>Logout</button>
                    </span>
                }
                {!user &&
                    <section className="user-info">
                        <LoginSignup onLogin={onLogin} onSignup={onSignup} />
                    </section>
                }
            </nav> */}
}
