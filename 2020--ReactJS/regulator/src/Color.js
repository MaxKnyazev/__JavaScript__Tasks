import React from 'react';
import './Color.css';

const Color = ({count}) => {
  return (
    <div className = 'app__color'>
      {count}
    </div>
  )
}

export default Color;