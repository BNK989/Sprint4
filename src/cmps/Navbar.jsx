import { Link, NavLink } from 'react-router-dom'
import { LoginSignup } from "./LoginSignup"
import {NavRoutes, exploreMenu} from '../routes'
import { Button } from '@/components/ui/button'
import { useSelector } from 'react-redux'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  

export function NavBar() {

    const user = useSelector(storeState => storeState.userModule.user)

    return (
        <nav className="fiverr-nav">
            <ul className='clean-list flex'>
                <li className='explore cursor-pointer' ><DropdownMenu className='cursor-pointer'>
                    <DropdownMenuTrigger>Explore</DropdownMenuTrigger>
                    <DropdownMenuContent>
                    {exploreMenu.map(menu =>
                        <DropdownMenuItem key={menu.label}>
                            <Link to={`${menu.path}`}>{menu.label}<br/>{menu.subText}</Link>
                        </DropdownMenuItem>)}
                    </DropdownMenuContent>
                    </DropdownMenu></li>
                {/* {NavRoutes.splice(1,2).map(route => <li key={route.path} className={route.path}><NavLink to={route.path}>{route.label}</NavLink></li>)} */}
                {/* <LoginSignup /> */}
                { user && <li>Orders</li>}
                { user && <li className='text-black '>Switch to Selling</li>}
                { user && <li><img className="w-8 h-8" src={user.imgUrl} alt="" /></li>}
                { !user && <li className='shancn-btn'><Button variant="outline" className='bg-inherit'>Join</Button></li>}
                {/* <li><button className='join-btn btn txt'>Join</button></li> */}
            </ul>
        </nav>
    )
}
