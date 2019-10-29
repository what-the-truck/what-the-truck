import { createStore, combineReducers, applyMiddleware } from "redux";
import promiseMiddleware from 'redux-promise-middleware'
import truckReducer from "./truckReducer";
import userReducer from "./userReducer";


//need to install redux-promise-middleware 
const rootReducer = combineReducers({
   truckReducer,
   userReducer
});
export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
 
