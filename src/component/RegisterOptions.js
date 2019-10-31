import React from 'react'
import {Link} from 'react-router-dom'
import './RegisterOptions.scss'




export function RegisterOptions() {
    return (
        <div className='register-options'>
            {/* <h1>RegisterOptions</h1> */}
                <Link className='link' to="/custregister">
                    <button className='button1'>User</button>
                </Link>
                <Link className='link' to="/truckregister">
                    <button className='button1'>Truck</button>
                </Link>
            
        </div>
    )
}
export default RegisterOptions
