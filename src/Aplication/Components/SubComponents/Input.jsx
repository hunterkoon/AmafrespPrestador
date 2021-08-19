import React from 'react';
import './Input.css';
import InputMask from 'react-input-mask'
const Input = ({ ...props }) => {

  return (
    <div key={props.key} className="input-div">
      <p className="p-input">{props.error}</p>
      <label htmlFor={props.id}>{props.label}</label>
      <InputMask
        mask={props.mask}
        className="input"
        maxLength={props.maxLength}
        title={props.title}
        pattern={props.pattern}
        required={props.require}
        onChange={props.onChange}
        value={props.value}
        type={props.type}
        style={{
          width: props.width,
        }}
        id={props.id}
        onBlur={props.changeBlur}
        onFocus={props.changeFocus}
      />
    </div>
  );
};

export default Input;
