import React, { Component } from "react";
import "./App.css";
import CustRoutes from "./routes/CustRoutes";
import TruckRoutes from "./routes/TruckRoutes";
import Header from "./component/Header";
import axios from "axios";
import { connect } from "react-redux";
import { getFoodTruck, setTruck } from "./ducks/truckReducer";
import { setUser } from "./ducks/userReducer";
import { withRouter } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    axios.get("/auth/check").then(res => {
      console.log(res.data);
      if (res.data === "none") {
        this.props.setUser(null);
      }
      if (res.data.userId) {
        this.props.setUser(res.data);
      }
      if (res.data.truck) {
        this.props.setTruck(res.data.truck);
      }
    });
    axios.get("/api/trucks").then(res => {
      this.props.getFoodTruck(res.data);
    });
  }

  render() {
    {
      if (this.props.truckId !== null) {
        return (
          <div className="App">
            <Header />
            {TruckRoutes}
          </div>
        );
      } else {
        return (
          <div className="App">
            <Header />
            {CustRoutes}
          </div>
        );
      }
    }
  }
}

function mapStateToProps(reduxState) {
  const { setTruck, setUser, foodTruck } = reduxState;
  return { setTruck, setUser, foodTruck };
}

export default connect(
  mapStateToProps,
  { getFoodTruck, setTruck, setUser }
)(withRouter(App));
