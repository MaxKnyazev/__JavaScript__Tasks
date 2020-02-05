import React, {PureComponent} from 'react';
import './App.css';
import ColorSetting from './ColorSetting';
import {Route, NavLink} from 'react-router-dom';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { 
      h : 280,
      s : 100,
      l : 50,
    }
  }

  static step = 10;

  addH = () => {
    this.setState(prevState => prevState.h === 350 ? { h : 0 } : { h : prevState.h + App.step });
  }

  subH = () => {
    this.setState(prevState => prevState.h === 0 ? { h : 350 } : { h : prevState.h - App.step });  
  }

  addS = () => {
    if (this.state.s < 100) {
      this.setState({
        s : this.state.s + App.step,
      }); 
    }  
  }

  subS = () => {
    if (this.state.s > 0) {
      this.setState({
        s : this.state.s - App.step,
      });
    }  
  }

  addL = () => {
    if (this.state.l < 100) {
      this.setState({
        l : this.state.l + App.step,
      }); 
    }    
  }

  subL = () => {
    if (this.state.l > 0) {
      this.setState({
        l : this.state.l - App.step,
      });
    }    
  }
// title = 'H' value = {h} addValue = {this.addH} subValue = {this.subH}
  render() { 
    const {h, s, l} = this.state;

    const argsH = {
      title : 'H',
      value : h, 
      addValue : this.addH,
      subValue : this.subH
    }

    const argsS = {
      title : 'S',
      value : s, 
      addValue : this.addS,
      subValue : this.subS
    }

    const argsL = {
      title : 'L',
      value : l, 
      addValue : this.addL,
      subValue : this.subL
    }

    return ( 
      <div className = 'App'>
        <div className = 'App__square' style = {{ backgroundColor : `hsl(${h}, ${s}%, ${l}%)` }}></div>
        <nav>
          <ul className = 'App__list'>
            <li><NavLink className = 'App__link' to = '/h'>H</NavLink></li>
            <li><NavLink className = 'App__link' to = '/s'>S</NavLink></li>
            <li><NavLink className = 'App__link' to = '/l'>L</NavLink></li>
          </ul>
        </nav>
        <Route path = '/h' render = {() => <ColorSetting {...argsH}/>} />
        <Route path = '/s' render = {() => <ColorSetting {...argsS} />} />
        <Route path = '/l' render = {() => <ColorSetting {...argsL} />} />
      </div>
     );
  }
}
 
export default App;