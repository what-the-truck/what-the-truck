import React, { Component } from 'react'
import './AddEvent.scss'
import axios from 'axios'
import swal from 'sweetalert2'


export default class AddEvent extends Component {
    
    constructor() {
        super() 
        this.state = {
            eventName: '',
            address: '',
            latitude: '',
            longitude: '',
            date: '',
            time: '',
        }
    }

    handleChange = (e, key) => {
        this.setState({
            [key]:e.target.value
        })
    }

    render() {
        return (
            <div className="add-event">
                <div className="add-event-container">
                <h1>Add Event</h1>
                <input type="text"
                    value={this.state.eventName}
                    onChange={e => this.handleChange(e, "eventEvent")}
                    placeholder="Event Name"/>
                <input type="text"
                    value={this.state.address}
                    onChange={e => this.handleChange(e, "address")}
                    placeholder="Address"/>
                <input type="date"
                    value={this.state.date}
                    onChange={e => this.handleChange(e, "date")}
                    placeholder="Date"/>
                <input type="time"
                    value={this.state.time}
                    onChange={e => this.handleChange(e, "time")}
                    placeholder="Time"/>
                <button className="button2">Submit</button>
                </div>
            </div>
        )
    }
}
