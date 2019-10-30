import {Switch, Route} from 'react-router-dom'
import React from 'react'
import TruckDash from '../component/trucks/TruckDash/TruckDash'
import AddEvent from '../component/trucks/AddEvent/AddEvent'
import JoinEvent from '../component/trucks/JoinEvent/JoinEvent'
import MyMenu from '../component/trucks/MyMenu/MyMenu'
import Login from '../component/Login'
// import Landing from '../component/users/Landing/Landing'

export default ( 
    <Switch>
        {/* <Route exact path='/' component={Landing} /> */}
        <Route exact path='/' component={TruckDash} />
        <Route path ='/addevent' component={AddEvent} />
        <Route path ='/joinevent' component={JoinEvent} />
        <Route path ='/mymenu' component={MyMenu} />
        <Route path = '/login' component={Login} />
    </Switch>
)