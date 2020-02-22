import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducer";
import App from "./App";
import "./index.css";

let destination = document.querySelector("#root");
// Store:
let store = createStore(reducer);

// store.subscribe(() => console.log(store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  destination
);