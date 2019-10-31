import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./ducks/store";
// import configureStore from './configureStore'
<<<<<<< HEAD

// const store = configureStore()
=======


>>>>>>> 906c36c3d29c7a51d892bae86c0cc5fb6e9cf15c

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
