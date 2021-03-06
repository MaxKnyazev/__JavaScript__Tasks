import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './reducer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

let root = document.getElementById('root');

let store = createStore(reducer);

ReactDOM.render(
  <Provider store = {store}>
    <App /> 
  </Provider>,
  root
);