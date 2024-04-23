import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const TopNav = () => {
    const location = useLocation()

    const isCurrentLink = (link)=>{
        if(link == location.pathname){
            return true;
        } else{
            return false
        }
    }
    return (
        <nav className='flex items-center justify-between px-5 md:px-10 bg-cyan-100'>
            <h1 className='text-3xl font-bold text-blue-500 w-max p-2'>BoardMe</h1>
            <ul className='flex items-center w-max gap-2 justify-center'>
                <Link to={'/'} className={`px-4 py-2 hover:bg-blue-500 font-semibold ${isCurrentLink('/') ? 'bg-blue-500' : ''}`}>Home</Link>
                <Link to={'/events'} className={`px-4 py-2 hover:bg-blue-500 font-semibold ${isCurrentLink('/events') ? 'bg-blue-500' : ''}`}>Events</Link>
                <Link to={'event-create'} className={`px-4 py-2 hover:bg-blue-500 font-semibold ${isCurrentLink('/event-create') ? 'bg-blue-500' : ''}`}>MyEvents</Link>
                <Link to={'/allevents'} className={`px-4 py-2 hover:bg-blue-500 font-semibold ${isCurrentLink('/allevents') ? 'bg-blue-500' : ''}`}>Other</Link>
            </ul>
            <div className='flex items-center justify-end gap-4'>
                <button className='px-4 py-2 bg-blue-500 hover:bg-blue-800 font-bold text-white'>Sign in</button>
                <button className='px-4 py-2 bg-black hover:bg-blue-500 font-bold text-white'>Sign up</button>
            </div>
        </nav>
    )
}

export default TopNav