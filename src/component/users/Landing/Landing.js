import React from 'react'
import {Link} from 'react-router-dom'
import '../Landing/landing.scss'
import Reveal from 'react-reveal/Reveal'



export function Landing() {
    return (
        <Reveal>

        <div className='button-options'>
            <div className="options-container">
            <Link className='link' to="/trucklist">
                <button className='button1'>Food Trucks</button>
            </Link>
            <Link className='link' to="/eventlist">
                <button className='button1'>Events</button>
            </Link>
            </div>
        </div>
        </Reveal>
    )
}
export default Landing
