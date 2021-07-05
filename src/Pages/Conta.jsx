import React from 'react';
import './Conta.css';
import Menu from '../Pages/Components/MenuPrestador';

const Conta = () => {
  return (
    <div className="main-conta">
      <div>
        <Menu />
      </div>
      <div></div>
      <p> Esta é a pagina da conta</p>
    </div>
  );
};

export default Conta;
