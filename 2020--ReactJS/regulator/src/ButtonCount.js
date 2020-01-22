import React from 'react';
import './ButtonCount.css';

const ButtonCount = ({sign, clickHandler, color}) => {
  console.log(sign);
  return (
    <button style = {{backgroundColor : color}} onClick = {clickHandler} className = 'app__button'>
      <img className = 'app__img' src={sign} alt="sign" />
    </button>
  )
}

export default ButtonCount;