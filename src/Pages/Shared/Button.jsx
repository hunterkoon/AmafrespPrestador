import React from 'react';
import './Button.css';

const ButtonM = ({ ...props }) => {
  return <button onClick={props.onClick}>{props.value}</button>;
};

export default ButtonM;
