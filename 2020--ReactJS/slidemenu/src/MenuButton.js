import React, {Component} from "react";
import './MenuButton.css';
import {connect} from 'react-redux';

class MenuButton extends Component {
  render() {
    return (
      <button id="roundButton"
        onMouseDown={this.props.handleMouseDown}>
      </button>
    );
  }
}

let actionMouseDown = {type : 'ACTION_MOUSE_DOWN'};

function mapDispatchToProps(dispatch) {
  return {
    handleMouseDown : function(e) {
      console.log(e.target);
      return dispatch(actionMouseDown)
    }
  }
}

export default connect(null, mapDispatchToProps)(MenuButton);