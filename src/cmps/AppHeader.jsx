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
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
    const [burgerMenuOpen, setBurgerMenuOpen] = useState(false)
    const [isDrawOpen, setIsDrawOpen] = useState(false)

   
    
    const location = useLocation()
    const isHomepage = location.pathname === '/'
    const handleScroll = () => {
        window.scrollY >= 0.1 ? setIsScrollNull(false) : setIsScrollNull(true)
        window.scrollY > 80 ? setIsSearchVisible(true) : setIsSearchVisible(false)
    }

    function isMobileDecider() {
        setIsMobile(() => window.innerWidth < 768 )
    }

    useEffect(() => {
        getCategories()
        window.addEventListener('resize', isMobileDecider)
        if (isHomepage) {
            window.addEventListener("scroll", handleScroll)
            return () => window.removeEventListener("scroll", handleScroll)
        }
        return () => window.removeEventListener('resize', isMobileDecider)
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

    console.log(isMobile)

    return (
        <header className={
            `app-header full main-container
                ${isHomepage ? "beAbs" : "noAbs"}
                ${(isScrollNull && isHomepage) ? "transparent" : "scrolled"}
                ${isSearchVisible ? "search-visible" : ""}`
        }>
            <div className={`backdrop ${burgerMenuOpen ? 'on' : 'off'}`} onClick={() => setBurgerMenuOpen(false)}/>
            {/* MARK: Burger Menu */}
            <div className="burgerMenu">
                <ul className="flex flex-col w-full" onClick={() => setBurgerMenuOpen(false)}>
                    <li className='w-full'><Button className='w-36'>Join 5err</Button></li>
                    <li><Link to="/explore">Explore</Link></li>
                    <li><Link>Sign in</Link></li>
                </ul>
            </div>
            {/* MARK: DRAWER */}
            <div className={`draw-join ${isDrawOpen ? 'on' : 'off'}`}>
                <div className='w-full flex justify-between box-border'>
                    <img src="/img/5err-logo.svg" alt="5err logo" />
                    <button onClick={() => setIsDrawOpen(prev => !prev)} className='btn'>
                        <svg width="12" height="12" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" fill="#74767E">
                            <path d="m8.485 7 4.487-4.487.926-.925a.35.35 0 0 0 0-.495l-.99-.99a.35.35 0 0 0-.495 0L7 5.515 1.588.102a.35.35 0 0 0-.495 0l-.99.99a.35.35 0 0 0 0 .495L5.514 7 .102 12.413a.35.35 0 0 0 0 .495l.99.99a.35.35 0 0 0 .495 0L7 8.485l4.487 4.487.926.926a.35.35 0 0 0 .495 0l.99-.99a.35.35 0 0 0 0-.495L8.485 7Z"></path>
                        </svg>
                    </button>
                </div>
                <h2 className='draw-header'>Success <span className='text-pink-700'>starts</span> here.</h2>
                <small className='small'>By joining, you agree to the Fiverr Terms of Service and to occasionally receive emails from us. Please read our Privacy Policy to learn how we use your personal data.</small>
            </div>
             {/* MARK: DRAWER END*/}
            <div className="header-container">
                <div className='w-full md:w-fit flex align-center md:justify-center center gap-8 justify-between'>
                    <Button onClick={() => setBurgerMenuOpen(prev => !prev)} className="hamburger contents md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 23 19">
                            <rect y="16" width="23" height="3" rx="1.5" fill="#555"></rect>
                            <rect width="23" height="3" rx="1.5" fill="#555"></rect>
                            <rect y="8" width="23" height="3" rx="1.5" fill="#555"></rect>
                        </svg>
                    </Button>
                    <div className="logo">
                        <a href="/"><img src={(isScrollNull && isHomepage) ? `${isMobile ? '/img/5err-logo.svg' : '/img/5err-logo-white.svg'}` : `/img/5err-logo.svg`} alt="5err logo" /></a>
                    </div>
                   
                    <div className="search-container hidden md:contents">
                        <SearchBox />
                    </div>
                    <button onClick={() => setIsDrawOpen(prev => !prev)} className='btn join-btn md:hidden contents'>Join</button>
                </div>
                <NavBar signInModal={signInModal} className={"hidden md:contents"} onLogout={onLogout}/>
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
