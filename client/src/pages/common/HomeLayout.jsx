import React from 'react'
import TopNav from '../../components/TopNav'
import Footer from '../../components/Footer'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
    return (
        <main>
            <TopNav />
            <Outlet />
            <Footer />
        </main>
    )
}

export default HomeLayout