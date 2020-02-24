import React from "react";
import {connect} from "react-redux";

function Resizer ({W, H, addW, addH}) {
  return (
    <div className = 'resizer'>
      <div 
        style = {{
                  width : `${W}px`, 
                  height : `${H}px`
                }} 
        className = 'resizer__square'
      ></div>

      <div className = 'resizer__buttons'>
        <button onClick = {addW} className = 'resizer__change'>+W</button>
        <button onClick = {addH} className = 'resizer__change'>+H</button>
      </div>
    </div>
  )
}

let addActionW = {type: "addW", value: 10};
let addActionH = {type: "addH", value: 10};

function mapStateToProps(state) {
  return {
    W: state.W,
    H: state.H,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addW: function() {
      return dispatch(addActionW);
    },

    addH: function() {
      return dispatch(addActionH);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Resizer);