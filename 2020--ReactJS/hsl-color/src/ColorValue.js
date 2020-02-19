import React from 'react';
// import 'styled-components/macro';
import styled from 'styled-components';

const WrapperColorValue = styled.div`
  background: ${new Date() % 2 === 0 ? 'inherit' : 'blue'};
`
const ColorSpan = styled.span`
  font-size: 5vmax;
   @media (min-width: 1100px) {
     font-size: 5rem;
   }
`
const ColorValue = ({value}) => {
  return (
    <WrapperColorValue>
      <ColorSpan>{value}</ColorSpan>
    </WrapperColorValue>
  )
}

export default ColorValue;

// <span
// css={`
//   font-size: 5vmax;
//   /* font-size: ${value/20}vmax; */
//   @media (min-width: 1100px) {
//     font-size: 5rem;
//   }
// `}
// >
// {value}
// </span>
