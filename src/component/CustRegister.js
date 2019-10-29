import React, { Component } from 'react'
import axios from 'axios';
import swal from 'sweetalert2';

export default class CustRegister extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',

        }
    }

    handleChange = (e, key) => {
        this.setState({
            [key]:e.target.value
        })
    }

    async register() {
        const {email, password} = this.state
        const res = await axios.post('/auth/user', {email, password})
        if(res.data.user) {
            this.props.setUser(res.data.user, res.data.loggedIn)
            swal.fire({text:res.data.message, type: 'success', timer: 2000})
            this.props.history.push('/')
        } else {
            swal.fire({text: res.data.message, type:'error', timer: 1500})
        }
    }


    render() {
        return (
            <div>
                <input type="text" value={this.state.email} onChange={e => this.handleChange(e, email)} placeholder="Email"/>
                <input type="text" value={this.state.password} onChange={e => this.handleChange(e, password)} placeholder="Password"/>
                <Link className='link' to="/">
                    <button className='button'>Submit</button>
                </Link>
                
            </div>
        )
    }
}
