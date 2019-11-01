import React, { Component } from 'react'
import axios from 'axios';
import swal from 'sweetalert2';
// import {Link} from 'react-router-dom'
import {setUser} from '../ducks/userReducer'
import {connect} from 'react-redux'
import './CustRegister.scss'

class CustRegister extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            phone: '',

        }
    }

    handleChange = (e, key) => {
        this.setState({
            [key]:e.target.value
        })
    }

    async register() {
        if(this.state.email === '' || this.state.password === '')
            {return (swal.fire({type: 'error', text: "Please fill out all information"}))
        } else {
        const {email, password, phone} = this.state
        const res = await axios.post('/auth/user', {password, email, phone})
        if(res.data.user) {
            this.props.setUser(res.data.user, res.data.loggedIn)
            swal.fire({text:res.data.message, type: 'success', timer: 2000})
            this.props.history.push('/')
        } else {
            swal.fire({text: res.data.message, type:'error', timer: 1500})
        }
    }
    }

    render() {
        return (
            <div className='cust-register'>
                <div className="cust-container-box">
                {/* <h1>User Registration</h1> */}
                <input 
                    type="text" 
                    value={this.state.email} 
                    onChange={e => this.handleChange(e, "email")} 
                    placeholder="Email (required)"/>
                <input 
                    type="number" 
                    value={this.state.phone} 
                    onChange={e => this.handleChange(e, "phone")} 
                    placeholder="Phone (not required)"/>
                <input 
                    type="password" 
                    value={this.state.password} 
                    onChange={e => this.handleChange(e, "password")} 
                    placeholder="Password"/>
                <button className='button2' onClick={() => this.register()}>Submit</button>
                </div>
                
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    const {user} = reduxState
    return {user} 
}

export default connect (mapStateToProps, {setUser})(CustRegister)
