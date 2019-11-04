import React, { Component } from 'react'
import axios from 'axios'
const {REACT_APP_TWILIO_RECIPIENT} = process.env


export default class Twilio extends Component {
    state = {
        text:{
            recipient:REACT_APP_TWILIO_RECIPIENT, 
            message:'Testing twilio',
             
        }
        
    }

    sendText = () => {
        console.log('hit',process.env.REACT_APP_TWILIO_RECIPIENT)
        const {text} = this.state
        //pass text variables via query
        axios.get(`/send-text?recipient=${text.recipient}&textmessage=${text.message}`)
    }






    render() {
        return (
            <div>
            <button onClick={this.sendText}>Test1</button>
               
            </div>
        )
    }
}
