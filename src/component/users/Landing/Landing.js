import React from 'react'
import {Link} from 'react-router-dom'



export default function Landing() {
    return (
        <div>
            <Link className='link' to="/trucklist">
                <button>Food Trucks</button>
            </Link>
            <Link className='link' to="/eventlist">
                <button>Events</button>
            </Link>
        </div>
    )
}
