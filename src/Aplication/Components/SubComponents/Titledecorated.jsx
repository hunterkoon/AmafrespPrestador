import React from 'react';
import './Titledecorated.css';
import '../../../App.css'

const Titledecorated = ({ ...props }) => {
  return (
    <h1
    className={`text-decorated ${props.addStyle}`}
      style={{
        color: props.color,
        fontSize: props.size,
        marginBottom: props.botton,
      }}
    >
      {props.text}
    </h1>
  );
};

export default Titledecorated;
