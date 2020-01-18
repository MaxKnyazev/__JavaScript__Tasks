import React from 'react';
import './Button.css';

function Button ({sign, changeCounter}) {
  return (
    <button 
      className = 'button' 
      onClick = {changeCounter}
    >{sign}</button>
  );
}

export default Button;