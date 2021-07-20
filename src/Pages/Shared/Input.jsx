import React from 'react';
import './Input.css';

const Input = ({ ...props }) => {
  return (
    <div className="input-div">
      <p className="p-input">{props.error}</p>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        onChange={props.onChange}
        value={props.value}
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
