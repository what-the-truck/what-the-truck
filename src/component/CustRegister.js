import React, { Component } from 'react'
import axios from 'axios';
import swal from 'sweetalert2';
import {Link} from 'react-router-dom'
import {setUser} from '../ducks/userReducer'
import {connect} from 'react-redux'

class CustRegister extends Component {
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
        if(this.state.email === '' || 
            this.state.password === '')
            {return (swal.fire({type: 'error', text: "Please fill out all information", timer: 1500}))
        } else {
        const {email, password} = this.state
        const res = await axios.post('/auth/user', {password, email})
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
            <div>
                <h1>User Registration</h1>
                <input 
                    type="text" 
                    value={this.state.email} 
                    onChange={e => this.handleChange(e, "email")} 
                    placeholder="Email"/>
                <input 
                    type="password" 
                    value={this.state.password} 
                    onChange={e => this.handleChange(e, "password")} 
                    placeholder="Password"/>
                {/* <Link className='link' to="/"> */}
                    <button className='button' onClick={() => this.register()}>Submit</button>
                {/* </Link> */}
                
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    const {user} = reduxState
    return {user} 
}

export default connect (mapStateToProps, {setUser})(CustRegister)
