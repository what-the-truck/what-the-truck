import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getFoodTruck } from "../../../ducks/truckReducer";
import './TruckDash.scss'
import axios from "axios";

export class TruckDash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodtruck: [],
      myEvents: [],
      attend: []
    };
  }

  componentDidMount() {
    this.getOneTruck();
    // console.log(this.props.foodTruck);
    axios.get('/api/truckevents').then(res => {
      console.log(res.data)
      const events = res.data.filter((el) => {
        return el.truck_id === +this.props.truckId
      })
      this.setState({
        myEvents: [events]
      })
    })
  }

  

  getOneTruck = () => {
    let index = this.props.foodTruck.findIndex(
      el => el.truck_id === this.props.truckId
    );
    this.setState({
      foodtruck: this.props.foodTruck[index]
    });
  };


  

  handleChange = (e, key) => {
    this.setState({
      [key]: e.target.value
    });
  };

  render() {
    let {myEvents} = this.state
    let truckEvents = myEvents.map(el => {

    })
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
          {/* <h2>{myEvents}</h2> */}
        </div>
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
