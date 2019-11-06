import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import moment from 'moment'

import { getAttend } from "../../../ducks/truckReducer";
import "./EventList.scss"

export class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      attend: []
    };
  }

  componentDidMount() {
    this.getEvents();
    this.getAttend();
  }

  getEvents = () => {
    axios.get("/api/events").then(res => {
      this.setState({
        events: res.data
      });
    });
  };

  getAttend = () => {
    // console.log("cows");
    axios.get("/api/attends").then(res => {
      // console.log(res.data);
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
    let { attend } = this.props;
    let newEvents = events.map(ele => {
      return (
        <div className="events" key={ele.event_id} ele={ele}>
          <div className="event-box">

            <h1>{ele.name}</h1>
            <h2>{ele.address}</h2>
            <h2>{moment(ele.date).format('ddd')}, {moment(ele.date).format('lll')}</h2>
            {/* <h2>{ele.time}</h2> */}
            <h3>Trucks Attending:</h3>
            <h4></h4>
            {attend.filter(el => {
              return el.event_id === ele.event_id;
            }).map(att => {
              return (
                <div onClick={()=>this.props.history.push(`/truckinfo/${att.truck_id}`)} className="attending" key={att.attend_id}>
                  {att.name}
                </div>
              )
            })}

          </div>
        </div>
      );
    });
    return <div className="event-list">
      <div className="title">
      <h2>List of Events</h2>
      </div>
      {newEvents}
    </div>;
  }
}
function mapStateToProps(store) {
  const { attendId, attend } = store.truckReducer;
  return { attendId, attend };
}

export default connect(
  mapStateToProps,
  { getAttend }
)(withRouter(EventList));
