import {Switch, Route} from 'react-router-dom'
import Landing from '../component/users/Landing/Landing'
import TruckList from '../component/users/TruckList/TruckList'
import TruckInfo from '../component/users/TruckInfo/TruckInfo'
import TruckMenuCust from '../component/users/TruckMenuCust/TruckMenuCust'
import EventList from '../component/users/EventList'
import EventInfo from '../component/users/EventInfo/EventInfo'


export default ( 
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path ='/trucklist' component={TruckList} />
        <Route path ='/truckinfo/:id' component={TruckInfo} />
        <Route path ='/truckmenu' component={TruckMenuCust} />
        <Route path ='/eventlist' component={EventList} />
        <Route path ='/eventinfo/:id' component={EventInfo} />
    </Switch>
)