

import { Link, NavLink } from 'react-router-dom'

import { NavRoutes, exploreMenu } from '../routes'
import { Button } from '@/components/ui/button'
import { useSelector } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuGroup,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { QuickAvatar } from './shanCN/QuickAvatar'
import { utilService as util } from '../services/util.service'

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from '@/lib/utils'
import { ManageSentOrders } from './ManageSentOrders'
import { loadOrders } from '@/store/actions/order.actions'
import { SOCKET_EVENT_EDIT_ORDER, socketService } from '@/services/socket.service'
import { UPDATE_ORDER } from '@/store/reducers/order.reducer'
import { store } from '@/store/store'



export function NavBar({ signInModal, className,onLogout }) {
    const [isUserModalOpen, setUserModalOpen] = useState(false)
    const user = useSelector(storeState => storeState.userModule.user)
    const orders = useSelector(storeState => storeState.orderModule.orders)
    const ownedGigs = useSelector(storeState => storeState.gigModule.ownedGigs)

    const [pendingOrdersTotal, setPendingOrdersTotal] = useState(0)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const bellRef = useRef()
    const ordersRef = useRef(0)

  

    let menuRef = useRef()

    useEffect(() => {
        loadOrders({buyer: true})
        socketService.on(SOCKET_EVENT_EDIT_ORDER,(editOrder)=>{
            store.dispatch({type:UPDATE_ORDER,editOrder})
            util.animateRef(bellRef.current,'animate__swing',5000,2)
        })
        let handler = (e) => {
            setPendingOrdersTotal(orders.reduce((acc, order) => order.status === 'pending' ? acc + 1 : acc, 0))
            if (!menuRef.current === e.target) {
                setUserModalOpen(false)
            }

        }
        document.addEventListener("mousedown", handler)
        return () => {
            document.removeEventListener("mousedown", handler)
            socketService.off(SOCKET_EVENT_EDIT_ORDER)
        }
    }, [])
if(orders.length){
    if(orders.length > ordersRef.current){
        util.animateRef(bellRef.current,'animate__swing',5000,2)
        ordersRef.current += 1
    }
}

    return (
        <>
            <div className={ cn(`top-0 right-0 w-screen h-screen absolute ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`)} onClick={() => setIsMenuOpen(false)} />
            <nav className={cn("fiverr-nav", className)}>
                <ul className='clean-list flex gap-6'>
                    <li className='explore cursor-pointer' >
                        <DropdownMenu className='cursor-pointer' open={isMenuOpen} >
                            <DropdownMenuTrigger asChild className='fa chevron-down relative' onClick={() => setIsMenuOpen(prev => !prev)}>
                                <button>Explore</button>
                            </DropdownMenuTrigger >
                            <DropdownMenuContent>
                                <DropdownMenuGroup>
                                    {exploreMenu.map(menu =>
                                        <DropdownMenuItem key={menu.label} onClick={() => setIsMenuOpen(false)} >
                                            <Link className={!menu.path ? `opacity-70 cursor-not-allowed` : ''} to={`${menu.path}`}>{menu.label}<br />{menu.subText}</Link>
                                        </DropdownMenuItem>)}
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu></li>
                    {/* {NavRoutes.splice(1,2).map(route => <li key={route.path} className={route.path}><NavLink to={route.path}>{route.label}</NavLink></li>)} */}
                    {user && <li className='relative' >
                        <Popover>
                            <PopoverTrigger>Orders{ <div ref={bellRef} className={`${orders.length && 'notification-bell  fa'}`}></div>}</PopoverTrigger>
                            <PopoverContent>{ <ManageSentOrders user={user} orders=
                            {orders} />}</PopoverContent>
                        </Popover>

                        {/* <ToolTipWrapper tooltipContent={`${pendingOrdersTotal} Pending Orders`}>
                            <Link to={`user/${user._id}`}>
                                Orders{pendingOrdersTotal !== 0 && <div className='notification-dot'></div>}
                            </Link>
                        </ToolTipWrapper> */}
                    </li>
                    }

                    {user && <li className='text-black '>Switch to Selling</li>}
                    {user && <Popover >
                        <PopoverTrigger>
                            <QuickAvatar user={user} />
                        </PopoverTrigger>
                        <PopoverContent className="tttt left-11 mx-10">
                            <div className="flex gap-4 mb-4">
                                <QuickAvatar user={user} />
                                <h4> {util.capitalizeWords(user.fullname)}</h4>
                            </div>
                            <button className='w-full border border-black border-solid rounded'>Switch to Buying</button>
                            <hr className='my-4' />
                            <ul className="clean-list ">
                                <li className='my-3 text-[#62646a]'><Link to={`user/${user._id}`}>Profile</Link></li>
                                <li className='my-3 text-[#62646a]'><Link to="">Refer a Friend</Link></li>
                                <hr className='my-4' />
                                <li className='my-3 text-[#62646a]'><Link onClick={onLogout} to="">Logout</Link></li>
                            </ul>

                        </PopoverContent>
                    </Popover>
                    }

                    {!user && <li className="sign-in-nav" onClick={() => signInModal(false)}>Sign in</li>}
                    {!user && <li className='join-btn' onClick={() => signInModal(true)}><Button variant="outline" className='font-bold bg-inherit h-6 p-[1.2em] rounded text-green1 border-green1 border border-solid hover:bg-[#19a463] hover:text-white'>Join</Button></li>}

                </ul>
            </nav>
        </>
    )
}
