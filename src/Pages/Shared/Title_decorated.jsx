import React from 'react';
import './Title_decorated.css';

const Title_decorated = ({ ...props }) => {
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

export default Title_decorated;
