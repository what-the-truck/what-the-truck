import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getFoodTruck } from "../../../ducks/truckReducer";

export class TruckList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodTruck: []
    };
  }

  componentDidMount() {
    this.getTrucks();
  }

  getTrucks = () => {
    axios.get("/api/trucks").then(res => {
      console.log("hit");
      console.log(res.data);
      this.props.getFoodTruck(res.data);
    });
  };

  handleChange = (e, key) => {
    this.setState({
      [key]: e.target.value
    });
  };

  render() {
    console.log(this.props);
    const { foodTruck } = this.props;
    let allTrucks = foodTruck.map(ele => {
      return (
        <div className="Trucks" key={ele.truck_id} ele={ele}>
          <div>
            <h1>Name: {ele.name}</h1>
            <h1>Phone: {ele.phone}</h1>
            <h1>FoodType:{ele.food_type}</h1>
            <h1>Description: {ele.description}</h1>
            <h1>Email:{ele.email}</h1>
            <img src={ele.img} alt="" />
          </div>
        </div>
      );
    });
    return <div>{allTrucks}</div>;
  }
}

function mapStateToProps(store) {
  const { foodTruck, foodTruckId } = store.truckReducer;
  return { foodTruck, foodTruckId };
}

export default connect(
  mapStateToProps,
  { getFoodTruck }
)(withRouter(TruckList));
