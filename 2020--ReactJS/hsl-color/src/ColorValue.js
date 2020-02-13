import React from 'react';
import 'styled-components/macro';

const ColorValue = ({value}) => {
  return (
    <span
      css={`
        font-size: 5vmax;
        /* font-size: ${value/20}vmax; */

        @media (min-width: 1100px) {
          font-size: 5rem;
        }
      `}
    >
    {value}
    </span>
  )
}

export default ColorValue;