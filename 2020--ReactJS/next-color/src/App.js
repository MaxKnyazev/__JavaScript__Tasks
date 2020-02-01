import React, {Component} from 'react';
import classes from './App.module.css';
import ButtonNext from './ButtonNext';
import ViewColor from './ViewColor'

class App extends Component {
  state = {
    colorDeg : 0,
  }

  changeColor = () => {
    this.setState({
      colorDeg : this.state.colorDeg + 20,
    })
  }
  
  render () {
    return (
      <div className = {classes.App}>
        <ViewColor colorDeg = {this.state.colorDeg} />
        <ButtonNext colorDeg = {this.state.colorDeg} changeColor = {this.changeColor}/>
      </div>
    )
  }
}

export default App;