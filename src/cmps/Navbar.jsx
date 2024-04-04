import { Link, NavLink } from 'react-router-dom'
import { LoginSignup } from "./LoginSignup"
import routes from '../routes'

export function NavBar() {
    return (
        <nav className="fiverr-nav">
            <ul className='clean-list flex'>
                {/* <li><a href="/explore">Explore</a></li>
                <li><a href="/5err-work">English</a></li>
                <li><a href="/5err-business">Become a Seller</a></li> */}
                {routes.map(route => <li><NavLink key={route.path} to={route.path}>{route.label}</NavLink></li>)}
                {/* <LoginSignup /> */}
            </ul>
        </nav>
    )
}
