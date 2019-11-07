import React from 'react'
import {Link} from 'react-router-dom'
import './RegisterOptions.scss'
import Reveal from 'react-reveal/Reveal'




export function RegisterOptions() {
    return (
        <Reveal>

        <div className='register-options'>
            <div className="options-container">
            {/* <h1>RegisterOptions</h1> */}
                <Link className='link' to="/custregister">
                    <button className='button1'>User</button>
                </Link>
                <Link className='link' to="/truckregister">
                    <button className='button1'>Truck</button>
                </Link>
            </div>
            
        </div>
        </Reveal>
    )
}
export default RegisterOptions
