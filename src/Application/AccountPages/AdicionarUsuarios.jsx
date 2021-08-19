import React from 'react';
import Titledecorated from '../Components/SubComponents/Titledecorated';
import Maintenance from '../Components/MainComponents/Maintenance';
import './AdicionarUsuarios.css';
import '../../App.css';

const Usuarios = () => {
  return (
    <>
      <div className="div-main-adicionarUsuarios pageView">
        <div className="div-title-pages">
          <Titledecorated text="Usuários" />
        </div>
        <Maintenance  />
      </div>
    </>
  );
};

export default Usuarios;
