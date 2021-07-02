import React from 'react';
import './Input.css';

const Input = ({ ...props }) => {
  return (
    <div className="input-div">
      <label>{props.label}</label>
      <input
        className="Input"
        type={props.type}
        style={{
          width: props.width,
        }}
      />
    </div>
  );
};

export default Input;
