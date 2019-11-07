import React, { Component } from "react";
// import axios from 'axios';
// import swal from 'sweetalert2';
// import { Link } from 'react-router-dom'
// import { setUser } from '../ducks/userReducer'
import { connect } from 'react-redux'
import "./Header.scss";
import { withRouter } from 'react-router-dom'
import Fade from 'react-reveal/Fade'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: false
    }
  }

  redirect = (path) => {
    // console.log(this.state)
    this.props.history.push(path)
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }))
    // console.log(this.state)
  }

  logout1 = () => {
    // console.log('logout1 on header')
    this.props.logout()
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }))
  }


  render() {
    if(this.props.truckId){
      return (
        <div>
          <div className="header-top">
          <img
              onClick={() => {this.props.history.push('/')
              this.setState({
                toggle: false
              })}}
              src="https://lh3.googleusercontent.com/Npl4sWIz_4GJK-e_3opNpKHNfLYl9Wja7AWHAt_2Ri0nwgZ_Equk-4shiyTg0_GTVoLZOvwGtLyqKFIZ9fEZl7Opol2AZilGtiLLKgcQO_QqCsD78HaJ1_H2MpdlG7rtYUQiVIOmHLBqK-CcgpCizQ1EAFiyREDpKRmUsKcmklc7gB-t-NkuJvWa6toJPcLQthTl64LUzRk_KVtj7xXES3_rI1rwX__Ppc0QfsHwetzqVtYeoyNLso3vuJ7f2C1ouiL-zt9vfbGAXb05ULrM6qwQww0RlDT-jXBQtKQfmVHB0fQNJK0clommNo20Uzcgt2xR0sxPjozdkaacxF-VTUffdnlE3wZogBNWkAsBF49N0O2dIECrSN0ufH7QTEaKoz-eN6F_pCqS6y4qS8wiiVUIdRxFfzsbXAV8xI9vO12QRPysTzfzv6qmaXSmHA9NPWPjm6_kc-gfKD8XQ-EPeQ9EffBO6_IF-YiV-DFzFcyJ4GCsK80YzP93rcxlaOj5pUOtM4640eidoHb9nUhgs7N4OxWjLpnphX_4FhJdn23XXu8UDg_IpLZGylkm0L2iQ8Q2Hi1of6Dh6R2NHkDMLZhKheGcCZw3HTDa43Rmm3za__3DoWVibkmEdMQv_N4JxirdNj46UWKZPfDhsmb120OGXZTvZmiYsf0THPr_hzr32OJmliKgfeRpVd-NaRsZuz7xBNuyacMzbvV6mqVK-mQ_D8Je2fIs0bOK6lI3JgePsQE4=w688-h690-no"
              alt=""
            />
            <h1>Welcome, 
              <p>{this.props.name}!</p>
            </h1>
            <i onClick={() => this.setState(prevState => ({
              toggle: !prevState.toggle
            }))} className="fas fa-hamburger"></i>
          </div>
          <div className={`menu-list-${this.state.toggle ? true : false}`}>         
            <div onClick={() => this.redirect('/')} className="menu-item">
              <h2>My Truck</h2>
            </div>
            <div onClick={() => this.redirect('/addevent')} className="menu-item">
              <h2>Add Event</h2>
            </div>
            {/* <div onClick={() => this.redirect('/joinevent')} className="menu-item">
              <h2>Join Event</h2>
            </div> */}
            {/* <div onClick={() => this.redirect('/mymenu')} className="menu-item">
              <h2>My menu</h2>
            </div> */}
            <div onClick={() => this.logout1()} className="menu-item">
              <h2>Logout</h2>
            </div>
           
          </div>
        </div>
      ) 
    }
    else{
      return (
        <div>
          <div className="header-top">
            <img
              onClick={() => {this.props.history.push('/')
              this.setState({
                toggle: false
              })}}
              src="https://lh3.googleusercontent.com/Npl4sWIz_4GJK-e_3opNpKHNfLYl9Wja7AWHAt_2Ri0nwgZ_Equk-4shiyTg0_GTVoLZOvwGtLyqKFIZ9fEZl7Opol2AZilGtiLLKgcQO_QqCsD78HaJ1_H2MpdlG7rtYUQiVIOmHLBqK-CcgpCizQ1EAFiyREDpKRmUsKcmklc7gB-t-NkuJvWa6toJPcLQthTl64LUzRk_KVtj7xXES3_rI1rwX__Ppc0QfsHwetzqVtYeoyNLso3vuJ7f2C1ouiL-zt9vfbGAXb05ULrM6qwQww0RlDT-jXBQtKQfmVHB0fQNJK0clommNo20Uzcgt2xR0sxPjozdkaacxF-VTUffdnlE3wZogBNWkAsBF49N0O2dIECrSN0ufH7QTEaKoz-eN6F_pCqS6y4qS8wiiVUIdRxFfzsbXAV8xI9vO12QRPysTzfzv6qmaXSmHA9NPWPjm6_kc-gfKD8XQ-EPeQ9EffBO6_IF-YiV-DFzFcyJ4GCsK80YzP93rcxlaOj5pUOtM4640eidoHb9nUhgs7N4OxWjLpnphX_4FhJdn23XXu8UDg_IpLZGylkm0L2iQ8Q2Hi1of6Dh6R2NHkDMLZhKheGcCZw3HTDa43Rmm3za__3DoWVibkmEdMQv_N4JxirdNj46UWKZPfDhsmb120OGXZTvZmiYsf0THPr_hzr32OJmliKgfeRpVd-NaRsZuz7xBNuyacMzbvV6mqVK-mQ_D8Je2fIs0bOK6lI3JgePsQE4=w688-h690-no"
              alt=""
            />
            <h1>What the truck?
              <p>{this.props.name}</p>
            </h1>
            <i onClick={() => this.setState(prevState => ({
              toggle: !prevState.toggle
            }))} className="fas fa-hamburger"></i>
          </div>
          <div className={`menu-list-${this.state.toggle ? true : false}`}>         
            <div onClick={() => this.redirect('/trucklist')} className="menu-item">
              <h2>Food Trucks</h2>
            </div>
            <div onClick={() => this.redirect('/eventlist')} className="menu-item">
              <h2>Events</h2>
            </div>
            <div onClick={() => this.redirect('/login')} className="menu-item">
              <h2>Login</h2>
            </div>
            <div onClick={() => this.logout1()} className="menu-item">
              <h2>Logout</h2>
            </div>
            <div onClick={() => this.redirect('/registeroptions')} className="menu-item">
              <h2>Register</h2>
            </div>
          </div>
        </div>
      )
    }
  }
}
function mapStateToProps(reduxState) {
  const { user } = reduxState
  return { user }
}

export default connect(mapStateToProps)(withRouter(Header));
