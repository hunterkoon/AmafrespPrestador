import React from 'react';
import InputMask from 'react-input-mask'
import './Input.css';
const Input = ({ ...props }) => {

  return (
    <div key={props.key} className={[' input-div ' + props.className]}>
      <label htmlFor={props.id}>{props.label}</label>
     <h1 className={  props.error ? "p-input" : 'p-error-null'}>{props.error}</h1>
      <InputMask
        mask={props.mask}
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
        placeholder={props.placeholder}
        className= 'input'        
      />
    </div>
  );
};

export default Input;
