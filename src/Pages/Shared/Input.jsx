import React from 'react';
import './Input.css';
import { GlobalContext } from '../GlobalContext';

const Input = ({ ...props }) => {
  const { input, setInput } = React.useContext(GlobalContext);

  return (
    <div className="input-div">
      <p
        style={{
          right: '5vw',
          color: 'red',
          position: 'absolute',
        }}
      >
        {props.error}
      </p>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        value={input}
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
