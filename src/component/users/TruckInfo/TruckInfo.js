import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import Twilio from '../../../Twilio'
import { getFoodTruck } from "../../../ducks/truckReducer";
import './TruckInfo.scss'

export class TruckInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodTruck: []
    };
  }

  componentDidMount() {
    this.getOneTruck();
  }

  getOneTruck = () => {
    const { id: truck_id } = this.props.match.params;
    console.log(this.props.match.params.id);
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

  render() {
    //  console.log(this.props)
    const { foodTruck } = this.state;
    let oneTruck = foodTruck.map(ele => {
      return (
        <div className="truck-info-display" key={ele.truck_id} ele={ele}>
          <div>
            <div className="top-bar">
              <button className="follow">Follow +</button>
              
              <h1>{ele.name}</h1>
            </div>
            <img src={ele.img} alt="" />
            <div className="info-box">
              <div className="info-left">
                <h2>{ele.food_type}</h2>
                <h3>{ele.description}</h3>
              </div>
              <div className="info-right">
                <h2>Contact </h2>
                <h3>{ele.phone}</h3>
                <h3>{ele.email}</h3>
              </div>
            </div>
          </div>
          <div className="top-bar">
            <h1> EVENT LIST</h1>
            </div>
        </div>
      );
    });
    return <div className="truck-dash">{oneTruck}</div>;
  }
}


function mapStateToProps(store) {
  const { foodTruck, truck_id } = store.truckReducer;
  return { foodTruck, truck_id };
}

export default connect(
  mapStateToProps,
  { getFoodTruck }
)(withRouter(TruckInfo));
