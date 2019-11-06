import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getFoodTruck } from "../../../ducks/truckReducer";
import './TruckDash.scss'
import axios from "axios";
import moment from 'moment'

export class TruckDash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodtruck: [],
      myEvents: [],
      attend: []
    };
  }

  async componentDidMount() {
    // await alert(this.props.truckId)
    await this.getOneTruck()
    await this.getEvents();
    // await console.log(this.state.foodtruck)
    // console.log(this.props.foodTruck);
    // await axios.get('/api/truckevents').then(res => {
    //   console.log(res.data)
    //   const events = res.data.filter((el) => {
    //     return el.truck_id === +this.props.truckId
    //   })
    //   this.setState({
    //     myEvents: events
    //   })
    // })
  }

   getEvents = async () => {
    await axios.get('/api/truckevents').then(res => {
      console.log(res.data)
      const events = res.data.filter((el) => {
        return el.truck_id === +this.props.truckId
      })
      this.setState({
        myEvents: events
      })
    })
  }
  

  getOneTruck = () => {
    axios.get("/api/trucks").then(res => {
      this.props.getFoodTruck(res.data);
      console.log(this.props, this.state)
      let index = res.data.findIndex(
        el => el.truck_id === this.props.truckId
      );
  
      // console.log("index", index)
  
      this.setState({
        foodtruck: res.data[index]
      });
    });
  };

  deleteEvent = async (id) => {
    console.log(this.state)
    await axios.delete(`/api/event/${id}`)
    // .then(this.props.location)
    await this.getEvents()
  }
  

  handleChange = (e, key) => {
    this.setState({
      [key]: e.target.value
    });
  };

  render() {    
    return (
      <div className="truck-dash-display">
        {/* <div className="top-bar">
          <h1>{this.state.foodtruck.name}</h1>
        </div> */}
        <img src={this.state.foodtruck.img} alt='Picture of food truck' />
        <div className="info-box">
          <div className="info-left">
            <h2>{this.state.foodtruck.food_type}</h2>
            <h3>{this.state.foodtruck.description}</h3>
          </div>
          <div className="info-right">
            <h2>Contact</h2>
            <h3>{this.state.foodtruck.phone}</h3>
            <h3>{this.state.foodtruck.email}</h3>
          </div>
        </div>
        <div className="top-bar">
          <h1>My Events</h1>
        </div>
          {this.state.myEvents.map(el => {
            return (
              <div className='event-truck-box'>
                <h2>{el.name}</h2>
                <h4>{el.address}</h4>
                <h4>{moment(el.date).format('ddd')}, {moment(el.date).format('lll')}</h4>
                <div className="edit-delete-buttons">
                  {/* <button>Edit</button> */}
                  <button onClick={() =>this.deleteEvent(el.event_id)}>Delete</button>
                </div>
              </div>
            )
          })}
      </div>
    );
  }
}
function mapStateToProps(store) {
  const { foodTruck, truckId } = store.truckReducer;
  return { foodTruck, truckId };
}

export default connect(
  mapStateToProps,
  { getFoodTruck }
)(withRouter(TruckDash));
