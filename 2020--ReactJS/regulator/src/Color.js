import React from 'react';
import './Color.css';

const Color = ({count, color}) => {
  return (
    <div style = {{backgroundColor : color}} className = 'app__color'>
      {count}
    </div>
  )
}

export default Color;