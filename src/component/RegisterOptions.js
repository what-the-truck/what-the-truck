import React from 'react'
import {Link} from 'react-router-dom'




export default function RegisterOptions() {
    return (
        <div>
            <Link className='link' to="/custregister">
                <button>User</button>
            </Link>
            <Link className='link' to="/truckregister">
                <button>Truck</button>
            </Link>
            
        </div>
    )
}
