import React from 'react'
import {Link} from 'react-router-dom'
import '../Landing/landing.scss'



export default function Landing() {
    return (
        <div className='button-options'>
            <Link className='link' to="/trucklist">
                <button className='button'>Food Trucks</button>
            </Link>
            <Link className='link' to="/eventlist">
                <button className='button'>Events</button>
            </Link>
        </div>
    )
}
