//initial state
const initialState = {
  loggedIn: false,
  truckId: null,
  truck: null,
  name: "",
  email: "",
  foodTruck: [],
  
  eventId: null,
  events: [],
  attend: [],
  attendId: null,
  follows: []
};

//Action constants
const SET_TRUCK = "SET_TRUCK";
const GET_FOOD_TRUCK = "GET_FOOD_TRUCK";
const GET_FOLLOWS = "GET_FOLLOWS";
const GET_EVENTS = "GET_EVENTS";
const GET_ATTEND = "GET_ATTEND";

// Action Builders
export function getFoodTruck(foodTruck) {
  return {
    type: GET_FOOD_TRUCK,
    payload: foodTruck
  };
}

export function getFollows(follows) {
  return {
    type: GET_FOLLOWS,
    payload: follows
  };
}

export function getEvents(events) {
  return {
    type: GET_EVENTS,
    payload: events
  };
}
export function getAttend(attend) {
  return {
    type: GET_ATTEND,
    payload: attend
  };
}

export function setTruck(truck) {
  return {
    type: SET_TRUCK,
    payload: truck
  };
}

//truckReducer
export default function truckReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_TRUCK:
      return { ...state, ...payload };
    case GET_FOOD_TRUCK:
      return { ...state, foodTruck: payload };
    case GET_EVENTS:
      return { ...state, events: payload };
    case GET_ATTEND:
      return { ...state, attend: payload };
    case GET_FOLLOWS:
      return { ...state, follows: payload };
    default:
      return state;
  }
}
