import React, { Component } from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux';
import './AddEvent.scss'
import swal from 'sweetalert2'
const {REACT_APP_TWILIO_RECIPIENT} = process.env


class AddEvent extends Component {
    
    constructor() {
        super() 
        this.state = {
            name: '',
            address: '',
            street: '',
            city: '',
            state: '',
            latitude: '',
            longitude: '',
            date: '',
            time: '',
            key: '',
            text: {
                recipient: REACT_APP_TWILIO_RECIPIENT,
                message: "Testing twilio 2"
              }
        }
        this.addressChange = this.addressChange.bind(this)
    }

    componentDidMount() {
        axios.get('/api/key').then(res => {
            // console.log(res.data)
            this.setState({key: res.data[0].geo})
        })
    }

    handleChange = (e, key) => {
        this.setState({
            [key]:e.target.value
        })
    }

    async addressChange() {
        // console.log(this.state.key)
        let combine = this.state.street + ' ' + this.state.city + ' ' + this.state.state
        const final = combine.split(' ').join('+')
        await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${final}&key=${this.state.key}`)
        .then(res => {
            // console.log(res.data)
            this.setState({
                latitude: res.data.results[0].geometry.location.lat,
                longitude: res.data.results[0].geometry.location.lng,
                address: res.data.results[0].formatted_address
            })
        })
        // await console.log(this.state)
    }

    async addEvent() {
        const {text} = this.state
        await this.addressChange()
        let {name, address, latitude, longitude, date} = this.state
        await axios.post(`/api/event`, {name, address, date, latitude, longitude}).then(res => {
            // console.log(res.data)
            const event_id = res.data[0].event_id
            axios.post(`/api/attend`, {truckId: this.props.truckId, event_id})
            swal.fire({type: 'success', text: 'Event added', timer: 1700})
        })
        
        axios.get(
            `/send-text?recipient=${text.recipient}&textmessage=${text.message}`
          );
        await this.props.history.push(`/`)
    }

    render() {
        return (
            <div className="add-event">
                <div className="add-event-container">
                <h1>Add Event</h1>
                <input type="text"
                    value={this.state.name}
                    onChange={e => this.handleChange(e, "name")}
                    placeholder="Event Name"/>
                <input type="text"
                    value={this.state.street}
                    onChange={e => this.handleChange(e, "street")}
                    placeholder="Street"/>
                <input type="text"
                    value={this.state.city}
                    onChange={e => this.handleChange(e, "city")}
                    placeholder="City"/>
                <input type="text"
                    value={this.state.state}
                    onChange={e => this.handleChange(e, "state")}
                    placeholder="State"/>
                <input type="datetime-local"
                    value={this.state.date}
                    onChange={e => this.handleChange(e, "date")}
                    placeholder="Date"/>
                {/* <input type="time"
                    value={this.state.time}
                    onChange={e => this.handleChange(e, "time")}
                    placeholder="Time"/> */}
                
                <button className="button2" onClick={() => this.addEvent()}>Submit</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(store) {
    const {truckId} = store.truckReducer;
    return {truckId}
}

export default connect(mapStateToProps)(withRouter(AddEvent))
