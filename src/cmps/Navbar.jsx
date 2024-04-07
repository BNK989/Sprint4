import { Link, NavLink } from 'react-router-dom'
import { LoginSignup } from "./LoginSignup"
import {NavRoutes, exploreMenu} from '../routes'
import { Button } from '@/components/ui/button'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  

export function NavBar() {
    return (
        <nav className="fiverr-nav">
            <ul className='clean-list flex'>
                <li className='explore cursor-pointer' ><DropdownMenu className='cursor-pointer'>
  <DropdownMenuTrigger>Explore</DropdownMenuTrigger>
  <DropdownMenuContent>
  {exploreMenu.map(menu =>
    <DropdownMenuItem key={menu.label}>
        {menu.label}<br/>{menu.subText}
    </DropdownMenuItem>)}
  </DropdownMenuContent>
</DropdownMenu></li>    
                {NavRoutes.splice(1,2).map(route => <li key={route.path} className={route.path}><NavLink to={route.path}>{route.label}</NavLink></li>)}
                {/* <LoginSignup /> */}
                <li>Sign in</li>
                <li className='shancn-btn'><Button variant="outline" className='bg-inherit'>Join</Button></li>
                {/* <li><button className='join-btn btn txt'>Join</button></li> */}
            </ul>
        </nav>
    )
}
