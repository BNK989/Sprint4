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
export function AppHeader() {
    const user = useSelector(storeState => storeState.userModule.user)
    const [isLogInSelect, setLogInSelect] = useState(false)
    const [isModalOpen, setModalOpen] = useState(false)
    const [isScrollNull, setIsScrollNull] = useState(true)
    const [isSearchVisible, setIsSearchVisible] = useState(false)
    const [categories, setCategories] = useState([])

    const location = useLocation()
    const isHomepage = location.pathname === '/'
    const handleScroll = () => {
        window.scrollY >= 0.1 ? setIsScrollNull(false) : setIsScrollNull(true)
        window.scrollY > 80 ? setIsSearchVisible(true) : setIsSearchVisible(false)
    }
    useEffect(() => {
        getCategories()
        if (isHomepage) {
            window.addEventListener("scroll", handleScroll)
            return () => window.removeEventListener("scroll", handleScroll)
        }
    }, [location])

    async function getCategories() {
        try {
            const c = await gigService.allCategories()
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
                <div className='flex-center gap-8'>
                    <div className="logo">
                        <a href="/"><img src={(isScrollNull && isHomepage) ? `/img/5err-logo-white.svg` : `/img/5err-logo.svg`} alt="5err logo" /></a>
                    </div>
                    <div className="search-container">
                        <SearchBox />
                    </div>
                </div>
                <NavBar signInModal={signInModal} />
            </div>
            <section className="under-header main-container full">
                    <ul className='flex clean-list'>
                        {categories?.map(cat => <li className='capitalize' key={cat}><Link to={`/explore/?cat=${cat}`}>{cat}</Link></li>)}
                        {/* <li><Link to="/explore">Graphics & Design</Link></li>
                        <li><Link to="/explore">Programming & Tech</Link></li>
                        <li><Link to="/explore">Digital Marketing</Link></li>
                        <li><Link to="/explore">Video & Animation</Link></li>
                        <li><Link to="/explore">Writing & Translation</Link></li>
                        <li><Link to="/explore">Music & Audio</Link></li>
                        <li><Link to="/explore">Business</Link></li>
                        <li><Link to="/explore">Consulting</Link></li>
                        <li><Link to="/explore">Data</Link></li>
                        <li><Link to="/explore">AI Services</Link></li> */}
                    </ul>
            </section>
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
