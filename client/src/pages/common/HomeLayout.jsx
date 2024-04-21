import React from 'react'
import TopNav from '../../components/TopNav'
import Footer from '../../components/Footer'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
    return (
        <main>
            <TopNav />
            <div className='min-h-screen bg-slate-200'>
                <Outlet />
            </div>
            <Footer />
        </main>
    )
}

export default HomeLayout