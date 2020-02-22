import React from "react";
import {connect} from "react-redux";

function View (props) {
  return (
    <div style = {{backgroundColor : `rgb(${props.R}, ${props.G}, ${props.B})`}} className = 'view'>
      <button onClick = {props.addColorR}>{props.R}</button>
      <button onClick = {props.addColorG}>{props.G}</button>
      <button onClick = {props.addColorB}>{props.B}</button>
    </div>
  )
}

let addActionR = {type: "addR", value: 15};
let addActionG = {type: "addG", value: 15};
let addActionB = {type: "addB", value: 15};

function mapStateToProps(state) {
  return {
    R: state.R,
    G: state.G,
    B: state.B,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addColorR: function() {
      return dispatch(addActionR);
    },

    addColorG: function() {
      return dispatch(addActionG);
    },

    addColorB: function() {
      return dispatch(addActionB);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(View);