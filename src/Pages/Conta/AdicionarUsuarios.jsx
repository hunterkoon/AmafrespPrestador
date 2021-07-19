import React from 'react';
import Titledecorated from '../Shared/Titledecorated';
import './AdicionarUsuarios.css';
import Maintenance from '../Components/Maintenance';

const Usuarios = () => {
  return (
    <div className="div-main-adicionarUsuarios">
      <Titledecorated text="Usuários" />
      <Maintenance />
    </div>
  );
};

export default Usuarios;
