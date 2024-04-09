

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
    const [isOpen, setIsOpen] = useState(false)
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

    console.log('isOpen:', isOpen)

   
    return (
        <nav className="fiverr-nav">
            <ul className='clean-list flex gap-6'>
                <li className='explore cursor-pointer' ><DropdownMenu className='cursor-pointer' isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
                    <DropdownMenuTrigger asChild className='fa chevron-down relative'>
                        <button>Explore</button>
                    </DropdownMenuTrigger >
                    <DropdownMenuContent isOpen={isOpen}>
                        {exploreMenu.map(menu =>
                            <DropdownMenuItem key={menu.label} onClick={() => setIsOpen(false)} >
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
                {!user && <li className='join-btn' onClick={() => signInModal(true)}><Button variant="outline" className='font-bold bg-inherit h-6 p-[1.2em] rounded text-green1 border-green1 border border-solid hover:bg-[#19a463] hover:text-white'>Join</Button></li>}

            </ul>
        </nav>
    )
}
