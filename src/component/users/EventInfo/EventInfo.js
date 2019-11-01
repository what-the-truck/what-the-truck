import React, { Component } from 'react'
import axios 
from 'axios'
import {connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import {getEvents} from '../../../ducks/truckReducer'



class EventInfo extends Component {
    constructor(props){
        super(props)
    }
   
    componentDidMount(){
        axios.get('/api/events').then(res => {
            this.props.getEvents(res.data)
        })
    }
    render() {
        // console.log(this.props)
        return (
            <div>
                event info
            </div>
        )
    }
}
function mapStateToProps(store){
    const {eventId,events} = store.truckReducer 
    return {eventId,events}
}

export default connect(mapStateToProps,{getEvents})(withRouter(EventInfo))
