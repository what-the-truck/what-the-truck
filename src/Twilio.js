import React, { Component } from 'react'
import axios from 'axios'
require('dotenv/config')


export default class Twilio extends Component {
    state = {
        text:{
            recipient:'' ,//needs a number to alert
            textmessage:'' //figure out what our message will entail
        }
    }

    sendText = () => {
        const {text} = this.state
        //pass text variables via query
        axios.get(`/send-text?recipient=${text.recipient}&textmessage=${text.message}`)
    }



    render() {
        return (
            <div>
              <h1>Twilio</h1>  
            </div>
        )
    }
}
