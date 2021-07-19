import React from 'react';
import Titledecorated from '../Shared/Titledecorated';
import './GerenciarUsuarios.css';
import Maintenance from '../Components/Maintenance';

const GerenciarUsuarios = () => {
  return (
    <div className="div-main-gerenciarUsuarios">
      <Titledecorated text="Gerenciar Usuários" />
      <Maintenance />
    </div>
  );
};

export default GerenciarUsuarios;
