import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter} from "react-router-dom";
import { getFoodTruck } from "../../../ducks/truckReducer";
import "./TruckList.scss";
export class TruckList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodTruck: [],
      filteredtruck: [],
      filteredId: 0,
      userInput: ""
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

  getTruck = userInput => {
    // let {filteredTruck} = this.state
    let filteredTruck = this.state.foodTruck.filter(ele => {
      return ele.name.toLowerCase().includes(userInput.toLowerCase());
    });
    if (filteredTruck[0]) {
      this.setState({
        filteredTruck: filteredTruck[0].name,
        filteredTruck: filteredTruck[0].description,
        filteredTruck: filteredTruck[0].food_type,
        filteredTruck: filteredTruck[0].img
      });
    } else {
      alert("Truck Does Not Exist");
    }
  };

  handleChange = (e, key) => {
    this.setState({
      [key]: e.target.value
    });
  };

  render() {
    // console.log(this.props);
    const { foodTruck } = this.props;
    let allTrucks = foodTruck.map(ele => {
      return (
        <div className="Trucks" key={ele.truck_id} ele={ele}>
          
          <div className="left-list">
            <img src={ele.img} alt="" />
          </div>
          <div className="right-list">
            <h1
              onClick={() =>
                this.props.history.push(`/truckinfo/${ele.truck_id}`)
              }
            >
              {ele.name}
            </h1>
            <h2>{ele.food_type}</h2>
            <p>{ele.description}</p>
            {/* <h1>Phone: {ele.phone}</h1> */}
            {/* <h1>Email:{ele.email}</h1> */}
          </div>
        </div>
      );
    });
    return <div className="Truck-List">{allTrucks}</div>;
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
