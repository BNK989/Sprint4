import { Link, NavLink } from 'react-router-dom'
import { LoginSignup } from "./LoginSignup"
import {NavRoutes} from '../routes'
import { Button } from '@/components/ui/button'

export function NavBar() {
    return (
        <nav className="fiverr-nav">
            <ul className='clean-list flex'>
                {NavRoutes.map(route => <li key={route.path} className={route.path}><NavLink to={route.path}>{route.label}</NavLink></li>)}
                {/* <LoginSignup /> */}
                <li>Sign in</li>
                <li className='shancn-btn'><Button variant="outline" className='bg-inherit'>Join</Button></li>
                {/* <li><button className='join-btn btn txt'>Join</button></li> */}
            </ul>
        </nav>
    )
}
