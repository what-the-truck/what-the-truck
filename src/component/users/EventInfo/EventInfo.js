import React, { Component } from 'react'
import {connect } from 'react-redux'
import axios from 'axios'
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
        return (
            <div>
                event info
            </div>
        )
    }
}
function mapStateToProps(store){
    const {events} = store.truckReducer 
    return {events}
}

export default connect(mapStateToProps,{getEvents})(withRouter(EventInfo))
