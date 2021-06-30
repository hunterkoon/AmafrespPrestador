import React from 'react';
import './Input.css';

const Input = ({ ...props }) => {
  // const [border, setBorder] = React.useState(null);

  // const onMouseOver = () => {
  //   return setBorder('3px solid #25B099');
  // };
  // const onMouseLeft = () => {
  //   return setBorder('0px');
  // };

  return (
    <input
      className="Input"
      type={props.type}
      placeholder={props.placeholder}
      style={{
        width: props.width,
      }}
    />
  );
};

export default Input;
