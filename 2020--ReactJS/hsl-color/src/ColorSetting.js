import React from 'react';
import './ColorSetting.css';

const ColorSetting = (props) => {
  return ( 
    <div className = 'Setting__wrapper'>
      <h1>{props.title}</h1>

      <div className = 'Setting__buttons__wrapper'>
        <button className = 'Setting__button' onClick = {props.subValue}>-</button>
        <span className = 'Setting__value'>{props.value}</span>
        <button className = 'Setting__button' onClick = {props.addValue}>+</button>
      </div>
    </div>
   );
}
 
export default ColorSetting;