import { HomePage } from './pages/HomePage.jsx'
import { GigIndex } from './pages/GigIndex.jsx'
import { ReviewIndex } from './pages/ReviewIndex.jsx'
import { ChatApp } from './pages/Chat.jsx'
import { GigDetails } from './cmps/GigDetails.jsx'

// Routes accessible from the main navigation (in AppHeader)
const routes = [
    {
        path: '/',
        component: <HomePage />,
        label: 'Home',
    },
    {
        path: 'explore',
        component: <GigIndex />,
        label: 'Explore'
    },
    {
        path: 'review',
        component: <ReviewIndex />,
        label: 'Reviews'
    },
    {
        path: 'chat',
        component: <ChatApp />,
        label: 'Chat'
    },
    {
        path: 'explore/:gigId',
        component: <GigDetails />,
        label: 'details'
    },
]
export default routes


export const NavRoutes = [
    {
        path: 'explore',
        component: <GigIndex />,
        label: 'Explore'
    },
    // {
    //     path: 'review',
    //     component: <ReviewIndex />,
    //     label: 'Reviews'
    // },
    {
        path: 'chat',
        component: <ChatApp />,
        label: 'Become a Seller'
    }
    // {
    //     path: 'about',
    //     component: <AboutUs />,
    //     label: 'About us'
    // },
]