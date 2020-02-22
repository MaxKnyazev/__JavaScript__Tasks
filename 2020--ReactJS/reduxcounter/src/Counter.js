import React, {Component} from "react";
import {connect} from "react-redux";

class Counter extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <button className="buttons" onClick={this.props.decreaseCount}>-</button>
        <span>{this.props.countValue}</span>
        <button className="buttons" onClick={this.props.increaseCount}>+</button>
      </div>
    );
  }
}

let increaseAction = {type: "increase"};
let decreaseAction = {type: "decrease"};

function mapStateToProps(state) {
  return {
    countValue: state.count,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCount: function() {
      return dispatch(increaseAction);
    },
    decreaseCount: function() {
      return dispatch(decreaseAction);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);