import React from 'react';
import './Title.css';

const Title = ({ ...props }) => {
  return (
    <h1
      className="title-h1"
      style={{ color: props.color, fontSize: props.size }}
      id={props.id}
    >
      {props.text}
    </h1>
  );
};

export default Title;
