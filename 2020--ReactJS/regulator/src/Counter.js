import React from 'react';
import './Counter.css';
import ButtonCount from './ButtonCount';

const Counter = ({count, subCount, addCount}) => {
  return (
    <div className = 'app__counter'>
      <ButtonCount clickHandler = {subCount} sign = '-'/>
      <span>{count}</span>
      <ButtonCount clickHandler = {addCount} sign = '+'/>
    </div>
  )
}

export default Counter;