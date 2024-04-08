

import { Link, NavLink } from 'react-router-dom'

import { NavRoutes, exploreMenu } from '../routes'
import { Button } from '@/components/ui/button'
import { useSelector } from 'react-redux'
import { useEffect, useRef, useState } from 'react'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export function NavBar({ signInModal }) {
    const [isUserModalOpen, setUserModalOpen] = useState(false)
    const user = useSelector(storeState => storeState.userModule.user)
    let menuRef = useRef()

    useEffect(()=>{
        let handler = (e)=>{
            
            if(!menuRef.current === e.target){
                setUserModalOpen(false)
            }
             
        }
        document.addEventListener("mousedown",handler)
        return ()=>{
            document.removeEventListener("mousedown",handler)
        }
    })

   
    return (
        <nav className="fiverr-nav">
            <ul className='clean-list flex'>
                <li className='explore cursor-pointer' ><DropdownMenu className='cursor-pointer'>
                    <DropdownMenuTrigger>Explore</DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {exploreMenu.map(menu =>
                            <DropdownMenuItem key={menu.label} onClick={() => console.log(123)} >
                                <Link to={`${menu.path}`}>{menu.label}<br />{menu.subText}</Link>
                            </DropdownMenuItem>)}
                    </DropdownMenuContent>
                </DropdownMenu></li>
                {/* {NavRoutes.splice(1,2).map(route => <li key={route.path} className={route.path}><NavLink to={route.path}>{route.label}</NavLink></li>)} */}
                {user && <li>Orders</li>}
                {user && <li className='text-black '>Switch to Selling</li>}
                {user && <li className="user-img-navbar" >
                    <img onClick={() => setUserModalOpen(!isUserModalOpen)} className="w-8 h-8" src={user.imgUrl} alt="" />
                    {
                        isUserModalOpen &&
                        <section className="user-menu-options" ref={menuRef}>
                            <Link className='link-profile' onClick={()=>setUserModalOpen(false)} to={`user/${user._id}`}>Profile</Link>
                            {/* <div onClick={onProfile}>Profile</div> */}
                        </section>
                    }
                </li>}
                {!user && <li className="sign-in-nav" onClick={() => signInModal(false)}>Sign in</li>}
                {!user && <li onClick={() => signInModal(true)} className='shancn-btn'><Button variant="outline" className='bg-inherit'>Join</Button></li>}

            </ul>
        </nav>
    )
}
