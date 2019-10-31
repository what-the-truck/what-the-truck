import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { getAttend } from "../../../ducks/truckReducer";

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
          <div>
            <h1>Name: {ele.name}</h1>
            <h1>Address: {ele.address}</h1>
            <h1>Date: {ele.date}</h1>
            <h1>Time: {ele.time}</h1>
            <p></p>
            <h1><u>Attending:</u></h1>
            {attend.filter(el => {
              return el.event_id === ele.event_id;
            }).map(att => {
                return (
                    <div>
                    <p><b>
                    *-{att.name}-*
                    </b> 
                    </p>
                    </div>
                )
            })}
            
          </div>
        </div>
      );
    });
    return <div>{newEvents}</div>;
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
