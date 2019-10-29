//initial state
const initialState = {
  foodTruck: [],
  events: [],
  attend: [],
  follows: []
};

//Action constants
const GET_FOOD_TRUCK = 'GET_FOOD_TRUCK';
const GET_FOLLOWS ='GET_FOLLOWS';
const GET_EVENTS = 'GET_EVENTS';
const GET_ATTEND = 'GET_ATTEND';

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

//truckReducer
export default function truckReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_FOOD_TRUCK:
      const { foodTruck } = payload;
      return { ...state, foodTruck };
    case GET_EVENTS:
      const { events } = payload;
      return { ...state, events };
    case GET_ATTEND:
      const { attend } = payload;
      return { ...state, attend };
    case GET_FOLLOWS:
      const { follows } = payload;
      return { ...state, follows };
    default:
      return state;
  }
}
