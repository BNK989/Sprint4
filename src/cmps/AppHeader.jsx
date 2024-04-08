import { Link, NavLink, useParams, useLocation } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useState, useEffect } from "react"
import routes from '../routes'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { LoginSignup } from './LoginSignup.jsx'
import { NavBar } from './Navbar.jsx'
import { SearchBox } from './SearchBox.jsx'
import { login, logout, signup } from '../store/actions/user.actions.js'
export function AppHeader() {
    const user = useSelector(storeState => storeState.userModule.user)
    const [isLogInSelect, setLogInSelect] = useState(false)
    const [isModalOpen, setModalOpen] = useState(false)
    const [isScrollNull, setIsScrollNull] = useState(true)
    const [isSearchVisible, setIsSearchVisible] = useState(false)
    const location = useLocation()
    const isHomepage = location.pathname === '/'
    const handleScroll = () => {
        window.scrollY >= 0.1 ? setIsScrollNull(false) : setIsScrollNull(true)
        window.scrollY > 80 ? setIsSearchVisible(true) : setIsSearchVisible(false)
    }
    useEffect(() => {
        if(isHomepage){
            window.addEventListener("scroll", handleScroll)
            return () => window.removeEventListener("scroll", handleScroll)
    }
    }, [location])
    async function onLogin(credentials) {
        try {
            const user = await login(credentials)
            showSuccessMsg(`Welcome: ${user.fullname}`)
        } catch(err) {
            showErrorMsg('Cannot login')
        }
    }
    async function onSignup(credentials) {
        try {
            const user = await signup(credentials)
            showSuccessMsg(`Welcome new user: ${user.fullname}`)
        } catch(err) {
            showErrorMsg('Cannot signup')
        }
    }
    async function onLogout() {
        try {
            await logout()
            showSuccessMsg(`Bye now`)
        } catch(err) {
            showErrorMsg('Cannot logout')
        }
    }
    function signInModal(val){
        setLogInSelect(val)
        setModalOpen(!isModalOpen)
    }

    return (
        <header className={
            `app-header full main-container
                ${isHomepage ? "beAbs" : "noAbs"}
                ${(isScrollNull && isHomepage) ? "transparent" : "color"}
                ${isSearchVisible ? "search-visible" : ""}`
            }>
            <div className="header-container">
                <div className='flex-center gap-8'>
                    <div className="logo">
                        <a href="/"><img src={(isScrollNull && isHomepage) ? `/img/5err-logo-white.svg` : `/img/5err-logo.svg`} alt="5err logo" /></a>
                    </div>
                    <div className="search-container">
                        <SearchBox/>
                    </div>
                </div>
                <NavBar signInModal={signInModal}/>
            </div>
            <section className="under-header main-container full">
                    <ul className='flex clean-list'>
                        <li><Link to="/explore">Graphics & Design</Link></li>
                        <li><Link to="/explore">Programming & Tech</Link></li>
                        <li><Link to="/explore">Digital Marketing</Link></li>
                        <li><Link to="/explore">Video & Animation</Link></li>
                        <li><Link to="/explore">Writing & Translation</Link></li>
                        <li><Link to="/explore">Music & Audio</Link></li>
                        <li><Link to="/explore">Business</Link></li>
                        <li><Link to="/explore">Consulting</Link></li>
                        <li><Link to="/explore">Data</Link></li>
                        <li><Link to="/explore">AI Services</Link></li>
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





// import { Link, NavLink, useParams, useLocation } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import { useState, useEffect } from "react"
// import routes from '../routes'
// import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
// import { LoginSignup } from './LoginSignup.jsx'
// import { NavBar } from './Navbar.jsx'
// import { SearchBox } from './SearchBox.jsx'
// import { login, logout, signup } from '../store/actions/user.actions.js'


// export function AppHeader() {
//     const user = useSelector(storeState => storeState.userModule.user)
//     const [isLogInSelect, setLogInSelect] = useState(false)
//     const [isModalOpen, setModalOpen] = useState(false)

//     const [isBgOn, setIsBgOn] = useState(false)
//     const [isSearchVisible, setIsSearchVisible] = useState(false)
//     const location = useLocation()
//     const isHomepage = location.pathname === '/'

//     const handleScroll = () => {
//          window.scrollY >= 0.1 ? setIsScrollNull(false) : setIsScrollNull(true)
//         window.scrollY > 80 ? setIsSearchVisible(true) : setIsSearchVisible(false)
//     }


//     useEffect(() => {
//         window.addEventListener("scroll", handleScroll)
//         return () => window.removeEventListener("scroll", handleScroll)
//     }, [location])


//     async function onLogin(credentials) {
//         try {
//             const user = await login(credentials)
//             showSuccessMsg(`Welcome: ${user.fullname}`)
//         } catch (err) {
//             showErrorMsg('Cannot login')
//         }
//     }
//     async function onSignup(credentials) {
//         try {
//             const user = await signup(credentials)
//             showSuccessMsg(`Welcome new user: ${user.fullname}`)
//         } catch (err) {
//             showErrorMsg('Cannot signup')
//         }
//     }
//     async function onLogout() {
//         try {
//             await logout()
//             showSuccessMsg(`Bye now`)
//         } catch (err) {
//             showErrorMsg('Cannot logout')
//         }
//     }

//     function signInModal(val){
//         setLogInSelect(val)
//         setModalOpen(!isModalOpen)
//     }

//     console.log('isHomepage:', (isBgOn && isHomepage))

//     return (
//         <header className={
//             `app-header full main-container 
//                 ${isHomepage ? "beAbs" : "noAbs"} 
//                 ${(isBgOn && isHomepage) ? "color" : "transparent"} 
//                 ${isSearchVisible ? "search-visible" : ""}`
//         }>
//             <div className="header-container">
//                 <div className="logo">
//                 <a href="/"><img src={(isScrollNull && isHomepage) ? `/img/5err-logo-white.svg` : `/img/5err-logo.svg`} alt="5err logo" /></a>                </div>
//                 <div className="search-container">
//                     <SearchBox />
//                 </div>
//                 <NavBar signInModal={signInModal} />
//             </div>
//             <section className="under-header main-container full">

//                 <ul className='flex clean-list'>
//                     <li>One</li>
//                     <li>Two</li>
//                     <li>Three</li>
//                     <li>Four</li>
//                     <li>Five</li>
//                     <li>Six</li>
//                     <li>Seven</li>
//                     <li>Eight</li>
//                     <li>Nine</li>
//                     <li>Ten</li>
//                 </ul>

//             </section>
//             {
//                 isModalOpen && <LoginSignup
//                     onLogin={onLogin} onSignup={onSignup}
//                     isLogInSelect={isLogInSelect}
//                 />
//             }

//         </header>
//     )
//     {/* <nav>
//                 {routes.map(route => <NavLink key={route.path} to={route.path}>{route.label}</NavLink>)}

//                 {user &&
//                     <span className="user-info">
//                         <Link to={`user/${user._id}`}>
//                             {user.imgUrl && <img src={user.imgUrl} />}
//                             {user.fullname}
//                         </Link>
//                         <span className="score">{user.score?.toLocaleString()}</span>
//                         <button onClick={onLogout}>Logout</button>
//                     </span>
//                 }
//                 {!user &&
//                     <section className="user-info">
//                         <LoginSignup onLogin={onLogin} onSignup={onSignup} />
//                     </section>
//                 }
//             </nav> */}

// }