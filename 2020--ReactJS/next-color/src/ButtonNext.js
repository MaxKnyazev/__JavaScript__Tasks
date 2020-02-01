import React from 'react';
import classes from './ButtonNext.module.css';

export default ({colorDeg, changeColor}) => {
  const ButtonNextStyle = {
    border : `4px solid hsl(${colorDeg}, 100%, 50%)`,
    backgroundColor : '#fff',
    color : `hsl(${colorDeg}, 100%, 50%)`,
  }
  return (
    <button 
      style = {ButtonNextStyle} 
      className = {classes.ButtonNext} 
      onClick = {changeColor}
    >Next</button>
  )
}