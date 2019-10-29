//initialState
const initialState = {
  loggedIn: false,
  name: "",
  phone: "",
  email: "",
  userId: null,
  user: null
};

//Action constants
const SET_USER = "SET_USER";
// const LOGOUT_USER = 'LOGOUT_USER'

//Action Builders
export function setUser(user) {
  return {
    type: SET_USER,
    payload: user
  };
}
// export function logoutUser(){
//     return {
//         type:LOGOUT_USER
//     }
// }

//userReducer

export default function userReducer(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    // case LOGOUT_USER:
    //     return initialState;
    case SET_USER:
      return { ...state, ...payload };
    default:
      return state;
  }
}
