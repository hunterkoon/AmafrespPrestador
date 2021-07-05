import React from "react";
import "./Conta.css";
import Menu from "../Pages/Components/MenuPrestador";

const Conta = () => {
  return (
    <div className="main-conta">
      <div className='div-menu'>
        <Menu />
      </div>
      <div className='div-context'>
        <p>context</p>
        </div>
    </div>
  );
};

export default Conta;
