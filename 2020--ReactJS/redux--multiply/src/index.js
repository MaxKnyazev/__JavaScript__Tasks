import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducer";
import App from "./App";
import "./index.css";

let destination = document.querySelector("#root");
       
let store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  destination
);