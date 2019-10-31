import React, { Component } from "react";
import "./App.scss";
import CustRoutes from "./routes/CustRoutes";
import TruckRoutes from "./routes/TruckRoutes";
import Header from "./component/Header";
import axios from "axios";
import { connect } from "react-redux";
import { getFoodTruck, setTruck } from "./ducks/truckReducer";
import { setUser } from "./ducks/userReducer";
import { withRouter } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this)
  }
  componentDidMount() {
    axios.get("/auth/check").then(res => {
      // console.log(res.data);
      if (res.data === "none") {
        this.props.setUser(null);
        this.props.setTruck({truckId: null, name: null, email: null})
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
  async componentDidUpdate(prevProps){
    if(prevProps.name !== this.props.name || prevProps.userId !== this.props.userId){
      // alert('it changed!')
    }
  }
  async logout(){
    console.log(this.state)
    await axios.delete('/auth/logout')
    console.log(this.state)
    await this.checkUser()
    
  }

  async checkUser () {
   await axios.get("/auth/check").then(res => {
      // console.log(res.data);
      if (res.data === "none") {
        this.props.setUser({userId:null, email:null});
        this.props.setTruck({truckId: null, name: null, email: null})
      }
      if (res.data.userId) {
        this.props.setUser(res.data);
      }
      if (res.data.truck) {
        this.props.setTruck(res.data.truck);
      }
    });
   await this.props.history.push('/')
  }

  render() {
    // console.log(this.props)
    
      if (this.props.truckId !== null) {
        return (
          <div className="App">
            <Header
            truckId = {this.props.truckId}
            name = {this.props.name}
            logout = {this.logout} />
            {TruckRoutes}
          </div>
        );
      } else {
        return (
          <div className="App">
            <Header
             logout = {this.logout}  />
            {CustRoutes}
          </div>
        );
      }
    }
  }


function mapStateToProps(store) {
  const { truckId, foodTruck, name } = store.truckReducer;
  const {userId} = store.userReducer
  return { truckId, userId, foodTruck, name };
}

export default connect(
  mapStateToProps,
  { getFoodTruck, setTruck, setUser }
)(withRouter(App));
