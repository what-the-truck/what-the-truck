import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getFoodTruck } from "../../../ducks/truckReducer";

export class TruckDash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodtruck: [],
      events: [],
      attend: []
    };
  }

  componentDidMount() {
    this.getOneTruck();
    // console.log(this.props.foodTruck);
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
    return (
      <div>
      <h1>{this.state.foodtruck.name}</h1>
      <h1>{this.state.foodtruck.phone}</h1>
      <h1>{this.state.foodtruck.food_type}</h1>
      <h1>{this.state.foodtruck.description}</h1>
      <h1>{this.state.foodtruck.email}</h1>
      <img src={this.state.foodtruck.img} alt='' />
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
