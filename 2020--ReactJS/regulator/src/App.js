import React, {Component} from 'react';
import './App.css';
import Color from './Color';
import Counter from './Counter';
import ColorAddition from './ColorAddition';

class App extends Component {
  constructor () {
    super();

    this.arrColors = ['orange', 'red', 'green', 'blue', 'yellow', 'deepskyblue', 'purple'];
    this.inputValue = '';

    this.state = {
      count : 0,
      color : this.arrColors[0],
    };
  }

  // setState с коллбеком :
  // this.setState((state, props) => {
  //   return {counter: state.counter + props.step};
  // });
  
  subCount = () => {
    if (this.state.count > 0) {
      this.setState((state) => {
        console.log('state.count : ' + state.count);
        return {
          count : state.count - 1,
          color : this.arrColors[state.count - 1],
        };
      });
    }
  }

  addCount = () => {
    if (this.state.count < this.arrColors.length - 1) {
      this.setState((state) => {
        console.log('state.count : ' + state.count);
        return {
          count : state.count + 1,
          color : this.arrColors[state.count + 1],
        };
      });
    }
  }

  changeInput = (event) => {
    this.inputValue = event.target.value;
    console.log(this.inputValue);
  }

  addColor = () => {
    if (this.inputValue) {
      this.arrColors.push(this.inputValue);
      this.inputValue = '';
    }
    console.log(this.arrColors);
  }

  // color = {this.state.color} count = {this.state.count}
  render () {
    return (
      <div className = 'app'>

        <ColorAddition addColor = {this.addColor} changeInput = {this.changeInput} color = {this.state.color}/>

        <section className = 'app__section'>
          <Color 
            color = {this.state.color} 
            count = {this.state.count}
          />
          
          <Counter 
            subCount = {this.subCount} 
            addCount = {this.addCount} 
            count = {this.state.count}
            color = {this.state.color}
          />
        </section>
      </div>
    );
  };
}

export default App;