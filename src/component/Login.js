import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { setUser } from "../ducks/userReducer";
import { withRouter, Link } from "react-router-dom";
import swal from "sweetalert2";

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
  userlogin = async () => {
    const { email, password } = this.state;
    const res = await axios.post("/auth/userlogin", { email, password });
    if (res.data.user) {
      this.props.setUser(res.data.user);
    }
    //   console.log(res.data.user)
    swal.fire({ type: "success", text: res.data.message });
    this.props.history("/");
  };

  // This is truck login
  trucklogin = async () => {
    const { email, password } = this.state;
    axios.post("/auth/trucklogin", { email, password });
    if (res.data.user) {
      this.props.setUser(res.data.user);
    }
    // console.log(res.data.user)
    swal.fire({ type: "success", text: res.data.message });
    this.props.history("/");
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Email"
          onChange={e => this.handleChange(e, "email")}
        />
        <input
        type="password"
        placeholder="Password"
        onChange={e => this.handleChange(e, "password")}
      />
      <button onClick={this.userlogin}>User Login</button>
      <button onClick={this.trucklogin}>truck Login</button>
      </div>
    );
  }
}
export default connect(
  null,
  { setUser }
)(withRouter(Login));
