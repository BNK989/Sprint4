

import { Link, NavLink } from 'react-router-dom'

import { NavRoutes, exploreMenu } from '../routes'
import { Button } from '@/components/ui/button'
import { useSelector } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuGroup,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ToolTipWrapper } from './shanCN/ToolTipWrapper'
import { utilService as util } from '../services/util.service'


export function NavBar({ signInModal }) {
    const [isUserModalOpen, setUserModalOpen] = useState(false)
    const user = useSelector(storeState => storeState.userModule.user)
    const orders = useSelector(storeState => storeState.orderModule.orders)
    const [pendingOrdersTotal, setPendingOrdersTotal] = useState(0)

    let menuRef = useRef()

    useEffect(() => {
        let handler = (e) => {
            setPendingOrdersTotal(orders.reduce((acc, order) => order.status === 'pending' ? acc + 1 : acc, 0))
            if (!menuRef.current === e.target) {
                setUserModalOpen(false)
            }

        }
        document.addEventListener("mousedown", handler)
        return () => {
            document.removeEventListener("mousedown", handler)
        }
    }, [orders])


    return (
        <nav className="fiverr-nav">
            <ul className='clean-list flex gap-6'>
                <li className='explore cursor-pointer' >
                    <DropdownMenu className='cursor-pointer'>
                        <DropdownMenuTrigger asChild className='fa chevron-down relative'>
                            <button>Explore</button>
                        </DropdownMenuTrigger >
                        <DropdownMenuContent>
                            <DropdownMenuGroup>
                                {exploreMenu.map(menu =>
                                    <DropdownMenuItem key={menu.label}  >
                                        <Link className={!menu.path && `opacity-70 cursor-not-allowed`} to={`${menu.path}`}>{menu.label}<br />{menu.subText}</Link>
                                    </DropdownMenuItem>)}
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                </DropdownMenu></li>
                {/* {NavRoutes.splice(1,2).map(route => <li key={route.path} className={route.path}><NavLink to={route.path}>{route.label}</NavLink></li>)} */}
                {user && <li className='relative' >
                    <ToolTipWrapper tooltipContent={`${pendingOrdersTotal} Pending Orders`}>
                        <Link to={`user/${user._id}`}>
                            Orders{pendingOrdersTotal !== 0 && <div className='notification-dot'></div>}
                        </Link>
                    </ToolTipWrapper>
                </li>
                }

                {user && <li className='text-black '>Switch to Selling</li>}
                {user && <ToolTipWrapper tooltipContent={`Logged in as ${util.capitalizeWords(user.fullname)}`}>
                    <li className="user-img-navbar" >
                        <img onClick={() => setUserModalOpen(!isUserModalOpen)} className="w-8 h-8" src={user.imgUrl} alt="" />
                        {
                            isUserModalOpen &&
                            <section className="user-menu-options" ref={menuRef}>
                                <Link className='link-profile' onClick={() => setUserModalOpen(false)} to={`user/${user._id}`}>Profile</Link>
                                {/* <div onClick={onProfile}>Profile</div> */}
                            </section>
                        }
                    </li></ToolTipWrapper>
                }

                {!user && <li className="sign-in-nav" onClick={() => signInModal(false)}>Sign in</li>}
                {!user && <li className='join-btn' onClick={() => signInModal(true)}><Button variant="outline" className='font-bold bg-inherit h-6 p-[1.2em] rounded text-green1 border-green1 border border-solid hover:bg-[#19a463] hover:text-white'>Join</Button></li>}

            </ul>
        </nav>
    )
}
