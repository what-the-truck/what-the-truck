import React, { Component } from 'react'
import {connect } from 'react-redux'


 class EventInfo extends Component {
    state = {
        events: []
    }
    render() {
        return (
            <div>
                event info
            </div>
        )
    }
}
function mapStateToProps(reduxState){
    const {events} = reduxState 
    return {events}
}

export default connect(mapStateToProps)(EventInfo)
