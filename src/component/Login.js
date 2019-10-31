import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { setUser } from "../ducks/userReducer";
import { setTruck } from "../ducks/truckReducer";
import { withRouter, Link } from "react-router-dom";
import swal from "sweetalert2";
import "./Login.scss";

export class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = (e, key) => {
    this.setState({
      [key]: e.target.value
    });
  };

  // This is user login
  userLogin = async () => {
    const { email, password } = this.state;
    const res = await axios.post("/auth/userlogin", { email, password });
    if (res.data.user) {
      this.props.setUser(res.data.user);
      this.props.history.push("/");
    } else {
      swal.fire({ type: "success", text: res.data.message });
    }
  };

  //   // This is truck login
  truckLogin = async () => {
    const { email, password } = this.state;
    console.log("hit2");
    const res = await axios.post("/auth/trucklogin", { email, password });
    if (res.data.truck) {
      this.props.setTruck(res.data.truck);
      this.props.history.push("/");
    } else {
      swal.fire({ type: "success", text: res.data.message });
    }

    // console.log(res.data.user)
    // swal.fire({ type: "success", text: res.data.message });
  };

  render() {
    return (
      <div className="login">
        <div className="login-container">
          <input
            type="text"
            placeholder="Email"
            onChange={e => this.handleChange(e, "email")}
            name='email'
            id='Email'
          />
          <input
            type="password"
            placeholder="Password"
            onChange={e => this.handleChange(e, "password")}
          />
          <button className="button3" onClick={this.userLogin}>
            User Login
          </button>
          <button className="button3" onClick={this.truckLogin}>
            Truck Login
          </button>
        </div>
      </div>
    );
  }
}
export default connect(
  null,
  { setUser, setTruck }
)(withRouter(Login));
