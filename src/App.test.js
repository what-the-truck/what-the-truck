import React from "react";
import ReactDOM from "react-dom";
import {App} from "./App";
import { HashRouter } from "react-router-dom";
import { shallow } from "enzyme";


//eric test
it("renders without crashing", () => {
  shallow(
    <HashRouter>
      <App />{" "}
    </HashRouter>
  );
});
