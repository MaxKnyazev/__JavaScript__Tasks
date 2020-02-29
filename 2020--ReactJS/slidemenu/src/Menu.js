import React, {Component} from "react";
import "./Menu.css";
import {connect} from 'react-redux';

class Menu extends Component {
  render() {
    return (
      <div id="flyoutMenu"
            onMouseDown={this.props.handleMouseDown}
            className={this.props.visibility ? 'show' : 'hide'}>
        <h2><a href="/">Main</a></h2>
        <h2><a href="/">About</a></h2>
        <h2><a href="/">Contact</a></h2>
        <h2><a href="/">Search</a></h2>
      </div>
    );
  }
}

let actionMouseDown = {type : 'ACTION_MOUSE_DOWN'};

function mapStateToProps(state) {
  return {
    visibility : state.visible,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleMouseDown : function(e) {
      console.log(e.target)
      return dispatch(actionMouseDown)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);