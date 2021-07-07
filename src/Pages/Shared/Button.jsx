import React from 'react';
import './Button.css';

const Button = ({ ...props }) => {
  return <button Click={props.click}>{props.value}</button>;
};

export default Button;
