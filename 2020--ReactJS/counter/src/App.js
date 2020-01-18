import React from 'react';
import './App.css';
import Button from './Button.js';

class App extends React.Component {
  state = {
    count : 0
  }

  addCounter = () => {
    this.setState((state, props) => ({
      count: state.count + 1
    }));
  }

  subCounter = () => {
    this.setState((state, props) => ({
      count: state.count - 1
    }));
  }

  render () {
    return (
      <>
        <Button changeCounter = {this.addCounter} sign = {'+'} />
        <span className = 'counter'>{this.state.count}</span>
        <Button changeCounter = {this.subCounter} sign = {'-'} />
      </>
    )
  };
}

export default App;