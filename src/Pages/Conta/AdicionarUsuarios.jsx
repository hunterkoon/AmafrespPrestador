import React from 'react';
import Titledecorated from '../Shared/Titledecorated';
import './AdicionarUsuarios.css';
import Maintenance from '../Components/Maintenance';

const Usuarios = () => {
  return (
    <>
      <div className="div-main-adicionarUsuarios">
        <div className="div-title-pages">
          <Titledecorated text="Usuários" />
        </div>
        <Maintenance />
      </div>
    </>
  );
};

export default Usuarios;
