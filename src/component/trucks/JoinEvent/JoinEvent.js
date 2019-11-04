import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";
import { getAttend } from "../../../ducks/truckReducer";

export class JoinEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      attend: []
    };
  }

  componentDidMount() {
    this.getEvents();
  }

  getEvents = () => {
    axios.get("/api/events").then(res => {
      this.setState({
        events: res.data
      });
    });
  };

  joinEvent = (event_id) => {
      const {truckId} = this.props
      console.log(event_id,truckId,this.state,this.props)
      axios.post("/api/attend", { event_id, truckId }).then(res => {
        this.props.getAttend(res.data);
      });
    };
    

  handleChange = (e, key) => {
    this.setState({
      [key]: e.target.value
    });
  };
  render() {
    // console.log(this.props);
    let { events } = this.state;
    let joinEvent = events.map(el => {
      return (
        <div className="joinEvent" key={el.event_id} el={el}>
          <div>
            <h1>{el.name}</h1>
            <h2>{el.address}</h2>
            <h2>
              {moment(el.date).format("ddd")}, {moment(el.date).format("ll")}
            </h2>
            <h2>{el.time}</h2>
          </div>

          <button onClick={this.joinEvent(el.event_id)}>Join</button>
        </div>
      );
    });
    return <div>{joinEvent}</div>;
  }
}
function mapStateToProps(store) {
  const { attendId, attend,truckId } = store.truckReducer;
  return { attendId, attend,truckId };
}
export default connect(
  mapStateToProps,
  { getAttend }
)(withRouter(JoinEvent));
