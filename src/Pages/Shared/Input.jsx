import React from 'react';
import './Input.css';

const Input = ({ ...props }) => {
  return (
    <div className="input-div">
      <label for={props.id}>{props.label}</label>
      <input
        className="Input"
        type={props.type}
        style={{
          width: props.width,
        }}
        id={props.id}
      />
    </div>
  );
};

export default Input;
