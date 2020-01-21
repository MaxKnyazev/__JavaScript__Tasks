import React from 'react';
import './ButtonCount.css';

const ButtonCount = ({sign, clickHandler}) => {
  console.log(sign);
  return (
    <button onClick = {clickHandler} className = 'app__button'>
      <img className = 'app__img' src={sign} alt="sign" />
    </button>
  )
}

export default ButtonCount;