import React, { Component } from 'react'

export default class TruckRegister extends Component {

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
        }
    }

    async register() {
        const {email, password, name, phone, img, food_type, description} = this.state
        const res = await axios.post('/auth/truck', {email, password, name, phone, img, food_type, description})
        if(res.data.truck) {
            this.props.setUser(res.data.truck, res.data.loggedIn)
            swal.fire({text: res.data.message, type: 'success', timer: 1800})
        }
        this.props.setUser(res.data.truck, res.data.loggedIn)
        swal.fire({type: 'success', text: res.data.message, timer: 1500})
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Email" value={this.state.email}/>
                <input type="text" placeholder="Password" value={this.state.name}/>
                <input type="text" placeholder="Name" value={this.state.password}/>
                <input type="text" placeholder="Phone" value={this.state.phone}/>
                <input type="text" placeholder="Img URL" value={this.state.img}/>
                <input type="text" placeholder="Type" value={this.state.food_type}/>
                <textarea type="text" placeholder="Description" value={this.state.description} cols="30" rows="15"/>
                <Link className='link' to='/truckdash'>
                    <button className='button'>Submit</button>
                </Link>
            </div>
        )
    }
}
