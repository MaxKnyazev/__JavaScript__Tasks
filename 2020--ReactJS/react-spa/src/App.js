import React, {Component} from 'react';
import classes from './App.module.css';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Home from './Home';
import Stuff from './Stuff';
import Contact from './Contact';

class App extends Component {
  render () { 
    const {header, content} = classes;
    return (
      <HashRouter>
        <div>
          <h1>SPA-приложение</h1>
          <ul className={header}>
            <li><NavLink exact to='/'>Главная</NavLink></li>
            <li><NavLink to='/stuff'>Продукты</NavLink></li>
            <li><NavLink to='/contact'>Контакты</NavLink></li>
          </ul>
          <div className={content}>
            <Route exact path='/' component={Home}/>
            <Route path='/stuff' component={Stuff}/>
            <Route path='/contact' component={Contact}/>
          </div>
        </div>
      </HashRouter>
    )
  };
}

export default App;