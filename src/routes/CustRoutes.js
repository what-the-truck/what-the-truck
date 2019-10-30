import {Switch, Route} from 'react-router-dom'
import React from 'react'
import Landing from '../component/users/Landing/Landing'
import TruckList from '../component/users/TruckList/TruckList'
import TruckInfo from '../component/users/TruckInfo/TruckInfo'
import TruckMenuCust from '../component/users/TruckMenuCust/TruckMenuCust'
import EventList from '../component/users/EventList/EventList'
import EventInfo from '../component/users/EventInfo/EventInfo'
import CustRegister from '../component/CustRegister'
import TruckRegister from '../component/TruckRegister'
import RegisterOptions from '../component/RegisterOptions'
import Header from '../component/Header'
import Login from '../component/Login'

export default ( 
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path ='/trucklist' component={TruckList} />
        <Route path ='/truckinfo/:id' component={TruckInfo} />
        <Route path ='/truckmenu' component={TruckMenuCust} />
        <Route path ='/eventlist' component={EventList} />
        <Route path ='/eventinfo/:id' component={EventInfo} />
        <Route path = '/registeroptions' component={RegisterOptions} />
        <Route path ='/custregister' component={CustRegister} />
        <Route path ='/truckregister' component={TruckRegister} />
        <Route path = '/login' component={Login} />
    </Switch>
)