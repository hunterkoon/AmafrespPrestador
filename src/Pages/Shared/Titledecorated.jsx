import React from 'react';
import './Titledecorated.css';

const Titledecorated = ({ ...props }) => {
  return (
    <h1
      className="text-decorated"
      style={{
        color: props.color,
        fontSize: props.size,
      }}
    >
      {props.text}
    </h1>
  );
};

export default Titledecorated;
