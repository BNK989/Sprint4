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

export const exploreMenu = [
    {
        path: 'explore',
        label: 'Explore',
        subText: 'Inspiring projects made on Fiverr',
    },
    {
        path: '',
        label: 'Community',
        subText: 'Connect with Fiverr\'s team and community',
    },
    {
        path: '',
        label: 'Guides',
        subText: 'In-depth guides covering business topics',
    },
    {
        path: '',
        label: 'Podcast',
        subText: 'Inside tips from top business minds',
    },
    {
        path: '',
        label: 'Learn',
        subText: 'Professional online courses, led by experts',
    },
    {
        path: '',
        label: 'Blog',
        subText: 'News, information and community stories',
    },
    {
        path: '',
        label: 'Logo Maker',
        subText: 'Create your logo instantly',
    },
    {
        path: '',
        label: 'Fiverr Workspace',
        subText: 'One place to manage your business',
    },
]

export const searchSug = [
    'website design',
    'wordpress',
    'logo design',
    'ai services'
]