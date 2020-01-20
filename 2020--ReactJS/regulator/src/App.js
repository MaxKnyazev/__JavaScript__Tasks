import React, {Component} from 'react';
import './App.css';
import Color from './Color';
import Counter from './Counter';

class App extends Component {
  constructor () {
    super();

    this.state = {
      count : 1,
    };
  }

  subCount = () => {
    if (this.state.count > 0) {
      this.setState({
        count : this.state.count - 1,
      })
    }
  }

  addCount = () => {
    if (this.state.count < 6) {
      this.setState({
        count : this.state.count + 1,
      })
    }
  }

  render () {
    return (
      <div className = 'app'>
        <Color count = {this.state.count}/>
        
        <Counter 
          subCount = {this.subCount} 
          addCount = {this.addCount} 
          count = {this.state.count}
        />
      </div>
    );
  };
}

export default App;