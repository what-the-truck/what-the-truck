import React from 'react'
import {Link} from 'react-router-dom'




export function RegisterOptions() {
    return (
        <div>
        <h1>RegisterOptions</h1>
            <Link className='link' to="/custregister">
                <button>User</button>
            </Link>
            <Link className='link' to="/truckregister">
                <button>Truck</button>
            </Link>
            
        </div>
    )
}
export default RegisterOptions
