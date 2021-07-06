import React from 'react';
import './Conta.css';
import Menu from '../Pages/Components/MenuPrestador';

const Conta = ({ ...props }) => {
  return (
    <div className="main-conta">
      <div className="div-menu">
        <Menu />
      </div>
      <div className="div-context">{props.children}</div>
    </div>
  );
};

export default Conta;
