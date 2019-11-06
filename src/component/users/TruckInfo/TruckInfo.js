import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Twilio from '../../../Twilio'
import { getFoodTruck } from "../../../ducks/truckReducer";
import './TruckInfo.scss'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import moment from 'moment'
import swal from 'sweetalert2'


export class TruckInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodTruck: [],
      truckEvents: [],
      key: '',
      button: 'Follow +',
      following: '',
      followId: 0,
    };
    this.getTruckEvents = this.getTruckEvents.bind(this)
  }

  componentDidMount() {
    this.getOneTruck();
    this.getTruckEvents();
    this.checkFollow()
    axios.get('/api/key').then(res => {
      // console.log(res.data)
      this.setState({ key: res.data[0].geo })
    })
  }

checkFollow=()=> {
  // console.log('checking follow')
  if(this.props.userId !== null){
    axios.get(`/api/follow/?userId=${this.props.userId}&truckId=${this.props.match.params.id}`).then(res => {
      // console.log(res.data)
      if(res.data[0] !== undefined){
        this.setState({
          button: 'Unfollow',
          followId: res.data[0].follow_id
        })
      } 
    })
  }
  else{
    
  }
}

  async getTruckEvents() {
    await axios.get('/api/truckevents').then(res => {
      // console.log(res.data)
      const events = res.data.filter((el) => {
        // console.log(`${el.truck_id} is the same as ${this.props.match.params.id}?`)
        return el.truck_id === +this.props.match.params.id
      }
      )
      // console.log(events)
      this.setState({
        truckEvents: events
      })
    }
    )
    // await console.log(this.state.truckEvents)
  }

  getOneTruck = () => {
    const { id: truck_id } = this.props.match.params;
    // console.log(this.props.match.params.id);
    axios.get(`/api/truck/${truck_id}`).then(res => {
      //   this.props.getFoodTruck(res.data);
      this.setState({
        foodTruck: res.data
      })
      // console.log(res.data);
    });
  };

  handleChange = (e, key) => {
    this.setState({
      [key]: e.target.value
    });
  };
  async followButton(){
    if(this.state.button === 'Follow +'){
      swal.fire({
        title: "Sweet!",
        text: "You are now following this truck", 
        imageUrl: this.state.foodTruck[0].img, 
        imageWidth: 400,
        imageHeight:200,
        timer: 2000})
      // alert('You are now following')
      axios.post(`api/follow/${this.props.match.params.id}`, {userid:this.props.userId} ).then(this.checkFollow()
      )
    }
    else{
      swal.fire({text:'No longer following', type: 'success', timer: 2000})
      // alert(this.state.followId)
      await axios.delete(`api/follow/${this.state.followId}`).then(this.checkFollow())
      // console.log(this.state)
    }
    this.setState({
      button: 'Follow +'
    })
  }

  render() { 
    const magical = this.state.key
    const mapStyles = {
      width: '100%',
      height: '50%',
    };
    //  console.log(this.props)
    const { foodTruck } = this.state;
    let oneTruck = foodTruck.map(ele => {
      return (
        <div className="truck-info-display" key={ele.truck_id} ele={ele}>
          <div>
            <div className="top-bar">
              
              <button onClick={()=>this.followButton()} className="follow">{this.state.button}</button>

              <h1>{ele.name}</h1>
            </div>
            <img src={ele.img} alt="" />
            <div className="info-box">
              <div className="info-left">
                <h2>{ele.food_type}</h2>
                <h4>{ele.description}</h4>
              </div>
              <div className="info-right">
                <h2>Contact </h2>
                <h4>{ele.phone}</h4>
                <h4>{ele.email}</h4>
                <h3>
                  <a href={`https://${ele.website}`} target='_blank' rel='noopener noreferrer'>
                    {ele.website}
                  </a>
                </h3>
              </div>
            </div>
          </div>
          <div className="events">
            <h1>Upcoming Events</h1>

            {this.state.truckEvents.map(el => {
              return (
                <div className="event-truck-box">
                  <h2>
                    {el.name}
                  </h2>
                  <h4>
                    {el.address}
                  </h4>
                  <h3>{moment(el.date).format('ddd')}, {moment(el.date).format('ll')}</h3>
                </div>
              )
            })}
          </div>
          <div>
            <Map
              google={this.props.google}
              zoom={7.3}
              style={mapStyles}
              initialCenter={{ lat: 40.391617, lng: -111.850769 }}
              >
                {this.state.truckEvents.map(location => (
                  <Marker position={{ lat: location.latitude, lng: location.longitude}} /> 
                ))}
           </Map>
          </div>
        </div>
      );
    });
    return <div className="truck-dash">{oneTruck}</div>;
  }
}


function mapStateToProps(store) {
  const { foodTruck, truck_id } = store.truckReducer;
  const {userId} = store.userReducer
  return { foodTruck, truck_id, userId };
}
const WrappedContainer = GoogleApiWrapper({
  apiKey: 'AIzaSyCdoLXSZawJqJ1T_ELmUQlm2cTRiVYoLpM'
})(TruckInfo)

export default connect(mapStateToProps, { getFoodTruck })(withRouter(WrappedContainer));
