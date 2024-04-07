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

export const popularServices = [
   {
       subTitle: 'Build your brand',
       title: 'Logo Design',
       imgUrl: 'https://res.cloudinary.com/dhsdxj3y3/image/upload/v1670793304/gigs/tsjasljano86zfjpsyhb.webp',
    },
    {
        subTitle: 'Customize your site',
        title: 'WordPress',
        imgUrl: 'https://res.cloudinary.com/dhsdxj3y3/image/upload/v1670793304/gigs/ptkrcbqnwyegt4pb1rv7.webp',
     },
     {
        subTitle: 'Share Your message',
        title: 'Voice Over',
        imgUrl: 'https://res.cloudinary.com/dhsdxj3y3/image/upload/v1670793305/gigs/ksixpld6dq1amhahdibu.webp',
     },
     {
        subTitle: 'Engage your audience',
        title: 'Video Explainer',
        imgUrl: 'https://res.cloudinary.com/dhsdxj3y3/image/upload/v1670793304/gigs/oxavedfug6zyrbjorika.jpg',
     },
     {
        subTitle: 'Reach more costumers',
        title: 'Social Media',
        imgUrl: 'https://res.cloudinary.com/dhsdxj3y3/image/upload/v1670793304/gigs/rahdwdft5vutjezykopc.webp',
     },
     {
        subTitle: 'Unlock growth online',
        title: 'SEO',
        imgUrl: 'https://res.cloudinary.com/dhsdxj3y3/image/upload/v1670793304/gigs/alhg6ir99obt8b1dhkvl.webp',
     },
     {
        subTitle: 'Color your dreams',
        title: 'SEO',
        imgUrl: 'https://res.cloudinary.com/dhsdxj3y3/image/upload/v1670793304/gigs/hbrjpedcyu8ytdhlbffm.webp',
     },
     {
        subTitle: 'Learn your business',
        title: 'Data Entry',
        imgUrl: 'https://res.cloudinary.com/dhsdxj3y3/image/upload/v1670793304/gigs/jezoetuwvxqzc115bria.webp',
     },
     {
        subTitle: 'Go global',
        title: 'Translation',
        imgUrl: 'https://res.cloudinary.com/dhsdxj3y3/image/upload/v1670793611/gigs/ctvfjcpsnicackorfnoh.webp',
     },

]

export const bgImgs = [
    'https://res.cloudinary.com/dhsdxj3y3/image/upload/v1670768271/gigs/tbqwagffjw6cxgwnrhmb.webp',
    'https://res.cloudinary.com/dhsdxj3y3/image/upload/v1670768271/gigs/zj3dflxnixaytffgqpn9.webp',
    'https://res.cloudinary.com/dhsdxj3y3/image/upload/v1670768271/gigs/lagjxyakwvonraw1p43m.webp',
    'https://res.cloudinary.com/dhsdxj3y3/image/upload/v1670768271/gigs/idvcmvkhfqjlgpmdubwu.webp',
    'https://res.cloudinary.com/dhsdxj3y3/image/upload/v1670768271/gigs/sfl8xkvbl0ztb1yxehjz.webp',
]