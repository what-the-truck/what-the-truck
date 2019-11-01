import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getFoodTruck } from "../../../ducks/truckReducer";

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
            foodTruck:res.data
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
        <div className="trucks" key={ele.truck_id} ele={ele}>
          <div>
          
            <h1>{ele.name}</h1>
            <h1>{ele.phone}</h1>
            <h1>{ele.food_type}</h1>
            <h1>{ele.description}</h1>
            <h1>{ele.email}</h1>
            <img src={ele.img} alt="" />
          </div>
        </div>
      );
    });
    return <div>{oneTruck}</div>;
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
