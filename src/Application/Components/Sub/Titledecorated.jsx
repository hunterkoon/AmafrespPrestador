import React from 'react';
import './Titledecorated.css';
import '../../../App.css'

const Titledecorated = ({ ...props }) => {
  return (
    <h1
    className={`text-decorated ${props.addStyle}`}
      style={{
        cursor:props.cursor,
        color: props.color,
        fontSize: props.size,
        marginBottom: props.botton,
        margin:props.margin,
        textDecoration:props.textDecoration,
      }}
    >
      {props.text}
    </h1>
  );
};

export default Titledecorated;
