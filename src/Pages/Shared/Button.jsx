import React from 'react';
import { GlobalContext } from '../GlobalContext';
import './Button.css';

const Button = ({ ...props }) => {
  const { loading } = React.useContext(GlobalContext);
  return (
    <button
      className="button-shared"
      style={{
        backgroundColor: props.color,
        color: props.textColor,
        fontWeight: 'bolder',
      }}
      onClick={props.onClick}
    >
      {loading ? 'Carregando...' : props.value}
    </button>
  );
};

export default Button;
