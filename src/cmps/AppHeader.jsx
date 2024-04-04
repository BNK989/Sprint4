import { Link, NavLink } from 'react-router-dom'
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

    const [isBgOn, setIsBgOn] = useState(false)

    const handleScroll = () => {
        window.scrollY > 0 ? setIsBgOn(true) : setIsBgOn(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])


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
    
    return (
        <header className={`app-header full main-container ${isBgOn ? "color" : "transparent"}`}>
            <div className="header-container">
                <div className="logo">
                    <a href="#"><img src={isBgOn ? `/img/5err-logo.svg` : `/img/5err-logo-white.svg`} alt="5err logo" /></a>
                </div>
                <div className="search-container">
                    <SearchBox/>
                </div>
                <NavBar/>
            </div>
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