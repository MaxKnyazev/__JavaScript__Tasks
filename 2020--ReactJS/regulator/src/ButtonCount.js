import React from 'react';
import './ButtonCount.css';

const ButtonCount = ({sign, clickHandler}) => {
  return (
    <button onClick = {clickHandler} className = 'app__button'>{sign}</button>
  )
}

export default ButtonCount;