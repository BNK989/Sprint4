import React from 'react'
import { Routes, Route } from 'react-router'
import { useLocation } from 'react-router-dom'

import routes from './routes'

import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import { HomePage } from './pages/Homepage'
import { UserDetails } from './pages/UserDetails'


export function RootCmp() {
    const location = useLocation()

    const isHomepage = location.pathname === '/'

    return (
            <div className={`main-container ${isHomepage ? 'homepage' : ''}`}>
                <AppHeader />
                {/* <HomePage /> */}
                <main className={`main-layout ${isHomepage ? 'full' : ''}`}>
                    <Routes>
                        {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
                    </Routes>
                        <h3>h3h3h3</h3>
                </main>
                <AppFooter />
            </div>
    )
}


