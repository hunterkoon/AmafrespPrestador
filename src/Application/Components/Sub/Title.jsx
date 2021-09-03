import React from 'react';
import './Title.css';

const Title = ({ ...props }) => {
  return ( 
    <h1
      className={`title-h1 ${props.className}`}
      style={{ color: props.color, fontSize: props.size, margin:'0', }}
      id={props.id}
    >
      {props.text}
    </h1>
  );
};

export default Title;
