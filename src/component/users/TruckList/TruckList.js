import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter} from "react-router-dom";
import { getFoodTruck } from "../../../ducks/truckReducer";
import "./TruckList.scss";
import swal from "sweetalert2"
import Fade from 'react-reveal/Fade'



export class TruckList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredTruck: [],
      filteredId: 0,
      userInput: "",
      filtered: [],
    };
  }

  componentDidMount() {
    this.getTrucks();
    this.getTruck();
  }

  getTrucks = () => {
    axios.get("/api/trucks").then(res => {
      // console.log("hit");
      // console.log(res.data);
      // console.log(this.props.getFoodTruck)
      this.props.getFoodTruck(res.data);
    });
  };

  getTruck = () => {
    let {getFoodTruck} = this.props
    // console.log(this.props.getFoodTruck)
    let filteredTruck = this.props.foodTruck.filter(ele => {
      return ele.food_type.toLowerCase().includes(this.state.userInput.toLowerCase()) || ele.name.toLowerCase().includes(this.state.userInput.toLowerCase()) || ele.description.toLowerCase().includes(this.state.userInput.toLowerCase());
    });
    if (filteredTruck[0]) {
      this.setState({
        filtered: filteredTruck
      })
    } else {
      swal.fire({text: "No trucks found with that description", type: 'error'});
    }
  };

  handleChange = (e, key) => {
    this.setState({
      [key]: e.target.value
    });
  };

  render() {
    // console.log(this.state.foodTruck);
    // console.log(this.props.foodTruck)
    const { foodTruck } = this.props;
    let allTrucks = this.state.filtered.map(ele => {
      return (
      
            <Fade left>
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
        </Fade>
      );
    });
    return (
    <div className="Truck-List">
      <div className="search">
        <input 
          type="text" 
          onChange={(e) => {this.setState({userInput:e.target.value})}}/>
        <button 
          className="search-bar-button" 
          onClick={this.getTruck}>SEARCH</button>

      </div>
    {allTrucks}
    
    </div>
    )}
}

function mapStateToProps(store) {
  const { foodTruck, foodTruckId } = store.truckReducer;
  return { foodTruck, foodTruckId };
}

export default connect(
  mapStateToProps,
  { getFoodTruck }
)(withRouter(TruckList));
