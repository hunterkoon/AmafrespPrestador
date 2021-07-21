import React from 'react';
import './Input.css';

const Input = ({ ...props }) => {
  return (
    <div key={props.key} className="input-div">
      <p className="p-input">{props.error}</p>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        maxLength={props.maxLength}
        title={props.title}
        pattern={props.pattern}
        required={props.require}
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
