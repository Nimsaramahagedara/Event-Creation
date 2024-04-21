import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const isCurrentLink = (link)=>{
        if(link == location.pathname){
            return true;
        } else{
            return false
        }
    }
    return (
        <footer className='flex items-center justify-between px-5 md:px-10 bg-black text-white py-5'>
            <div className='w-1/2'>
                <h1 className='text-3xl font-bold text-blue-500 w-max p-2'>BoardMe</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sapiente, distinctio voluptas delectus consectetur, incidunt</p>
            </div>
            <div className='flex items-start justify-end gap-4 w-1/2'>
            <ul className='flex flex-col'>
                <Link to={'/'} className={`px-4 py-2 hover:bg-blue-500 font-semibold ${isCurrentLink('/') ? 'bg-blue-500' : ''}`}>Home</Link>
                <Link to={'events'} className={`px-4 py-2 hover:bg-blue-500 font-semibold ${isCurrentLink('/events') ? 'bg-blue-500' : ''}`}>Events</Link>
            </ul>
            <ul className='flex flex-col gap-4'>
                <Link to={'/'} className={`px-4 py-2 hover:bg-blue-500 font-semibold ${isCurrentLink('/') ? 'bg-blue-500' : ''}`}>Home</Link>
                <Link to={'events'} className={`px-4 py-2 hover:bg-blue-500 font-semibold ${isCurrentLink('/events') ? 'bg-blue-500' : ''}`}>Events</Link>
                <Link to={'myevents'} className={`px-4 py-2 hover:bg-blue-500 font-semibold ${isCurrentLink('/myevents') ? 'bg-blue-500' : ''}`}>MyEvents</Link>
            </ul>
            <ul className='flex flex-col gap-4'>
                <Link to={'/'} className={`px-4 py-2 hover:bg-blue-500 font-semibold ${isCurrentLink('/') ? 'bg-blue-500' : ''}`}>Home</Link>
                <Link to={'events'} className={`px-4 py-2 hover:bg-blue-500 font-semibold ${isCurrentLink('/events') ? 'bg-blue-500' : ''}`}>Events</Link>
            </ul>
            </div>

        </footer>
    )
}

export default Footer