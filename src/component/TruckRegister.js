import React, { Component } from 'react'
import axios from 'axios'
import swal from 'sweetalert2'
// import {Link} from 'react-router-dom'
import {setTruck} from '../ducks/truckReducer'
import {connect} from 'react-redux'
import './TruckRegister.scss'

export class TruckRegister extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            name: '',
            phone: '',
            img: '',
            food_type: '',
            description: '',
            website: '',
        }
    }

    handleChange = (e, key) => {
        this.setState({
            [key]:e.target.value
        })
    }

    async register() {
        // console.log(this.state)
        if(this.state.email === '' || 
            this.state.password === '' ||
            this.state.name === '' || 
            this.state.phone === '' ||
            this.state.img === '' ||
            this.state.food_type === '' ||
            this.state.description === '')
            {return (swal.fire({type: 'error', text: "Please fill out all information", timer: 1500}))
        } else {
            const {email, password, name, phone, img, food_type, description, website} = this.state
            const res = await axios.post('/auth/truck', {email, password, name, phone, img, food_type, description, website})
            if(res.data.truck) {
                await this.props.setTruck(res.data.truck)
                await this.props.history.push('/')
                await swal.fire({text: 'Welcome!', type: 'success', timer: 1800})
            } else {
            // this.props.setUser(res.data.truck, res.data.loggedIn)
            swal.fire({type: 'error', text: res.data.message, timer: 1500})
            }
        }
        
    }

    render() {
        return (
            <div className='truck-register'>
                <div className="container-box">
                <h1>Truck Registration</h1>
                <input 
                    type="text" 
                    onChange={e => this.handleChange(e, "email")} 
                    placeholder="Email" 
                    value={this.state.email}
                    name="email"
                    id="Email"/>
                <input 
                    type="password" 
                    onChange={e => this.handleChange(e, "password")} 
                    placeholder="Password" 
                    value={this.state.password}
                    name="password"
                    id="Password"/>
                <input 
                    type="text" 
                    onChange={e => this.handleChange(e, "name")} 
                    placeholder="Name" 
                    value={this.state.name}
                    name="name"
                    id="Name"/>
                <input 
                    type="tel" 
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    onChange={e => this.handleChange(e, "phone")} 
                    placeholder="Phone #" 
                    value={this.state.phone}
                    name='phone'
                    id="Phone"
                    />
                <input 
                    type="text" 
                    onChange={e => this.handleChange(e, "img")} 
                    placeholder="Img URL" 
                    value={this.state.img}
                    name="img"
                    id="Img"/>
                <input 
                    type="text" 
                    onChange={e => this.handleChange(e, "food_type")} 
                    placeholder="Type" 
                    value={this.state.food_type}
                    name='type'
                    id='Type'/>
                <input 
                    type="text"
                    onChange={e => this.handleChange(e, "website")}
                    placeholder="Website URL(optional)"
                    value={this.state.website}
                    name="website"
                    id="Website"/>
                <textarea type="text" placeholder="Description" 
                    onChange={e => this.handleChange(e, "description")} 
                    value={this.state.description} 
                    cols="50" rows="6"
                    name='description'
                    id='Description'/>
                {/* <Link className='link' to='/truckdash'> */}
                    <button className='button2' onClick={() => this.register()}>Submit</button>
                {/* </Link> */}
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    const {truck} = reduxState
    return {truck} 
}

export default connect (mapStateToProps, {setTruck})(TruckRegister)
