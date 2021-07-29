import React from 'react';
import './Button.css';

const Button = ({ ...props }) => {
  return (
    <button
      className="button-shared"
      style={{
        backgroundColor: props.color,
        color: props.textColor,
        fontWeight: 'bolder',
      }}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
};

export default Button;
