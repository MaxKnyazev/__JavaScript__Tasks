import React from 'react';
// import './ColorButton.css';
import 'styled-components/macro';

const ColorButton = ({changeValue, sign}) => {
  return (
    <button
      className = 'Setting__button' 
      onClick = {changeValue}
      css={`
            transition: all 250ms linear;
            max-width: 130px;
            max-height: 130px;
            margin: 0;
            padding: 0;
            width: 15vmin;
            height: 15vmin;
            display: flex;
            justify-content: center;
            align-items: center;
            border: none;

            & svg {
              width: 30%;
              color: rgb(73, 0, 107);
              transition: all 250ms linear;
            }

            &:hover {
              background-color: rgb(175, 89, 255);
              color: #fff;
              border-radius: 10px;
            }

            &:hover svg {
              color: #fff;
            }
      `} 
    >
    {sign}
    </button>
  )
}

export default ColorButton;