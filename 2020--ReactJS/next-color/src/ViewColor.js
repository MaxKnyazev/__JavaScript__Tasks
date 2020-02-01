import React from 'react';
import classes from './ViewColor.module.scss'

export default ({colorDeg}) => {
  return ( 
    <div className = {classes.ViewColor} style = {
      {'backgroundColor' : `hsl(${colorDeg}, 100%, 50%)`}
    }  
    ></div>
   );
};