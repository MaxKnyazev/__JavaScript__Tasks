import React from 'react';
import './ColorAddition.css';

const ColorAddition = ({color, changeInput, addColor}) => {
  return (
    <div className = ''>
      <input onChange = {changeInput} type = 'text' />
      <button onClick = {addColor} style = {{backgroundColor : color}}>Добавить цвет</button>
    </div>
  )
}

export default ColorAddition;