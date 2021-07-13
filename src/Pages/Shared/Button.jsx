import React from 'react';
import './Button.css';

const ButtonM = ({ ...props }) => {
  return (
    <button variant="contained" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default ButtonM;
