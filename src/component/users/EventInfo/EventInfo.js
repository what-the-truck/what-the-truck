import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getEvents, getFoodTruck } from "../../../ducks/truckReducer";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import moment from "moment";

class EventInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodTruck: [],
      truckEvents: [],
      event: [],
      key: ""
    };
    this.getTruckEvents = this.getTruckEvents.bind(this);
  }

  componentDidMount() {
    this.getTrucks();
    this.getOneEvent();
    axios.get("/api/events").then(res => {
      this.props.getEvents(res.data);
    });
  }

  async getTruckEvents() {
    await axios.get("/api/truckevents").then(res => {
      const events = res.data.filter(el => {
        return el.event_id === +this.props.match.params.id;
      });
      this.setState({
        truckEvents: events
      });
    });
    await console.log(this.state.truckEvents);
  }

  getTrucks = () => {
    axios.get("/api/trucks").then(res => {
      console.log("hit");
      console.log(res.data);
      this.props.getFoodTruck(res.data);
    });
  };

  //make endpoint and query call
  getOneEvent = () => {
    const { id: event_id } = this.props.match.params;
    axios.get(`/api/event/${event_id}`).then(res => {
      this.setState({
        events: res.data
      });
    });
  };

  render() {
let {foodTruck} = this.props
let {truckEvents} = this.state
    let truckEvent = truckEvents.map(trucks => {
      return (
        foodTruck.filter(el => {
            return (
                el.truck_id === trucks.truck_id
            )
        })
      );
    });
    const mapStyles = {
      width: "100%",
      height: "50%"
    };
    const { event } = this.state;
    let oneEvent = event.map(event => {
      return (
        <div className="oneEvent" key={event.event_id} event={event}>
          <h1>{event.name}</h1>
          <h1>{event.address}</h1>
        </div>
      );
    });
    return (
      <div>
        {oneEvent}
        {truckEvent}
        <Map
          google={this.props.google}
          zoom={6}
          style={mapStyles}
          initialCenter={{ lat: 39.5272169, lng: -112.2104697 }}
        >
          {this.state.truckEvents.map(location => (
            <Marker
              position={{ lat: location.latitude, lng: location.longitude }}
            />
          ))}
        </Map>
      </div>
    );
  }
}
function mapStateToProps(store) {
  const { eventId, events, foodTruck, foodTruckId } = store.truckReducer;
  return { eventId, events, foodTruck, foodTruckId };
}

const WrappedContainer = GoogleApiWrapper({
  apiKey: "AIzaSyCdoLXSZawJqJ1T_ELmUQlm2cTRiVYoLpM"
})(EventInfo);

export default connect(
  mapStateToProps,
  { getEvents, getFoodTruck }
)(withRouter(WrappedContainer));
