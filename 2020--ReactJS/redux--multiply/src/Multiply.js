import React from 'react';
import {connect} from "react-redux";
import SettingButtons from './SettingButtons';

function Multiply ({first, second}) {
  return (
    <div className = 'container'>
      <SettingButtons />
      <span> = {first * second}</span>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    first: state.first,
    second: state.second,
  };
}

export default connect(mapStateToProps, null)(Multiply);