import React from 'react';
import Titledecorated from '../Shared/Titledecorated';
import './AdicionarUsuarios.css';
import Maintenance from '../Components/Maintenance';
import '../../App.css';

const Usuarios = () => {
  return (
    <>
      <div className="div-main-adicionarUsuarios pageView">
        <div className="div-title-pages">
          <Titledecorated text="Usuários" />
        </div>
        <Maintenance />
      </div>
    </>
  );
};

export default Usuarios;
