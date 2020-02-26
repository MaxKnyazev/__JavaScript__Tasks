import React from 'react';
import {connect} from "react-redux";

function SettingButtons ({first, second, addFirst, addSecond}) {
  return (
    <div className = 'setting__buttons'>
      <button className = 'btn btn-primary' onClick = {addFirst}>{first}</button> * <button className = 'btn btn-primary' onClick = {addSecond}>{second}</button>
    </div>
  );
}

let addFirstValue = {type: "ADD_FIRST"};
let addSecondValue = {type: "ADD_SECOND"};

function mapStateToProps(state) {
  return {
    first: state.first,
    second: state.second,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addFirst: function() {
      return dispatch(addFirstValue);
    },
    addSecond: function() {
      return dispatch(addSecondValue);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingButtons);